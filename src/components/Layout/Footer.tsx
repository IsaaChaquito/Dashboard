
interface FooterProps {
  corporation: string
}

export default function Footer( { corporation = "My Company" }: FooterProps ) {
  return (
    <footer className=" p-4 text-center text-sm w-full h-[var(--footer-height)] bg-[var(--color-primary)] text-white z-50">
      © {new Date().getFullYear()} { corporation } Todos los derechos reservados.
    </footer>
  );
}
