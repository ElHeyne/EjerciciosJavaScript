var frase = "";
var contador = 0;

var contenido = document.getElementById("contenido");
var texto = document.createElement("p")

frase = prompt('Escribe una frase: ');

for (x in frase.split(' ')) {
    contador+=1;
}

texto.innerText = "La frase '" + frase + "' tiene " + contador + " palabras.";
contenido.appendChild(texto);