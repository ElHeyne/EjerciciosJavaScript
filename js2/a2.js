var linea = "* "

var contenido = document.getElementById("contenido");
var texto = document.createElement("p")

for (var x = 0; x < 5; x++) {
    texto.innerHTML += linea + "<br/>";
    linea = linea + "* ";
}

contenido.appendChild(texto);