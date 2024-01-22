import { apiKey } from "./apiKey";

class MovieGenreAPI {
  
  
    getMovieGenres(language: string = "fr"): Promise<any> {
    const movieGenreURL = `https://api.themoviedb.org/3/genre/movie/list?language=${language}&api_key=${apiKey}`;

    return new Promise((resolve, reject) => {
      fetch(movieGenreURL)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch(error=>reject(error));
    })
      





  }
}
export default MovieGenreAPI;
