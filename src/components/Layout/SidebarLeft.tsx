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
      className={`${className} z-20 fixed top-[var(--header-height)] left-0 bottom-[var(--footer-height)] h-fulld w-[var(--sidebar-width)] bg-white shadow-lg transition-transform transform
      ${isOpen ? "translate-x-0d" : "-translate-x-fulld"} md:translate-x-0d`}
    >
      <div className="p-4 font-bold text-lg border-b">{company}</div>
      <nav className="p-4 space-y-2">
        {menu.map((item) => {
          const Icon = icons[item.icon] || HomeIcon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 last:bottom-0 last:fixed"
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
