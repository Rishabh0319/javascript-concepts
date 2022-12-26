


// let obj = {
//     Rishabh: 35,
//     Rishika: 45,
//     bikku: 38,
//     shakher: 39,
//     lavi: 42,
//     ankita: 43
// }

// console.log(obj.Rishabh);

// for(let name in obj)
// {
//     console.log(name);
// }


// // acess the property of object  
// for(let x in obj)
// {
//     console.log("marks of " + x + " are " + obj[x]);
// }







/* *************** (for in) and (for of) loop **************** */



// let peoples = ["Rishabh","Rajat","Ritik","Shivam"];

// // Traditional for loop
// for(let i=0 ; i < peoples.length ; i++)
// {
//    console.log(peoples[i]);
// }



// let a=20,b='20';   // number string
// console.log(a!==b);



// let i=1;
// do{
//    console.log(i);
//    i++;
// }while(i<=10);


let pera = "hello this is Rishabh";
// console.log(pera);

// pera = pera.concat(" from ETECH");
// console.log(pera);

// let peraLength = pera.length;
// console.log(peraLength);

// let peraLower = pera.toLowerCase();
// console.log(peraLower);

// let peraUpper = pera.toUpperCase();
// console.log(peraUpper);






// let str = "hello Everyone how are you";
// console.log(str.indexOf('Everyone'));     // 6



let n,i=1,sum=0;
n = prompt("Enter a number: ");

while(i <= n)
{
   sum += i;
   i++
}

console.log("sum of " + n + " is: " + sum);

