import { NavLink } from "react-router";
import type { MenuItem } from "../../types/config";
import { HomeIcon, ShoppingCartIcon, CubeIcon, UsersIcon, Cog6ToothIcon, BanknotesIcon, CubeTransparentIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { useUIStore } from "../../stores/ui/ui.store";
import { useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { screenResolution, sidebarWidth } from '../../types/ui';
import { useShallow } from "zustand/shallow";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  HomeIcon,
  ShoppingCartIcon,
  CubeIcon,
  UsersIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  CubeTransparentIcon,
  WrenchScrewdriverIcon
};

interface SidebarProps {
  company?: string;
  menu: MenuItem[];
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  className?: string;
}

export default function Sidebar({ menu, className }: SidebarProps) {

  const isSidebarOpen = useUIStore( useShallow( state => state.isSidebarOpen ) )
  const setScreenResolution = useUIStore( useShallow( state => state.setScreenResolution ) )
  const resType = useUIStore( useShallow( state => state.screenResolution ) )
  const toggleSidebar = useUIStore( useShallow( state => state.toggleSidebar ) )
  const state = useUIStore( useShallow( state => state ) )
  const { windowWidth } = useWindowSize(0);

  function toggleTitles(){
    
    if( resType === screenResolution.movil || resType === screenResolution.tablet ){
      return isSidebarOpen ? "block text-base" : "hidden"
    }

    if( resType === screenResolution.desktop ){
      return isSidebarOpen ? "hidden" : "block text-base"
    }
  }

  useEffect(() => {    
  
    if (windowWidth < 640) {

      setScreenResolution( screenResolution.movil )
      document.documentElement.style
      .setProperty("--sidebar-width", isSidebarOpen ? sidebarWidth.open : sidebarWidth.close)

    } else if( windowWidth >= 640 && windowWidth < 1024) {

      setScreenResolution( screenResolution.tablet )
      document.documentElement.style
      .setProperty("--sidebar-width", isSidebarOpen ? sidebarWidth.open : sidebarWidth.middle)

    } else {
      
      setScreenResolution( screenResolution.desktop )
      document.documentElement.style
      .setProperty("--sidebar-width", !isSidebarOpen ? sidebarWidth.open : sidebarWidth.middle)
    
    }

    // console.log(state);

  }, [windowWidth, isSidebarOpen]);

  
  return (
    <div onClick={() => toggleSidebar()} className={`z-50 Wrapper absolute flex flex-col h-full select-none pointer-events-noned ${isSidebarOpen && resType === screenResolution.movil ? "bg-black/50 w-full overflow-hiddend" : "w-0 bg-transparent"}`}>
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`${className || ""} pointer-events-auto w-[var(--sidebar-width)] fixed z-20 top-[var(--header-height)] left-0 bottom-[calc(var(--footer-height)+var(--header-height))] h-[calc(100%-var(--header-height)-var(--footer-height))]  bg-white shadow-lg overflow-y-hidden transition-transform transform duration-150`}
      >
        {/* <h1 className="p-4 sm:p-2.5 font-bold text-lg sm:text-base">{company}</h1> */}
        <nav className="px-3.5 py-4 space-y-2 h-full relative flex flex-col last:self-end overflow-y-hidden">
          {menu.map((item) => {
            const Icon = icons[item.icon] || HomeIcon;
            return (
              <NavLink
                title={item.label}
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? "ringd ring-gray-400 bg-blue-300 [box-shadow:rgba(0,_0,_0,_0.15)_1.95px_1.95px_2.6px]" : "hover:bg-gray-100") + " flex items-center gap-3 p-2 rounded  h-10 " }
              >
                <Icon className="size-5" />
                <p className={`${toggleTitles()}`}
                >
                  {item.label}
                </p>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </div>


  );
}



