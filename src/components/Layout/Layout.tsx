import { useState, useEffect } from "react";
import Sidebar from "../Layout/SidebarLeft";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import appConfigData from "../../config/appConfig.json";
import type { AppConfig } from "../../types/config";
import { sidebarWidth } from '../../types/ui';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useUIStore } from "../../stores/ui/ui.store";
import { useWindowSize } from "../../hooks/useWindowSize";

const appConfig: AppConfig = appConfigData as AppConfig;


interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const [theme, setTheme] = useState(appConfig.theme);

  const isSidebarOpen = useUIStore( state => state.sidebarOpen )
  const state = useUIStore(state => state)
  const { windowWidth } = useWindowSize(0);


  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.documentElement.style.setProperty("--color-bg", theme.background);
    document.documentElement.style.setProperty("--color-text", theme.text);
  }, [theme]);

    

  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth < 640) {
      document.documentElement.style.setProperty(
        "--sidebar-width",
        isSidebarOpen ? sidebarWidth.pc : sidebarWidth.movil
      );
    } else if( windowWidth >= 640 && windowWidth < 768) {
      document.documentElement.style.setProperty(
        "--sidebar-width",
        isSidebarOpen ? sidebarWidth.pc : sidebarWidth.tablet
      );
    }else{
      document.documentElement.style.setProperty(
        "--sidebar-width",
        isSidebarOpen ? sidebarWidth.pc : sidebarWidth.tablet
      );
    }


    console.log({ state });
  }, [windowWidth, isSidebarOpen, state]);


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
        className={`z-10 fixed top-[var(--header-height)] left-[var(--sidebar-width)] bottom-[var(--footer-height)] right-0 flex-1d overflow-y-auto py-4 pl-4 pr-0.5  bg-black/40 duration-150
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
