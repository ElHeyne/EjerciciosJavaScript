var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

var cadena = prompt("Escribe Una Frase");
texto.innerHTML+=cadena+"<br>"
var cadenaFiltrada = "";

for (let i=0; i<cadena.length; i++) {
    var coincidencia = false;
    caracter = (cadena[i]);
    for (let x=0; x<cadenaFiltrada.length; x++){
        if(cadenaFiltrada[x] == caracter) {
            coincidencia = true;
        }
    }
    if (!coincidencia) {
        cadenaFiltrada += caracter
    }
}

texto.innerHTML+=cadenaFiltrada;

contenido.appendChild(texto);