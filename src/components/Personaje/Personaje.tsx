"use client";

import React, { useState } from "react";
import Image from "next/image";
import md5 from "crypto-js/md5";

export interface MarvelHero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: Array<{
    type: string;
    url: string;
  }>;
}

export interface MarvelApiResponse {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: MarvelHero[];
  };
}

const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const baseURL = "https://gateway.marvel.com/v1/public/characters";

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

export default function MarvelRandomHero() {
  const [hero, setHero] = useState<MarvelHero | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [limitMessage, setLimitMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRandomHero = async () => {
    if (clickCount >= 30) {
      setButtonDisabled(true);
      setLimitMessage("Se alcanzó el límite de pedidos de superhéroes.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      setClickCount((prev) => prev + 1);

      if (!publicKey || !privateKey) {
        throw new Error(
          "Las claves de la API no están configuradas correctamente."
        );
      }

      const ts = new Date().getTime().toString();
      const hash = md5(ts + privateKey + publicKey).toString();
      const randomHero =
        marvelHeroes[Math.floor(Math.random() * marvelHeroes.length)];

      const response = await fetch(
        `${baseURL}?apikey=${publicKey}&ts=${ts}&hash=${hash}&name=${encodeURIComponent(
          randomHero
        )}`
      );
      const data: MarvelApiResponse = await response.json();

      if (data.code !== 200) {
        throw new Error(data.status || "Error desconocido.");
      }

      const randomHeroData = data.data.results[0];
      if (!randomHeroData) {
        throw new Error("No se encontró el héroe.");
      }

      setHero(randomHeroData);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al obtener el superhéroe."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={fetchRandomHero}
        disabled={buttonDisabled || loading}
        className="bg-red-600/80 text-yellow-400 border-2 border-black rounded-full m-auto font-bold px-6 py-4 max-w-[350px] hover:bg-red-700/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-busy={loading}
      >
        {loading
          ? "Cargando..."
          : buttonDisabled
          ? "Límite alcanzado"
          : "Obtener un superhéroe"}
      </button>

      {limitMessage && (
        <p className="text-red-500 mt-4" role="alert">
          {limitMessage}
        </p>
      )}

      {error && (
        <p className="text-red-500 mt-4" role="alert">
          {error}
        </p>
      )}

      {hero && (
        <div className="mt-4 bg-yellow-400/90 p-1 border-2 border-red-500 flex flex-col pt-4 rounded-xl w-full m-auto">
          <h2 className="text-xl font-bold mb-4">{hero.name}</h2>
          {hero.thumbnail && (
            <div className="relative w-full aspect-square max-w-11/12 mx-auto">
              <Image
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={`Imagen de ${hero.name}`}
                width={300}
                height={300}
                className="object-cover rounded w-full h-full"
                priority
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
