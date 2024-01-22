import React, { useState, useEffect } from "react";
import MovieCardComponent from "./components/MovieComponent/MovieCard.component";
import "./App.css";
import { Movie } from "./model/movie.model";
import PillButton from "./components/button/PillButton";
import NavBar from "./components/NavBar/NavBar";
import { apiKey, popular } from "./api/apiKey";
import MovieGenreAPI from "./api/movieGenre.api";
import MovieAPI from "./api/movie.api";

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const movieGenresAPI = new MovieGenreAPI();
  const movieAPI = new MovieAPI();

  //? 1. Recuperer les genres et les stocker dans un tableau
  //? 2. Chercher les films
  //? 3. ForEach movie, chercher les genres dans le tableau et s'ils existent les renders
  let movieGenreList: any[] = [];
  movieGenresAPI
    .getMovieGenres()
    .then((data) => {
      movieGenreList = data.genres;
      console.log(movieGenreList);
    })
    .catch((error) => console.log(error));

  function getGenresByIds(idList: number[]): string[] {
    let genreNames: string[] = [];

    idList.forEach((id) => {
      movieGenreList.map((genre) => {
        if (id === genre.id) {
          genreNames.push(genre.name);
        }
      });
    });
    console.log(genreNames);
    
    return genreNames;
  }

  useEffect(() => {
    movieAPI.getPopularMovie().then((data) => {
      console.log(movieGenreList);

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
