import { Bars3Icon } from "@heroicons/react/24/outline";
import { useUIStore } from "../../stores/ui/ui.store";

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header() {

  const toggleSidebar = useUIStore( state => state.toggleSidebar );

  return (
    <header className="fixed top-0 left-0 w-full h-[var(--header-height)] flex items-center justify-between p-4 bg-[var(--color-primary)] text-white">
      <button className="md:hidden  rounded cursor-pointer" onClick={ toggleSidebar }>
        <Bars3Icon className="size-8" />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Usuario</span>
      </div>
    </header>
  );
}
