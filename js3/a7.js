var contenido = document.getElementById("contenido");
var texto = document.createElement("p")

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var mes_id = prompt("Indica el numeral del mes: ");

if (mes_id > 0 && mes_id < 13){
    texto.innerHTML=meses[(mes_id-1)];
}

contenido.appendChild(texto);
