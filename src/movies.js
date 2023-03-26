// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    let allDirectors = moviesArray.map(movie => {
        return movie.director;
    })
    // let newDirs = allDirectors.filter((dir, index) => allDirectors.indexOf(dir) !== index)
    // console.log(allDirectors)
    return allDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let stevenS = moviesArray.filter(movie => movie.director === 'Steven Spielberg')

    let drama = stevenS.filter(movie => movie.genre.includes('Drama'))
    // console.log(drama)
    return drama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray <= 0){
        return 0
    }else{
        let scoreSum = moviesArray.reduce((sum, movie) => {
            if (!movie.score) movie.score = 0;
            return sum + movie.score
        }, 0)
        let scoreAverage = scoreSum / moviesArray.length
        // console.log(scoreAverage.toFixed(2))
        return Number(scoreAverage.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let drama = moviesArray.filter(movie => movie.genre.includes('Drama'))

    let avg; 

    if(drama.length <= 0){
        return 0
    }else {
        let scoreSum = drama.reduce((accumulator, value) => {
            return accumulator + value.score;
        })
        avg = scoreSum / drama.length;
    }

    return avg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let unsorted = [...moviesArray];
    let moviesSorted = [];

    moviesSorted = unsorted.sort((a,b) => {
        if(a.year > b.year) {
            return 1
        }else if(b.year > a.year) {
            return -1
        }else if (a.year === b.year && a.title > b.title) {
            return 1
        }else if (a.year === b.year && a.title < b.title) {
            return -1
        }else {
            return 0
        }
    })

    // console.log(moviesSorted, moviesArray)
    return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieNames = moviesArray.map(movie => {
        return movie.title;
    });
    // console.log(movieNames)
    return movieNames
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let movies = [...moviesArray];

    let changedHours = movies.map(movie => {
        let hoursIndex = movie.duration.indexOf("h");
        let minutesIndex = movie.duration.indexOf("min");
        let minutesOne = Number(movie.duration.slice(0,hoursIndex)) * 60;
        let minutesTwo = Number(movie.duration.slice(minutesIndex - 2, minutesIndex));

        let minutes = minutesOne + minutesTwo;

        // console.log(minutes)
        movie.duration = Number(minutes);
        console.log(movie)
        return movie;
    })

    return changedHours;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
