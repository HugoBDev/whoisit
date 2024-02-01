import React, { useState, useEffect } from "react";
import MovieCardComponent from "./components/MovieComponent/MovieCard.component";
import "./App.css";
import { Movie } from "./model/movie.model";
import PillButton from "./components/button/PillButton";
import NavBar from "./components/NavBar/NavBar";
import { apiKey, popular } from "./api/apiKey";
import MovieGenreAPI from "./api/movieGenre.api";
import MovieAPI from "./api/movie.api";
import getGenresByIds from "./services/genre.service";


function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const movieAPI = new MovieAPI();

  
 
  useEffect(() => {
    movieAPI.getPopularMovie().then((data) => {
      const movies = data.results.map((el: any) => ({
        id: el.id,
        title: el.title,
        genre_ids: el.genre_ids,
        genres: getGenresByIds(el.genre_ids),
        poster_path: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
        release_date: el.release_date.slice(0, 4),
      }));
      setMovieList(movies);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {movieList.map((movie, index) => (
          <MovieCardComponent key={index} movie={movie} />
        ))}
      </header>
    </div>
  );
}

export default App;
