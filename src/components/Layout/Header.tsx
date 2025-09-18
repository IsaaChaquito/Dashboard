import { Bars3Icon } from "@heroicons/react/24/outline";
import { useUIStore } from "../../stores/ui/ui.store";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {

  const toggleSidebar = useUIStore( state => state.toggleSidebar );

  const handleOnMenuToggle = () => onMenuToggle?.();  

  return (
    <header className="z-50 fixed top-0 left-0 w-full h-[var(--header-height)] flex items-center justify-between p-4 bg-[var(--color-primary)] text-white">
      <button className=" rounded cursor-pointer" onClick={ toggleSidebar ?? handleOnMenuToggle }>
        <Bars3Icon className="size-8" />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Usuario</span>
      </div>
    </header>
  );
}
