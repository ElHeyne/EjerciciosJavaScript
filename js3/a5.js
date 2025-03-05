var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

var numero_n = prompt("Escribe N: ");
var suma = 0;

for (var numero = 0; numero <= numero_n; numero++){
    suma += numero;
}

texto.innerHTML = "N: " + numero_n + "<br>Suma: " + suma;
2
contenido.appendChild(texto);
