/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './NinjaTurtle.module.css';
import YouTube from 'react-youtube';
import { AiOutlineClose } from 'react-icons/ai';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { Smoke } from '@/components';

type NinjaTurtleProps = {
  className?: string;
};

const NinjaTurtle: React.FC<NinjaTurtleProps> = ({ className }) => {
  const [videoPlayer, setVideoPlayer] = React.useState(true);
  const [movieTitle, setMovieTitle] = React.useState(false);
  const [animateOpacity, setAnimateOpacity] = React.useState(false);

  const controls = useAnimation();

  const closeBtnRef = React.useRef<HTMLButtonElement>(null);
  const trailerBtnRef = React.useRef<HTMLDivElement>(null);

  const handleVideoClose = () => {
    setVideoPlayer(false);
    setMovieTitle(true);
    setAnimateOpacity(true);
    controls.start({ opacity: 0 });
    trailerBtnRef.current?.style.setProperty('display', 'flex');
    closeBtnRef.current?.style.setProperty('display', 'none');
  };

  const handleVideoPlay = () => {
    setVideoPlayer(true);
    setMovieTitle(false);
    setAnimateOpacity(false);
    controls.start({ opacity: 0 });
    trailerBtnRef.current?.style.setProperty('display', 'flex');
    closeBtnRef.current?.style.setProperty('display', 'flex');
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delay: 5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 360, x: 0 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    },
  };

  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <img
          className={styles.city}
          src="/assets/img/turtle/tmnt-city.png"
          alt="city"
          role="presentation"
        />

        <div className={styles.videoContainer}>
          <button
            type="button"
            title="close video"
            onClick={handleVideoClose}
            className={styles.closeBtn}
            ref={closeBtnRef}
          >
            <AiOutlineClose />
          </button>

          <AnimatePresence>
            {videoPlayer && (
              <motion.div
                className={styles.videoWrapper}
                initial={{ y: 0, opacity: 1 }}
                exit={{ y: 400, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'anticipate' }}
              >
                <YouTube className={styles.video} videoId="Dh2u6Cw2clE" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {movieTitle && (
          <motion.div
            className={styles.title}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <img
                src="/assets/img/turtle/tmnt-teenage.png"
                alt="teenage"
                role="presentation"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                src="/assets/img/turtle/tmnt-mutant.png"
                alt="mutant"
                role="presentation"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                src="/assets/img/turtle/tmnt-ninja.png"
                alt="ninja"
                role="presentation"
              />
            </motion.div>
            <motion.div variants={item}>
              <img
                src="/assets/img/turtle/tmnt-turtle.png"
                alt="turtle"
                role="presentation"
              />
            </motion.div>
          </motion.div>
        )}
        <motion.div
          ref={trailerBtnRef}
          className={styles.trailerBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: animateOpacity ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <button onClick={handleVideoPlay}>trailer</button>
        </motion.div>
        <img
          className={styles.street}
          src="/assets/img/turtle/tmnt-street.png"
          alt="street"
          role="presentation"
        />
        <div className={styles.smokeContainer}>
          <Smoke />
        </div>
        <img
          className={styles.turtles}
          src="/assets/img/turtle/tmnt-turtles.png"
          alt="turtles"
          role="presentation"
        />
      </div>
    </div>
  );
};

export default NinjaTurtle;
