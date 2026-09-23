import type { PillarIconType } from "@/types";

/**
 * Gold medallion artwork for each focus pillar.
 * Pure SVG (no hooks) — works in both Server and Client Components.
 */
export function MedallionEmblem({ iconType }: { iconType: PillarIconType }) {
  switch (iconType) {
    case "environment":
      // Animal & Plant (Dog/Cat and leaves in nurturing hand)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Leaves */}
          <path
            d="M35 32 C35 20, 48 18, 52 28 C45 35, 38 35, 35 32 Z"
            fill="#d49f32"
          />
          <path
            d="M26 44 C20 36, 30 28, 38 34 C35 42, 28 44, 26 44 Z"
            fill="#d49f32"
          />
          <path
            d="M36 46 C34 40, 42 36, 46 41 C43 47, 38 48, 36 46 Z"
            fill="#d49f32"
          />
          {/* Pet Dog Silhouette */}
          <path
            d="M58 24 C56 22, 53 23, 51 25 C47 28, 48 34, 53 35 C55 36, 58 35, 60 38 C62 41, 62 46, 60 52 C65 52, 69 48, 71 43 C73 39, 71 34, 67 31 C67 27, 63 24, 58 24 Z"
            fill="#d49f32"
          />
          {/* Pet Cat / Puppy companion */}
          <path
            d="M50 48 C46 46, 43 49, 42 53 C41 57, 44 61, 48 62 C52 62, 55 58, 55 54 C55 50, 53 48, 50 48 Z"
            fill="#d49f32"
          />
          {/* Protecting Hand */}
          <path
            d="M30 68 C35 63, 44 60, 54 62 C63 64, 70 70, 75 75 C68 78, 52 80, 38 76 C32 74, 28 71, 30 68 Z"
            fill="#d49f32"
          />
          <path
            d="M30 68 C27 72, 32 78, 42 80"
            stroke="#d49f32"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "urban":
      // Urban Renewal (City buildings, residential roof, and sapling tree)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Small Tree */}
          <circle cx="28" cy="58" r="7" fill="#d49f32" />
          <path
            d="M28 58 L28 72"
            stroke="#d49f32"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Main Highrise */}
          <rect x="38" y="30" width="16" height="42" rx="1.5" fill="#d49f32" />
          {/* Highrise Windows */}
          <rect
            x="42"
            y="35"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="48"
            y="35"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="42"
            y="44"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="48"
            y="44"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="42"
            y="53"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="48"
            y="53"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="42"
            y="62"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="48"
            y="62"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          {/* Second Building with sloping roof */}
          <rect x="56" y="42" width="14" height="30" rx="1" fill="#d49f32" />
          <rect
            x="59"
            y="48"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="64"
            y="48"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="59"
            y="56"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="64"
            y="56"
            width="3"
            height="4"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          {/* House with gabled roof */}
          <path d="M68 54 L78 45 L88 54 L88 72 L68 72 Z" fill="#d49f32" />
          <rect
            x="74"
            y="58"
            width="4"
            height="5"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
        </svg>
      );

    case "health":
      // Heart with cardiogram heartbeat line
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Heart Outline/Solid */}
          <path
            d="M50 78 C30 65, 20 48, 20 36 C20 26, 28 20, 37 20 C43 20, 48 23, 50 27 C52 23, 57 20, 63 20 C72 20, 80 26, 80 36 C80 48, 70 65, 50 78 Z"
            fill="#d49f32"
          />
          {/* Inner Cutout Heartbeat Pulse */}
          <path
            d="M24 45 L38 45 L43 33 L48 57 L54 39 L58 48 L63 45 L76 45"
            stroke="#fdf8ed"
            className="dark:stroke-[#0a1527]"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "rural":
      // Rural Transformation (Farmhouse, windmill, and sunlit rolling agricultural furrows)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Tree & Cottage */}
          <circle cx="28" cy="38" r="6" fill="#d49f32" />
          <path d="M28 42 L28 50" stroke="#d49f32" strokeWidth="2" />
          {/* Cottage */}
          <path d="M38 48 L48 38 L58 48 L58 58 L38 58 Z" fill="#d49f32" />
          <rect
            x="44"
            y="50"
            width="5"
            height="8"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          {/* Windmill */}
          <path d="M68 34 L65 58 L71 58 Z" fill="#d49f32" />
          <circle cx="68" cy="34" r="2.5" fill="#d49f32" />
          {/* Windmill blades */}
          <line
            x1="68"
            y1="34"
            x2="60"
            y2="24"
            stroke="#d49f32"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="34"
            x2="76"
            y2="24"
            stroke="#d49f32"
            strokeWidth="2"
          />
          <line
            x1="68"
            y1="34"
            x2="68"
            y2="44"
            stroke="#d49f32"
            strokeWidth="2"
          />
          {/* Curved Crop Field Furrows */}
          <path
            d="M22 66 C36 62, 54 62, 78 68"
            stroke="#d49f32"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M26 73 C42 68, 62 68, 76 77"
            stroke="#d49f32"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 79 C46 75, 60 75, 72 82"
            stroke="#d49f32"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "education":
      // Student holding open book with graduation mortarboard cap
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Mortarboard Graduation Cap */}
          <path d="M50 20 L28 29 L50 38 L72 29 Z" fill="#d49f32" />
          <path
            d="M36 34 L36 43 C36 47, 64 47, 64 43 L64 34"
            fill="#d49f32"
            opacity="0.8"
          />
          <path d="M69 31 L75 42 L72 43" stroke="#d49f32" strokeWidth="1.5" />
          {/* Student Head */}
          <circle cx="50" cy="46" r="8" fill="#d49f32" />
          {/* Open Book */}
          <path
            d="M26 62 C34 58, 44 60, 50 64 C56 60, 66 58, 74 62 L74 76 C66 72, 56 74, 50 78 C44 74, 34 72, 26 76 Z"
            fill="#d49f32"
          />
          <line
            x1="50"
            y1="64"
            x2="50"
            y2="78"
            stroke="#fdf8ed"
            className="dark:stroke-[#0a1527]"
            strokeWidth="2"
          />
        </svg>
      );

    case "sports":
      // Sports for Development (Youth with football, running, athletics & yoga icons around)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Center Youth Athlete Figure */}
          <circle cx="50" cy="40" r="8" fill="#d49f32" />
          <path
            d="M38 55 C38 50, 44 48, 50 48 C56 48, 62 50, 62 55 L64 72 L36 72 Z"
            fill="#d49f32"
          />
          {/* Orbiting Sports Glyphs */}
          {/* Runner */}
          <circle cx="48" cy="24" r="2.5" fill="#d49f32" />
          <path d="M46 27 L50 30 L48 34" stroke="#d49f32" strokeWidth="1.5" />
          {/* Football */}
          <circle cx="68" cy="62" r="4.5" fill="#d49f32" />
          <circle
            cx="68"
            cy="62"
            r="2"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          {/* Yoga / Balance figure */}
          <circle cx="30" cy="60" r="2.5" fill="#d49f32" />
          <path
            d="M26 67 C28 64, 32 64, 34 67"
            stroke="#d49f32"
            strokeWidth="2"
          />
          {/* Basketball */}
          <circle cx="28" cy="36" r="3.5" stroke="#d49f32" strokeWidth="1.5" />
          {/* Swimmer / Gymnast */}
          <circle cx="70" cy="34" r="2.5" fill="#d49f32" />
          <path
            d="M66 38 C70 36, 74 38, 77 36"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "disaster":
      // Disaster Management (Rescue helmet, storm clouds, flood shelter & safety cross)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Storm Rain Cloud */}
          <path
            d="M26 36 C24 33, 26 30, 29 30 C31 27, 36 27, 38 29 C41 28, 45 30, 45 34 L26 34 Z"
            fill="#d49f32"
          />
          <line
            x1="28"
            y1="37"
            x2="26"
            y2="42"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          <line
            x1="34"
            y1="37"
            x2="32"
            y2="42"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          <line
            x1="40"
            y1="37"
            x2="38"
            y2="42"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          {/* Mountain / Flood Surge */}
          <path d="M68 34 L78 46 L58 46 Z" fill="#d49f32" />
          {/* Rescue Responder with Hardhat */}
          <path
            d="M42 45 C42 40, 58 40, 58 45 L62 48 L38 48 Z"
            fill="#d49f32"
          />
          <circle cx="50" cy="52" r="5" fill="#d49f32" />
          <path
            d="M40 62 C40 58, 45 56, 50 56 C55 56, 60 58, 60 62 L63 76 L37 76 Z"
            fill="#d49f32"
          />
          {/* Shield Cross Badge on chest */}
          <rect
            x="48.5"
            y="66"
            width="3"
            height="7"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <rect
            x="46.5"
            y="68"
            width="7"
            height="3"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          {/* Water waves */}
          <path
            d="M22 66 C26 64, 29 68, 33 66"
            stroke="#d49f32"
            strokeWidth="2"
          />
          <path
            d="M20 72 C24 70, 28 74, 32 72"
            stroke="#d49f32"
            strokeWidth="2"
          />
        </svg>
      );

    case "women":
      // Women & Child Empowerment (Graceful feminine lotus & protective holding arms)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Radiant Lotus Petals */}
          <path
            d="M50 20 C50 32, 44 42, 50 48 C56 42, 50 32, 50 20 Z"
            fill="#d49f32"
          />
          <path
            d="M42 27 C36 36, 38 45, 47 48 C43 42, 40 34, 42 27 Z"
            fill="#d49f32"
          />
          <path
            d="M58 27 C64 36, 62 45, 53 48 C57 42, 60 34, 58 27 Z"
            fill="#d49f32"
          />
          <path
            d="M34 38 C28 45, 32 52, 42 53 C38 48, 34 43, 34 38 Z"
            fill="#d49f32"
          />
          <path
            d="M66 38 C72 45, 68 52, 58 53 C62 48, 66 43, 66 38 Z"
            fill="#d49f32"
          />
          {/* Supportive Cradle Hands */}
          <path
            d="M28 64 C35 58, 45 56, 50 60 C55 56, 65 58, 72 64 C65 72, 55 76, 50 76 C45 76, 35 72, 28 64 Z"
            fill="#d49f32"
          />
          <circle cx="50" cy="55" r="4" fill="#d49f32" />
        </svg>
      );

    case "social-justice":
      // Scales of Justice & Human Dignity
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Center Pillar */}
          <line
            x1="50"
            y1="24"
            x2="50"
            y2="76"
            stroke="#d49f32"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="50" cy="22" r="3" fill="#d49f32" />
          <rect x="42" y="74" width="16" height="4" rx="1.5" fill="#d49f32" />
          {/* Balance Beam */}
          <line
            x1="26"
            y1="36"
            x2="74"
            y2="36"
            stroke="#d49f32"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left Pan */}
          <line
            x1="28"
            y1="36"
            x2="22"
            y2="52"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          <line
            x1="28"
            y1="36"
            x2="34"
            y2="52"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          <path d="M20 52 C20 58, 36 58, 36 52 Z" fill="#d49f32" />
          {/* Right Pan */}
          <line
            x1="72"
            y1="36"
            x2="66"
            y2="52"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          <line
            x1="72"
            y1="36"
            x2="78"
            y2="52"
            stroke="#d49f32"
            strokeWidth="1.5"
          />
          <path d="M64 52 C64 58, 80 58, 80 52 Z" fill="#d49f32" />
        </svg>
      );

    case "cyber-crime":
      // Digital Shield & Cyber Security Lock
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Shield Outline */}
          <path
            d="M50 20 L26 30 L26 50 C26 65, 37 76, 50 80 C63 76, 74 65, 74 50 L74 30 Z"
            fill="#d49f32"
          />
          {/* Lock Cutout */}
          <path
            d="M44 46 L44 41 C44 37, 56 37, 56 41 L56 46"
            stroke="#fdf8ed"
            className="dark:stroke-[#0a1527]"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="40"
            y="46"
            width="20"
            height="15"
            rx="2"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <circle cx="50" cy="52" r="2" fill="#d49f32" />
          <line
            x1="50"
            y1="54"
            x2="50"
            y2="58"
            stroke="#d49f32"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "anti-drugs":
      // Anti-Drugs / Broken Chain & Rebirth
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Outer Protective Circle Ring with break */}
          <circle cx="50" cy="50" r="28" stroke="#d49f32" strokeWidth="3" />
          <line
            x1="30"
            y1="30"
            x2="70"
            y2="70"
            stroke="#d49f32"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Capsule */}
          <path
            d="M38 42 C34 38, 40 32, 44 36 L52 44 L46 50 Z"
            fill="#d49f32"
          />
          <path
            d="M54 46 L62 54 C66 58, 60 64, 56 60 L48 52 Z"
            fill="#d49f32"
            opacity="0.8"
          />
        </svg>
      );

    case "arts":
      // Arts, Culture & Heritage (Artist palette & traditional kalash/mandala)
      return (
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 sm:w-12 sm:h-12"
          fill="none"
        >
          {/* Artist Palette */}
          <path
            d="M50 20 C32 20, 20 32, 20 50 C20 68, 34 78, 50 78 C56 78, 60 74, 60 68 C60 65, 59 63, 62 61 C64 59, 68 59, 72 59 C78 59, 80 54, 80 50 C80 32, 68 20, 50 20 Z"
            fill="#d49f32"
          />
          {/* Thumb hole */}
          <ellipse
            cx="64"
            cy="65"
            rx="4"
            ry="5"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          {/* Paint dots */}
          <circle
            cx="34"
            cy="38"
            r="3.5"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <circle
            cx="48"
            cy="32"
            r="3.5"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <circle
            cx="64"
            cy="38"
            r="3.5"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
          <circle
            cx="32"
            cy="54"
            r="3.5"
            fill="#fdf8ed"
            className="dark:fill-[#0a1527]"
          />
        </svg>
      );

    default:
      return null;
  }
}
