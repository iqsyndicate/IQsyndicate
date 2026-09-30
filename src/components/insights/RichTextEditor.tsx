"use client";

import { useRef, useState, type FormEvent } from "react";
import { EditorContent, useEditor, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import {
  Bold,
  Columns3,
  Heading2,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Palette,
  Plus,
  Quote,
  Redo2,
  Table2,
  Underline as UnderlineIcon,
  Undo2,
} from "lucide-react";

const editorExtensions = [
  StarterKit,
  Underline,
  TextStyle,
  Color.configure({ types: ["textStyle"] }),
  Image.configure({ inline: false, allowBase64: false }),
  Link.configure({ openOnClick: false, autolink: true, protocols: ["mailto", "https"] }),
  Table.configure({ resizable: true }),
  TableRow,
  TableHeader,
  TableCell,
];

type RichTextEditorProps = {
  value: Record<string, unknown>;
  onChange: (value: Record<string, unknown>) => void;
  onImageUpload: (file: File) => Promise<string>;
  onError: (message: string) => void;
};

type ToolButtonProps = {
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function ToolButton({ label, active, disabled, onClick, children }: ToolButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-9 w-9 shrink-0 items-center justify-center border-r border-border text-ink/70 transition-colors hover:bg-cream hover:text-primary disabled:opacity-35 ${active ? "bg-primary/8 text-primary" : "bg-white"}`}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor, onImageUpload, onError }: {
  editor: Editor;
  onImageUpload: (file: File) => Promise<string>;
  onError: (message: string) => void;
}) {
  const imageInput = useRef<HTMLInputElement>(null);
  const colorInput = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkError, setLinkError] = useState("");

  async function insertImage(file?: File) {
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 10 * 1024 * 1024) {
      onError("Choose an image under 10 MB.");
      return;
    }
    setUploading(true);
    try {
      const src = await onImageUpload(file);
      editor.chain().focus().setImage({ src, alt: file.name }).run();
    } catch {
      onError("The image could not be uploaded. Please try again.");
    } finally {
      setUploading(false);
      if (imageInput.current) imageInput.current.value = "";
    }
  }

  function openLinkDialog() {
    const current = editor.getAttributes("link").href as string | undefined;
    setLinkUrl(current ?? "https://");
    setLinkError("");
    setLinkDialogOpen(true);
  }

  function applyLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = linkUrl.trim();
    if (!/^https:\/\//i.test(url) && !/^mailto:/i.test(url)) {
      setLinkError("Use a secure https:// address or a mailto: link.");
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setLinkDialogOpen(false);
  }

  function removeLink() {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setLinkDialogOpen(false);
  }

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center border-b border-border bg-white shadow-sm">
      <ToolButton label="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={16} /></ToolButton>
      <ToolButton label="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={16} /></ToolButton>
      <ToolButton label="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={16} /></ToolButton>
      <ToolButton label="Heading" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}><Heading2 size={17} /></ToolButton>
      <ToolButton label="Bulleted list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={17} /></ToolButton>
      <ToolButton label="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={17} /></ToolButton>
      <ToolButton label="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={16} /></ToolButton>
      <ToolButton label="Insert link" active={editor.isActive("link")} onClick={openLinkDialog}><Link2 size={16} /></ToolButton>
      <ToolButton label={uploading ? "Uploading image" : "Insert image"} disabled={uploading} onClick={() => imageInput.current?.click()}><ImagePlus size={16} /></ToolButton>
      <ToolButton label="Insert table" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}><Table2 size={16} /></ToolButton>
      <ToolButton label="Add row below" disabled={!editor.can().addRowAfter()} onClick={() => editor.chain().focus().addRowAfter().run()}><Plus size={15} /><span className="sr-only">Row</span></ToolButton>
      <ToolButton label="Add column right" disabled={!editor.can().addColumnAfter()} onClick={() => editor.chain().focus().addColumnAfter().run()}><Columns3 size={15} /></ToolButton>
      <label className="relative flex h-9 w-10 cursor-pointer items-center justify-center border-r border-border bg-white text-ink/70 hover:bg-cream" title="Text color">
        <Palette size={16} />
        <input ref={colorInput} type="color" aria-label="Text color" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" onInput={(event) => editor.chain().focus().setColor(event.currentTarget.value).run()} onChange={(event) => editor.chain().focus().setColor(event.currentTarget.value).run()} />
      </label>
      <ToolButton label="Clear text color" onClick={() => editor.chain().focus().unsetColor().run()}><Minus size={16} /></ToolButton>
      <div className="ml-auto flex">
        <ToolButton label="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}><Undo2 size={16} /></ToolButton>
        <ToolButton label="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}><Redo2 size={16} /></ToolButton>
      </div>
      <input ref={imageInput} type="file" accept="image/*" className="hidden" onChange={(event) => void insertImage(event.target.files?.[0])} />
      {linkDialogOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/55 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setLinkDialogOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="publication-link-title" className="w-full max-w-md border border-border bg-white p-6 shadow-2xl md:p-8">
            <p className="institutional-eyebrow">Article formatting</p>
            <h2 id="publication-link-title" className="mt-2 text-2xl text-charcoal">Add a link</h2>
            <p className="mt-2 text-[12px] leading-5 text-ink/55">Select text in the article first, then enter where it should lead.</p>
            <form onSubmit={applyLink} className="mt-5">
              <label htmlFor="publication-link-url" className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/60">Web address</label>
              <input id="publication-link-url" type="text" autoFocus value={linkUrl} onChange={(event) => setLinkUrl(event.target.value)} placeholder="https://example.com" className="mt-2 w-full border border-border px-3.5 py-3 text-[13px] outline-none focus:border-primary focus:ring-1 focus:ring-primary/20" />
              {linkError ? <p role="alert" className="mt-2 text-[11px] text-primary">{linkError}</p> : null}
              <div className="mt-6 flex flex-wrap justify-end gap-2">
                {editor.isActive("link") ? <button type="button" onClick={removeLink} className="mr-auto px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary hover:bg-primary/5">Remove link</button> : null}
                <button type="button" onClick={() => setLinkDialogOpen(false)} className="border border-border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/60 hover:border-primary hover:text-primary">Cancel</button>
                <button type="submit" className="bg-primary px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:bg-primary-light">Apply link</button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </div>
  );
}

export default function RichTextEditor({ value, onChange, onImageUpload, onError }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: editorExtensions,
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor: currentEditor }) => onChange(currentEditor.getJSON() as Record<string, unknown>),
    editorProps: {
      attributes: {
        class: "publication-prose min-h-[420px] px-6 py-7 outline-none md:px-10",
        "aria-label": "Publication body",
      },
    },
  });

  if (!editor) return <div className="min-h-[470px] animate-pulse bg-white" />;

  return (
    <div className="relative border border-border bg-white">
      <Toolbar editor={editor} onImageUpload={onImageUpload} onError={onError} />
      <EditorContent editor={editor} />
    </div>
  );
}
