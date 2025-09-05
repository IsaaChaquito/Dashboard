// Tipo simple para los colores del tema
export type Theme = {
  primary: string;
  background: string;
  text: string;
};

// Interface para cada ítem del menú
export interface MenuItem {
  label: string;
  icon: string;
  path: string;
  children?: MenuItem[]; // Para submenús opcionales
}

// Interface principal para la configuración de la app
export interface AppConfig {
  company: string;
  theme: Theme;
  menu: MenuItem[];
}
