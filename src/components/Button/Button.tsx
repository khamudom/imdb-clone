import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  ref?: React.RefObject<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  type,
  title,
  ref,
}) => {
  return (
    <button
      className={`${styles.container} ${className}`}
      onClick={onClick}
      type={type}
      title={title}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default Button;
