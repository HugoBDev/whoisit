//! clé d'API TMDB


export const apiURL = "https://api.themoviedb.org/3"
export const apiKey = "6566731274cee802cb58cfa8e153b9fa";

//? Movie 

export const popular = `${apiURL}/movie/popular?api_key=${apiKey}`
export const upcoming = `${apiURL}/movie/upcoming?api_key=${apiKey}`;
export const thisWeek = `${apiURL}/movie/now_playing?api_key=${apiKey}`;
export const topRatedMovies = `${apiURL}/movie/top_rated?api_key=${apiKey}`