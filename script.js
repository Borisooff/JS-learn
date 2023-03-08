'use strict'
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count <= 10){
    alert('Просмотренно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
}else if(personalMovieDB.count > 30){
    alert('Вы киноман');
} else {
    alert('ошибка');
}

for (let i = 0; i < 2; i++) {
    const film = prompt('Один из последних просмотренных фильмов?', '');
    const rating = +prompt('На сколько оцеите его?', '');
    if (film !=null && rating != null && film != '' && rating != '' && film.length < 5) {
        personalMovieDB.movies[film] = rating;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);
