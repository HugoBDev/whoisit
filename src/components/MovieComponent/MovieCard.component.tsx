import { Movie } from "../../model/movie.model";
import React from "react";
import "../../styles/MovieComponent.scss";
import MovieAPI from "../../api/movie.api";
import { error } from "console";

const movieAPI = new MovieAPI();
interface MovieComponentProps {
  movie: Movie;
}

function MovieCardComponent({ movie }: MovieComponentProps) {
  function getDetails() {
    movieAPI.getMovieDetails(movie.id)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  return (
    <div onClick={getDetails} className="movie-wrapper">
      <div id="img-container">
        <img src={movie.poster_path} alt="movie-poster" />
      </div>
      <div className="movie-infos">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-genres">{movie.genres}</p>
        <p className="movie-release-date">{movie.release_date}</p>
        <div className="bottom-gradient"></div>
      </div>
    </div>
  );
}

export default MovieCardComponent;
