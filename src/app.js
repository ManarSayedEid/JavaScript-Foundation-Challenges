// Implement the following functions for filtering data from movies.js file:
// • Print title of all the movies starting in a given year.
// • Print all the movies for a given director.
// • Print all movies for a given genre.


// • Print title of all the movies starting in a given year.

import movies from './movies.js';

function filterByYear(year) {

    let movieFilteredByYear = movies.filter((movie) => movie.year === year.toString());

    for (let i = 0; i < movieFilteredByYear.length; i++){
        console.log(movieFilteredByYear[i].title);
    }
    
    // console.log(movieFilteredByYear.map((movie) => movie.title))
}

filterByYear(2015);


function filterByDirector(director) {

    let movieFilteredByDirector = movies.filter((movie) => movie.director === director);
    console.log(movieFilteredByDirector)

}

filterByDirector("Alfred Hitchcock");


function filterByGenre(genre) {
    
    let movieFilteredByGenre = movies.filter((movie) => movie.genres.includes(genre));
    console.log(movieFilteredByGenre)
}

filterByGenre('Mystery')