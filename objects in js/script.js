/* ****** There are two ways to create objects in Javascript ****** */

// 1: object constructor

//    let student = new Object();
//    console.log(student);

// 2: object Litteral

    // let student = {};
    // console.log(student);




    /* ******** object litterals and properties ******* */

// let student = {
//     name: "Rishabh",
//     age: 23
// }
// console.log(student);




/******* Add properties in object ********* */

// let student = {
//     name: "Rishabh",
//     age: 23
// }
// student.phone = 9140300000;   // add new property in student object
// console.log(student);



/* ******* Remove properties from object ******** */

// let student = {
//     name: "Rishabh",
//     age: 23,
//     phone: 3243242423,
// }
// delete student.age;    // delete age property from student object
// console.log(student);





/* ******* We can also use multiword property names, but then they must be quoted: ******** */

// let student = {
//     name: "Rishabh",
//     age: 23,
//     phone: 1234567890,
//     "subh naam": "Mukund"
// }
// console.log(student);




/* ******* Square brackets ******** */

// NOTE: For multiword properties, the dot access doesn’t work
// example:  ( student.subh naam; )    // ERROR


// let student = {
//     name: "Rishabh",
//     age: 23,
//     phone: 1234567890,
//     "subh naam": "Mukund"    
// }
// console.log(student["subh naam"]);  // There’s an alternative “square bracket notation” that works with any string:

//         /* EXPRIMENT */
// // here we can access object property using variable as a key
// let key = "subh naam";
// console.log(student[key]);



/* ******* Access object properties by it's name  ******** */

// let student = {
//     name: "Rishabh Tripathi",
//     age: 23,
//     phone: 1234567890,
//     email: "example@gmail.com"
// }
// let accessKey = prompt("Enter student property to access data: ");
// console.log(student[accessKey]);
//     ANOTHERWAY

// let Key = "email";
// console.log(student[Key]);    





/* *******  ******** */

/* *******  ******** */
