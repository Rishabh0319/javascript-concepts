
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





