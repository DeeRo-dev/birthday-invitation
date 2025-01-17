import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-pattern': "url('/dyw.jpg')", // Ruta corregida
        'bg-texture': "url('/img.jpg')", // Ruta ejemplo
        'deadpool': "url('/deadpool.jpg')", // Ruta ejemplo
        'portada':"url('/happyd.jpg')"
      },
    },
  },
  plugins: [],
} satisfies Config;
