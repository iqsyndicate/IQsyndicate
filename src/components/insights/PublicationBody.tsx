"use client";

import { useEditor, EditorContent } from "@tiptap/react";
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

type PublicationBodyProps = { content: Record<string, unknown> };

export default function PublicationBody({ content }: PublicationBodyProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color.configure({ types: ["textStyle"] }),
      Image.configure({ inline: false, allowBase64: false }),
      Link.configure({ openOnClick: true, autolink: true, protocols: ["mailto", "https"] }),
      Table,
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    editable: false,
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "publication-prose publication-reader" },
    },
  });

  return editor ? <EditorContent editor={editor} /> : <div className="min-h-72 animate-pulse bg-cream" />;
}
