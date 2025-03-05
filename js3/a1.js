var frase = "";
var contador = 0;
const vocales = ["a","e","i","o","u"]

var contenido = document.getElementById("contenido");
var texto = document.createElement("p")

frase = prompt('Escribe una frase: ');

for (x in frase.split("")) {
    for (y in vocales) {
        if (frase[x].toLocaleLowerCase()==vocales[y].toLocaleLowerCase()) {
            contador += 1
        }
    }
}

texto.innerText = "La frase '" + frase + "' tiene " + contador + " vocales.";
contenido.appendChild(texto);