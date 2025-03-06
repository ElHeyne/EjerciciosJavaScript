var imagen = document.getElementById("img");

function zoom() {
    if (imagen.style.width == "640px") {
        imagen.style.width = "320px";
    } else {
        imagen.style.width = "640px";
    }
}

function ocultar() {
    imagen.style.display = "none";
}

function mostrar() {
    imagen.style.display = "";
}