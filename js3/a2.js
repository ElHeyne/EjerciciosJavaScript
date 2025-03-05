var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

var string_numeral = prompt("Escribe una lista de números, separada por espacios (41 23 62)");
var array_numeral = [];

function compareNumbers(a, b) {
    return a - b;
}

for (i in string_numeral.split(" ")){
    if (!isNaN(parseInt(string_numeral.split(" ")[i]))) {
        array_numeral.push(parseInt(string_numeral.split(" ")[i]));
    } else {
        console.log("Los tuyo es de estudio")
    }
}

array_numeral.join();
array_numeral.sort();
array_numeral.sort(compareNumbers);

texto.innerHTML = array_numeral;

contenido.appendChild(texto);