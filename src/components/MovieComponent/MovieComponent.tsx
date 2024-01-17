import { Movie } from "../../model/movie.model";
import React from "react";
import "../../styles/MovieComponent.scss";

interface MovieComponentProps {
  movie: Movie;
}
function MovieComponent({ movie }: MovieComponentProps) {
  return (
    <div className="movie-wrapper">
      <div id="img-container">
        <img
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg"
          alt="your_keyword"
        />
      </div>
      <div className="infos">
        <p>{movie.title}</p>
        <p>{movie.director}</p>
        <p>{movie.actors}</p>
        <p>{movie.movieType}</p>
      </div>
    </div>
  );
}

export default MovieComponent;
