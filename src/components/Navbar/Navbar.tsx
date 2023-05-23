/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { HiUserCircle } from 'react-icons/hi';
import Link from 'next/link';
import { Button } from '@/components';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logo}>
            <img src="/assets/img/imdblogo.png" alt="imdb logo" />
          </Link>

          <Button className={styles.menu}>
            <RxHamburgerMenu className={styles.icon}></RxHamburgerMenu>
            Menu
          </Button>
          <div className={styles.searchContainer}>
            <form className={styles.form}>
              <button className={styles.formStart}>All</button>
              <div className={styles.inputWrapper}>
                <input type={styles.search} />
              </div>
              <button className={styles.formEnd}>
                <AiOutlineSearch className={styles.icon} />
              </button>
            </form>
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
