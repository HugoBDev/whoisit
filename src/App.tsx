import React, { useState, useEffect } from "react";
import MovieComponent from "./components/MovieComponent/MovieComponent";
import "./App.css";
import { Movie } from "./model/movie.model";
import PillButton from "./components/button/PillButton";
import NavBar from "./components/NavBar/NavBar";
import { apiKey, popular } from "./api/apiKey";
import  MovieGenreAPI  from "./api/movieGenre.API";


function App() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const movieGenreAPI = new MovieGenreAPI();
  movieGenreAPI.getMovieGenres()
  
  useEffect(() => {
    fetch(popular)
      .then(res => res.json())
      .then(data => {
        const movies = data.results.map((el: any) => ({
          // id: el.id,
          title: el.title,
          genre_ids: el.genre_ids,
          poster_path: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
          release_date: el.release_date.slice(0,4)
        }));
        setMovieList(movies);
      });
  }, []); // Le tableau vide indique que le useEffect s'exécute une seule fois, équivalent à componentDidMount

  console.log(movieList);

  return (
    <div className="App">
      <header className="App-header">
      {movieList.map((movie, index) => (
        <MovieComponent key={index} movie={movie} />
      ))}</header>
    </div>
  );
}

export default App;
