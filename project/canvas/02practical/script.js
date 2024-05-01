const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// adjust size of canvas when browser window is resized
window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

const mouse = {
    x: null,
    y: null
}

// event to get the cordinates of canvas
canvas.addEventListener("click", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});

// vent to draw the colorful circle line
// canvas.addEventListener("mousemove", (event) => {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     drawCircle();
// });

// this function return random color
function RandomColorTank() {
    const colorTank = ["red", "green", "blue", "purple", "pink", "lime", "orange", "black", "yellow"];
    let min = 0;
    let max = colorTank.length;
    return colorTank[Math.floor(Math.random() * (max - min + 1)) + min];
}

// draw the circle
function drawCircle() {
    ctx.fillStyle = RandomColorTank();
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}

