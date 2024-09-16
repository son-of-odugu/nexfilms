"use client";

import { useEffect } from "react";
import mobileNav from "@/store/mobileNav";

export default function useMobileNav(): [boolean, (value: boolean) => void] {
  const isOpen = mobileNav((state) => state.isOpen);
  const toggleOpen = mobileNav((state) => state.toggle);

  useEffect(() => {
    let debounceTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        toggleOpen(false);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [isOpen, toggleOpen]);
  return [isOpen, toggleOpen];
}
