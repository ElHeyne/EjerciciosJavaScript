var box = document.getElementById("box");
var stop = true;

function loop(){
    if(stop){return}

    var currentLeft = parseint(box.style.left) || 0;
    if (currentLeft < 1000){
        box.left.style = (currentLeft + 5) + "px";
    } else {
        box.style.left = "";
    }

    setTimeout(loop, 50)
}

function control(){
    if (stop){return}
    loop();
}

function iniciar(){
    if (!stop){return}
    stop = false;
    control();
}

function parar(){
    stop = true;
    control();
}

function reiniciar(){
    stop = true;
    control();
    box.style.left = "";
}