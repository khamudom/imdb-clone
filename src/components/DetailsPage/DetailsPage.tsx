/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { MovieDetail } from '@/types/MovieType';

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
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails?.title}
      />
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
    </div>
  );
};

export default DetailsPage;
