import { resolve } from "path";
import { apiKey, popular, apiURL } from "./apiKey";
//*class = livre de recettes, function ou method (inside of it) = recettes

class MovieAPI {
  getPopularMovie(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(popular)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  getMovieDetails(id: number): Promise<any> {
    const movieDetailsURL = `${apiURL}/movie/${id}?api_key=${apiKey}`;
    return new Promise((resolve, reject) => {
      fetch(movieDetailsURL)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
export default MovieAPI;
