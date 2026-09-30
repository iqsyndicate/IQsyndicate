"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Eye,
  EyeOff,
  FilePlus2,
  LoaderCircle,
  LockKeyhole,
  LogOut,
  Newspaper,
  PencilLine,
  Trash2,
  Upload,
} from "lucide-react";
import Container from "@/components/ui/Container";
import RichTextEditor from "@/components/insights/RichTextEditor";
import { auth, db, isFirebaseConfigured, storage } from "@/lib/firebase";
import { getAdminPublications, slugify, type Publication, type PublicationSection, type PublicationStatus } from "@/lib/insights";

type AccessState = "loading" | "signed-out" | "signed-in";
type Draft = {
  title: string;
  excerpt: string;
  pullQuote: string;
  section: PublicationSection;
  coverImage: string;
  content: Record<string, unknown>;
  status: PublicationStatus;
};

const emptyContent: Record<string, unknown> = {
  type: "doc",
  content: [{ type: "paragraph" }],
};

function blankDraft(section: PublicationSection = "insights"): Draft {
  return { title: "", excerpt: "", pullQuote: "", section, coverImage: "", content: emptyContent, status: "draft" };
}

function readableError(error: unknown) {
  const code = (error as { code?: string })?.code;
  if (code === "auth/email-already-in-use") return "An account already uses this email. Sign in instead.";
  if (code === "auth/invalid-credential" || code === "auth/invalid-email") return "The email or password is incorrect.";
  if (code === "auth/weak-password") return "Use a password with at least six characters.";
  if (code === "auth/too-many-requests") return "Too many attempts. Wait a moment and try again.";
  if (code === "permission-denied" || code === "firestore/permission-denied") return "Your account does not have permission for this action.";
  return "Something went wrong. Please try again.";
}

function dateLabel(post: Publication) {
  return (post.updatedAt ?? post.createdAt)?.toDate().toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }) ?? "Just now";
}

function publicationImageUrls(content: Record<string, unknown>) {
  const urls = new Set<string>();
  const visit = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (!value || typeof value !== "object") return;
    const node = value as { type?: string; attrs?: { src?: unknown }; content?: unknown[] };
    if (node.type === "image" && typeof node.attrs?.src === "string") urls.add(node.attrs.src);
    node.content?.forEach(visit);
  };
  visit(content);
  return [...urls];
}

export default function AdminStudio() {
  const [user, setUser] = useState<User | null>(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [access, setAccess] = useState<AccessState>(isFirebaseConfigured ? "loading" : "signed-out");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<Publication[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Publication | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft>(blankDraft());
  const [screen, setScreen] = useState<"overview" | "editor">("overview");
  const [busy, setBusy] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setMessage("");
      if (!currentUser) {
        setAccess("signed-out");
        setIsSuperAdmin(false);
        setPosts([]);
        return;
      }
      setAccess("signed-in");
      try {
        if (db) {
          const adminProfile = await getDoc(doc(db, "iqSyndicateAdmins", currentUser.uid));
          setIsSuperAdmin(adminProfile.data()?.role === "superadmin");
        }
        const publications = await getAdminPublications();
        setPosts(publications);
      } catch {
        setError("Your publications could not be loaded. Check the Firebase connection and indexes.");
      }
    });
  }, []);

  const ownPosts = useMemo(() => posts.filter((post) => post.authorId === user?.uid), [posts, user?.uid]);
  const publishedPosts = useMemo(() => posts.filter((post) => post.status === "published"), [posts]);
  const introductionCount = useMemo(() => publishedPosts.filter((post) => post.section === "introduction").length, [publishedPosts]);
  const insightCount = useMemo(() => publishedPosts.filter((post) => post.section === "insights").length, [publishedPosts]);
  const selectedPost = selectedId ? posts.find((post) => post.id === selectedId) ?? null : null;

  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!auth) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      if (authMode === "signup") {
        const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);
        await updateProfile(credential.user, { displayName: fullName.trim() });
        setUser(credential.user);
        setAccess("signed-in");
        setPosts(await getAdminPublications());
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      }
    } catch (authError) {
      setError(readableError(authError));
    } finally {
      setBusy(false);
    }
  }

  async function beginNewPublication(section: PublicationSection = "insights") {
    setSelectedId(null);
    setDraft(blankDraft(section));
    setScreen("editor");
    setError("");
    setMessage("");
  }

  function openOwnedPost(post: Publication) {
    if (post.authorId !== user?.uid && !isSuperAdmin) return;
    setSelectedId(post.id);
    setDraft({
      title: post.title,
      excerpt: post.excerpt,
      pullQuote: post.pullQuote ?? "",
      section: post.section,
      coverImage: post.coverImage,
      content: post.content,
      status: post.status,
    });
    setScreen("editor");
    setError("");
    setMessage("");
  }

  async function uploadImage(file: File) {
    if (!user || !storage) throw new Error("Storage is unavailable.");
    if (!file.type.startsWith("image/") || file.size > 10 * 1024 * 1024) {
      throw new Error("Choose an image under 10 MB.");
    }
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-100);
    const imageRef = ref(storage, `iq-syndicate/insights/${user.uid}/${Date.now()}-${safeName}`);
    const upload = await uploadBytes(imageRef, file, { contentType: file.type });
    return getDownloadURL(upload.ref);
  }

  async function uploadCover(file?: File) {
    if (!file) return;
    setUploadingCover(true);
    setError("");
    try {
      const url = await uploadImage(file);
      setDraft((current) => ({ ...current, coverImage: url }));
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Cover image upload failed.");
    } finally {
      setUploadingCover(false);
    }
  }

  async function savePublication(status: PublicationStatus) {
    if (!user || !db) return;
    const title = draft.title.trim();
    const excerpt = draft.excerpt.trim();
    const slug = slugify(title);
    if (title.length < 4 || !slug) {
      setError("Add a publication title of at least four characters.");
      return;
    }
    if (excerpt.length < 20) {
      setError("Add a short description of at least twenty characters.");
      return;
    }
    if (!draft.coverImage) {
      setError("Add a cover image before saving the publication.");
      return;
    }

    setSaving(true);
    setError("");
    setMessage("");
    try {
      const existing = selectedId ? posts.find((post) => post.id === selectedId) : null;
      if (existing && existing.authorId !== user.uid && !isSuperAdmin) throw new Error("You can only edit your own publications.");
      const collision = posts.some((post) => post.slug === slug && post.id !== selectedId);
      if (collision) {
        setError("That title is already in use. Choose a more specific title.");
        return;
      }
      const payload = {
        title,
        slug,
        excerpt,
        pullQuote: draft.pullQuote.trim(),
        section: draft.section,
        coverImage: draft.coverImage,
        content: draft.content,
        authorId: user.uid,
        authorName: existing?.authorName || user.displayName || fullName.trim() || "IQ Syndicate",
        status,
        updatedAt: serverTimestamp(),
        publishedAt: status === "published" ? existing?.publishedAt ?? serverTimestamp() : null,
      };
      if (selectedId) {
        await updateDoc(doc(db, "iqSyndicatePublications", selectedId), payload);
      } else {
        await addDoc(collection(db, "iqSyndicatePublications"), { ...payload, createdAt: serverTimestamp() });
      }
      setPosts(await getAdminPublications());
      setMessage(status === "published" ? "Publication is live." : "Draft saved.");
      if (!selectedId) {
        setSelectedId(null);
        setDraft(blankDraft(draft.section));
      } else {
        setDraft((current) => ({ ...current, status }));
      }
      setScreen("overview");
    } catch (saveError) {
      setError(saveError instanceof Error && saveError.message.startsWith("You can only") ? saveError.message : readableError(saveError));
    } finally {
      setSaving(false);
    }
  }

  async function deletePublication() {
    if (!user || !db || !deleteTarget) return;
    const target = deleteTarget;
    if (target.authorId !== user.uid && !isSuperAdmin) {
      setError("You can only delete publications you authored.");
      setDeleteTarget(null);
      return;
    }

    setDeletingId(target.id);
    setError("");
    try {
      await deleteDoc(doc(db, "iqSyndicatePublications", target.id));
      setPosts((current) => current.filter((post) => post.id !== target.id));
      setDeleteTarget(null);
      setMessage("Publication deleted.");

      const imageStorage = storage;
      if (imageStorage) {
        const imageUrls = [target.coverImage, ...publicationImageUrls(target.content)].filter(Boolean);
        const ownedPrefix = `iq-syndicate/insights/${user.uid}/`;
        await Promise.allSettled(imageUrls.map(async (url) => {
          try {
            const imageRef = ref(imageStorage, url);
            if (imageRef.fullPath.startsWith(ownedPrefix)) await deleteObject(imageRef);
          } catch {
            return;
          }
        }));
      }
    } catch (deleteError) {
      setError(readableError(deleteError));
    } finally {
      setDeletingId(null);
    }
  }

  if (!isFirebaseConfigured) {
    return <AccessFrame><Notice tone="error">Firebase is not configured. Add the Firebase web app settings to the deployment environment, then rebuild.</Notice></AccessFrame>;
  }

  if (access === "loading") {
    return <AccessFrame><div className="flex min-h-72 items-center justify-center text-primary"><LoaderCircle className="animate-spin" /></div></AccessFrame>;
  }

  if (access === "signed-out") {
    return (
      <AccessFrame>
          <div className="grid overflow-hidden border border-border bg-white shadow-xl shadow-ink/5 md:grid-cols-[0.82fr_1.18fr]">
            <div className="relative flex min-h-72 flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10">
              <div className="relative z-10 flex items-center gap-3 text-gold-light"><LockKeyhole size={19} /><span className="text-[10px] font-bold uppercase tracking-[0.18em]">IQ Syndicate / Editorial</span></div>
              <div className="relative z-10">
                <p className="font-heading text-4xl leading-tight">The ideas shaping what comes next.</p>
                <p className="mt-4 max-w-sm text-[13px] leading-6 text-white/68">A working space for research and perspectives on African climate finance.</p>
              </div>
              <span className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Private publishing workspace</span>
              <div className="absolute -bottom-24 -right-20 h-72 w-72 border border-white/10" aria-hidden="true"><div className="m-8 h-56 w-56 border border-white/10" /></div>
            </div>
            <div className="p-7 md:p-10">
              <div className="flex border-b border-border">
                <button type="button" onClick={() => { setAuthMode("login"); setError(""); }} className={`border-b-2 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] ${authMode === "login" ? "border-primary text-primary" : "border-transparent text-ink/45"}`}>Sign in</button>
                <button type="button" onClick={() => { setAuthMode("signup"); setError(""); }} className={`border-b-2 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] ${authMode === "signup" ? "border-primary text-primary" : "border-transparent text-ink/45"}`}>Create account</button>
              </div>
              <h1 className="mt-7 text-3xl text-charcoal">{authMode === "login" ? "Welcome back." : "Create your account."}</h1>
              <p className="mt-2 text-[13px] leading-6 text-ink/55">{authMode === "login" ? "Sign in to manage your publications." : "Create an account to start publishing."}</p>
              <form onSubmit={(event) => void submitAuth(event)} className="mt-7 space-y-4">
                {authMode === "signup" ? <Field label="Full name"><input autoComplete="name" required minLength={2} maxLength={80} value={fullName} onChange={(event) => setFullName(event.target.value)} className={inputClass} /></Field> : null}
                <Field label="Email"><input type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} /></Field>
                <Field label="Password"><div className="relative mt-2"><input type={showPassword ? "text" : "password"} autoComplete={authMode === "login" ? "current-password" : "new-password"} required minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} className="block w-full border border-border bg-white px-3.5 py-3 pr-12 text-[13px] text-ink outline-none placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} title={showPassword ? "Hide password" : "Show password"} className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-ink/45 hover:text-primary">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></Field>
                {error ? <Notice tone="error">{error}</Notice> : null}
                {message ? <Notice tone="success">{message}</Notice> : null}
                <button type="submit" disabled={busy} className="inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-primary-light disabled:opacity-60">
                  {busy ? <LoaderCircle size={15} className="animate-spin" /> : authMode === "login" ? <LockKeyhole size={15} /> : <FilePlus2 size={15} />}
                  {authMode === "login" ? "Sign in" : "Create account"}
                </button>
              </form>
              <Link href="/insights" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-ink/45 hover:text-primary"><ArrowLeft size={13} /> Return to Insights</Link>
            </div>
          </div>
      </AccessFrame>
    );
  }

  return (
    <section className="min-h-screen bg-stone/65 pb-20">
      <div className="border-b border-border bg-white">
        <Container className="flex min-h-20 flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-forest text-white"><Newspaper size={19} /></div>
            <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">IQ Syndicate</p><h1 className="mt-0.5 text-xl text-charcoal">Insights Studio</h1></div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/insights" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-ink/55 hover:text-primary"><ArrowLeft size={14} /> Public site</Link>
            <span className="hidden h-6 w-px bg-border sm:block" />
            <span className="text-[11px] text-ink/55">{user?.displayName}</span>
            {isSuperAdmin ? <span className="border border-gold-dark/35 bg-gold/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] text-gold-dark">Superadmin</span> : null}
            <button type="button" onClick={() => auth && void signOut(auth)} title="Sign out" aria-label="Sign out" className="flex h-9 w-9 items-center justify-center border border-border text-ink/55 hover:border-primary hover:text-primary"><LogOut size={15} /></button>
          </div>
        </Container>
      </div>

      <Container className="pt-8">
        {error ? <div className="mb-5"><Notice tone="error">{error}</Notice></div> : null}
        {message ? <div className="mb-5"><Notice tone="success">{message}</Notice></div> : null}
        {screen === "overview" ? (
          <>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div><p className="institutional-eyebrow">{isSuperAdmin ? "Superadmin / Editorial oversight" : "Editorial desk"}</p><h2 className="mt-2 text-3xl text-charcoal">{isSuperAdmin ? "Publication oversight." : "Your publication desk."}</h2><p className="mt-2 text-[13px] text-ink/55">{isSuperAdmin ? "Review, edit, and remove publications across the editorial team." : "Browse every publication. Only your own work can be edited."}</p></div>
              <button type="button" onClick={() => void beginNewPublication()} className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-white hover:bg-primary-light"><FilePlus2 size={15} /> New publication</button>
            </div>

            <div className="mt-7 grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
              <Stat label="Published" value={publishedPosts.length} icon={<BookOpen size={17} />} />
              <Stat label="Introduction" value={introductionCount} icon={<FilePlus2 size={17} />} />
              <Stat label="Insights" value={insightCount} icon={<Newspaper size={17} />} />
              <Stat label="Your drafts" value={ownPosts.filter((post) => post.status === "draft").length} icon={<PencilLine size={17} />} />
            </div>

            <div className="mt-8 border border-border bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-7">
                <div><h3 className="text-xl text-charcoal">All publications</h3><p className="mt-1 text-[11px] text-ink/48">{posts.length} total · {ownPosts.length} authored by you</p></div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/42"><span className="h-2 w-2 bg-forest" /> Live <span className="ml-2 h-2 w-2 bg-gold" /> Draft</div>
              </div>
              {posts.length ? (
                <div className="divide-y divide-border">
                  {posts.map((post) => {
                    const isOwner = post.authorId === user?.uid;
                    const canManage = isOwner || isSuperAdmin;
                    return (
                      <div key={post.id} className="grid gap-4 px-5 py-5 md:grid-cols-[1fr_auto] md:items-center md:px-7">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`h-2 w-2 ${post.status === "published" ? "bg-forest" : "bg-gold"}`} />
                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gold-dark">{post.section === "introduction" ? "Introduction" : "Insights"}</span>
                            <span className="text-[10px] text-ink/32">/</span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/45">{post.status}</span>
                          </div>
                          <h4 className="mt-2 truncate font-heading text-xl text-charcoal">{post.title}</h4>
                          <p className="mt-1 text-[11px] text-ink/50">By {post.authorName} <span className="px-1">·</span> Updated {dateLabel(post)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {canManage ? (
                            <div className="flex items-center gap-2">
                              <button type="button" onClick={() => openOwnedPost(post)} className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/70 hover:border-primary hover:text-primary"><PencilLine size={14} /> Edit</button>
                              <button type="button" onClick={() => setDeleteTarget(post)} aria-label={`Delete ${post.title}`} title="Delete publication" className="flex h-9 w-9 items-center justify-center border border-border text-ink/50 hover:border-primary hover:text-primary"><Trash2 size={15} /></button>
                            </div>
                          ) : post.status === "published" ? (
                            <Link href={`/insights/${post.slug}`} target="_blank" className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/70 hover:border-primary hover:text-primary">Read <ArrowUpRight size={14} /></Link>
                          ) : <span className="inline-flex items-center gap-2 px-2 text-[10px] uppercase tracking-[0.1em] text-ink/40"><LockKeyhole size={13} /> Author only</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex min-h-56 flex-col items-center justify-center px-6 text-center"><FilePlus2 className="text-gold-dark" size={24} /><p className="mt-4 font-heading text-2xl text-charcoal">The first story starts here.</p><button type="button" onClick={() => void beginNewPublication()} className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Write a publication <ChevronRight size={15} /></button></div>
              )}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <button type="button" onClick={() => { setScreen("overview"); setError(""); }} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-ink/55 hover:text-primary"><ArrowLeft size={14} /> All publications</button>
              <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-gold-dark">{selectedPost ? "Editing your publication" : "New publication"}</span>
            </div>

            <div className="border border-border bg-white">
              <div className="border-b border-border px-5 py-5 md:px-8">
                <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                  <Field label="Publication title"><input required maxLength={180} value={draft.title} onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))} placeholder="Give this story a clear title" className={inputClass} /></Field>
                  <div className="flex border border-border p-1" role="group" aria-label="Publication section">
                    {(["introduction", "insights"] as const).map((section) => (
                      <button key={section} type="button" aria-pressed={draft.section === section} onClick={() => setDraft((current) => ({ ...current, section }))} className={`px-3 py-2 text-[9px] font-bold uppercase tracking-[0.11em] ${draft.section === section ? "bg-forest text-white" : "text-ink/55 hover:text-primary"}`}>{section === "introduction" ? "Introduction" : "Insights"}</button>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-ink/40">URL: /insights/{slugify(draft.title) || "publication-title"}</p>
                <Field label="Short description"><textarea required rows={3} maxLength={700} value={draft.excerpt} onChange={(event) => setDraft((current) => ({ ...current, excerpt: event.target.value }))} placeholder="A short summary shown in the Insights library" className={`${inputClass} resize-y`} /><span className="mt-1 block text-right text-[9px] text-ink/35">{draft.excerpt.length}/700</span></Field>
                {draft.section === "introduction" ? <Field label="Pull quote (optional)"><textarea rows={2} maxLength={280} value={draft.pullQuote} onChange={(event) => setDraft((current) => ({ ...current, pullQuote: event.target.value }))} placeholder="A short passage highlighted beside the introduction" className={`${inputClass} resize-y`} /><span className="mt-1 block text-right text-[9px] text-ink/35">{draft.pullQuote.length}/280</span></Field> : null}
              </div>

              <div className="border-b border-border px-5 py-5 md:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/60">Cover image</p><p className="mt-1 text-[11px] text-ink/42">JPG, PNG, or WebP up to 10 MB</p></div>
                  <label className="inline-flex cursor-pointer items-center gap-2 border border-border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/70 hover:border-primary hover:text-primary">
                    {uploadingCover ? <LoaderCircle size={14} className="animate-spin" /> : <Upload size={14} />}
                    {uploadingCover ? "Uploading" : draft.coverImage ? "Replace cover" : "Choose cover"}
                    <input type="file" accept="image/*" className="sr-only" disabled={uploadingCover} onChange={(event) => void uploadCover(event.target.files?.[0])} />
                  </label>
                </div>
                {draft.coverImage ? <div className="relative mt-4 aspect-[2.6/1] max-h-64 overflow-hidden bg-cream"><Image src={draft.coverImage} alt="Publication cover preview" fill unoptimized sizes="(min-width: 768px) 900px, 100vw" className="object-cover" /></div> : null}
              </div>

              <div className="border-b border-border">
                <div className="px-5 pt-5 md:px-8"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/60">Article body</p><p className="mb-4 mt-1 text-[11px] text-ink/42">Format text, add photographs, links, and tables.</p></div>
                <RichTextEditor
                  key={selectedId ?? "new-publication"}
                  value={draft.content}
                  onChange={(content) => setDraft((current) => ({ ...current, content }))}
                  onImageUpload={uploadImage}
                  onError={setError}
                />
              </div>

              {error ? <div className="px-5 pt-5 md:px-8"><Notice tone="error">{error}</Notice></div> : null}
              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8">
                <p className="text-[10px] text-ink/43">Author: <strong className="font-semibold text-ink/65">{user?.displayName}</strong>. Only you can edit this publication.</p>
                <div className="flex flex-wrap gap-2">
                  <button type="button" disabled={saving || uploadingCover} onClick={() => void savePublication("draft")} className={secondaryButton}>{saving ? <LoaderCircle size={14} className="animate-spin" /> : null} Save draft</button>
                  <button type="button" disabled={saving || uploadingCover} onClick={() => void savePublication("published")} className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:bg-primary-light disabled:opacity-55">{saving ? <LoaderCircle size={14} className="animate-spin" /> : <ArrowUpRight size={14} />} {draft.status === "published" ? "Update publication" : "Publish"}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      {deleteTarget ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/55 p-4">
          <section role="dialog" aria-modal="true" aria-labelledby="delete-publication-title" className="w-full max-w-md border border-border bg-white p-6 shadow-2xl md:p-8">
            <p className="institutional-eyebrow">Remove publication</p>
            <h2 id="delete-publication-title" className="mt-2 text-2xl text-charcoal">Delete this publication?</h2>
            <p className="mt-3 text-[13px] leading-6 text-ink/60"><strong className="text-charcoal">{deleteTarget.title}</strong> will be removed from the Insights site. This cannot be undone.</p>
            <div className="mt-7 flex justify-end gap-2">
              <button type="button" disabled={deletingId !== null} onClick={() => setDeleteTarget(null)} className="border border-border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/60 hover:border-primary hover:text-primary">Cancel</button>
              <button type="button" disabled={deletingId === deleteTarget.id} onClick={() => void deletePublication()} className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:bg-primary-light disabled:opacity-60">{deletingId === deleteTarget.id ? <LoaderCircle size={14} className="animate-spin" /> : <Trash2 size={14} />} Delete publication</button>
            </div>
          </section>
        </div>
      ) : null}
    </section>
  );
}

const inputClass = "mt-2 block w-full border border-border bg-white px-3.5 py-3 text-[13px] text-ink outline-none placeholder:text-ink/30 focus:border-primary focus:ring-1 focus:ring-primary/20";
const secondaryButton = "inline-flex items-center gap-2 border border-border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/65 hover:border-primary hover:text-primary disabled:opacity-50";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="mt-4 block text-[10px] font-bold uppercase tracking-[0.12em] text-ink/55">{label}{children}</label>;
}

function Stat({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  return <div className="flex min-h-28 items-center justify-between bg-white px-5 py-5 md:px-6"><div><p className="text-[10px] font-bold uppercase tracking-[0.13em] text-ink/45">{label}</p><p className="mt-2 font-heading text-3xl leading-none text-charcoal">{value}</p></div><span className="text-gold-dark">{icon}</span></div>;
}

function Notice({ children, tone }: { children: React.ReactNode; tone: "error" | "success" }) {
  return <p role="status" className={`border px-4 py-3 text-[12px] leading-5 ${tone === "error" ? "border-primary/20 bg-primary/5 text-primary" : "border-forest/20 bg-forest/5 text-forest"}`}>{children}</p>;
}

function AccessFrame({ children }: { children: React.ReactNode }) {
  return <section className="min-h-[75vh] bg-cream py-12 md:py-16"><Container className="max-w-5xl"><div className="mb-6 flex items-center justify-between"><Link href="/insights" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-ink/50 hover:text-primary"><ArrowLeft size={14} /> Insights</Link><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">Editorial access</span></div>{children}</Container></section>;
}

