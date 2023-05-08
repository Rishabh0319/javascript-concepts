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





/* ******* Property value shorthand ******** */

// NORMAL WAY
// function makeStudent(name, age)
// {
//    return {
//       name: name,
//       age: age
//    }
// }
// let stu = makeStudent("Rishabh", 23);
// console.log(stu);

// SHORT WAY
// function makeStudent(name, age) {
//     return {
//         name,
//         age
//     }
// }
// let stu = makeStudent("Rishabh", 23);
// console.log(stu);




/* ******* Property existence test, “in” operator ******** */

// // NORMAL WAY TO TEST
// let obj = {};
// console.log(obj.name === undefined);

// // USING 'in' OPERATOR
// // Syntax: "key" in Object
// let obj = {};
// console.log(name in obj);

// // ANOTHER EXAMPLE
// let user = {name: "Rishabh", age:23};
// console.log("name" in user,"and", "email" in user);






/* ******* The "for..in" loop ******** */

// let student = {
//     name: "Rishabh Tripathi",
//     age: 23,
//     phone: 1234567890,
//     email: "Example@gmail.com"
// }
// for(let key in student)
// {
//     console.log(key);
//     console.log(student[key]);
// }



// ASSIGNMENTS

/* ******* 
   Write the code, one line for each action:

  1=> Create an empty object user.
  2=> Add the property name with the value John.
  3=> Add the property surname with the value Smith.
  4=> Change the value of the name to Pete.
  5=> Remove the property name from the object.

******** */

//  let user = {};

//  user.name = "John";
//  user.surname = "Smith";
//  user.name = "Peter";
//  delete user.name; 
//  console.log(user);



/* ******* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. ******** */

// let obj1 = {
//     name: "Rishabh",
//     age: 23
// };
// let obj2 = {};

// function isEmpty(objRec)
// {
//    for(let key in objRec)
//        return false;

//    return true;
// }

// console.log(isEmpty(obj1));
// console.log(isEmpty(obj2));


/* ******* 
   Sum object properties
=> We have an object storing salaries of our team:
=>let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
******** */

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let Sum = 0;
// for(let key in salaries)
// {
//   Sum += salaries[key];
// }
// console.log(Sum);





/* ******* 
  Multiply numeric property values by 2
  Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

  let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
******** */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === typeof(1)) {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);





/* *******  ******** */
