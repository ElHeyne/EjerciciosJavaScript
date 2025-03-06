var body = document.getElementById("body");
body.style.transition = "all 0.3s"

function change_background(dot_id) {
    var dot = document.getElementById(dot_id);
    var dotBgColor = window.getComputedStyle(dot).backgroundColor;
    
    body.style.backgroundColor = dotBgColor;
}

function end_change_background() {
    body.style.backgroundColor = "";
}