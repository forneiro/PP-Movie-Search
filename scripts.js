// Variables
const moviesContainer = document.getElementById("movies");
const moviesSearch = document.getElementById("search");

const BASE_URL_IMGS = "https://image.tmdb.org/t/p/original";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

// Functions
const generateHtml = (data) => {
  // If there isn't an array of movies show a message
  if (!data.results || data.results.length === 0) {
    moviesContainer.innerHTML = `<p class="no-movies">No se encontraron resultados</p>`;
    return;
  }

  const htmlContent = data.results
    .map((movie) => {
      if (!movie.backdrop_path) return;
      const imgPath = BASE_URL_IMGS + movie.backdrop_path;

      return `
          <li class="movie">
              <img class="movie__img" src="${imgPath}" alt="Poster de película" />
              <h3 class="movie__title">${movie.title}</h3>
              <p class="movie__overview">${movie.overview}</p>
          </li>
          `;
    })
    .join("");

  moviesContainer.innerHTML = htmlContent;
};

// Fetch movies from the API
const fetchMovies = (query) => {
  const url = query
    ? `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&pages=1`
    : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=es-ES&page=1`;

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => generateHtml(data))
    .catch((err) => {
      moviesContainer.innerHTML = `<p class="no-movies">No se encontraron resultados</p>`;
    });
};
fetchMovies();

moviesSearch.addEventListener("input", (e) => {
  const searchTerm = e.target.value;

  if (searchTerm.length > 1) {
    fetchMovies(searchTerm);
  } else {
    fetchMovies();
  }
});
