
import React, { useState } from 'react';
import styles from './table.module.css';

interface DropdownProps {
  label: string;
  color?: 'primary' | 'secondary';
  selected?: boolean; 
  onClick?: (label: string) => void; 
}

export function Chips({ label, color = 'primary', selected = false, onClick }: DropdownProps) {
  const [isSelected, setIsSelected] = useState(selected);
  const handleClick = () => {
    setIsSelected(!isSelected);
    if (onClick) {
      onClick(label);
    }
  };
  return (
    <div
      className={`${styles.chip} ${styles[color]} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default Chips;
