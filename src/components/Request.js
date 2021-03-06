const API_KEY = "YOUR API KEY";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&lanuage=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lanuage=en-US`,
  fetchNowInTheatre: `/movie/now_playing?api_key=${API_KEY}&lanuage=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
};

export default requests;
