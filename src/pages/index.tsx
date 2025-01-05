import ButtonsAgendar from "@/components/buttonsAgendar/ButtonsAgendar";
import WhatsAppButton from "@/components/buttonWsp/ButtonWsp";
import Cronometro from "@/components/cronometro/cronometro";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  subsets: ["latin"], // Especifica el subset que necesitas
  weight: "400", // Define el peso de la fuente (400 es el normal)
});

//Creame una funcion que tome el dia de hoy y calcule en forma de cronometro a la fecha del 19/01/2025 a las 16:00hs

export default function Home() {
  return (
    <main className="min-h-screen max-w-md flex flex-col m-auto pacifico ">
      {/* Seccion 1 */}
      <section className="min-h-screen bg-hero-pattern flex bg-cover bg-center h-64 w-full bg-black/50">
        <div className="flex flex-col w-full items-center max-w-11/12 ">
          <div className="rounded-full items-center mt-12 ">
            <img
              src={
                "https://i.pinimg.com/736x/a4/8d/92/a48d92d09a72726541707eaf6b9b3cd3.jpg"
              }
              alt="not founbd"
              width={100}
              height={100}
              className="w-56 h-56 rounded-full border-black border-2"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mt-6">Dante Cabrera</h1>
          <span className="text-xl">Te Invito a festejar mi cumple</span>
          <div className="flex w-full mt-8 flex-col gap-4">
            <div className="bg-red-500/80 text-yellow-400 font-semibold w-full py-4 flex items-center justify-center">
              <p>El dia Domingo 19 de Enero de 16.30hs a 19.30hs</p>{" "}
            </div>
            <div className="bg-red-500/80 text-yellow-400 font-semibold w-full py-4 flex items-center justify-center">
              {/* <p>00:32:323:32</p>{" "} */}
              <Cronometro />
            </div>
            <ButtonsAgendar />
          </div>
        </div>
      </section>
      {/* Seccion 2 Lugar del evento*/}
      <section className="flex flex-col items-center gap-4 justify-center py-12 bg-bg-texture bg-cover bg-center">
        <div className="flex flex-col gap-4 items-center">
          <img
            src={
              "https://invitacionesvirtuales.net/assets/ohana-logo-316636818793424.png"
            }
            alt="not founbd"
            width={300}
            height={300}
            className="w-64 h-48 rounded-full border-black cover border-2"
          />
          <div className="bg-red-500/90 text-yellow-400 font-semibold w-full py-4 flex flex-col items-center justify-center">
            <h2 className="text-3xl">Lugar del evento</h2>
            <p>Calle 11 Nro. 4537 Berazategui</p>
          </div>
        </div>
        <div className="flex bg-white text-black text-center w-[350px] h-[350px] rounded-xl">
          <a
            target="_blank"
            className="p-0 w-full h-full"
            href="https://www.google.com/maps/place/Calle+11+4537,+B1880AZA+Berazategui,+Provincia+de+Buenos+Aires/@-34.76077,-58.2167076,17.04z/data=!4m6!3m5!1s0x95a32f37aa560c8b:0xb73c9a1ff9a4af94!8m2!3d-34.760561!4d-58.2148254!16s%2Fg%2F11k7d4fz1j?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <img
              src={"./direc.jpg"}
              alt="not founbd"
              width={300}
              height={300}
              className="w-auto h-full rounded-lg border-black cover border-2"
            />
          </a>
        </div>
        <p className="text-base">
          No faltes te espero para compartir mi fiesta!
        </p>
        <WhatsAppButton />
      </section>
      {/* Seccion juego */}
      <section></section>
      <footer className="w-full bg-black text-yellow-400 h-16 flex items-center justify-center">
        <a target="_blank" href="https://derek-cabrera.vercel.app/">
          <span className="text-base border-b border-yellow-300">Creado por Derek Cabrera</span>
        </a>
      </footer>
    </main>
  );
}
