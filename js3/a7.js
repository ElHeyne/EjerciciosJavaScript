var contenido = document.getElementById("contenido");
var texto = document.createElement("p")

function a7(){
    console.log("hola")
    const numeroSecreto = Math.floor(Math.random() * 101);;

    var adivinado = false;

    while (adivinado == false) {
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
    }

    contenido.appendChild(texto);
}