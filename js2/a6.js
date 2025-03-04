const contenido = document.getElementById("contenido");
var texto = document.createElement("p");

function validar_salario() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var salario = parseFloat(document.getElementById("salario").value);

    var ajuste_salario = salario;
    var porcentaje_ajuste = 0;

    if (salario > 2000) {
        console.log("1")
    } else if (salario >= 1000 && salario <= 2000) {
        if (edad > 45) {
            porcentaje_ajuste = 3;
            ajuste_salario = salario + (salario*(porcentaje_ajuste/100))
            console.log("2a")
        } else {
            porcentaje_ajuste = 10;
            ajuste_salario = salario + (salario*(porcentaje_ajuste/100))
            console.log("2b")
        }
    } else if (salario < 1000) {
        if (edad < 30) {
            porcentaje_ajuste = "Solido";
            ajuste_salario = 1100
            console.log("3a")
        } else if (edad > 45) {
            porcentaje_ajuste = 15;
            ajuste_salario = salario + (salario*(porcentaje_ajuste/100))
            console.log("3b")
        } else {
            porcentaje_ajuste = 3;
            ajuste_salario = salario + (salario*(porcentaje_ajuste/100))
            console.log("3c")
        }
    }
        
    texto.innerHTML = "Nombre: " + nombre + "<br>Edad: " + edad + "<br>Salario: " + salario + "<br>Ajuste Salarial: " + ajuste_salario + " (" + porcentaje_ajuste + "%)";
    contenido.appendChild(texto);
}