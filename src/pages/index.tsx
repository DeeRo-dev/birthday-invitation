import ButtonsAgendar from "@/components/buttonsAgendar/ButtonsAgendar";
import WhatsAppButton from "@/components/buttonWsp/ButtonWsp";
import MarvelRandomHero from "@/components/Personaje/Personaje";
import pipiImage from "../../public/pipu.png";
import deadp from "../../public/deadp.png";
import confirm from "../../public/confirmd.png";
import direcImage from "../../public/direc.jpg"; // Importar la imagen correctamente
import Image from "next/image";
import { motion } from "framer-motion";
import Reloj from "@/components/Reloj/Reloj";
import ConfettiComponent from "@/components/Confetti/Confetti";
import { Bangers, Montserrat } from "next/font/google";

export const titleFont = Bangers({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});



export const bodyFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={`min-h-screen max-w-md flex flex-col m-auto ${bodyFont.className}`}
    >
      {/* Seccion 1 */}
      <section className="min-h-screen bg-hero-pattern flex bg-cover bg-center h-64 w-full bg-black/50">
        <div className="flex flex-col w-full items-center max-w-11/12 relative">
          <ConfettiComponent />
          <div className="relative w-full h-48  bg-red-600 overflow-visible bg-portada border-b-2 border-red-600 bg-cover bg-left-bottom">
            <Image
              src={pipiImage}
              alt="not found"
              width={320}
              height={300}
              className="absolute w-[300px] h-[300px] left-10 top-7 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`text-6xl font-bold text-white mt-32 ${titleFont.className} drop-shadow-lg`}
          >
            Dante Cabrera
          </motion.h1>
          <span className="text-xl text-white font-bold">
            Te invito a festejar mi cumple
          </span>
          <div className="flex w-full mt-8 flex-col gap-4">
            <div className="bg-red-500/80 text-yellow-400 font-semibold text-sm w-full py-4 flex items-center justify-center">
              <p>El día domingo 19 de enero, de 16:30 hs a 19:30 hs.</p>
            </div>
            <div className="bg-red-500/80 text-yellow-400 font-semibold w-full py-4 flex items-center justify-center">
              <Reloj />
            </div>
            <ButtonsAgendar />
          </div>
        </div>
      </section>
      {/* Seccion 2 Lugar del evento*/}
      <section className="flex flex-col items-center gap-4 justify-center py-12 bg-bg-texture bg-cover bg-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }} // Comienza pequeño y ligeramente inclinado
          whileInView={{ scale: 1, rotate: 0 }} // Termina en su tamaño normal y posición original
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src="https://invitacionesvirtuales.net/assets/ohana-logo-316636818793424.png"
            alt="Logo del lugar"
            width={300}
            height={300}
            className="rounded-full cover"
          />
        </motion.div>

        <div className="bg-red-500/90 mt-28 relative text-yellow-400 border-2 border-black font-semibold w-full py-4 flex flex-col items-center justify-center">
  
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" absolute -top-[207px]"
          >
            <Image
              src={deadp}
              alt="Logo del lugar"
              width={300}
              height={300}
              className=" border-black cover"
            />
          </motion.div>
          <h2 className="text-3xl">Lugar del evento</h2>
  
          
          <p>Calle 11 Nro. 4537 Berazategui.</p>
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
              className="w-full h-full rounded-lg border-yellow-400 border-2 object-cover"
            />
          </a>
        </div>
        <p className="text-base text-white font-bold">
          ¡No faltes! Te espero para compartir mi fiesta.
        </p>
        <div className="flex flex-col relative">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" absolute -top-14"
          >
            <Image
              src={confirm}
              alt="Logo del lugar"
              width={300}
              height={300}
              className=" border-black cover"
            />
          </motion.div>

          <WhatsAppButton />
        </div>

        <div className="flex text-center py-4 text-white bg-black/70 w-full justify-center">
          <a
            href="https://wa.me/541166098973"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base"
          >
            Contacto mamá de Dante:
            <br />
            <motion.span
              className="border-b-2 font-bold text-3xl"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              1166098973
            </motion.span>
          </a>
        </div>
      </section>
      {/* Seccion juego */}
      <section className="bg-bg-texture bg-cover bg-center flex flex-col items-center ">
        <div className="flex flex-col bg-black/70 items-center text-center w-full gap-4 py-12">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white text-lg font-bold"
          >
           ¿Te gustaría saber cuál sería tu personaje de Marvel?
          </motion.h3>
          <span className="text-white">¡Vamos a jugar! 🎉</span>
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
