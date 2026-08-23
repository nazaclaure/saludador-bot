import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();

  div.innerHTML = "<p>" + saludar(nombreInput.value, horaActual) + "</p>";
});