import React from "react";
import MovieComponent from "./components/MovieComponent/MovieComponent";
import "./App.css";
import { Movie } from "./model/movie.model";
import PillButton from "./components/button/PillButton";
import NavBar from "./components/NavBar/NavBar";

const movie: Movie = {
  title: "Oppenheimer",
  releaseYear : 2023,
  movieType: "drama",
  posterURL :"https://www.themoviedb.org/t/p/original/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg"
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieComponent movie={movie} />
        {/* <PillButton/> */}
      </header>
    </div>
  );
}

export default App;
