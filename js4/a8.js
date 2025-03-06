var lista = document.getElementById("lista");

function añadir() {
    var nombre = prompt("Escribe un Nombre");
    var elemento_lista = document.createElement("li")
    elemento_lista.innerHTML = nombre + "<button class='btn-li btn-del' onclick='eliminar(event)')>Eliminar</button>"
    lista.appendChild(elemento_lista);
}

function eliminar(evt) {
    var boton = evt.target;
    var elemento_lista = boton.parentElement;
    lista.removeChild(elemento_lista);
}