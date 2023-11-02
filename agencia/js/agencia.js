const personas = [];

function submit() {
  const form = document.getElementById("myForm");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nombreValue = document.getElementById("nombre-form").value;
    const origenValue = document.getElementById("origen-form").value;
    const destinoValue = document.getElementById("destino-form").value;
    const numPersonasValue = document.getElementById("num_p-form").value;
    const fechaValue = document.getElementById("fecha-form").value;

    const formData = {
      nombre: nombreValue,
      origen: origenValue,
      destino: destinoValue,
      numPersonas: numPersonasValue,
      fecha: fechaValue,
    };

    personas.push(formData);

    console.log(formData);
  });
}

document.getElementById("submitButton").addEventListener("click", submit());

let personas_filtradas = [];

function filtrar() {
  const form = document.getElementById("myForm");
  const filtrarButton = document.getElementById("filtrarButton");
  const destinos_permitidos = ["Galicia", "Mallorca", "Canarias"];
  const filtrado = personas.filter((persona) =>
    destinos_permitidos.includes(persona.destino)
  );

  console.log(filtrado);

  let cont_fl = document.getElementsByClassName("resultado-filtrado")[0];

  cont_fl.innerHTML = "";

  filtrado.forEach((persona) => {
    const titulo = document.createElement("h1");
    const div = document.createElement("div");
    div.id = "div-test";

    const nombre = document.createElement("p");
    nombre.textContent = "Nombre: " + persona.nombre;

    const origen = document.createElement("p");
    origen.textContent = "Origen: " + persona.origen;

    const destino = document.createElement("p");
    destino.textContent = "Destino: " + persona.destino;

    const num_per = document.createElement("p");
    num_per.textContent = "Número de Personas: " + persona.numPersonas;

    const fecha = document.createElement("p");
    fecha.textContent = "Fecha: " + persona.fecha;

    titulo.textContent = "Información de contacto";

    cont_fl.appendChild(titulo);
    div.appendChild(nombre);
    div.appendChild(origen);
    div.appendChild(destino);
    div.appendChild(num_per);
    div.appendChild(fecha);

    cont_fl.appendChild(div);
  });
}

document.getElementById("filtrarButton").addEventListener("click", filtrar);
