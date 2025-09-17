// store/uiStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware"
import { screenResolution } from "../../types/ui";

interface UIState {
  screenResolution: screenResolution;
  isSidebarOpen: boolean;

  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setScreenResolution: (type: screenResolution) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}



export const useUIStore = create(

  persist<UIState>(
    (set) => ({
      screenResolution: screenResolution.desktop,
      isSidebarOpen: false,

      setIsSidebarOpen: (isSidebarOpen: boolean) => {
        set({ isSidebarOpen });
      },

      setScreenResolution: (type: screenResolution) => set({ screenResolution: type }),
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      closeSidebar: () => set({ isSidebarOpen: false }),
    }),
    {
      name: 'ui-storage'
    }
  )
);

