
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


const heartImage = new Image();
heartImage.src = 'heart.png';

animation();

function animation() {
    ctx.drawImage(heartImage, 70, 70, 250, 200);
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.textBaseline = "middle";
    ctx.fillText('Hello HTML Canvas', 200, 300);

    requestAnimationFrame(animation);
}




