
//********* */ Q1 =>  add all numbers in array and skip all other data types *********

// const arr = [12, 2, 3, 5, 7, true, 9, false, "Rishabh", "45", 9, null, undefined, 3];

// var sum = 0;
// arr.forEach((item) => {
//     if (typeof item === "number")
//         sum += item;
// });

// console.log(sum);





// Q2=>  Write a forEach() loop that prints each element of an array to the console.


// const arr = [1, 2, 4, 5, 6, 7, 9, 10];
// arr.forEach((item) => {
//     console.log(item);
// });



// Q3=> Given an array of numbers, use a forEach() loop to find the sum of all the elements in the array.

// const arr = [12, 23, 34, 566, 778, 89, 90, 0];
// let sum = 0;
// arr.forEach((item) => {
//     sum += item;
// });
// console.log(sum);





// Q4=> Write a forEach() loop to double each element of an array and store the doubled values in a new array.

// const arr = [12, 23, 34, 45, 56];
// const newArr = [];

// arr.forEach((item) => {
//     newArr.push(item * 2);
// });
// console.log(newArr);




// Q5=> Given an array of names, use a forEach() loop to create a new array that contains the lengths of each name.

// const names = ["Rishabh", "Abhishake", "Rajat", "Ritik", "bilal"];
// const nameLength = [];
// names.forEach((item) => {
//     nameLength.push(item.length);
// });
// names.forEach((item, index) => {
//     console.log(`length of ${item} is ${nameLength[index]}`);
// })




//Q6=> Write a forEach() loop that counts and prints the number of vowels in each element of an array of strings.

// const arr = ["Rishabh", "Ritik", "Rajat", "Abhishake", "Shakher", "Lavi", "Shivam"];

// arr.forEach((item, index) => {
//     let vowels = item.match(/[aeiou]/gi);
//     let numOfVowels = vowels ? vowels.length : 0;
//     console.log(`Number of Vowels in ${item} is ${numOfVowels}`);
// });
// let str = "Rishabh";
// let vow = str.match(/[aeiou]/gi);
// console.log(vow);



// Q7=> Write a forEach() loop to find the largest element in an array of numbers.

// const arr = [12, 23, 34, 45, 56, 6, 98, 54, 3, 76];
// let largestNumber = arr[0];
// arr.forEach((item) => {
//     largestNumber = item > largestNumber ? item : largestNumber;
// });
// console.log(`largest element of Array is: ${largestNumber}`);





// Q8=> Given an array of objects representing students, each with a name and grade property, use a forEach() loop to print the name of each student who has a grade above 90.

// const students = [
//     {
//         name: "Rishabh Tripathi",
//         grade: 97
//     },
//     {
//         name: "Ritik gupta",
//         grade: 75
//     },
//     {
//         name: "Rajat Rathore",
//         grade: 81
//     },
//     {
//         name: "Yashika Bachani",
//         grade: 93
//     },
//     {
//         name: "Sweeti Verma",
//         grade: 83
//     },
//     {
//         name: "Shivam Pandey",
//         grade: 95
//     },

//     {
//         name: "Abhishake Shukla",
//         grade: 98
//     }
// ]

// students.forEach((item) => {
//     if (item.grade > 90)
//         console.log(`${item.name}: ${item.grade}`);
// })





// Q9=> Given an array of strings, use a forEach() loop to capitalize the first letter of each string and store the modified strings in a new array.

// const arr = ["bikku", "mukund", "shekhar", "lavi", "ritik", "rajat", "shivam"];
// const newArr = [];
// arr.forEach((item) => {
//     newArr.push(item.charAt(0).toUpperCase() + item.slice(1));
// });

// console.log(`Old Array: ${arr}`);
// console.log(`New Array: ${newArr}`);







// Q10=> Implement a forEach() function that mimics the behavior of the built-in forEach() method. It should accept an array and a callback function, and invoke the callback function with each element of the array.
