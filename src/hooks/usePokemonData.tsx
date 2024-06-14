import { useState, useEffect } from 'react';
import axios from 'axios';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

const fetchPokemons = async (offset: number): Promise<Pokemon[]> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
  const data = response.data;
  const pokemons = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const res = await axios.get(pokemon.url);
      const pokeData = res.data;
      return {
        id: pokeData.id,
        name: pokeData.name,
        image: pokeData.sprites.front_default,
        types: pokeData.types.map((typeInfo: any) => typeInfo.type.name),
      };
    })
  );
  return pokemons;
};

const usePokemonData = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const loadInitialPokemons = async () => {
      const initialPokemons = await fetchPokemons(0);
      setPokemons(initialPokemons);
    };
    loadInitialPokemons();
  }, []);

  const loadMorePokemons = async () => {
    const newPokemons = await fetchPokemons(offset + 12);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    setOffset((prevOffset) => prevOffset + 12);
  };

  return {
    pokemons,
    loadMorePokemons,
  };
};

export default usePokemonData;