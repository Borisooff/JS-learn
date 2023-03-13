// 'use strict'

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: () => {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     writeYourGenres: () => {
//         for(let i = 0; i < 3; i++) {
//             const favGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
//             if (favGenre != null && favGenre != '' && favGenre.length < 50) {
//                 personalMovieDB.genres[i] = favGenre;
//             } else {
//                 i--;
//             }
//         }
//         personalMovieDB.genres.forEach((item, index) => {
//             console.log(`Любимый жанр под номером ${index + 1} - это ${item}`);
//         })
//     },
//     renumberMyFilms: () => {
//         for (let i = 0; i < 2; i++) {
//             const film = prompt('Один из последних просмотренных фильмов?', '');
//             const rating = +prompt('На сколько оцеите его?', '');
//             if (film !=null && rating != null && film != '' && rating != '' && film.length < 50) {
//                 personalMovieDB.movies[film] = rating;
//             } else {
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: ()=> {
//         if (personalMovieDB.count <= 10){
//             alert('Просмотренно мало фильмов');
//         } else if (personalMovieDB.count <= 30) {
//             alert('Вы классический зритель');
//         }else if(personalMovieDB.count > 30){
//             alert('Вы киноман');
//         } else {
//             alert('ошибка');
//         }
//     },
//     toggleVisibleMyDB: () => {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     showMyDB: () => {
//         if (!personalMovieDB.privat) {
//             return console.log(personalMovieDB);
//         } else {
//             return console.log('Данные скрыты');
//         }
//     },
// };

// personalMovieDB.start();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.renumberMyFilms();

// personalMovieDB.showMyDB();




// function pow(a, b) {
//     let sum = 1;
//     for(let i = 0; i < b; i++) {
//         sum *= a;
//     }
//     return sum;
// }

// console.log(pow(2, 3));

// function pow(x, n) {
//     debugger
//     if (n === 1) {
//         debugger
//         return x; debugger
//     } else {
//         debugger
//         return x * pow(x, n - 1); debugger
//     }
// }

// console.log(pow(2, 4));


let students = {
    js: [
        {
            name: 'Jone',
            progress: 100,
        },
        {
            name: 'Ivan',
            progress: 60,
        },
    ],

    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20,
            },
            {
                name: 'Ann',
                progress: 18,
            }
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10,
            },
        ],
        some: {
            students: [
                {
                    name: 'test',
                    progress: 100,
                }
            ]
        }
    },
};

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//             course.forEach(element => {
//                 total += element.progress;
//             })
//         } else {
//             for (let subcourse of Object.values(course)) {
//                 students += subcourse.length;
//                 subcourse.forEach(element => {
//                     total += element.progress;
//                 })
//             }
//         }
//     }
//     return total / students;
// }

function getTotalProgressByRecurtion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecurtion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecurtion(students);


// console.log(getTotalProgressByIteration(students));
console.log(result[0] / result[1]);