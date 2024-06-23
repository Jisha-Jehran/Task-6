//a)a constructor for the class Movie
class Movie{
    constructor(title,studio,rating='PG'){   //b)set the class property rating to "PG" as default when no rating is provided
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    };
    getpg(mov){
        var pgmovies=[];
        for(let i in mov ){
            if(mov[i].rating==='PG'){
                pgmovies.push(mov[i].title);
            }
        }
        return pgmovies;
    }
}
const firstMovie=new Movie('Naadodi','AVM','U/A');
const secondMovie=new Movie('Kodi','AVM');
const thirdMovie=new Movie('Kanchana','AVM','U');
const fourthMovie=new Movie('Kadhalar Dhinam','AVM');
const fifthMovie=new Movie('Kidaari','AVM','U/A');
const sixthMovie=new Movie('Kodiveeran','AVM');
const movies=new Movie();

console.log(firstMovie);
console.log(secondMovie);
console.log(thirdMovie);
console.log(fourthMovie);
console.log(fifthMovie);
console.log(sixthMovie);

//c)getPG method 

console.log(movies.getpg([secondMovie,thirdMovie,fourthMovie,fifthMovie,sixthMovie]));

//d)a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const premiumMovie=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(premiumMovie.title);
console.log(premiumMovie.studio);
console.log(premiumMovie.rating);
console.log(premiumMovie)
