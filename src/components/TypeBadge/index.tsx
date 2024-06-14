import React from 'react';
import styles from './styles.module.scss';

interface TypeBadgeProps {
  type: string;
};

const typeColors: { [key: string]: string | [string, string] } = {
  bug: '#729f3f',
  dark: '#707070',
  dragon: ['#53a4cf', '#f16e57'],
  electric: '#eed535',
  fairy: '#fdb9e9',
  fighting: '#d56723',
  fire: '#fd7d24',
  flying: ['#3dc7ef', '#bdb9b8'],
  ghost: '#7b62a3',
  grass: '#9bcc50',
  ground: ['#f7de3f', '#ab9842'],
  ice: '#51c4e7',
  normal: '#a4acaf',
  poison: '#b97fc9',
  psychic: '#f366b9',
  rock: '#a38c21',
  steel: '#9eb7b8',
  water: '#4592c4',
};

const fontColors: { [key: string]: string } = {
  electric: '#313131',
  fairy: '#313131',
  ground: '#313131',
  normal: '#313131',
  steel: '#313131',
  flying: '#313131',
  grass: '#313131',
  ice: '#313131',
};

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const backgroundColor = typeColors[type.toLocaleLowerCase()];
  const fontColor = fontColors[type.toLocaleLowerCase()] || '#ffffff';

  const style = Array.isArray(backgroundColor)
    ? {
      '--background-color': `linear-gradient(to bottom, ${backgroundColor[0]} 50%, ${backgroundColor[1]} 50%)`,
      '--font-color': fontColor,
    }
    : {
      backgroundColor: backgroundColor,
      color: fontColor
    };

  return (
    <div className={styles.badge} style={style}>
      {type}
    </div>
  );
};

export default TypeBadge;