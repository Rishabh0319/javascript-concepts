

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let minx = 100;
let rangeX = 200;
let p = 0;

animation();

function animation() {
    const x = minx + rangeX * p;
    p = p + 0.02;

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(x, 200, 20, 0, Math.PI * 2);
    ctx.stroke();

    requestAnimationFrame(animation);
}


