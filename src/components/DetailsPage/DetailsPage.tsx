/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { MovieDetail } from '@/types/MovieType';
import BackToTop from '../BackToTop/BackToTop';
import styles from './DetailsPage.module.css';

const DetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieDetails, setMovieDetails] = React.useState<MovieDetail | null>(
    null
  );

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      fetchMovieDetails();
    }
  });

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.adContainer}>
        <div className={styles.adSpacer}>
          <div className={styles.ad}></div>
        </div>
      </div>
      <BackToTop />
      <div className={styles.metaDataContainer}>
        <section className={styles.metaData}>
          <div className={styles.poster}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails?.title}
            />
          </div>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{movieDetails.title}</h1>
            <p className={styles.releaseDate}>{movieDetails.release_date}</p>
            <div className={styles.overview}>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailsPage;
