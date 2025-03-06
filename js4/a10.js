var box = document.getElementById("box");
var stop = true;
var vel = 0.05;

function loop() {
    if (stop) return; // Si se debe detener, no hacer nada

    let currentLeft = parseFloat(box.style.left) || 0;
    if (currentLeft < 1000) { // Límite del contenedor
        box.style.left = (currentLeft + vel) + "px";
        vel = vel * 1.005;
        box.innerHTML=vel;
    } else {
        box.style.left = "";
    }

    setTimeout(loop, 16);
}

function control() {
    if (stop) return;
    loop();
}

function iniciar() {
    if (!stop) return; // Evita reiniciar si ya está en movimiento
    console.log("iniciar");
    stop = false;
    control();
}

function parar() {
    console.log("parar");
    stop = true;
}

function restaurar() {
    console.log("restaurar");
    stop = true;
    vel = 0.05;
    box.style.left = "";
}