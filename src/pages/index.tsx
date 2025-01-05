import ButtonsAgendar from "@/components/buttonsAgendar/ButtonsAgendar";
import WhatsAppButton from "@/components/buttonWsp/ButtonWsp";
import Cronometro from "@/components/cronometro/Cronometro";
import MarvelRandomHero from "@/components/Personaje/Personaje";
import pipiImage from "../../public/pipi.png"
import direcImage from "../../public/direc.jpg" // Importar la imagen correctamente
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-md flex flex-col m-auto">
      {/* Seccion 1 */}
      <section className="min-h-screen bg-hero-pattern flex bg-cover bg-center h-64 w-full bg-black/50">
        <div className="flex flex-col w-full items-center max-w-11/12 ">
          <div className="relative rounded-full w-44 h-44 mt-12 bg-red-600 overflow-visible bg-deadpool border-2 border-red-600 bg-cover bg-left-bottom">
            <Image
              src={pipiImage}
              alt="not found"
              width={600}
              height={600}
              className="absolute w-[300px] h-[300px] -left-5 top-0 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <h1 className="text-5xl font-bold text-white mt-24">Dante Cabrera</h1>
          <span className="text-xl">Te Invito a festejar mi cumple</span>
          <div className="flex w-full mt-8 flex-col gap-4">
            <div className="bg-red-500/80 text-yellow-400 font-semibold w-full py-4 flex items-center justify-center">
              <p>El dia Domingo 19 de Enero de 16.30hs a 19.30hs</p>
            </div>
            <div className="bg-red-500/80 text-yellow-400 font-semibold w-full py-4 flex items-center justify-center">
              <Cronometro />
            </div>
            <ButtonsAgendar />
          </div>
        </div>
      </section>
      {/* Seccion 2 Lugar del evento*/}
      <section className="flex flex-col items-center gap-4 justify-center py-12 bg-bg-texture bg-cover bg-center">
        <Image
          src="https://invitacionesvirtuales.net/assets/ohana-logo-316636818793424.png"
          alt="Logo del lugar"
          width={300}
          height={300}
          className="w-64 h-48 rounded-full border-black cover border-2"
        />
        <div className="bg-red-500/90 text-yellow-400 border-2 border-black font-semibold w-full py-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl">Lugar del evento</h2>
          <p>Calle 11 Nro. 4537 Berazategui</p>
        </div>

        <div className="flex bg-white text-black text-center w-[350px] h-[350px] rounded-xl">
          <a
            target="_blank"
            className="p-0 w-full h-full"
            href="https://www.google.com/maps/place/Calle+11+4537,+B1880AZA+Berazategui,+Provincia+de+Buenos+Aires/@-34.76077,-58.2167076,17.04z/data=!4m6!3m5!1s0x95a32f37aa560c8b:0xb73c9a1ff9a4af94!8m2!3d-34.760561!4d-58.2148254!16s%2Fg%2F11k7d4fz1j?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            rel="noopener noreferrer"
          >
            <Image
              src={direcImage} // Usar la imagen importada
              alt="Mapa de ubicación"
              width={350}
              height={350}
              className="w-full h-full rounded-lg border-black object-cover"
            />
          </a>
        </div>
        <p className="text-base text-white">
          No faltes te espero para compartir mi fiesta!
        </p>
        <WhatsAppButton />
      </section>
      {/* Seccion juego */}
      <section className="bg-bg-texture bg-cover bg-center flex flex-col items-center ">
        <div className="flex flex-col bg-black/70 items-center w-full gap-4 py-12">
          <h3 className="text-white text-xl font-bold">
            Te gustaria saber tu personaje de Marvel?
          </h3>
          <span className="text-white">Vamos a jugar!</span>
          <MarvelRandomHero />
        </div>
      </section>
      <footer className="w-full bg-black text-yellow-400 h-16 flex items-center justify-center">
        <a 
          target="_blank" 
          href="https://derek-cabrera.vercel.app/"
          rel="noopener noreferrer"
        >
          <span className="text-base border-b border-yellow-300">
            Creado por Derek Cabrera
          </span>
        </a>
      </footer>
    </main>
  );
}

