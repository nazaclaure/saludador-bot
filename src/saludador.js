function saludar(nombre, hora, genero, edad, idioma = "es") {
  let saludo = "Hola";
  let prefijo = "";
  if (idioma === "es") {
    if (hora >= 6 && hora < 12) {
      saludo = "Buenos días";
    } else if (hora >= 12 && hora < 19) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }
    if (edad > 30) {
      if (genero === "M") {
        prefijo = "Sr. ";
      } else if (genero === "F") {
        prefijo = "Sra. ";
      }
    }
  } else if (idioma === "en") {
    if (hora >= 6 && hora < 12) {
      saludo = "Good morning";
    } else if (hora >= 12 && hora < 19) {
      saludo = "Good afternoon";
    } else {
      saludo = "Good evening";
    }
    if (edad > 30) {
      if (genero === "M") {
        prefijo = "Mr. ";
      } else if (genero === "F") {
        prefijo = "Mrs. ";
      }
    }
  }

  return saludo + " " + prefijo + nombre;
}

export default saludar;