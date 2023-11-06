jQuery(() => {
  //Funcion para crear tarjetas bootstrap con atributos de las peliculas
  function createMovieCard(movie) {
    return `
      <div class="card" style="width: 18rem">
        <img src="${movie.photo}" class="card-img-top" alt="${movie.title}" />
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            Año de Lanzamiento: ${movie.releaseYear}<br>
            Nacionalidad: ${movie.nationality}<br>
            Género: ${movie.genre}
          </p>
          
        </div>
      </div>
    `;
  }

  function appendMovieCards() {
    const movieContainer = $("#movie-container");
    movies.forEach((movie) => {
      const cardHTML = createMovieCard(movie);
      movieContainer.append(cardHTML);
    });
  }

  appendMovieCards();

  //Formulario para insertar nuevas peliculas
  $("#movieForm").submit(function (event) {
    event.preventDefault();
    const title = $("#title").val();
    const releaseYear = parseInt($("#releaseYear").val());
    const nationality = $("#nationality").val();
    const genre = $("#genre").val();
    const photo = $("#photo").val();

    const newMovie = new Movie(title, releaseYear, nationality, genre);
    newMovie.photo = photo;
    movies.push(newMovie);
    console.log(movies);

    const cardHTML = createMovieCard(newMovie);
    const movieContainer = $("#movie-container");
    movieContainer.append(cardHTML);
  });
});

function createProfessionalCard(professional) {
  return `
    <div class="col-md-4">
      <div class="card" style="width: 18rem;">
        <img src="${professional.photo}" class="card-img-top" alt="${
    professional.name
  }">
        <div class="card-body">
          <h5 class="card-title">${professional.name}</h5>
          <p class="card-text">
            Edad: ${professional.age}<br>
            Peso: ${professional.weight} kg<br>
            Altura: ${professional.height} cm<br>
            Retirado: ${professional.isRetired ? "Yes" : "No"}<br>
            Nacionalidad: ${professional.nationality}<br>
            Oscars: ${professional.oscarsNumber}<br>
            Profesion: ${professional.profession}
          </p>
        </div>
      </div>
    </div>
  `;
}

//Funcion para crear tarjetas para cada profesional con sus atributos
jQuery(() => {
  function appendProfessionalCards() {
    const professionalContainer = $("#professional-container");
    professionals.forEach((professional) => {
      const cardHTML = createProfessionalCard(professional);
      professionalContainer.append(cardHTML);
    });
  }

  appendProfessionalCards();
});
