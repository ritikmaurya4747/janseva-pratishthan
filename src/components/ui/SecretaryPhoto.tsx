"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FOUNDATION_INFO } from "@/data";

export const SECRETARY_PHOTO_KEY = "janseva_deepak_parki_photo";

/** Reads the (optionally uploaded) General Secretary portrait from localStorage. */
export function useSecretaryPhoto() {
  const [photo, setPhoto] = useState<string>(
    FOUNDATION_INFO.generalSecretary.photo,
  );

  useEffect(() => {
    const sync = () => {
      try {
        const saved = localStorage.getItem(SECRETARY_PHOTO_KEY);
        if (saved && !saved.includes("unsplash.com")) setPhoto(saved);
      } catch {
        /* storage blocked */
      }
    };
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  return [photo, setPhoto] as const;
}

/** Portrait used on the Our Story page (fills its positioned parent). */
export function SecretaryPhoto({
  className,
  sizes,
}: {
  className?: string;
  sizes?: string;
}) {
  const [photo] = useSecretaryPhoto();
  return (
    <Image
      src={photo}
      alt={`${FOUNDATION_INFO.generalSecretary.displayName} - ${FOUNDATION_INFO.generalSecretary.role}`}
      fill
      sizes={sizes ?? "(min-width: 1024px) 320px, 80vw"}
      className={className}
    />
  );
}
