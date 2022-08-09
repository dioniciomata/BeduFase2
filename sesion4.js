// function calculateYears(birthYear){
//     return 2022-birthYear
// };
// console.log(calculateYears(1991));


// function yearsToRetire(name,year){
//     let age = calculateYears(year);
//     let retirement = 65 - age;
//     console.log(`${name} retires in ${retirement} years.`);
// }
// yearsToRetire("Dio", 1991);


// function power(base, exponent) {
//     // if (exponent => 2){
//     //     result = base * base;
//     //     if (exponent => 3){
//     //         result = result * base
//     //     }
//     // }
//     // return result;   
//   }
// console.log(power(3,3));


// function power(base, exponent) {
//     result = 1 ;
//     for ( counter = 0 ; counter < exponent ; counter++){
        
//         result = result * base;
//     }
//     return result; 
//   }
//   console.log(power(5,3));


// const factorial = function fac(num) {
//     return num < 2 ? 1 : num * fac(num - 1)
//   }
//   console.log(factorial(5));

// Self invoked function
// function callMe(){
//     const name = "Dio";
//     console.log(name);
// }
// callMe();

// (function (){
//     const name = "Dio";
//     console.log(name);
// })();


// const firstNames = [ 'John', 'Jane', 'Mark'];

// const getFullNames =  (names) => {
//   const fullNames = []
	
//   for(const name of names) {
//     fullNames.push(`${name} Doe`)
//   }
  
//   return fullNames
// }

// const fullNames = getFullNames(firstNames)

// console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"]


// function getLergerInt(number1, number2) {
//     if (number1 > number2) {
//         console.log(number1)
//     } else if (number1 < number2) {
//         console.log(number2)
//     }
//   }
// console.log(getLergerInt(7,5))


// const getLergerInt = (number1,number2) => number1 > number2 ? number1 : number2 ;
// console.log(getLergerInt(7,5))


// const getLergerInt = (num) => num[0] > num[1] ? num[0] : num[1] ;
// console.log(getLergerInt([7,9]))



// function fibonacciSequence(limit) {
//     if (limit===0) console.log("limit is zero")
//     else if (limit===1) console.log(1)
//     else if (limit>=2){
//         let prev = 0
//         let next = 1
//         console.log(next)
//         for (let i = 0; i < limit-1; i++) {
//             result = prev + next;
//             console.log(result);
//             prev = next;
//             next = result;       
//         }
//     }
// }
// console.log(fibonacciSequence(7))


// Failed fibonacci test
// function fibonacciSequence(limit) {
//     let base = 0;
//     let one = 1;
//     let fib = [];
//     if (limit > 0){
//         if (limit >= 1){
//             fib.push(one)+console.log(fib);
//             if (limit >= 2){
//                 let nuevo = base + one;
//                 fib.push(nuevo)+console.log(fib);
//                 if (limit === fib.length){
//                     return console.log("Limit reached");
//                 } else { 
//                     nuevo = base + one;
//                     fib.push(nuevo)+console.log(fib);
//                 }
//             }
//         } 
//     }   
// }
// fibonacciSequence(5)

// The error is declaring the variables in the scope of the function. Fixed
// The error is pushing 1 and 2 duplicate, when function is recursive. Fixed
// This example is not recursive
// function fibonacciSequence(limit) {
//     let fib = [];
//     if (limit > 0){
//         if (limit >= 1){
//             fib.push(1)+console.log(fib);

//             if (limit >= 2){
//                 fib.push(1)+console.log(fib);

//                 let nuevo = 0;
//                 for (i=2 ; i!== limit ; i++){

//                     // console.log(fib[i]);
//                     nuevo = fib[i-1] + fib[i-2];

//                     fib.push(nuevo)+console.log(fib);

//                 }
//             }
//         } 
//     }   
// }
// fibonacciSequence(7)


// Recursive function
// function fibonacciSequence(limit) {
//     if (fib.length >= 0){
//         fib.length <= 1 ? fib.push(1)+console.log(fib) : console.log("length is 2 or more");
//         if (fib.length >= 1){
//             fib.length <= 1 ? fib.push(1)+console.log(fib) : console.log("length is 2 or more");
//             if (fib.length < limit){

//                 let j = fib[fib.length-1] + fib[fib.length-2];
//                 fib.push(j)+console.log(fib);
//                 fib.length == limit ? console.log("limit reached") : fibonacciSequence(limit) ;
//             }
//         }
//     }
//     // console.log(fib)

// }
// let fib = [];
// fibonacciSequence(7);



// function sum(n) {
//     if (n <= 1) {
//       return n;
//     }
//     return n + sum(n - 1);
// }
// console.log(sum(5))


// function countDown(num){
//     // if (num === 0){ console.log(num) }
//     // else if (num > 0){
//     //     console.log(num);
//     //     countDown(num-1);
//     // }

//     // console.log(num);
//     // return num === 0 ? console.log("happy new year") : countDown(num-1);

    
//     // return num > 1 ? console.log(num)+countDown(num-1) : console.log(num) ;

//     // if (num > 0){console.log(num); countDown(num-1)}
// }
// countDown(6);



// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);


// Tips: use typeof(), strictly equal ===, Object.keys()

function deepEqual(a, b) {
    console.log(a)
    console.log(b)
    if (a===b){return true}
    else if (typeof(a)==="object" && typeof(b)==="object"){
        console.log(`${b} and ${a} are objects`)
       let keysa = Object.keys(a)
       let keysb = Object.keys(b)
       console.log(`${keysa} and ${keysb}`)
       let banner = true;
            for (let i = 0; i < keysa.length; i++) {
                if (!deepEqual(keysa[i], keysb[i])){
                    banner = false
                } 
                console.log(`keysa[i] is ${keysa[i]} and keysb[i] is ${keysb[i]}`)
            }
            return banner;
       }
    else {
        console.log(`${b} or ${a} is not an object, or they're not equal`)
        return false
    }
}
        
        


const john = {
    firstName: 'John',
    lastName: 'Doe'
}
   
//    console.log('Test 1:', deepEqual(1, 1)) // true
//    console.log('Test 2:', deepEqual(1, '1')) // false
//    console.log('Test 3:', deepEqual(john, john)) // true
//    console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
//    console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
