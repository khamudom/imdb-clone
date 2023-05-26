import React from 'react';
import styles from './Details.module.css';

interface MovieDetail {
  id: number;
  title: string;
  overview: string;
}

const Details = () => {
  const [movieDetails, setMovieDetails] = React.useState<MovieDetail | null>(
    null
  );

  React.useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/1498?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{movieDetails?.title}</div>
      </div>
      {movieDetails?.overview}
    </div>
  );
};

export default Details;
