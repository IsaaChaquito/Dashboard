interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full h-[var(--header-height)] flex items-center justify-between p-4 bg-[var(--color-primary)] text-white">
      <button className="md:hidden" onClick={onMenuToggle}>☰</button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Usuario</span>
      </div>
    </header>
  );
}
