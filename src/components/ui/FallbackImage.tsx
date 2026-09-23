"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image that swaps to a generated avatar if the remote photo fails.
 * Used for advisory member portraits.
 */
export function FallbackImage({
  fallbackName,
  src,
  alt,
  ...props
}: ImageProps & { fallbackName: string }) {
  const [failed, setFailed] = useState(false);
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(fallbackName)}&background=0c2242&color=facc15&size=512&format=png`;

  return (
    <Image
      {...props}
      alt={alt}
      src={failed ? fallback : src}
      onError={() => setFailed(true)}
    />
  );
}
