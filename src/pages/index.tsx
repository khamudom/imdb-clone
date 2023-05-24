/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { BackToTop, Dropdown, Navbar } from '@/components';
import NinjaTurtle from '@/components/movies/NinjaTurtle/NinjaTurtle';
import Destiny from '@/components/games/Destiny/Destiny';

const adData = [
  {
    id: 1,
    name: 'NinjaTurtle',
  },
  {
    id: 2,
    name: 'Destiny',
  },
];

export default function Home() {
  const [expandHero, setExpandHero] = React.useState(false);
  const [adComponent, setAdComponent] = React.useState<string>('Destiny');

  const handleExpandHero = () => {
    setExpandHero(!expandHero);
  };

  const handleAdComponentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAdComponent(e.target.value);
  };

  const renderAdComponent = () => {
    switch (adComponent) {
      case 'NinjaTurtle':
        return <NinjaTurtle />;
      case 'Destiny':
        return <Destiny />;
      default:
        return;
    }
  };

  return (
    <>
      <Head>
        <title>IMDb Prototype</title>
        <meta name="description" content="IMDb clone by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar></Navbar>
        <div className={styles.adContainer}>
          {/* <button className={styles.expandBtn} onClick={handleExpand}>
            {expand ? 'Expand' : 'Collapse'}
          </button> */}
          <div
            className={styles.adSpacer}
            style={{
              height: `${expandHero ? '227' : '668'}px`,
              transition: 'height 0.5s ease-in-out',
            }}
          >
            <div className={styles.ad}>{renderAdComponent()}</div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            options={adData.map((ad) => ad.name)}
            onChange={handleAdComponentChange}
            defaultValue={adComponent}
          />
        </div>
        <BackToTop />
        <div className={styles.metaData}></div>
      </div>
    </>
  );
}
