import React from "react";

interface FoundationLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  showText?: boolean;
  showLabel?: boolean;
  variant?: "shield-only" | "full";
}

const sizeMap = {
  xs: "w-8 h-8",
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
  xl: "w-28 h-28",
  "2xl": "w-36 h-36",
};

export const FoundationLogo: React.FC<FoundationLogoProps> = ({
  className = "",
  size = "md",
  showText = false,
  variant = "full",
}) => {
  const sizeClasses = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 500 520"
        className={`${sizeClasses} shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] select-none`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Janseva Pratishthan Foundation Official Crest Logo"
      >
        <defs>
          {/* Royal 24k Gold Gradient */}
          <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff8db" />
            <stop offset="25%" stopColor="#ffd700" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="75%" stopColor="#b48318" />
            <stop offset="100%" stopColor="#6e4d08" />
          </linearGradient>

          {/* Bright Gold Highlight */}
          <linearGradient id="goldLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="45%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Deep Royal Sapphire Blue Gradient */}
          <linearGradient
            id="royalBlueShield"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#123769" />
            <stop offset="50%" stopColor="#0d2b54" />
            <stop offset="100%" stopColor="#081c38" />
          </linearGradient>

          {/* Deep Imperial Maroon / Crimson Gradient */}
          <linearGradient id="maroonShield" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a81927" />
            <stop offset="40%" stopColor="#87101c" />
            <stop offset="100%" stopColor="#59060f" />
          </linearGradient>

          {/* Royal Ribbon Blue Gradient */}
          <linearGradient id="ribbonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e4882" />
            <stop offset="50%" stopColor="#133668" />
            <stop offset="100%" stopColor="#0b2447" />
          </linearGradient>

          {/* Drop Shadow Filter for inner elements */}
          <filter
            id="logoInnerShadow"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodColor="#000"
              floodOpacity="0.4"
            />
          </filter>
        </defs>

        {/* ------------------------------------------------------------- */}
        {/* 1. OUTER ORNATE GOLDEN BAROQUE FILIGREE SCROLLWORK            */}
        {/* ------------------------------------------------------------- */}
        <g id="baroque-filigree" filter="url(#logoInnerShadow)">
          {/* Top Crown Baroque Crest */}
          <path
            d="M 250 25 C 235 10, 215 15, 205 32 C 220 38, 235 34, 250 40 C 265 34, 280 38, 295 32 C 285 15, 265 10, 250 25 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />
          <circle
            cx="250"
            cy="18"
            r="5"
            fill="url(#goldLight)"
            stroke="#854d0e"
            strokeWidth="1"
          />
          <circle cx="220" cy="28" r="3.5" fill="url(#goldLight)" />
          <circle cx="280" cy="28" r="3.5" fill="url(#goldLight)" />

          {/* Left Side Baroque Scrolls & Acanthus Leaves */}
          <path
            d="M 85 130 C 55 125, 45 155, 60 180 C 72 195, 88 185, 92 170 C 75 168, 70 152, 85 145 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />
          <path
            d="M 75 195 C 40 210, 42 255, 68 280 C 82 292, 95 275, 88 260 C 72 258, 68 235, 82 220 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />
          <path
            d="M 90 290 C 65 315, 70 365, 105 385 C 118 392, 128 375, 118 362 C 98 355, 95 330, 108 312 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />

          {/* Right Side Baroque Scrolls & Acanthus Leaves */}
          <path
            d="M 415 130 C 445 125, 455 155, 440 180 C 428 195, 412 185, 408 170 C 425 168, 430 152, 415 145 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />
          <path
            d="M 425 195 C 460 210, 458 255, 432 280 C 418 292, 405 275, 412 260 C 428 258, 432 235, 418 220 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />
          <path
            d="M 410 290 C 435 315, 430 365, 395 385 C 382 392, 372 375, 382 362 C 402 355, 405 330, 392 312 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />

          {/* Bottom Baroque Base Pedestal */}
          <path
            d="M 250 495 C 220 515, 180 495, 200 465 C 220 472, 235 480, 250 478 C 265 480, 280 472, 300 465 C 320 495, 280 515, 250 495 Z"
            fill="url(#goldFiligree)"
            stroke="#6e4d08"
            strokeWidth="1.5"
          />
          <circle cx="250" cy="488" r="4" fill="url(#goldLight)" />
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 2. MAIN SHIELD BODY & GOLD FRAME                              */}
        {/* ------------------------------------------------------------- */}
        {/* Outer Heavy Gold Shield Rim */}
        <path
          d="M 105 75 C 190 70, 310 70, 395 75 C 412 195, 420 310, 250 425 C 80 310, 88 195, 105 75 Z"
          fill="url(#goldFiligree)"
          stroke="#523906"
          strokeWidth="3"
        />

        {/* Inner Gold Bevel Layer */}
        <path
          d="M 116 86 C 195 82, 305 82, 384 86 C 398 195, 406 298, 250 405 C 94 298, 102 195, 116 86 Z"
          fill="#1c1204"
        />

        {/* Inner Shield Gold Border Line */}
        <path
          d="M 120 90 C 195 86, 305 86, 380 90 C 394 195, 401 294, 250 398 C 99 294, 106 195, 120 90 Z"
          fill="url(#goldLight)"
        />

        {/* ------------------------------------------------------------- */}
        {/* 3. INNER SHIELD CONTENT: UPPER ROYAL BLUE, LOWER MAROON       */}
        {/* ------------------------------------------------------------- */}
        <g id="shield-inner-clipped">
          <clipPath id="shieldInnerClip">
            <path d="M 124 94 C 195 90, 305 90, 376 94 C 388 195, 395 290, 250 392 C 105 290, 112 195, 124 94 Z" />
          </clipPath>

          <g clipPath="url(#shieldInnerClip)">
            {/* Top Half: Royal Blue Canvas */}
            <rect
              x="90"
              y="80"
              width="320"
              height="162"
              fill="url(#royalBlueShield)"
            />

            {/* Bottom Half: Imperial Maroon Canvas */}
            <rect
              x="90"
              y="240"
              width="320"
              height="170"
              fill="url(#maroonShield)"
            />

            {/* Horizontal Gold Dividing Bar */}
            <rect
              x="90"
              y="238"
              width="320"
              height="6"
              fill="url(#goldLight)"
            />
            <rect x="90" y="240" width="320" height="2" fill="#fff9db" />

            {/* Vertical Gold Divider (Top Half Only, split left & right around center) */}
            <rect
              x="247"
              y="90"
              width="6"
              height="150"
              fill="url(#goldLight)"
            />

            {/* ----------------------------------------------------------- */}
            {/* UPPER BLUE HALF ICONS                                       */}
            {/* ----------------------------------------------------------- */}

            {/* Left Top: Sports / Athletes (White Silhouettes) */}
            <g id="sports-icon" transform="translate(142, 130) scale(0.72)">
              {/* Volleyball / Smashing Player */}
              <circle cx="28" cy="14" r="5" fill="#ffffff" />
              <path
                d="M 16 32 L 26 22 L 34 26 L 42 16 L 47 18 L 36 32 L 30 30 L 26 44 L 18 58 L 12 55 L 20 42 L 14 36 Z"
                fill="#ffffff"
              />
              {/* Ball */}
              <circle cx="48" cy="8" r="4.5" fill="#ffffff" />
              {/* Receiving / Running Teammate */}
              <circle cx="58" cy="38" r="4" fill="#ffffff" />
              <path
                d="M 52 50 L 58 44 L 64 48 L 70 42 L 74 45 L 66 54 L 64 68 L 56 68 L 58 56 L 50 64 L 46 60 Z"
                fill="#ffffff"
              />
            </g>

            {/* Right Top: Education / Student with Open Book (White Icon) */}
            <g id="education-icon" transform="translate(315, 132) scale(0.78)">
              {/* Person / Head & Shoulders */}
              <circle cx="30" cy="14" r="6" fill="#ffffff" />
              <path
                d="M 18 28 C 22 23, 38 23, 42 28 C 38 31, 22 31, 18 28 Z"
                fill="#ffffff"
              />
              {/* Open Book Pages */}
              <path
                d="M 30 33 L 10 37 L 8 58 L 29 53 L 30 33 Z"
                fill="#ffffff"
              />
              <path
                d="M 30 33 L 50 37 L 52 58 L 31 53 L 30 33 Z"
                fill="#ffffff"
              />
              {/* Book Spine Center */}
              <line
                x1="30"
                y1="33"
                x2="30"
                y2="58"
                stroke="#0d2b54"
                strokeWidth="2"
              />
            </g>

            {/* Center Medallion: Handshake in Solidarity */}
            <g id="center-handshake-circle" transform="translate(250, 160)">
              {/* Gold Outer Rim */}
              <circle
                cx="0"
                cy="0"
                r="34"
                fill="url(#goldFiligree)"
                stroke="#6e4d08"
                strokeWidth="2"
              />
              {/* Inner White Medallion */}
              <circle cx="0" cy="0" r="28" fill="#ffffff" />
              {/* Orange/Saffron Left Hand, Green Right Hand Shaking */}
              {/* Orange Hand from Left */}
              <path
                d="M -26 12 L -12 -2 L 4 -2 L 8 4 L 0 10 L -6 8 L -18 20 Z"
                fill="#ea580c"
              />
              {/* Green Hand from Right */}
              <path
                d="M 26 -12 L 12 2 L -4 2 L -8 -4 L 0 -10 L 6 -8 L 18 -20 Z"
                fill="#16a34a"
              />
              {/* Clasped Fingers */}
              <path d="M -4 -2 L 4 -2 L 6 4 L -2 4 Z" fill="#f97316" />
              <path d="M -2 4 L 6 4 L 4 10 L -4 10 Z" fill="#22c55e" />
            </g>

            {/* ----------------------------------------------------------- */}
            {/* LOWER MAROON HALF ICONS                                     */}
            {/* ----------------------------------------------------------- */}

            {/* Left Bottom: Bold White Medical Cross (Healthcare) */}
            <g id="health-cross" transform="translate(155, 275)">
              <rect
                x="-8"
                y="-22"
                width="16"
                height="44"
                rx="2"
                fill="#ffffff"
              />
              <rect
                x="-22"
                y="-8"
                width="44"
                height="16"
                rx="2"
                fill="#ffffff"
              />
            </g>

            {/* Right Bottom: Hand Holding Donation Money Pouch (Charity/Livelihood) */}
            <g id="donation-fund-icon" transform="translate(345, 280)">
              {/* White Money Pouch */}
              <path
                d="M -16 5 C -22 10, -22 26, -14 34 C -6 40, 14 40, 22 34 C 30 26, 30 10, 24 5 C 18 0, -10 0, -16 5 Z"
                fill="#ffffff"
              />
              {/* Pouch Tied Neck & Frills */}
              <path d="M -8 5 L -14 -6 L 0 -2 L 14 -6 L 8 5 Z" fill="#ffffff" />
              <ellipse cx="0" cy="5" rx="8" ry="3" fill="#87101c" />
              {/* Circular Badge on Bag with '1' / Rupee Symbol */}
              <circle
                cx="4"
                cy="20"
                r="10"
                fill="#ffffff"
                stroke="#87101c"
                strokeWidth="1.5"
              />
              <text
                x="4"
                y="24"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#87101c"
                fontFamily="sans-serif"
              >
                1
              </text>
              {/* White Supporting Hand / Arm */}
              <path d="M -30 20 L -18 16 L -14 24 L -26 28 Z" fill="#ffffff" />
            </g>

            {/* Center Bottom: Arch / Teardrop Dome with Scales of Justice */}
            <g id="justice-arch" transform="translate(250, 310)">
              {/* Gold Arched Frame / Teardrop Shape */}
              <path
                d="M 0 -75 C 38 -30, 48 10, 42 42 C 34 65, -34 65, -42 42 C -48 10, -38 -30, 0 -75 Z"
                fill="url(#goldFiligree)"
                stroke="#6e4d08"
                strokeWidth="2.5"
              />
              {/* Inner Crimson Medallion */}
              <path
                d="M 0 -67 C 32 -26, 40 8, 35 36 C 28 56, -28 56, -35 36 C -40 8, -32 -26, 0 -67 Z"
                fill="#b91c1c"
              />
              {/* White Scales of Justice */}
              <g transform="translate(0, 5)">
                {/* Center Pillar & Pedestal */}
                <rect x="-2" y="-32" width="4" height="42" fill="#ffffff" />
                <rect
                  x="-14"
                  y="10"
                  width="28"
                  height="4"
                  rx="1"
                  fill="#ffffff"
                />
                <rect
                  x="-18"
                  y="14"
                  width="36"
                  height="3"
                  rx="1"
                  fill="#ffffff"
                />
                <circle cx="0" cy="-32" r="3.5" fill="#ffffff" />
                {/* Cross Beam */}
                <rect
                  x="-24"
                  y="-30"
                  width="48"
                  height="3"
                  rx="1.5"
                  fill="#ffffff"
                />
                {/* Left Pan */}
                <line
                  x1="-22"
                  y1="-28"
                  x2="-28"
                  y2="-12"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <line
                  x1="-22"
                  y1="-28"
                  x2="-16"
                  y2="-12"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <path d="M -32 -12 Q -22 -6 -12 -12 Z" fill="#ffffff" />
                {/* Right Pan */}
                <line
                  x1="22"
                  y1="-28"
                  x2="16"
                  y2="-12"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <line
                  x1="22"
                  y1="-28"
                  x2="28"
                  y2="-12"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <path d="M 12 -12 Q 22 -6 32 -12 Z" fill="#ffffff" />
              </g>
            </g>
          </g>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 4. UPPER ARCHED RIBBON: "JANSEVA PRATISHTHAN"                 */}
        {/* ------------------------------------------------------------- */}
        <g id="top-ribbon" filter="url(#logoInnerShadow)">
          {/* Left Ribbon Tail with Swallowtail Notch */}
          <path
            d="M 85 92 L 40 92 L 55 108 L 40 125 L 90 120 Z"
            fill="url(#ribbonBlue)"
            stroke="url(#goldLight)"
            strokeWidth="1.5"
          />
          {/* Right Ribbon Tail with Swallowtail Notch */}
          <path
            d="M 415 92 L 460 92 L 445 108 L 460 125 L 410 120 Z"
            fill="url(#ribbonBlue)"
            stroke="url(#goldLight)"
            strokeWidth="1.5"
          />

          {/* Main Arched Top Ribbon Banner */}
          <path
            d="M 80 115 C 160 82, 340 82, 420 115 L 412 68 C 335 44, 165 44, 88 68 Z"
            fill="url(#ribbonBlue)"
            stroke="url(#goldFiligree)"
            strokeWidth="3.5"
          />
          {/* Inner Gold Hairline */}
          <path
            d="M 86 109 C 163 79, 337 79, 414 109 L 408 73 C 333 50, 167 50, 92 73 Z"
            stroke="url(#goldLight)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Arched Text Path for Top Banner */}
          <path
            id="topRibbonPath"
            d="M 92 102 C 170 68, 330 68, 408 102"
            fill="none"
          />
          <text
            fill="url(#goldLight)"
            fontSize="20"
            fontWeight="900"
            letterSpacing="2.5"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            <textPath
              href="#topRibbonPath"
              startOffset="50%"
              textAnchor="middle"
            >
              JANSEVA PRATISHTHAN
            </textPath>
          </text>
        </g>

        {/* ------------------------------------------------------------- */}
        {/* 5. BOTTOM ARCHED RIBBON: "FOUNDATION"                         */}
        {/* ------------------------------------------------------------- */}
        <g id="bottom-ribbon" filter="url(#logoInnerShadow)">
          {/* Left Ribbon Tail */}
          <path
            d="M 125 400 L 70 395 L 85 412 L 72 430 L 128 422 Z"
            fill="url(#ribbonBlue)"
            stroke="url(#goldLight)"
            strokeWidth="1.5"
          />
          {/* Right Ribbon Tail */}
          <path
            d="M 375 400 L 430 395 L 415 412 L 428 430 L 372 422 Z"
            fill="url(#ribbonBlue)"
            stroke="url(#goldLight)"
            strokeWidth="1.5"
          />

          {/* Main Arched Bottom Ribbon Banner */}
          <path
            d="M 115 405 C 190 445, 310 445, 385 405 L 375 448 C 300 488, 200 488, 125 448 Z"
            fill="url(#ribbonBlue)"
            stroke="url(#goldFiligree)"
            strokeWidth="3.5"
          />
          {/* Inner Gold Hairline */}
          <path
            d="M 122 411 C 194 449, 306 449, 378 411 L 370 442 C 298 480, 202 480, 130 442 Z"
            stroke="url(#goldLight)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Arched Text Path for Bottom Banner */}
          <path
            id="bottomRibbonPath"
            d="M 130 444 C 205 480, 295 480, 370 444"
            fill="none"
          />
          <text
            fill="url(#goldLight)"
            fontSize="22"
            fontWeight="900"
            letterSpacing="4"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            <textPath
              href="#bottomRibbonPath"
              startOffset="50%"
              textAnchor="middle"
            >
              FOUNDATION
            </textPath>
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display text-[1.18rem] leading-tight tracking-wide text-white font-bold">
            Janseva Pratishthan
          </span>
          <span className="text-sm tracking-[0.28em] uppercase font-bold text-amber-300">
            Foundation
          </span>
        </div>
      )}
    </div>
  );
};
export default FoundationLogo;
