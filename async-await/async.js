

// function randomColors() {
//     const hex = "123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const { log } = require("async");

// let intervalId;

// function startChangingColor() {
//     if (!intervalId) {
//         intervalId = setInterval(changeBgColor, 1000)
//     }

//     function changeBgColor() {
//         document.body.style.backgroundColor = randomColors()
//     }
// }

// function stopChangingColor() {
//     clearInterval(intervalId);
//     intervalId = null;
// }


// document.querySelector("#start").addEventListener("click", startChangingColor);

// document.querySelector("#stop").addEventListener("click", stopChangingColor);





function sayHello() {
    let msg = 'Hello My name is Rishabh Tripathi';
    const h1 = document.querySelector('h1');
    h1.innerText = msg;
}

const stopSayHello = setTimeout(sayHello, 3000);

document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(stopSayHello);
    console.log('STOPPED');
});