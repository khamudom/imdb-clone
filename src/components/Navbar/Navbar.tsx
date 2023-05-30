/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Navbar.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { HiUserCircle } from 'react-icons/hi';
import Link from 'next/link';
import { Button, Search } from '@/components';
import { MovieDetail } from '@/types/MovieType';

type NavbarProps = {
  onSearchResult: (results: MovieDetail[]) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSearchResult }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logo}>
            <img src="/assets/img/imdblogo.png" alt="imdb logo" />
          </Link>
          <Button className={styles.menu} title="Menu">
            <RxHamburgerMenu className={styles.icon}></RxHamburgerMenu>
            Menu
          </Button>
          <div className={styles.searchContainer}>
            <Search onSearchResults={onSearchResult} />
          </div>
        </div>
        <div className={styles.navRight}>
          <Button>
            <a href="#">IMDbPro</a>
          </Button>
          <div className={styles.divider}></div>
          <Button className={styles.watchlist}>
            <a href="#">
              <MdOutlineBookmarkAdd className={styles.icon} />
              Watchlist
            </a>
          </Button>
          <Button className={styles.user}>
            <a href="#">
              <HiUserCircle className={styles.icon} />
              Kham
            </a>
          </Button>
          <Button className={styles.language}>
            <a href="#">En</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
