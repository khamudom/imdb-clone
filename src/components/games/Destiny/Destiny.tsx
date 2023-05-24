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
  // const [offsetY, setOffsetY] = React.useState(0);

  // React.useEffect(() => {
  //   const handleScroll = () => setOffsetY(window.pageYOffset);

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <img
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
            src="/assets/img/d2/d-warmindlogo.png"
            alt="warmind logo"
            role="presentation"
          />
        </motion.div>
        <img
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
            src="/assets/img/d2/d-destiny.png"
            alt="destiny"
            role="presentation"
          />
        </motion.div>
        <img
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
