"use client";

import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";

interface TeamBioDialogProps {
  name: string;
  role: string;
  focus: string | null;
  bio: string;
}

export default function TeamBioDialog({ name, role, focus, bio }: TeamBioDialogProps) {
  const dialogId = `${name.toLowerCase().replace(/\s+/g, "-")}-bio`;

  useEffect(() => {
    const dialog = document.getElementById(dialogId);
    if (!(dialog instanceof HTMLDialogElement)) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && dialog.open) dialog.close();
    }

    function handleClose() {
      document.body.classList.remove("overflow-hidden");
    }

    dialog.addEventListener("keydown", handleKeyDown);
    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("keydown", handleKeyDown);
      dialog.removeEventListener("close", handleClose);
    };
  }, [dialogId]);

  function openDialog() {
    const dialog = document.getElementById(dialogId);
    if (!(dialog instanceof HTMLDialogElement)) return;

    dialog.showModal();
    document.body.classList.add("overflow-hidden");
  }

  function closeDialog() {
    const dialog = document.getElementById(dialogId);
    if (dialog instanceof HTMLDialogElement) dialog.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        className="group mt-4 inline-flex items-center gap-1.5 border-b border-primary/35 pb-1 text-[10px] font-bold uppercase tracking-[0.17em] text-primary transition-colors hover:border-primary hover:text-primary-light"
      >
        Read Bio
        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>

      <dialog
        id={dialogId}
        aria-labelledby={`${dialogId}-title`}
        className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-2xl border border-border bg-cream p-0 text-charcoal shadow-2xl backdrop:bg-charcoal/65 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="max-h-[85vh] overflow-y-auto p-7 sm:p-10">
          <div className="flex items-start justify-between gap-6 border-b border-border pb-6">
            <div>
              <p className="institutional-eyebrow">{role}{focus ? ` · ${focus}` : ""}</p>
              <h2 id={`${dialogId}-title`} className="mt-3 text-3xl text-charcoal sm:text-4xl">
                {name}
              </h2>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label={`Close ${name}'s bio`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink/60 transition-colors hover:border-primary hover:bg-white hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="pt-7 text-[14px] leading-7 text-ink/75">{bio}</p>
        </div>
      </dialog>
    </>
  );
}