// import React, { useState } from "react";
// import md5 from "md5";

// // Definir el tipo de los datos de un héroe
// interface Hero {
//   name: string;
//   description: string;
//   thumbnail: {
//     path: string;
//     extension: string;
//   };
// }

// const RandomHeroButton: React.FC = () => {
//   const [hero, setHero] = useState<Hero | null>(null); // Almacena el héroe o null
//   const [loading, setLoading] = useState<boolean>(false); // Estado de carga

//   // Función para obtener un héroe aleatorio
//   const getRandomHero = async (): Promise<void> => {
//     setLoading(true);
    
//     // Claves de la API (reemplaza con tus propias claves)
//     const publicKey = "tu_clave_publica";
//     const privateKey = "tu_clave_privada";

//     // Generar el timestamp y el hash
//     const ts = Date.now();
//     const hash = md5(ts + privateKey + publicKey);

//     // URL para la solicitud a la API de Marvel
//     const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       // Verifica que haya personajes en la respuesta
//       if (data.data.results.length > 0) {
//         // Seleccionar un personaje aleatorio
//         const randomIndex = Math.floor(Math.random() * data.data.results.length);
//         const randomHero = data.data.results[randomIndex];

//         setHero(randomHero); // Establecer el héroe aleatorio
//       } else {
//         console.error("No se encontraron personajes.");
//       }
//     } catch (error) {
//       console.error("Error al obtener el héroe aleatorio", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <button
//         onClick={getRandomHero}
//         className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg mt-5"
//       >
//         Traer Héroe Aleatorio
//       </button>

//       {loading && <p className="text-yellow-400 mt-3">Cargando...</p>}

//       {hero && !loading && (
//         <div className="mt-5 text-center">
//           <h2 className="text-2xl font-semibold text-yellow-400">{hero.name}</h2>
//           <img
//             src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
//             alt={hero.name}
//             className="mt-3 w-48 h-48 object-cover rounded-lg"
//           />
//           <p className="text-white mt-3">{hero.description || "No hay descripción disponible."}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RandomHeroButton;
