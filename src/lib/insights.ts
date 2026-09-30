import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  type DocumentData,
  type QueryDocumentSnapshot,
  type Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export type PublicationSection = "introduction" | "insights";
export type PublicationStatus = "draft" | "published";

export type Publication = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  pullQuote?: string;
  section: PublicationSection;
  coverImage: string;
  content: Record<string, unknown>;
  authorId: string;
  authorName: string;
  status: PublicationStatus;
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
  publishedAt: Timestamp | null;
};

export type PublicationInput = Omit<Publication, "id" | "createdAt" | "updatedAt" | "publishedAt">;

const publications = () => {
  if (!db) throw new Error("Firebase is not configured for this deployment.");
  return collection(db, "iqSyndicatePublications");
};

function fromSnapshot(snapshot: QueryDocumentSnapshot<DocumentData> | { id: string; data: () => DocumentData }): Publication {
  return { id: snapshot.id, ...snapshot.data() } as Publication;
}

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export async function getPublishedPublications(section?: PublicationSection) {
  const filters = [where("status", "==", "published")];
  if (section) filters.push(where("section", "==", section));
  const result = await getDocs(
    query(publications(), ...filters, orderBy("publishedAt", "desc"), limit(60)),
  );
  return result.docs.map(fromSnapshot);
}

export async function getPublishedPublicationBySlug(slug: string) {
  const result = await getDocs(
    query(
      publications(),
      where("slug", "==", slug),
      where("status", "==", "published"),
      limit(1),
    ),
  );
  return result.empty ? null : fromSnapshot(result.docs[0]);
}

export async function getPublicationById(id: string) {
  if (!db) throw new Error("Firebase is not configured for this deployment.");
  const result = await getDoc(doc(db, "iqSyndicatePublications", id));
  return result.exists() ? fromSnapshot(result) : null;
}

export async function getAdminPublications() {
  const result = await getDocs(query(publications(), orderBy("updatedAt", "desc"), limit(200)));
  return result.docs.map(fromSnapshot);
}
