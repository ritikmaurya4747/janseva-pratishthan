import React from "react";
import Image from "next/image";

interface FoundationLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  showText?: boolean;
  showLabel?: boolean;
  variant?: "shield-only" | "full";
}

const sizeMap = {
  xs: { className: "w-8 h-8", px: 64 },
  sm: { className: "w-10 h-10", px: 80 },
  md: { className: "w-14 h-14", px: 112 },
  lg: { className: "w-20 h-20", px: 160 },
  xl: { className: "w-28 h-28", px: 224 },
  "2xl": { className: "w-36 h-36", px: 288 },
};

export const FoundationLogo: React.FC<FoundationLogoProps> = ({
  className = "",
  size = "md",
  showText = false,
}) => {
  const { className: sizeClasses, px } = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Janseva Pratishthan Foundation Official Crest Logo"
        width={px}
        height={px}
        quality={100}
        priority
        className={`${sizeClasses} shrink-0 object-contain select-none`}
      />

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