import { useState, useEffect } from "react";
import Sidebar from "../Layout/SidebarLeft";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import appConfigData from "../../config/appConfig.json";
import type { AppConfig } from "../../types/config";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const appConfig: AppConfig = appConfigData as AppConfig;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(appConfig.theme);


  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", theme.primary);
    document.documentElement.style.setProperty("--color-bg", theme.background);
    document.documentElement.style.setProperty("--color-text", theme.text);
  }, [theme]);



  useEffect(() => {

    if(!window?.innerWidth) return;
    const handleResize = () => {
      console.log('cuajé');
      if (window.innerWidth < 640) {
        document.documentElement.style.setProperty("--sidebar-width", "0px");
      }else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        // setIsSidebarOpen(false);
        document.documentElement.style.setProperty("--sidebar-width", "65px");
      }else{
        document.documentElement.style.setProperty("--sidebar-width", "220px");
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="flex flex-col h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1">

        <Sidebar 
          // className="bg-red-200!" 
          company={appConfig.company}
          menu={appConfig.menu} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
        />
        
        <main 
        className={`z-10 fixed top-[var(--header-height)] left-[var(--sidebar-width)] bottom-[var(--footer-height)] right-0 flex-1d overflow-y-auto py-4 pl-4 pr-0.5  bg-black/40 duration-150 
          ${isSidebarOpen ? '-translate-x-[var(--sidebar-width)]d': 'translate-x-0d'}
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
