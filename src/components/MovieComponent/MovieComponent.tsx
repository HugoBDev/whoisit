import { Movie } from "../../model/movie.model";
import React from "react";
import "./MovieComponent.scss";

interface MovieComponentProps {
  movie: Movie;
}
function MovieComponent({ movie }: MovieComponentProps) {
  return (
    <div className="movie-wrapper">
      <div className="poster-img-wrapper">
        <img src={movie.posterURL} alt="" />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.director}</p>
      <p>{movie.actors}</p>
      <p>{movie.movieType}</p>
    </div>
  );
}

export default MovieComponent;
