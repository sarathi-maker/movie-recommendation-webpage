const movieData = {
  action: [
    { title: "Mad Max: Fury Road", year: 2015, rating: 8.1 },
    { title: "John Wick", year: 2014, rating: 7.4 },
    { title: "The Dark Knight", year: 2008, rating: 9.0 },
    { title: "Gladiator", year: 2000, rating: 8.5 },
    { title: "Die Hard", year: 1988, rating: 8.2 },
    { title: "The Avengers", year: 2012, rating: 8.0 },
    { title: "Black Panther", year: 2018, rating: 7.3 },
    { title: "Top Gun: Maverick", year: 2022, rating: 8.3 },
    { title: "Mission: Impossible – Fallout", year: 2018, rating: 7.7 },
    { title: "The Raid: Redemption", year: 2011, rating: 7.6 }
  ],

  comedy: [
    { title: "Superbad", year: 2007, rating: 7.6 },
    { title: "The Hangover", year: 2009, rating: 7.7 },
    { title: "Step Brothers", year: 2008, rating: 6.9 },
    { title: "Dumb and Dumber", year: 1994, rating: 7.3 },
    { title: "Anchorman", year: 2004, rating: 7.2 },
    { title: "Borat", year: 2006, rating: 7.4 },
    { title: "The Grand Budapest Hotel", year: 2014, rating: 8.1 },
    { title: "Mean Girls", year: 2004, rating: 7.1 },
    { title: "Crazy Rich Asians", year: 2018, rating: 6.9 },
    { title: "The Nice Guys", year: 2016, rating: 7.4 }
  ],

  drama: [
    { title: "Forrest Gump", year: 1994, rating: 8.8 },
    { title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
    { title: "The Green Mile", year: 1999, rating: 8.6 },
    { title: "Fight Club", year: 1999, rating: 8.8 },
    { title: "The Pursuit of Happyness", year: 2006, rating: 8.0 },
    { title: "A Beautiful Mind", year: 2001, rating: 8.2 },
    { title: "12 Years a Slave", year: 2013, rating: 8.1 },
    { title: "Parasite", year: 2019, rating: 8.6 },
    { title: "The Godfather", year: 1972, rating: 9.2 },
    { title: "Good Will Hunting", year: 1997, rating: 8.3 }
  ],

  "sci-fi": [
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "The Matrix", year: 1999, rating: 8.7 },
    { title: "Blade Runner 2049", year: 2017, rating: 8.0 },
    { title: "Star Wars: A New Hope", year: 1977, rating: 8.6 },
    { title: "Avatar", year: 2009, rating: 7.9 },
    { title: "The Martian", year: 2015, rating: 8.0 },
    { title: "Ex Machina", year: 2014, rating: 7.7 },
    { title: "Arrival", year: 2016, rating: 7.9 },
    { title: "Minority Report", year: 2002, rating: 7.6 }
  ],

  romance: [
    { title: "La La Land", year: 2016, rating: 8.0 },
    { title: "The Notebook", year: 2004, rating: 7.8 },
    { title: "Titanic", year: 1997, rating: 7.9 },
    { title: "Pride & Prejudice", year: 2005, rating: 7.8 },
    { title: "A Star Is Born", year: 2018, rating: 7.6 },
    { title: "Notting Hill", year: 1999, rating: 7.2 },
    { title: "500 Days of Summer", year: 2009, rating: 7.7 },
    { title: "The Fault in Our Stars", year: 2014, rating: 7.7 },
    { title: "Call Me by Your Name", year: 2017, rating: 7.8 },
    { title: "Her", year: 2013, rating: 8.0 }
  ],

  thriller: [
    { title: "Se7en", year: 1995, rating: 8.6 },
    { title: "Gone Girl", year: 2014, rating: 8.1 },
    { title: "Zodiac", year: 2007, rating: 7.9 },
    { title: "The Silence of the Lambs", year: 1991, rating: 8.6 },
    { title: "Prisoners", year: 2013, rating: 8.1 },
    { title: "Nightcrawler", year: 2014, rating: 7.8 },
    { title: "The Prestige", year: 2006, rating: 8.5 },
    { title: "Shutter Island", year: 2010, rating: 8.2 },
    { title: "Oldboy", year: 2003, rating: 8.4 },
    { title: "Memento", year: 2000, rating: 8.4 }
  ],

  horror: [
    { title: "Get Out", year: 2017, rating: 7.8 },
    { title: "A Quiet Place", year: 2018, rating: 7.5 },
    { title: "The Conjuring", year: 2013, rating: 7.5 },
    { title: "It", year: 2017, rating: 7.3 },
    { title: "Hereditary", year: 2018, rating: 7.3 },
    { title: "The Exorcist", year: 1973, rating: 8.1 },
    { title: "The Babadook", year: 2014, rating: 6.8 },
    { title: "Us", year: 2019, rating: 6.8 },
    { title: "Psycho", year: 1960, rating: 8.5 },
    { title: "The Shining", year: 1980, rating: 8.4 }
  ],

  animation: [
    { title: "Toy Story", year: 1995, rating: 8.3 },
    { title: "Finding Nemo", year: 2003, rating: 8.2 },
    { title: "Inside Out", year: 2015, rating: 8.1 },
    { title: "Up", year: 2009, rating: 8.3 },
    { title: "The Lion King", year: 1994, rating: 8.5 },
    { title: "Coco", year: 2017, rating: 8.4 },
    { title: "Spirited Away", year: 2001, rating: 8.6 },
    { title: "Your Name", year: 2016, rating: 8.4 },
    { title: "Zootopia", year: 2016, rating: 8.0 },
    { title: "The Incredibles", year: 2004, rating: 8.0 }
  ],

  adventure: [
    { title: "Jurassic Park", year: 1993, rating: 8.2 },
    { title: "Pirates of the Caribbean", year: 2003, rating: 8.0 },
    { title: "Indiana Jones and the Last Crusade", year: 1989, rating: 8.2 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 8.8 },
    { title: "The Revenant", year: 2015, rating: 8.0 },
    { title: "Life of Pi", year: 2012, rating: 7.9 },
    { title: "Jumanji: Welcome to the Jungle", year: 2017, rating: 6.9 },
    { title: "Cast Away", year: 2000, rating: 7.8 },
    { title: "King Kong", year: 2005, rating: 7.2 },
    { title: "The Mummy", year: 1999, rating: 7.1 }
  ],

  mystery: [
    { title: "Knives Out", year: 2019, rating: 7.9 },
    { title: "The Sixth Sense", year: 1999, rating: 8.2 },
    { title: "Gone Baby Gone", year: 2007, rating: 7.7 },
    { title: "The Girl with the Dragon Tattoo", year: 2011, rating: 7.8 },
    { title: "The Others", year: 2001, rating: 7.6 },
    { title: "The Usual Suspects", year: 1995, rating: 8.5 },
    { title: "Murder on the Orient Express", year: 2017, rating: 6.5 },
    { title: "Chinatown", year: 1974, rating: 8.1 },
    { title: "Insomnia", year: 2002, rating: 7.2 },
    { title: "The Game", year: 1997, rating: 7.8 }
  ]
};

document.getElementById("recommendBtn").addEventListener("click", () => {
  const genre = document.getElementById("genreSelect").value;
  const movieListDiv = document.getElementById("movieList");

  movieListDiv.innerHTML = ""; // Clear old list

  if (!genre) {
    movieListDiv.innerHTML = "<p>Please select a genre!</p>";
    return;
  }

  const movies = movieData[genre];
  if (!movies || movies.length === 0) {
    movieListDiv.innerHTML = "<p>No movies found for this genre.</p>";
    return;
  }

  movies.forEach(movie => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Year: ${movie.year}</p>
      <p>Rating: ⭐ ${movie.rating}</p>
    `;
    movieListDiv.appendChild(movieDiv);
  });
});
