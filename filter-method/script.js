
// ***********************************************************
// Q1:  Write a function that takes an array of numbers and returns a new array containing only the even numbers using the filter() method.

// let arrNum = [1, 2, 3, 4, 56, 7, 8, 9, 55, 34, 686, 34, 1, 7, 68, 45, 234, 7, 86];

// let evenArr = arrNum.filter((item) => (item % 2 === 0));
// console.log(evenArr);





// **********************************************************
// Q2: Write a function that takes an array of strings and an integer maxLength. It should return a new array containing only the strings from the original array that have a length greater than or equal to maxLength.

// let strArr = ["Rishabh", "Rajat", "Ritik", "Abhishek", "Shekhar", "Lavi", "Rishika", "Ankita"];
// let maxLength = 5;

// function filterStr(maxLen, strArr) {
//     let result = strArr.filter((item) => item.length >= maxLen);
//     return result;
// }

// let filteredStr = filterStr(maxLength, strArr);
// console.log(filteredStr);






// *************************************************************
// Q3:Given an array of objects, each representing a person with properties like name and age, write a function that filters the people who are 18 years or older.


// let persons = [
//     {
//         name: "Rishabh",
//         age: 23
//     },
//     {
//         name: "Bikku",
//         age: 23
//     },
//     {
//         name: "Lavi",
//         age: 25
//     },
//     {
//         name: "Rishika",
//         age: 17
//     },
//     {
//         name: "Shanvi",
//         age: 17
//     },
//     {
//         name: "Kashish",
//         age: 21
//     },
//     {
//         name: "Ankita",
//         age: 29
//     },
//     {
//         name: "Shekher",
//         age: 23
//     },
//     {
//         name: "Shivam",
//         age: 23
//     },
// ];

// let personsAbovethen18 = persons.filter((person) => person.age >= 18);

// console.log(personsAbovethen18);




// ***********************************************************
// Q4:Create a function that takes an array of numbers and returns an array containing only the unique values. Use the filter() method to achieve this.

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let uniqueElement = arr.filter((num, index, arr) => {
//     return arr.indexOf(num) === index;
// });

// console.log(uniqueElement);





//**************************************************************
// Q5: Write a function that takes an array of items and a custom filtering function. The function should use the filter() method to return an array containing only the items that satisfy the condition defined in the custom function.


// let arr = [12, 23, 3445, 67, 78, 89, 90, -64];

// function customFunction(arr, isEven) {
//     return arr.filter((item) => isEven(item));
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// let evenNummbers = customFunction(arr, isEven);
// console.log(evenNummbers);






// **********************************************************
// Q6:Given an array of objects with a date property, write a function that filters the objects to include only those with a date falling within a specified range.

const events = [
    { name: 'Event 1', date: '2023-01-15' },
    { name: 'Event 2', date: '2023-02-20' },
    { name: 'Event 3', date: '2023-03-25' },
    { name: 'Event 4', date: '2023-04-30' },
];

function filterByDateRange(arr, startDate, endDate) {
    return arr.filter((item) => {
        const itemDate = new Date(item);
        return itemDate >= startDate && itemDate <= endDate;
    })
}

const startDate = new Date('2023-02-01');
const endDate = new Date('2023-04-01');

console.log(filterByDateRange(events, startDate, endDate));