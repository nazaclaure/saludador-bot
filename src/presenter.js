import saludar from "./saludador";

const idiomaSelect = document.querySelector("#idioma");
const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  const edad = Number(edadInput.value);

  div.innerHTML = "<p>" + saludar(nombreInput.value, horaActual, generoSelect.value, edad, idiomaSelect.value) + "</p>";
});