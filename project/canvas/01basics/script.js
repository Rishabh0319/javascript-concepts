"use strict"

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// this for filled circle

// ctx.fillStyle = "green";    // for fill the color
// ctx.beginPath();            // for start draw line
// ctx.arc(100, 100, 50, 0, Math.PI * 2);   // for draw curve and circle shape
// ctx.fill();                 // it will fill the path with color

// this for holo circle
ctx.fillStyle = "green";    // for fill the color
ctx.strokeStyle = "green";
ctx.lineWidth = 3;
ctx.beginPath();            // for start draw line
ctx.arc(100, 100, 50, 0, Math.PI * 2);   // for draw curve and circle shape
ctx.stroke();                  // draw border line

