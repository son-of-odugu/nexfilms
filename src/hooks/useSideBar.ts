"use client ";

import { useEffect } from "react";
import sideBar from "@/store/sideBar";

export default function useSideBar(): [boolean, () => void] {
  const isMinimized = sideBar((state) => state.isMinimized);
  const toggleSidebar = sideBar((state) => state.toggle);

  useEffect(() => {
    sideBar.persist.rehydrate();
  }, []);

  return [isMinimized, toggleSidebar];
}
