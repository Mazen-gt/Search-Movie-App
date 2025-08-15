import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
      />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
}
