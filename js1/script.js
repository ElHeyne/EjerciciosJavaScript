// A1
var A1 = document.getElementById("A1");
var A1_Desc = document.getElementById("A1_Desc");
A1_Desc.append("Mostrar Varios Números");

for (let x=1; x<=10; x=x+1) {
    console.log(x);
    if (x != 10) {
        A1.append(x, ", ");
    } else {
        A1.append(x);
    }
}

// A2
var A2 = document.getElementById("A2");
var A2_Desc = document.getElementById("A2_Desc");

let a2_num1;
let a2_num2;

do {
    a2_num1 = parseInt(prompt("A2-Comprobar: Escribe el primer número: "));
    a2_num2 = parseInt(prompt("A2-Comprobar: Escribe el segundo número: "));
} while(isNaN(a2_num1) || isNaN(a2_num2))

alert("Aceptado!")

A2_Desc.append("Comprobar ", a2_num1, " y ", a2_num2, document.createElement("br"));

if (a2_num1 > a2_num2) {
    console.log(a2_num1, ' es mayor que ', a2_num2);
    A2.append(a2_num1, ' es mayor que ', a2_num2);
} else if (a2_num2 > a2_num1) {
    console.log(a2_num2, ' es mayor que ', a2_num1);
    A2.append(a2_num2, ' es mayor que ', a2_num1);
} else {
    console.log(a2_num1, ' es igual que ', a2_num2);
    A2.append(a2_num1, ' es igual que ', a2_num2);
}

// A3
var A3 = document.getElementById("A3");
var A3_Desc = document.getElementById("A3_Desc");

let a3_num1;
let a3_num2;

do {
    a3_num1 = parseInt(prompt("A3-Sumar: Escribe el primer número: "));
    a3_num2 = parseInt(prompt("A3-Sumar: Escribe el segundo número: "));
} while(isNaN(a3_num1) || isNaN(a3_num2))

alert("Aceptado!")

A3_Desc.append("Sumar ", a3_num1, " y ", a3_num2, document.createElement("br"));

if (a3_num1 != NaN && a3_num2 != NaN) {
    let a3_suma = a3_num1+a3_num2;
    console.log(a3_suma);
    A3.append(a3_suma);
}

//A4
var A4 = document.getElementById("A4");
var A4_Desc = document.getElementById("A4_Desc");

let a4_nombre;
let a4_edad;
let a4_estatura;
let a4_estado_civil;

do {
    a4_nombre = (prompt("A4-Descripción: Escribe tu nombre: "));
    a4_edad = parseInt(prompt("A4-Descripción: Escribe tu edad: "));
    a4_estatura = parseInt(prompt("A4-Descripción: Escribe tu estatura en cm: "));
    a4_estado_civil = (prompt("A4-Descripción: Escribe tu estado civil: "));
} while(isNaN(a4_edad) 
    || isNaN(a4_estatura) 
    || a4_estado_civil.toLowerCase() != "casado" 
    && a4_estado_civil.toLowerCase() != "soltero")

alert("Aceptado!")

A4_Desc.append("Descripción de Persona");

if (a4_estado_civil.toLowerCase() == "casado") {
    console.log("Nombre: ", a4_nombre, ", ", "Edad: ", a4_edad, ",", "Estatura (cm): ", a4_estatura, ", ", "Estado Civil: ", a4_estado_civil);
    A4.append("Nombre: ", a4_nombre, ", ", "Edad: ", a4_edad, ", ", "Estatura (cm): ", a4_estatura, ", ", "Estado Civil: ", a4_estado_civil);
} else {
    console.log("Nombre: ", a4_nombre, "\n", "Edad: " , a4_edad, "\n", "Estatura (cm): " , a4_estatura, "\n", "Estado Civil: " , a4_estado_civil);
    A4.append("Nombre: ", a4_nombre, document.createElement("br"), "Edad: " , a4_edad, document.createElement("br"), "Estatura: " , a4_estatura, document.createElement("br"), "Estado Civil: " , a4_estado_civil);
}

//A5
var A5 = document.getElementById("A5");
var A5_Desc = document.getElementById("A5_Desc");

let a5_palabra;

a5_palabra = (prompt("A5-Recuento de Letras: Escribe una palabra: "));

A5_Desc.append("Contar las letras: " + a5_palabra);

console.log("La palabra ", a5_palabra, " tiene ", a5_palabra.length, " letras.")
A5.append("La palabra ", a5_palabra, " tiene ", a5_palabra.length, " letras.");

//A6

var A6 = document.getElementById("A6");
var A6_Desc = document.getElementById("A6_Desc");

let a6_meses_array = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

for (i=0; i<a6_meses_array.length; i++) {
    if (i != (a6_meses_array.length) - 1) {
        console.log(a6_meses_array[i], ", ")
        A6.append(a6_meses_array[i], ", ")
    } else {
        console.log(a6_meses_array[i])
        A6.append(a6_meses_array[i])
    }
}
