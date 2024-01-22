import MovieGenreAPI from "../api/movieGenre.api";

//? 1. Recuperer les genres et les stocker dans un tableau
//? 2. Chercher les films
//? 3. ForEach movie, chercher les genres dans le tableau et s'ils existent les renders

const movieGenreAPI = new MovieGenreAPI();

let movieGenreList: any[] = [];
movieGenreAPI
  .getMovieGenres()
  .then((data) => {
    movieGenreList = data.genres;
    console.log(movieGenreList);
  })
  .catch((error) => console.log(error));

/**
 * Cete fonction prend en paramètres un tableau d'id(ceux des genres TMDB) et retourne un tableau de string
 * [17,12,123]=>["comedie", "drame", "aventure"]
 *
 * @param idList [17,12,123]
 * @returns ["comedie", "drame", "aventure"]
 */
function getGenresByIds(idList: number[]): string[] {
  let genreNames: string[] = [];
  


  idList.forEach((id) => {
    movieGenreList.map((genre) => {
      if (id === genre.id) {
        genreNames.push(genre.name);
      }
    });
  });
  

  return genreNames;
}

export default getGenresByIds;
