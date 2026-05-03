import { Leaf } from "lucide-react";

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-2 reveal" aria-hidden>
      <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-gold/60 to-gold/60" />
      <Leaf className="text-gold" size={14} />
      <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-gold/60 to-gold/60" />
    </div>
  );
}
