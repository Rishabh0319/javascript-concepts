
// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while (new Date < ms) { }
// }


// function register(cb) {
//     //    waitForThreeSeconds(); 

//     setTimeout(() => {
//         console.log('register end');
//         cb();
//     }, 6000);
// }

// function sendEmail(cb) {
//     // waitForThreeSeconds();
//     setTimeout(() => {
//         console.log('Email end');
//         cb();
//     }, 5000);
// }

// function login(cb) {
//     // waitForThreeSeconds();
//     setTimeout(() => {
//         console.log('login end');
//         cb();
//     }, 4000);

// }

// function getUserData(cb) {
//     setTimeout((cb) => {
//         console.log('got user data');
//         cb();
//     }, 3000)

// }

// function displayUserData(cb) {
//     setTimeout(() => {
//         console.log('user data Displayed');
//         cb();
//     }, 2000);
// }


// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(displayUserData);
//         });
//     });
// });


// console.log('other application work');











//** ************ callback functions ************** */


// function creatQuote(quote,callback)                  // this is higher order functions
// {
//    var myQuote = `Like I always say, ${quote}`;
//    callback(myQuote);
// }

// function logQuote(quote)
// {
//    console.log(quote);
// }


// creatQuote("eat your vegetables",logQuote);




// const studentData=[
//    {name:'Sandeep',degree:'MCA'},
//    {name:'Nishi',degree:'B.sc'},
//    {name:'Shryansh',degree:'BCA'},
// ];


// let newdata = studentData.map((elem)=>{
//    console.log(`My name is ${elem.name} and my Degree is ${elem.degree}`);
// });

// console.log(newdata);


















/* ******************* Promisses in javascript ********************* */




// Syncronus code


// console.log('start code');
// console.log('hello javascript');
// console.log('end code');



// Asyncronous code

// console.log('start');

// setTimeout(()=>{
//    console.log('hello Javascript');
// },1000)

// console.log('end');




// Another Example of Asyncronous Code

// console.log('start');

// function importantTask(name)
// {
//    setTimeout(()=>{
//       return `Your name is ${name}`;
//    },1000)
// }

// let message = importantTask('Rishabh');
// console.log(message);

// console.log('end');





// Solution of undefine Result (callback function)


// console.log('start');

// function importantTask(name,callback)
// {
//    setTimeout(()=>{
//       callback(`My name is ${name}`);
//    },1000);
// }

// importantTask('Rishabh',(res)=>{
//    console.log(res);
// });

// console.log('end');






// CAllback Hell


// console.log('start');

// function getName(name, callback) {
//    setTimeout(() => {
//       callback(name);
//    }, 1000);
// }

// function getHobies(name, callback) {
//    setTimeout(() => {
//       switch (name) {
//          case ('Rishabh'): callback(['Programming', 'build Application Softwares']);
//             break;

//          case 'Mukund': callback(['music', 'games', 'playing Guitar']);
//             break;

//          default: callback('nothing');
//       }
//    }, 2000)
// }

// getName('Mukund', (result) => {

//    console.log(result);

//    getHobies(result,(res)=>{

//       console.log(res);


//    });
// });

// console.log('end');









// Promisses in Javascript


// console.log('Start');

// const promiseObj = new Promise((resolve, reject) => {

//    const req = true;

//    if (req == true) {
//       resolve('Request is Acepted');
//    }
//    else {
//       reject('Request is Rejected');
//    }

// });   // Promise Producing Code


// promiseObj.then((result) => {
//    console.log(result);
// }, (error) => {
//    console.log(error);
// });  // Pomise Consume Code


// console.log('End');





// Write Promise in Another WAY



const promiseObj2 = new Promise((resolve, reject) => {

   let req = false;

   if (req) {
      resolve('Request is Rejected');
   }
   else {
      reject('Request is Rejected');
   }

}).then((value) => {
   console.log(value);
}, (error) => {
   console.log(error);
})


