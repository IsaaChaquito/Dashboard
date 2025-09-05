import { useState, useEffect } from "react";
import Sidebar from "../Layout/SidebarLeft";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import appConfigData from "../../config/appConfig.json";
import type { AppConfig } from "../../types/config";

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
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar menu={appConfig.menu} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className={`flex-1d overflow-y-auto p-4 w-full bg-blue-200 duration-150 ${isSidebarOpen ? '-translate-x-[var(--sidebar-width)] ': 'translate-x-0'}`}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
