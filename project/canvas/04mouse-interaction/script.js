
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let x = 200;
let y = 200;

let minRad = 10;
let rangeRad = 20;
let p = 0;

animation();

function animation() {

    let rad = minRad + rangeRad * p;
    p = p + 0.02;

    if (p > 1) {
        p = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.stroke();

    requestAnimationFrame(animation);
}


canvas.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
});