'use client';
import React from 'react';
import { Button } from '@/components';
import styles from './BackToTop.module.css';

const BackToTop = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Button
        className={`${styles.toTopBtn} ${show ? `${styles.visible}` : ''}`}
        onClick={handleClick}
      >
        Back to Top
      </Button>
    </div>
  );
};

export default BackToTop;
