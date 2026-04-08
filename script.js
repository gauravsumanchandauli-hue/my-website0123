let images = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let i = 0;

function show() {
    document.getElementById("slide").src = images[i];
}

function next() {
    i++;
    if(i >= images.length) i = 0;
    show();
}

function prev() {
    i--;
    if(i < 0) i = images.length - 1;
    show();
}

setInterval(next, 3000);