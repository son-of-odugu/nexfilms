import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SidebarStore {
  isMinimized: boolean;
  toggle: () => void;
}

const sideBar = create(
  persist<SidebarStore>(
    (set, get) => ({
      isMinimized: false,
      toggle: () => {
        set({ isMinimized: !get().isMinimized });
      },
    }),
    {
      name: "sidebarOpen",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

export default sideBar;
