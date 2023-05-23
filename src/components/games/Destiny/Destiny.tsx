/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Destiny.module.css';

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
        <img
          className={styles.warmindText}
          src="/assets/img/d2/d-warmindtext.png"
          alt="warmind text"
          role="presentation"
        />
        <img
          className={styles.warmindLogo}
          src="/assets/img/d2/d-warmindlogo.png"
          alt="warmind logo"
          role="presentation"
        />
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
        <img
          className={styles.destiny}
          src="/assets/img/d2/d-destiny.png"
          alt="destiny"
          role="presentation"
        />
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
