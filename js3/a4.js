var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

var numero = prompt("Escribe un numero: ");
var numero_array = [];

if (!isNaN(numero)) {
    texto.innerHTML += "Original: " + numero + "<br>";


    for (i in numero.split("")) {
        numero_array.push(parseInt(numero[i]))
    }

    texto.innerHTML += "Inverso: ";
    for (var i = 1; i <= numero_array.length; i++){
        console.log(i)
        texto.innerHTML += numero_array[(numero_array.length)-(i)];
    }
    texto.innerHTML += "<br>"

    texto.innerHTML += "Ordenado:"
    numero_array.join()
    numero_array.sort()
    for (i in numero_array){
        texto.innerHTML += numero_array[i];
    }
}

contenido.append(texto);