var contenido = document.getElementById("contenido");
var boton_parent = document.getElementById("btn").parentElement;
var parrafos = contenido.getElementsByTagName("p");

parrafos[1].style.display="none";

function mostrar_mas(){
    parrafos[1].style.display="";
    boton_parent.style.display="none";
}