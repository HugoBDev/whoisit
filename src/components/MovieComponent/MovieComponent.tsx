import { Movie } from "../../model/movie.model";
import React from "react";

interface MovieComponentProps {
  movie: Movie;
}
function MovieComponent({ movie }: MovieComponentProps) {
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.director}</p>
      <p>{movie.actors}</p>
      <p>{movie.movieType}</p>
    </>
  );
}

export default MovieComponent;
