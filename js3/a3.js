var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

var numero = prompt("Escribe un numero: ");
var numero_sumado = 0;

if (!isNaN(numero)) {
    for (i in numero.split("")) {
        numero_sumado += parseInt(numero[i])
    }
    texto.innerHTML = "Numero Original: " + numero + "<br>Numero Sumado: " + numero_sumado;
}

contenido.append(texto);