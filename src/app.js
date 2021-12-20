// Implement the following functions for filtering data from movies.js file:
// • Print title of all the movies starting in a given year.
// • Print all the movies for a given director.
// • Print all movies for a given genre.


// • Print title of all the movies starting in a given year.

// import movies from './movies.js';

function filterByYear(year) {

    const movieFilteredByYear = movies.filter((movie) => movie.year == year)
        .map((movie) => console.log(movie.title));

}

function filterByDirector(director) {

    const movieFilteredByDirector = movies.filter((movie) => movie.director === director);
    console.log(movieFilteredByDirector);

}

function filterByGenre(genre) {
    
    const movieFilteredByGenre = movies.filter((movie) => movie.genres.includes(genre));
    console.log(movieFilteredByGenre);

}

