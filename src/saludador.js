function saludar(nombre, hora, genero, edad) {
  let saludo = "Hola";
  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }
  let prefijo = "";
   if (edad > 30) 
   {
    if (genero === "M" ){
      prefijo = "Sr. ";
    }
    else if (genero === "F"){
      prefijo = "Sra. ";
    }
   }
  return saludo + " " + prefijo + nombre;
}

export default saludar;
