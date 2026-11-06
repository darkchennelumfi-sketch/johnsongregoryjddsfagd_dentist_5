import { Asterisk } from "lucide-react";
import { services } from "@/lib/site";

const items = [
  ...services.map((service) => service.name),
  "Richardton, North Dakota",
  "4.8 average rating",
  "19 ratings & reviews",
];

export function MarqueeStrip() {
  return (
    <div className="overflow-hidden border-y border-line/80 bg-paper/60 py-4">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-7 px-7 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-pine/70"
              >
                {item}
                <Asterisk className="size-3.5 text-clay" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
