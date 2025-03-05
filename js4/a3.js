var contenido = document.getElementById("contenido");
var texto = document.createElement("p");

edad = prompt("Introduzca su edad: ")

if (!isNaN(edad)) {
    if (edad > 15){
        texto.innerHTML = "Mas información sobre la universidad en "+"<a href='https://www.uib.cat/'>web UIB</a>"
    } else {
        alert("Debido a su edad, no se le requiere ser notificado esta información")
    }
}

contenido.appendChild(texto)