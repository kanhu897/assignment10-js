// Select elements
const movieInput = document.getElementById('movieInput');
const addMovieBtn = document.getElementById('addMovieBtn');
const movieList = document.getElementById('movieList');
const movieCount = document.getElementById('movieCount');
const clearListBtn = document.getElementById('clearListBtn');

// Array to store movies
let movies = [];

// Function to update movie list display
function updateMovieList() {
  movieList.innerHTML = '';

  movies.forEach((movie, index) => {
    const li = document.createElement('li');
    li.textContent = movie;

    // Remove movie when clicked
    li.addEventListener('click', () => {
      movies.splice(index, 1);
      updateMovieList();
    });

    movieList.appendChild(li);
  });

  movieCount.textContent = `Total Movies: ${movies.length}`;
}

// Add movie on button click
addMovieBtn.addEventListener('click', () => {
  const movieName = movieInput.value.trim();

  if (movieName === '') {
    alert('Please enter a movie name!');
    return;
  }

  movies.push(movieName);
  movieInput.value = '';
  updateMovieList();
});

// Clear entire list
clearListBtn.addEventListener('click', () => {
  movies = [];
  updateMovieList();
});

// Allow "Enter" key to add movie
movieInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addMovieBtn.click();
  }
});
