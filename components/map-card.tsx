import Link from "next/link";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { clinic } from "@/lib/site";

export function MapCard({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-line bg-[#dfe8df] shadow-[var(--shadow-card)] ${className ?? ""}`}
    >
      <div className="relative aspect-[5/4] min-h-[18rem] w-full">
        <svg
          viewBox="0 0 600 480"
          className="absolute inset-0 size-full"
          role="img"
          aria-label="Stylized map showing Richardton Dental Clinic at 200 3rd Ave W in Richardton, North Dakota"
        >
          <rect width="600" height="480" fill="#e4ebe1" />
          <g opacity=".55" fill="#cfdccd">
            <rect x="34" y="48" width="92" height="58" rx="6" />
            <rect x="154" y="38" width="122" height="74" rx="6" />
            <rect x="302" y="54" width="86" height="52" rx="6" />
            <rect x="420" y="36" width="140" height="86" rx="6" />
            <rect x="58" y="156" width="120" height="82" rx="6" />
            <rect x="212" y="148" width="94" height="64" rx="6" />
            <rect x="348" y="146" width="76" height="72" rx="6" />
            <rect x="462" y="156" width="96" height="58" rx="6" />
            <rect x="42" y="286" width="88" height="62" rx="6" />
            <rect x="168" y="280" width="112" height="70" rx="6" />
            <rect x="320" y="286" width="90" height="56" rx="6" />
            <rect x="446" y="278" width="116" height="78" rx="6" />
            <rect x="72" y="386" width="130" height="52" rx="6" />
            <rect x="238" y="382" width="126" height="58" rx="6" />
            <rect x="404" y="380" width="142" height="54" rx="6" />
          </g>

          <path
            d="M-20 250C86 238 142 262 226 246c84-16 118-52 210-38 92 14 132 44 204 30"
            fill="none"
            stroke="#f8f5ec"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <path
            d="M-20 250C86 238 142 262 226 246c84-16 118-52 210-38 92 14 132 44 204 30"
            fill="none"
            stroke="#b9c9b7"
            strokeWidth="1.5"
            strokeDasharray="10 14"
          />
          <path
            d="M312 -20c-6 92 22 142 10 224-12 82-38 144-22 296"
            fill="none"
            stroke="#f8f5ec"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <path
            d="M108 -20c16 84-4 142 6 206 10 64 46 118 34 314"
            fill="none"
            stroke="#f8f5ec"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M470 -20c-18 76 8 124-2 204-10 80-44 146-28 316"
            fill="none"
            stroke="#f8f5ec"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M-10 370C86 356 150 384 246 370c96-14 144-40 230-26 50 8 92 20 134 18"
            fill="none"
            stroke="#f8f5ec"
            strokeWidth="12"
            strokeLinecap="round"
          />

          <circle cx="312" cy="252" r="24" fill="#bc6045" opacity=".14" />
          <circle cx="312" cy="252" r="10" fill="#bc6045" />
          <circle cx="312" cy="252" r="3.5" fill="#fffdf8" />

          <g fill="#56705e" fontSize="11" fontFamily="Manrope, sans-serif" fontWeight="700" letterSpacing="2">
            <text x="20" y="232" transform="rotate(-3 20 232)">
              W 3RD ST
            </text>
            <text x="330" y="118" transform="rotate(86 330 118)">
              3RD AVE W
            </text>
            <text x="24" y="458">
              RICHARDTON, ND
            </text>
          </g>
        </svg>

        <div className="absolute left-1/2 top-1/2 w-[min(84%,20rem)] -translate-x-1/2 -translate-y-[58%] rounded-2xl border border-white/70 bg-cream/90 p-4 shadow-[0_20px_50px_-20px_rgba(8,36,33,.5)] backdrop-blur-md">
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-pine text-cream">
              <MapPin className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay">
                Richardton Dental Clinic
              </p>
              <p className="mt-1 text-sm font-semibold leading-5 text-pine">
                {clinic.address.line1}
                <br />
                {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl border border-white/60 bg-cream/80 px-4 py-3 backdrop-blur-md">
          <span className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-pine">
            <Navigation className="size-3.5 text-clay" aria-hidden="true" />
            Get directions
          </span>
          <Link
            href={clinic.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open directions to Richardton Dental Clinic in Google Maps"
            className="inline-flex size-8 items-center justify-center rounded-full bg-pine text-cream transition-transform hover:scale-105"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
