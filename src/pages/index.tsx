import ButtonsAgendar from "@/components/buttonsAgendar/ButtonsAgendar";
import WhatsAppButton from "@/components/buttonWsp/ButtonWsp";
import pipiImage from "../../public/danBoca.png";
import deadp from "../../public/deadp.png";
import confirm from "../../public/escudo.png";
import direcImage from "../../public/direc.jpeg"; // Importar la imagen correctamente
import Image from "next/image";
import { motion } from "framer-motion";
import Reloj from "@/components/Reloj/Reloj";
import ConfettiComponent from "@/components/Confetti/Confetti";
import { Bangers, Montserrat } from "next/font/google";
import { SoccerGame } from "@/components/game/soccer-game";

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
      className={`min-h-screen bg-hero-pattern bg-center max-w-md flex flex-col m-auto ${bodyFont.className}`}
    >
      {/* Seccion 1 */}
      <section className="min-h-screen  flex bg-center h-64 w-full bg-black/50">
        <div className="flex flex-col w-full items-center max-w-11/12 relative">
          <ConfettiComponent />
          <div className="relative w-full h-[392px] overflow-visible bg-portada border-b-2 bg-cover bg-center">
            <Image
              src={pipiImage}
              alt="not found"
              width={320}
              height={300}
              className="absolute w-[400px] h-[500px] left-16 top-16 transition-transform duration-500 ease-in-out hover:scale-110"
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
          <span className="text-xl text-white font-bold text-center shadow-md py-2 bg-black/70 w-full">
            Te invito a festejar mi cumple
          </span>
          <div className="flex w-full mt-8 flex-col gap-4">
            <div className="bg-custom-blue/80 text-custom-yellow text-center font-semibold text-sm w-full py-4 flex items-center justify-center">
              <p>El día martes 13 de enero, de 18:00 hs a 21:00 hs.</p>
            </div>
            <div className="bg-custom-blue/80 text-custom-yellow font-semibold w-full py-4 flex items-center justify-center">
              <Reloj />
            </div>
            <ButtonsAgendar />
          </div>
        </div>
      </section>
      {/* Seccion 2 Lugar del evento*/}
      <section className="flex flex-col items-center gap-4 justify-center py-12 bg-cover bg-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }} // Comienza pequeño y ligeramente inclinado
          whileInView={{ scale: 1, rotate: 0 }} // Termina en su tamaño normal y posición original
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src={"/logo.png"}
            alt="Logo del lugar"
            width={200}
            height={200}
            className="rounded-full cover"
          />
        </motion.div>

        <div className="bg-custom-blue/90 mt-28 relative text-custom-yellow border-2 border-black font-semibold w-full py-4 flex flex-col items-center justify-center">
  
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" absolute -top-[205px]"
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
  
            <a
            target="_blank"
            href="https://www.google.com/maps/place/Le+Park+Entretenimientos+-+Berazategui/@-34.7605297,-58.2091448,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32f495389039d:0x18cd5781cac54578!8m2!3d-34.7605341!4d-58.2065699!16s%2Fg%2F11c1tlf3j4?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            rel="noopener noreferrer"
          >    <p className="border-b border-custom-yellow font-light">Av. 14 Pres. Juan Domingo Perón 5045, Berazategui.</p></a>
         
        </div>

        <div className="flex bg-white text-black text-center w-[350px] h-[350px] rounded-xl">
          <a
            target="_blank"
            className="p-0 w-full h-full"
            href="https://www.google.com/maps/place/Le+Park+Entretenimientos+-+Berazategui/@-34.7605297,-58.2091448,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32f495389039d:0x18cd5781cac54578!8m2!3d-34.7605341!4d-58.2065699!16s%2Fg%2F11c1tlf3j4?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            rel="noopener noreferrer"
          >
            <Image
              src={direcImage} // Usar la imagen importada
              alt="Mapa de ubicación"
              width={350}
              height={350}
              className="w-full h-full rounded-lg border-custom-yellow border-2 object-cover"
            />
          </a>
        </div>
        <p className="text-base text-white font-bold">
          ¡No faltes! Te espero para compartir mi fiesta.
        </p>
        <div className="flex flex-col items-center relative">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" absolute "
          >
            <Image
              src={confirm}
              alt="Logo del lugar"
              width={200}
              height={200}
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
      <section className="bg-cover bg-center flex flex-col items-center ">
        <div className="flex flex-col bg-black/70 items-center text-center w-full gap-4 py-12">
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white text-lg font-bold"
          >
           ¿Te gustaría jugar?
          </motion.h3>
          <span className="text-white">¡Vamos a jugar! 🎉</span>
          <SoccerGame />
        </div>
      </section>
      <footer className="w-full bg-black text-custom-yellow h-16 flex items-center justify-center">
        <a
          target="_blank"
          href="https://derek-cabrera.vercel.app/"
          rel="noopener noreferrer"
        >
          <span className="text-base border-b" style={{borderColor: '#f3b229'}}>
            Creado por Derek Cabrera
          </span>
        </a>
      </footer>
    </main>
  );
}
