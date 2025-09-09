import { Link } from "react-router";
import type { MenuItem } from "../../types/config";
import { HomeIcon, ShoppingCartIcon, CubeIcon, UsersIcon, Cog6ToothIcon, BanknotesIcon, CubeTransparentIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

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
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  className?: string;
}

export default function Sidebar({ company = "My Company", menu, isOpen, className }: SidebarProps) {
  return (
    <aside
      className={`${className || ""} z-20 fixed top-[var(--header-height)] left-0 hidden sm:inline sm:w-[var(--sidebar-width)] md:inline md:w-[var(--sidebar-width)] bottom-[calc(var(--footer-height)+var(--header-height))] h-[calc(100%-var(--header-height)-var(--footer-height))]  bg-white shadow-lgd transition-transform transform overflow-y-hidden duration-150
      ${isOpen ? "translate-x-0d" : "-translate-x-fulld"} md:translate-x-0d`}
    >
      {/* <h1 className="p-4 sm:p-2.5 font-bold text-lg sm:text-base">{company}</h1> */}
      <nav className="px-3.5 py-4 space-y-2 h-[calc(100%-var(--header-height))]d h-full relative flex flex-col last:self-end overflow-y-hidden">
        {menu.map((item) => {
          const Icon = icons[item.icon] || HomeIcon;
          return (
            <Link
              title={item.label}
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 h-10"
            >
              <Icon className="w-5 h-5" />
              <p className="hidden md:inline text-base">{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
