import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    if (!query.trim()) return;

    const API_KEY = "da2df046";
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovies()}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found. Try searching!</p>
        )}
      </div>
    </div>
  );
}
