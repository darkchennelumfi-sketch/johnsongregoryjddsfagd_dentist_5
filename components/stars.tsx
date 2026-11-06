import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarsProps = {
  rating: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizes = {
  sm: "size-3.5",
  md: "size-4.5",
  lg: "size-6",
};

export function Stars({
  rating,
  className,
  size = "md",
  label,
}: StarsProps) {
  const percentage = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <span
      className={cn("relative inline-flex align-middle", className)}
      role="img"
      aria-label={label ?? `${rating} out of 5 stars`}
    >
      <span className="flex gap-0.5 text-pine/15" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={cn(sizes[size], "fill-current")} />
        ))}
      </span>
      <span
        className="absolute inset-y-0 left-0 overflow-hidden text-gold"
        style={{ width: `${percentage}%` }}
        aria-hidden="true"
      >
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(sizes[size], "shrink-0 fill-current")}
            />
          ))}
        </span>
      </span>
    </span>
  );
}
