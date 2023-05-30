/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { BackToTop, Dropdown } from '@/components';
import NinjaTurtle from '@/components/Ads/movies/NinjaTurtle/NinjaTurtle';
import Destiny from '@/components/Ads/games/Destiny/Destiny';
import { adData } from '../data/data';

export default function Home() {
  const [adComponent, setAdComponent] = React.useState<string>('');

  const renderAdComponent = () => {
    switch (adComponent) {
      case 'NinjaTurtle':
        return <NinjaTurtle />;
      case 'Destiny':
        return <Destiny />;
      default:
        return <NinjaTurtle />;
    }
  };

  const handleAdComponentChange = (selectedOption: string) => {
    setAdComponent(selectedOption);
  };

  // Get the stored ad component from localStorage
  React.useEffect(() => {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setAdComponent(JSON.parse(storedOption));
    }
  }, [adComponent]);

  // Set the stored ad component to localStorage
  React.useEffect(() => {
    if (adComponent) {
      localStorage.setItem('selectedOption', JSON.stringify(adComponent));
    }
  }, [adComponent]);

  return (
    <>
      <Head>
        <title>IMDb Prototype</title>
        <meta name="description" content="IMDb clone by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.adContainer}>
          <div className={styles.adSpacer}>
            <div className={styles.ad}>{renderAdComponent()}</div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            options={adData.map((ad) => ad.name)}
            onSelect={handleAdComponentChange}
          />
        </div>
        <div className={styles.metaData}></div>
      </div>
    </>
  );
}
