const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: String,
    rating: Number,
    year: Number,
    isWatched: Boolean
}, {versionKey: false, timestamps: true})

// movies
const Movie = mongoose.model('Movie', movieSchema); //Model is a class.



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/moviesDB');
    console.log('Connection Open!');

    // const movie = await Movie.create({ name: 'Raganork', year: 2017, rating: 8.7, isWatched: false });

    // console.log('Movie Saved');
    // console.log(movie);

    const movie = await Movie.findById('65f5c7e1277471aa18b9872c');
    console.log(movie);
}

main();
