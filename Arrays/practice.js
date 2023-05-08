

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Gallieo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernius', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];






// array.prototype.filter()
// Filter the list of inventors for those who born in the 1500's

// let fifteen = inventors.filter((inventor) => {
//     if(inventor.year >= 1500 && inventor.year < 1600)
//     {
//         return inventor; // keep it
//     }
// });

// console.table(fifteen);








// array.prototype.map()
// Give us an array of inventor first and last name







// forEach()
// this method iterates over the array's items

// let arr = [1,2,3,45,98,7,8,80,9,10];
// arr.forEach((item, index)=>{
//    console.log(item, index);
// });



// includes()
// includes() method is use to check whether an element is exist in the array or not
// includes() method always return boolean value 


// let arr = [1,2,3,45,98,7,8,80,9,10];
// let val = arr.includes(80);
// console.log(val);
// let brothers = ["Rishabh","Bikku","Shakher","Lavi"];
// let bro = brothers.includes('Shakher');
// console.log(bro);



// // filter()
// // this method creates new array with only elements passed condition inside the provided function

let arr = [34, 1, 2, 3, 4, 5, 6, 45, 78, 9, 98, 0];

let newArr = arr.filter((num) => {
    if (num >= 32 && num <= 99)
        return num
});

console.log(newArr);






