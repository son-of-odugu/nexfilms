import { create } from "zustand";

interface MobileNavStore {
  isOpen: boolean;
  toggle: (value: boolean) => void;
}

const mobileNav = create<MobileNavStore>()((set) => ({
  isOpen: false,
  toggle: (value) => set(() => ({ isOpen: value })),
}));

export default mobileNav;
