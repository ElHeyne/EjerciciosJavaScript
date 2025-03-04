var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

var cadena = prompt("Escribe Una Frase");

texto.innerHTML="Minusculas - " + cadena.toLowerCase() + "<br>" + "Mayusculas - " + cadena.toUpperCase();

contenido.appendChild(texto);