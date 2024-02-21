// Id selector


// 1. First Step : Selecting element
const h1 = document.getElementById('heading');

console.log(h1);

// 2. Manipulate it

h1.style.color = 'red';

const favMovies = document.getElementsByClassName('fav-movie');

console.log(favMovies);

for (let movie of favMovies) {
    movie.style.backgroundColor = 'aqua';
    movie.style.border = '2px solid gray';
    console.log(movie.innerText);
}