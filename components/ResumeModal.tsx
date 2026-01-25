"use client";
import { useRef } from "react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(event) => {
        if (event.target === overlayRef.current) {
          onClose();
        }
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4"
    >
      <div className="w-full max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Resume</h2>
          <button
            onClick={onClose}
            className="rounded-full px-2 py-1 text-neutral-400 hover:text-white"
            aria-label="Close resume"
          >
            ×
          </button>
        </div>
        <div className="mt-3 h-[70vh] w-full overflow-hidden rounded-lg border border-zinc-800 bg-black">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="h-full w-full"
          />
        </div>
        <div className="mt-4 flex justify-end">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg bg-neutral-500 px-4 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-zinc-800 hover:text-neutral-400 active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
