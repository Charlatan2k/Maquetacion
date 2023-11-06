class Professional {
  constructor(
    name,
    age,
    weight,
    height,
    isRetired,
    nationality,
    oscarsNumber,
    profession,
    photo
  ) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.photo = photo;
  }

  showAttributes() {
    console.log(
      "Nombre: " +
        this.name +
        " Edad: " +
        this.age +
        " Peso: " +
        this.weight +
        " Altura: " +
        this.height +
        " ¿Retirado? " +
        this.isRetired +
        " Nacionalidad: " +
        this.nationality +
        " Nº Oscars: " +
        this.oscarsNumber +
        " Profesion " +
        this.profession
    );
  }
}
