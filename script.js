'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    writeYourGenres: () => {
        for(let i = 0; i < 3; i++) {
            const favGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (favGenre != null && favGenre != '' && favGenre.length < 50) {
                personalMovieDB.genres[i] = favGenre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр под номером ${index + 1} - это ${item}`);
        })
    },
    renumberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '');
            const rating = +prompt('На сколько оцеите его?', '');
            if (film !=null && rating != null && film != '' && rating != '' && film.length < 50) {
                personalMovieDB.movies[film] = rating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: ()=> {
        if (personalMovieDB.count <= 10){
            alert('Просмотренно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        }else if(personalMovieDB.count > 30){
            alert('Вы киноман');
        } else {
            alert('ошибка');
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            return console.log(personalMovieDB);
        } else {
            return console.log('Данные скрыты');
        }
    },
};

// personalMovieDB.start();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.renumberMyFilms();

// personalMovieDB.showMyDB();



