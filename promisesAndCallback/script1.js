

let stocks = {
    Fruit: ['Strawberry', 'Grapes', 'Banana', 'Apple'],
    Liquid: ['water', 'ice'],
    Holder: ['Cone','Cub','Stick'],
    Toppings: ['Chocolate', 'Sprinkles']
}

// const Order = (fruit_name, call_Production) => {

//     setTimeout(() => {
//         console.log(`${stocks.Fruit[fruit_name]} Was Selected`);
//         call_Production();
//     }, 2000);
// }



// /* CALLBACK HELL */


// const Production = () => {
//     setTimeout(() => {
//         console.log("Production is Started");

//         setTimeout(() => {
//             console.log('The Fruit Has Been Choped');

//             setTimeout(() => {
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} Added`)

//                 setTimeout(() => {
//                     console.log("start the machine");

//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.Holder[0]}`);

//                         setTimeout(() => {
//                             console.log(`${stocks.Toppings[1]} as toppings`);

//                             setTimeout(() => {
//                                 console.log("serve Ice cream");

//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)

//         }, 2000)

//     }, 0000)

// }


// Order(1, Production);



// /* PROMISES IN JS */


// let is_Shop_Open = true;

// let Order = (time,work)=>{
//    return new Promise((resolve,reject)=>{
//       if(is_Shop_Open)
//       {
//         setTimeout(()=>{
//             resolve(work());
//         },time);
//       }
//       else
//       {
//         reject(console.log('our Shop is Closed'));
//       }
//    });
// }





// Order(2000,()=>{
//     console.log(`${stocks.Fruit[0]} was Selected`);
// }).then(()=>{
//     return Order(0000,()=>console.log('production Has Started'));
// }).then(()=>{
//     return Order(2000,()=>console.log('Fruit Has been Chopped'));
// }).then(()=>{
//     return Order(1000,()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`));
// }).then(()=>{
//    return Order(1000,()=>console.log('start the Meachine'))
// }).then(()=>{
//     return Order(2000,()=>console.log(`icecream placed on ${stocks.Holder[1]}`))
// }).then(()=>{
//     return Order(3000,()=>console.log(`${stocks.Toppings[1]} as Topping`))
// }).then(()=>{
//     return Order(2000,()=>console.log(`serve the icecream`))
// }).catch(()=>{
//     console.log('customer Left');
// }).finally(()=>{
//     console.log('End of the Day');
// })






/****************** Write this same code in Async Await ******************* */



async function Order()
{
   try {
     await abc;
   } catch (error) {
     console.log("abc does not exist",error);
   }
   finally{
    console.log('Runs code anyway');
   }
}


Order();














