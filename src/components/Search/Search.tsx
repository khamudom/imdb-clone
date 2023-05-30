import React from 'react';
import styles from './Search.module.css';
import { MovieDetail } from '@/types/MovieType';
import { AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';

type SearchProps = {
  onSearchResults: (results: MovieDetail[]) => void;
};

const Search: React.FC<SearchProps> = ({ onSearchResults }) => {
  const [query, setQuery] = React.useState('');
  const [movieDetails, setMovieDetails] = React.useState<MovieDetail[]>([]);
  const [showResults, setShowResults] = React.useState(false);

  const resultsRef: any = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let handleSearchResults = (e: MouseEvent) => {
      if (!resultsRef.current?.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleSearchResults);

    return () => {
      document.removeEventListener('mousedown', handleSearchResults);
    };
  }, []);

  const searchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
      );
      const data = await response.json();
      setMovieDetails(data.results);
      onSearchResults(data.results);
      // console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies();
    setShowResults(true);
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button className={styles.formStart} type="button">
          All
        </button>
        <div className={styles.inputWrapper}>
          <input type="text" value={query} onChange={handleInputChange} />
        </div>
        <button className={styles.formEnd} type="submit" title="Search">
          <AiOutlineSearch className={styles.icon} />
        </button>
      </form>
      {showResults && (
        <div className={styles.results} ref={resultsRef}>
          <ul>
            {movieDetails.map((movieDetail) => (
              <li key={movieDetail.id}>
                <a href={`/movies/${movieDetail.id}`}>
                  <div className={styles.contentWrapper}>
                    <Image
                      width={48}
                      height={72}
                      className={styles.poster}
                      src={
                        movieDetail.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`
                          : '/assets/img/placeholder.png'
                      }
                      alt={movieDetail.title}
                    />
                    <div className={styles.content}>
                      <h4>{movieDetail.title}</h4>
                      <p>{movieDetail.release_date}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
