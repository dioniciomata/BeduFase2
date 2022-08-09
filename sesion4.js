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


// // Escribir una función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.

// function chunk(array, size) {

//   // Code goes here

//   let arreglo = [];

//   let instacia = [];

 

//   for (let i = 0; i < array.length; i++) {

//     instacia.push(array[i])

//     if (instacia.length%size===0){

//       arreglo.push(instacia)

//       instacia = [];

//     }

//   }

//   if (!instacia.length%size===0 && instacia.length>0){

//     arreglo.push(instacia)

//   }

 

//   return arreglo;

// };

 

// const data = [1, 2, 3, 4, 5, 6, 7, 8]

 

// console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]

// console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]

// console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

 

// Escribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el número de veces que se repite cada carácter. El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. Los resultados deben ordenarse de manera ascendente por los caracteres y no la frecuencia.

 

function frequency(string) {

    let objeto= {};
  
      for (let i = 0; i < string.length; i++) {
  
        let element = string[i]
  
      //   console.log(element)
  
          if (objeto[element]>=1){
  
            objeto[element]++;
  
          } else {
  
            objeto[element] = 1;
  
          // console.log(objeto)
  
          }
  
      }
  
    const sorted = Object.keys(objeto)
  
    .sort()
  
    .reduce((accumulator, key) => {
  
      accumulator[key] = objeto[key];
  
      return accumulator;
  
    }, {});
  
    return sorted;
  
   }
  
   
  
   console.log('Test 1:', frequency('cccbbbaaa'))
  
   // {a: 3, b: 3, c: 3}
  
   console.log('Test 2:', frequency('www.bedu.org'))
  
   // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
  
   console.log('Test 3:', frequency('john.doe@domain.com'))
  
   // {.: 2, @: 1, a: 1, c: 1, d: