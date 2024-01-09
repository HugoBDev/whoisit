import React from "react";
import MovieComponent from "./components/movie/MovieComponent";
import "./App.css";

const movies = {
  title: "Oppenheimer",
  director: "Christopher Nolan",
  actors: ["Cillian Murphy", "Dwayne Jhonson"],
  movieType: "drama",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieComponent />
      </header>
    </div>
  );
}

export default App;
