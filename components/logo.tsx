import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  priority?: boolean;
};

export function Logo({ className, variant = "light", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Richardton Dental Clinic — home"
      className={cn(
        "group inline-flex shrink-0 items-center",
        variant === "dark" &&
          "rounded-2xl bg-cream px-3 py-2 shadow-[0_10px_30px_-20px_rgba(0,0,0,.8)]",
        className,
      )}
    >
      <Image
        src="/images/logo.jpg"
        alt="Richardton Dental Clinic"
        width={329}
        height={184}
        priority={priority}
        className={cn(
          "h-11 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-12",
          variant === "light" && "mix-blend-multiply",
          variant === "dark" && "h-10 sm:h-11",
        )}
      />
    </Link>
  );
}
