import { SquarePlus, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
  onViewResume: () => void;
}

export function ContactSection({ onViewResume, onCopyEmail, copied }: ContactSectionProps) {
  return (
    <div className="flex flex-col items-center mt-15 gap-4">
      <h1 className="text-white font-bold text-3xl">
        Get in Touch
      </h1>
      <p className="text-neutral-400 font-medium text-lg text-center">
        I'm open to full-time opportunities and collaborations.
      </p>
      <div className="flex gap-2">
        <button
          onClick={onViewResume}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-500 text-neutral-900 rounded-lg hover:text-neutral-400 hover:bg-zinc-800 transition-all active:scale-95 cursor-pointer"
        >
          <SquarePlus className="size-4" />
          <span className="text-sm font-medium">View Resume</span>
        </button>
        <Button
          onClick={onCopyEmail}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 hover:text-neutral-400 rounded-lg text-white hover:bg-zinc-800 transition-all active:scale-95"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          <span className="text-sm font-medium">
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </Button>
      </div>
    </div>
  );
}
