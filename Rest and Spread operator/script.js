
// let arr1 = [12,23,34,45,56,67];

// arr1.splice(2,3);

// console.log(arr1);

// let arr2 = [87,67,56,45,432,31];

// let arr3 = [...arr1,...arr2];
// console.log(arr3);



/* *************** REST **************** */

// function myBio(firstName,lastName,...otherInfo)
// {
//    console.log(firstName,lastName,otherInfo);
//    let oI = otherInfo;
// }

// myBio('Rishabh','Tripathi',23,'maile','webDevelopment','HGU');



/* **************** SPREAD ***************** */


// function myBio2(firstName,lastName,age)
// {
//    console.log(`${firstName} ${lastName} ${age}`);
// }


// myBio2(...['Rishabh','Tripathi',23]);







/*  REST operator working with Array Destructuring */


// let [fName,lName,...other] = ['Rishabh','Tripathi',23,'MCA','Web Developer'];
// console.log(other);


/*  REST operator working with Object Destructuring */



// let {fname,lname,...other} = {
//                                fname:'Rishabh',
//                                lname:'Tripathi',
//                                age: 23,
//                                college:'HGU',
//                                degree:'MCA'
//                              };

// console.log(other);





let a = [122, 23, 3, 45, 765, 78, 79, 809, 87, 756, 45, 32, 57];
let b = a;    // this is referance of the [a] array into be
let c = [...a];   // this is spread operator it is used to spread the all values of [a] into [c]

console.log(b);
console.log(c);


// QUSETION =>>   ksay pata kray ki kon sa operator spread hai or kon sa rest

// SPREAD: use hota hai copy ya fir us location par kisi or ki values ko bikhrnay k liay
// REST: use hota hai ja app ko bachey huay values ak variable me dalney ho

// EXAMPLE

function fun(n1, n2, ...nr) {
    console.log(n1, n2, nr);
}

fun(12, 232, 43, 65, 8, 7, 88, 568, 9);