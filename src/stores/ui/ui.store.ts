// store/uiStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware"

interface UIState {
  sidebarOpen: boolean;

  toggleSidebar: () => void;
  closeSidebar: () => void;
}



export const useUIStore = create(

  persist<UIState>(
    (set) => ({
      sidebarOpen: false,

      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      closeSidebar: () => set({ sidebarOpen: false }),
    }),
    {
      name: 'ui-storage'
    }
  )
);

