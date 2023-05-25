/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Destiny.module.css';
import { motion } from 'framer-motion';

const variant = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.9,
      ease: 'easeOut',
      duration: 0.7,
    },
  },
};

const Destiny = () => {
  const [position, setPosition] = React.useState({ mouseX: 0, mouseY: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // let xValue = 0;
    // let yValue = 0;
    // xValue = event.clientX - window.innerWidth / 2;
    // yValue = event.clientY - window.innerHeight / 2;
    const { clientX, clientY } = event;

    setPosition({ mouseX: clientX, mouseY: clientY });
  };

  return (
    <>
      <div className={styles.wrapper} onMouseMove={handleMouseMove}>
        <img
          style={{
            transform: `translate(-${(position.mouseX / 50) * 0.3}px`,
          }}
          className={styles.front}
          src="/assets/img/d2/d-front.png"
          alt="front"
          role="presentation"
        />
        <motion.div
          variants={variant}
          initial="hidden"
          animate="show"
          className={styles.warmindText}
        >
          <img
            style={{
              transform: `translate(-${(position.mouseX / 100) * 0.4}px, -${
                (position.mouseY / 60) * 0.4
              }px)`,
            }}
            src="/assets/img/d2/d-warmindtext.png"
            alt="warmind text"
            role="presentation"
          />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          animate="show"
          className={styles.warmindLogo}
        >
          <img
            style={{
              transform: `translate(-${(position.mouseX / 100) * 0.3}px, -${
                (position.mouseY / 60) * 0.3
              }px)`,
            }}
            src="/assets/img/d2/d-warmindlogo.png"
            alt="warmind logo"
            role="presentation"
          />
        </motion.div>
        <img
          style={{
            transform: `translate(-${(position.mouseX / 50) * 0.9}px, -${
              (position.mouseY / 50) * 0.6
            }px)`,
          }}
          className={styles.smoke}
          src="/assets/img/d2/d-smoke.png"
          alt="smoke"
          role="presentation"
        />
        <img
          className={styles.warmind}
          src="/assets/img/d2/d-warmind.png"
          alt="warmind"
          role="presentation"
        />
        <motion.div
          initial={{ y: 410, opacity: 0, scale: 0.6 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeIn' }}
          className={styles.destiny}
        >
          <img
            style={{
              transform: `translate(-${(position.mouseX / 90) * 0.2}px, -${
                (position.mouseY / 90) * 0.2
              }px)`,
            }}
            src="/assets/img/d2/d-destiny.png"
            alt="destiny"
            role="presentation"
          />
        </motion.div>
        <img
          style={{
            transform: `translate(-${(position.mouseX / 50) * 0.3}px`,
          }}
          className={styles.bray}
          src="/assets/img/d2/d-bray.png"
          alt="bray"
          role="presentation"
        />
        <img
          className={styles.background}
          src="/assets/img/d2/d-bg.png"
          alt="background"
          role="presentation"
        />
      </div>
    </>
  );
};

export default Destiny;
