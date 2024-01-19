import { apiKey } from "./apiKey"


class MovieGenreAPI{
     getMovieGenres(language :string = 'fr') {
        
        const movieGenreURL = `https://api.themoviedb.org/3/genre/movie/list?language=${language}&api_key=${apiKey}`
        const movieGenreList : any[] = []

        fetch(movieGenreURL)
        .then(res=> res.json())
        .then(data=>console.log(data)
        )

    }
} 
export default MovieGenreAPI
