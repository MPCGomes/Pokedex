"use client";

import React from 'react';
import usePokemonData from '../hooks/usePokemonData';
import PokemonCard from '../components/PokemonCard';
import LoadMoreButton from '../components/LoadMoreButton';
import styles from './page.module.scss';

const Home = () => {
  const { pokemons, loadMorePokemons } = usePokemonData();

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>
      <LoadMoreButton onClick={loadMorePokemons} />
    </div>
  );
};

export default Home;