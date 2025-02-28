import { useState } from "react";

type Movie = {
  Title: string;
  Year: string;
  Poster: string;
};

const MovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMovies}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.Title}>{movie.Title} ({movie.Year})</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
