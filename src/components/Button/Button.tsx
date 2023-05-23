import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <button className={`${styles.container} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
