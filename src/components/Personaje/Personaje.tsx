import React, { useState } from "react";
import md5 from "crypto-js/md5"; // Importar md5 desde crypto-js

const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY; // Clave privada
const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY; // Clave pública
const baseURL = "https://gateway.marvel.com/v1/public/characters";

// Lista de los personajes más conocidos de Marvel
const marvelHeroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Spider-Man",
  "Wolverine",
  "Doctor Strange",
  "Black Panther",
  "Ant-Man",
  "Vision",
  "Scarlet Witch",
  "Hawkeye",
  "Deadpool",
  "Silver Surfer",
  "Punisher",
  "Luke Cage",
  "Daredevil",
  "Captain Marvel",
  "Moon Knight",
];

const MarvelRandomHero: React.FC = () => {
  const [hero, setHero] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomHero = async () => {
    try {
      setError(null);

      if (!publicKey || !privateKey) {
        throw new Error("Las claves de la API no están configuradas correctamente.");
      }

      // Generar hash y timestamp
      const ts = new Date().getTime().toString();
      const hash = md5(ts + privateKey + publicKey).toString(); // Usar md5 de crypto-js

      // Seleccionar un héroe aleatorio de la lista
      const randomHero = marvelHeroes[Math.floor(Math.random() * marvelHeroes.length)];

      // Obtener el héroe aleatorio de la API
      const response = await fetch(
        `${baseURL}?apikey=${publicKey}&ts=${ts}&hash=${hash}&name=${encodeURIComponent(randomHero)}`
      );
      const data = await response.json();

      if (data.code !== 200) {
        throw new Error(data.status || "Error desconocido.");
      }

      const randomHeroData = data.data.results[0];
      if (!randomHeroData) {
        throw new Error("No se encontró el héroe.");
      }

      setHero(randomHeroData);
    } catch (err: any) {
      setError(err.message || "Ocurrió un error al obtener el superhéroe.");
      console.error(err);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={fetchRandomHero}
       className="bg-red-600/80 text-yellow-400 border-2 border-black w-56 rounded-full m-auto font-bold px-6 py-4 max-w-[350px]"
      >
        Obtener un superhéroe
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {hero && (
        <div className="mt-4 bg-yellow-400/90 border-2 border-red-500 pt-4 rounded-xl w-11/12 m-auto">
          <h2 className="text-xl font-bold">{hero.name}</h2>
          {hero.thumbnail && (
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
              className="mt-2 rounded"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MarvelRandomHero;
