var contenido = document.getElementById("contenido");
var texto = document.createElement("p");
var end = false;

function a5() {
    while (numero != 0) {
        var numero = 0;
        var factorial = 1;

        numero = prompt("Escribe un numero (0 para salir)")
        
        if (isNaN(numero) == true) {
            alert("Valor Incorrecto!")
        }
        else if (numero == 0) {
            console.log("end")
        } else {
            for (var i = numero; i>0; i--) {
                factorial = factorial * i;
            }
            console.log("N"+numero+"F"+factorial)
            texto.innerHTML += "Numero = " + numero + " - Facorial = " + factorial + "<br>";
        }
    }

    contenido.appendChild(texto);
}