// A1
var A1 = document.getElementById("A1");
var A1_Desc = document.getElementById("A1_Desc");

var a1_frase = "";
var a1_counter = 0;

a1_frase = prompt('Escribe una frase: ')

for (x in a1_frase.split(' ')) {
    a1_counter+=1;
}

A1_Desc.append("Contar Palabras");

A1.append("La frase '", a1_frase, "' tiene ",a1_counter, " palabras.");

alert("Aceptado!")

// A2
var A2 = document.getElementById("A2");
var A2_Desc = document.getElementById("A2_Desc");

var a2_counter = 0;
var a2_string = "";

A2_Desc.append("Pirámide");

for (a2_counter=0; a2_counter<5; a2_counter++){
    a2_string=a2_string.concat("*");
    A2.append(a2_string, document.createElement("br"))
}

alert("Aceptado!")

// A3
var A3 = document.getElementById("A3");
var A3_Desc = document.getElementById("A3_Desc");

var a3_input = "";
var a3_num1;
var a3_num2;
var a3_num3;

a3_input = prompt("Introduce 3 números '1 2 3': ");

a3_num1 = parseInt(a3_input.split(" ")[0])
a3_num2 = parseInt(a3_input.split(" ")[1])
a3_num3 = parseInt(a3_input.split(" ")[2])

A3_Desc.append("Elegir el numero mas pequeño (", a3_num1, " - ", a3_num2, " - ", a3_num3,")");

A3.append("El numero mas paqueño es: ", (Math.min(a3_num1, a3_num2, a3_num3)))

//A4
var A4 = document.getElementById("A4");
var A4_Desc = document.getElementById("A4_Desc");
A4_Desc.append("Descripción de Persona");


//A5
var A5 = document.getElementById("A5");
var A5_Desc = document.getElementById("A5_Desc");
A5_Desc.append("Contar las letras: " + a5_palabra);


//A6
var A6 = document.getElementById("A6");
var A6_Desc = document.getElementById("A6_Desc");
A6_Desc.append("Contar las letras: " + a5_palabra);