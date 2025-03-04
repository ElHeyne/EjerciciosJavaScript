function changeColor(classToChange) {
    var elemento = document.getElementById("textoObjetivo");

    console.log(elemento.className)

    if (elemento.className == '') {
        elemento.className = classToChange;
    } else {
        elemento.className = '';
    }
}