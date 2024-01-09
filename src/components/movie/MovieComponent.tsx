import { Movie } from "../../model/movie.model";
import React from "react";

 
function MovieComponent(movie: Movie) {
  return <>
      
      
      <h1>{movie.title}</h1>
      <p>{movie.director}</p>
      <p>{movie.actors}</p>
      <p>{movie.movieType}</p>
      <p>{movie.title}</p>
    </>
  ;
}

export default MovieComponent;
