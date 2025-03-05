var contenido = document.getElementById("contenido");
var codigo = document.getElementById("codigo");
var texto = document.createElement("p");

var total_enlaces = 0;
var ultimo_enlace = "";
var total_enlaces_google = 0;

var enlaces = codigo.getElementsByTagName("a");
for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].innerHTML.startsWith("Google")){
        total_enlaces_google += 1;
    }
    total_enlaces += 1;
}

ultimo_enlace = enlaces[enlaces.length - 1].href

texto.innerHTML = "Total Enlaces: " + total_enlaces + "<br>Total Enlaces Google: " + total_enlaces_google + "<br>Último Enlace: " + ultimo_enlace;

contenido.append(texto);