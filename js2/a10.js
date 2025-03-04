var contenido = document.getElementById("contenido")
var texto = document.createElement("p")

function a10(){
    const numeroSecreto = Math.floor(Math.random() * 11);

    var adivinado = false;
    var intentos = 0;

    while (adivinado == false && intentos < 3) {
        numeroInsertado = prompt("Inserta tu intento: ")

        if (numeroInsertado == "x") {
            adivinado = true;   
            texto.innerHTML += "<br>"+numeroSecreto+" es el numero secreto"
        } else if (numeroInsertado == numeroSecreto) {
            adivinado = true;
            alert("Has adivinado el número secreto!");
            texto.innerHTML += "<br>"+numeroInsertado+" es el numero secreto ("+numeroSecreto+")";
        } else if (numeroInsertado < numeroSecreto) {
            alert("El numero "+numeroInsertado+" es menor.");
            texto.innerHTML += "<br>"+numeroInsertado+" es menor";
        } else if (numeroInsertado > numeroSecreto) {
            alert("El numero "+numeroInsertado+" es mayor.");
            texto.innerHTML += "<br>"+numeroInsertado+" es mayor";
        } else {
            alert("Me he cagado encima");
        }

        intentos += 1;
    }

    texto.innerHTML += "<br>"+numeroSecreto+" era la respuesta.";

    contenido.appendChild(texto);
}