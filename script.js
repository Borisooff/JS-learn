const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm = prompt('Какой последний фильм вы смотрели?', '');
const rating = +prompt('На сколько оценете его?', '');

const seclastFilm = prompt('Какой последний фильм вы смотрели?', '');
const secRating = +prompt('На сколько оценете его?', '');


personalMovieDB.movies[lastFilm] = rating;
personalMovieDB.movies[seclastFilm] = secRating;

console.log(personalMovieDB);