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
        "custom-yellow": "#f3b229",
        "custom-blue": "#103f79",
      },
      backgroundImage: {
        'hero-pattern': "url('/banderaboca.jpg')", // Ruta corregida
        'bg-texture': "url('/img.jpg')", // Ruta ejemplo
        'deadpool': "url('/escudo.jpg')", // Ruta ejemplo
        'portada':"url('/boca1.jpg')"
      },
    },
  },
  plugins: [],
} satisfies Config;
