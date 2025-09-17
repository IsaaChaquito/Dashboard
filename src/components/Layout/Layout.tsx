import { useState, useEffect } from "react";
import Sidebar from "../Layout/SidebarLeft";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import appConfigData from "../../config/appConfig.json";
import type { AppConfig } from "../../types/config";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useShallow } from "zustand/shallow";
import { useUIStore } from "../../stores/ui/ui.store";
import {  screenResolution } from "../../types/ui";


const appConfig: AppConfig = appConfigData as AppConfig;


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const [theme] = useState(appConfig.theme);
  const isSidebarOpen = useUIStore( useShallow( state => state.isSidebarOpen ) )
  const res = useUIStore( useShallow( state => state.screenResolution ) )

  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.documentElement.style.setProperty("--color-bg", theme.background);
    document.documentElement.style.setProperty("--color-text", theme.text);
  }, [theme]);

  return (
    <div className="flex flex-col h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <div className="flex flex-1">

        <Sidebar 
          // className="bg-red-200!" 
          company={appConfig.company}
          menu={appConfig.menu} 
          // isOpen={isSidebarOpen} 
          // setIsOpen={setIsSidebarOpen} 
        />
        
        <main 
        className={`z-10 fixed ${isSidebarOpen && res === screenResolution.movil ? 'left-0' : 'left-[var(--sidebar-width)]' }  top-[var(--header-height)] left-[var(--sidebar-width)]d bottom-[var(--footer-height)] right-0 flex-1d overflow-y-auto py-4 pl-4 pr-0.5  bg-black/40d duration-150
          `}>
            <SimpleBar  className="h-full" >
              {/* <div className=" overflow-y-autod h-full"> */}
                {children}
              {/* </div> */}
            </SimpleBar>
        </main>
      </div>
      <Footer />
    </div>
  );
}
