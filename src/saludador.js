function saludar(nombre, hora, genero, edad, idioma = "es") {
  let saludo = "Hola";
   let prefijo = "";
   if (idioma === "es") {
    if (hora >= 6 && hora < 12) {
      saludo = "Buenos días";
    } else if(hora >= 12 && hora < 19){
      saludo = "Buenas tardes";
    } else{
      saludo= "Buenas noches";
    }
    if (edad > 30) {
      if (genero === "M") {
        prefijo = "Sr. ";
      } else if (genero === "F") {
        prefijo = "Sra. ";
      }
    }

   }

  return saludo + " " + prefijo + nombre;
}

export default saludar;