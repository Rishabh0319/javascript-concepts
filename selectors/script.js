
 /*
    selectors are basicly two types in js
    1-> Single element Selector
    2-> multi element selector
 */


// select element by id

// let element = document.getElementById("myfirst");
// console.log(element);



// className property
// element = element.className;
// console.log(element);



// ChildNodes Property
// element = element.childNodes;
// console.log(element);



// parent node property
// element = element.parentNode;
// console.log(element);


// element = element.innerText;
// console.log(element);




// let element = document.getElementsByClassName("box");
// let box3 = element[2];
// let getData = box3.innerText;
// let getElement = box3.innerHTML;

// box3.innerHTML = "<b>hello</b>"

// // console.log(getData);
// console.log(getElement);



let tags = document.getElementsByTagName("p");
console.log(tags);

let friends = ["R","R","S","T","U","M","M","M","K"];

for(let i=0 ; i < tags.length ; i++)
{
   tags[i].innerText = friends[i];
}























