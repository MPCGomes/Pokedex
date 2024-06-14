import React from 'react';
import styles from './styles.module.scss';
import TypeBadge from '../TypeBadge';

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, image, types }) => (
  <div className={styles.card}>
    <img
      className={styles.image}
      src={image}
      alt={name}
    />
    <div className={styles.details}>
      <p className={styles.id}>
        Nº{id.toString().padStart(4, '0')}
      </p>
      <h3 className={styles.name}>
        {capitalize(name)}
      </h3>
      <div className={styles.types}>
        {types.map((type) => (
          <TypeBadge key={type} type={capitalize(type)} />
        ))}
      </div>
    </div>
  </div>
);

export default PokemonCard;