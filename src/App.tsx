import React from "react";
import MovieComponent from "./components/MovieComponent/MovieComponent";
import "./App.css";
import { Movie } from "./model/movie.model";
import PillButton from "./components/button/PillButton";

const movie: Movie = {
  title: "Oppenheimer",
  director: "Christopher Nolan",
  actors: ["Cillian Murphy", "Dwayne Jhonson"],
  movieType: "drama",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieComponent movie={movie} />
        <PillButton/>
      </header>
    </div>
  );
}

export default App;
