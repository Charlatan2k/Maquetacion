class Movie {
  constructor(title, releaseYear, nationality, genre, photo) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.nationality = nationality;
    this.genre = genre;
    this.actors = [];
    this.nacionality = nationality;
    this.director = "";
    this.writer = "";
    this.language = "";
    this.plataforma = "";
    this.isMCU = false;
    this.mainCharacterName = "";
    this.producer = "";
    this.distributor = "";
    this.photo = photo;
  }

  showAtributes() {
    console.log(
      "Todos los datos de la Pelicula: " +
        " Titulo: " +
        this.title +
        " Release: " +
        this.releaseYear +
        " Nacionalidad: " +
        this.nationality +
        " Género: " +
        this.genre +
        " Actores " +
        this.actors +
        " Director: " +
        this.director +
        " Guionista: " +
        this.writer +
        " Idioma: " +
        this.language +
        " Plataforma: " +
        this.plataforma +
        " MCU: " +
        this.isMCU +
        " Caracter: " +
        this.mainCharacterName +
        " Productor: " +
        this.producer +
        " Distribuidor: " +
        this.distributor
    );
  }
}
