import { Link } from "react-router";
import type { MenuItem } from "../../types/config";
import { HomeIcon, ShoppingCartIcon, CubeIcon, UsersIcon } from '@heroicons/react/24/outline'

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  HomeIcon,
  ShoppingCartIcon,
  CubeIcon,
  UsersIcon,
};

interface SidebarProps {
  menu: MenuItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ menu, isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixedd z-40d top-0 left-0 h-full w-60 bg-white shadow-lg transition-transform transform
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="p-4 font-bold text-lg border-b">Mi Empresa</div>
      <nav className="p-4 space-y-2">
        {menu.map((item) => {
          const Icon = icons[item.icon] || HomeIcon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex  items-center gap-3 p-2 rounded hover:bg-gray-100 "
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
