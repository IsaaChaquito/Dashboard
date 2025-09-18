export default function Footer() {
  return (
    <footer className=" p-4 text-center text-sm w-full h-[var(--footer-height)] bg-[var(--color-primary)] text-white z-50">
      © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
    </footer>
  );
}
