import React from 'react';
import styles from './styles.module.scss'

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    Load More Pokémon
  </button>
);

export default LoadMoreButton;