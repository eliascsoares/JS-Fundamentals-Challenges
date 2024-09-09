let favoriteFilms = [
    "The Shawshank Redemption",
    "The Godfather",
    "Pulp Fiction",
    "The Dark Knight",
    "Forrest Gump"
];

favoriteFilms.push("Inception");
favoriteFilms.push("The Matrix");

for (let i = 0; i < favoriteFilms.length; i++) {
    console.log(favoriteFilms[i]);
}

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(randomNumber);
}

// Loop to count from 9 to 0
for (let i = 9; i >= 0; i--) {
    console.log(i);
}