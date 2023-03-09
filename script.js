'use strict'

let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

detectPersonalLevel();

writeYourGenres();

renumberMyFilms();

showMyDB(personalMovieDB);

// functions:

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const favGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        if (favGenres != null && favGenres != '' && favGenres.length < 50) {
            personalMovieDB.genres[i] = favGenres;
        } else {
            i--;
        }
    }
};

function renumberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', '');
        const rating = +prompt('На сколько оцеите его?', '');
        if (film !=null && rating != null && film != '' && rating != '' && film.length < 50) {
            personalMovieDB.movies[film] = rating;
        } else {
            i--;
        }
    }
    
};

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10){
        alert('Просмотренно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    }else if(personalMovieDB.count > 30){
        alert('Вы киноман');
    } else {
        alert('ошибка');
    }
};

function showMyDB(obj) {
    if (!obj.privat) {
        return console.log(obj);
    } else {
        return console.log('Данные скрыты');
    }
};