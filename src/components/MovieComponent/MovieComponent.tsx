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
        <img src={movie.poster_path} alt="movie-poster" />
      </div>
      <div className="movie-infos">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-release-date">{movie.release_date}</p>
        <div className="bottom-gradient"></div>
      </div>
    </div>
  );
}

export default MovieComponent;
