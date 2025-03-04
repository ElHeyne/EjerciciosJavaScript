var contenido = document.getElementById("contenido")
var texto = document.createElement("p")

function validar_numeros() {
    let num1 = document.getElementById("number_1").value
    let num2 = document.getElementById("number_2").value
    let num3 = document.getElementById("number_3").value

    numMax = Math.max(num1, num2, num3);
    texto.innerText = "El numero mas grande es: " + numMax;
    contenido.append(texto);
}