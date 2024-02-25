class Movie {
    constructor(movieTitle,movieStudio,movieRating= 'PG' ) 
    {
        this.Title=movieTitle,
        this.Studio=movieStudio,
        this.Rating=movieRating
    }
    get PGdata(){
        return this.movieRating;
    }
}

const movie1=new Movie("Yaezham arivu","AVM","U/A");
console.log(movie1);
const movie2=new Movie("Aashique 2","EROS",);
const movie3=new Movie("Avengers","Marvel",);
const movie4=new Movie("Ayyappanum Koshiyum","SS",);
const moviecollection=[movie2,movie3,movie4];
console.log(moviecollection);
const movies=[new Movie(" "," ")];
console.log(movies);

const movie5=new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie5);
console.log(movie5.Title);
console.log(movie5.Studio);
console.log(movie5.Rating);