

/**** THIS PRACTICE EXAMPLE IS FROM OFFICIALY FROM MDN Docs **** */


// const person = {
//     name: ["Rishabh", "Tripathi"],
//     age: 23,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} year old`);
//     },
//     introduceSelf: function () {
//         console.log(`hello My name is ${this.name[0]} ${this.name[1]}`);
//     }
// };

// ==> you can also write functions in object like this

// const person = {
//     name: ["Rishabh", "Tripathi"],
//     age: 23,
//     bio() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} year old`);
//     },
//     introduceSelf() {
//         console.log(`hello My name is ${this.name[0]} ${this.name[1]}`);
//     }
// };
// console.log(person.bio());




// // ==> What is Constructors

// creating first version of object using function


// function createPersion(name)
// {
//    const persion = {};
//    persion.name = name;

//    persion.intro = function()
//    {
//      console.log(`Hello I am ${persion.name}`);
//    }

//    return persion;
// }

// let p1 = createPersion("Rishabh");
// let p2 = createPersion("Mukund");

// console.log(p1.intro());
// console.log(p2.intro());


// // ==> creating object using Constructor Function

// function Person(name)     // Constructor Function
// {
//    this.name = name;
//    this.intro = function(){
//      console.log(`Hello My name is ${this.name}`);
//    }
// }

// let Rishabh = new Person("Rishabh Tripathi");
// let Mukund = new Person("Mukund Tiwari");
// console.log(Rishabh.intro());
// console.log(Mukund.intro());


