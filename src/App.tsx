import React from "react";
import MovieComponent from "./components/MovieComponent/MovieComponent";
import "./App.css";
import { Movie } from "./model/movie.model";
import PillButton from "./components/button/PillButton";
import NavBar from "./components/NavBar/NavBar";
import { apiKey, popular } from "./api/apiKey";

function App() {
  const url = `${popular}?api_key=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
