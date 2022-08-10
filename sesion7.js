// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
//   }
  
//   function addColor(car) {
//     car.color = 'Black'
//     return car
//   }
  
//   console.log('Before calling addColor()', car)
  
//   const sameCar = addColor(car)
  
//   console.log('After calling addColor()', car)
//   console.log('After calling addColor()', sameCar)
//   console.log('Same car?', car === sameCar) // true
  // Ambas variables, tanto car como sameCar están apuntando al mismo objeto en memoria.
  //Para corregir esto creamos un nuevo objeto a partir del original con Object.assign()

// const car = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

// function addColor(car) {
//     // var newCar = Object.assign({}, car, {color: 'Black'});
//     var newCar = {...car, color: "Black"}
//     // console.log(newCar)
//     return newCar;
// }

// console.log('Before calling addColor()', car)

// const sameCar = addColor(car)

// console.log('After calling addColor()', car)
// console.log('After calling addColor()', sameCar)
// console.log('Same car?', car === sameCar) // true


////Funcion pura
// function add(a,b){
//    return a+b
// }
// console.log(add(1,4))
////Funcion impura
// function randomNumber(){
//     return Math.floor(Math.random()*10)
// }
// console.log(randomNumber())


// Crear funcion pura
// const cart = [
//     {
//       item: 'Laptop',
//       quantity: 1
//     }
// ]

// function addItemToCart(cart, item, quantity) {
//     var newCart = cart.map(function(element) {
//       return element;
//     });
  
//     newCart.push({
//       item: item,
//       quantity: quantity
//     })
  
//     return newCart;
//   }
//   const newCart = addItemToCart(cart, 'Phone', 1);
//   console.log(cart);
//   console.log(newCart);

// Funcionde primera clase
// var square = function(number) {
//     return number * number;
// }
// var squareOfFour = square(4);
// console.log(squareOfFour); // 16


// // Funcion de alto orden, recibe otra función como parámetro 
// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map(function(number) {
//   return number * 2;
// });
// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });
// const sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0); // Initial value

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]
// console.log(evenNumbers); // [2, 4]
// console.log(sum); 

// // Suma de digitos, encadenacion de funciones
// const num = 12345;
// const str = num.toString()
// const array = num.toString().split("")
// const chain = num.toString().split("")
// const arrayNumbers = chain.map(function(number){
//     return Number(number)
// })
// const sum = arrayNumbers.reduce(function(cero, nuevo){
//     return cero + nuevo
// }, 0);

// function sumAll(numero){
//     return numero.toString()
//     .split("")
//     .map(Number)
//     .reduce(function(cero, nuevo){
//         return cero + nuevo
//     }, 0);
// }
// console.log(num)
// console.log(str)
// console.log(array)
// console.log(chain)
// console.log(arrayNumbers)
// console.log(sum)
// console.log("sumAll", sumAll(num))


// Crear una función flatten que recibe un arreglo de arreglos y retorna un nuevo arreglo con todos los elementos del arreglo original.

// function flatten(arrays) {
//     return arrays.reduce(function(array, nuevo){
//         return array.concat(nuevo)
//     }, [])
//     .reduce(function(a, b){
//         return a + b
//     }, 0)
// }

// const arrays = [[1, 2, 3], [4, 5], [6]];
// const array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]

// const rdc = arrays.reduce(function(array, nuevo){
//     return array.concat(nuevo)
// }, [])
// console.log(rdc)

// const sum = rdc.reduce(function(a, b){
//     return a + b
// }, 0)
// console.log(sum)

// // const str = rdc.toString()
// // console.log(str)


// Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

// function compact(array) {
//   return array.filter(function(num){
//     return (!!num !== false && num !== 0 && num !== "" && num !== null && num !== undefined && num !== NaN)
//     return num;
//   })
// }

// // function compact(array) {
// //     return array.filter(function(num){
// //       return !!num
// //     })
// //   }

// const array = [0, '0', NaN, null, [], {}, 1, false, 2, '', 3];
// const compactedArray = compact(array);
// console.log(compactedArray); // [1, 2, 3]


function loop(start, test, update, body) {

    for (let valor = start; test(valor); valor = update(valor)){
        body(valor)
    }
}

var test = function(n) {
    return n > 0  ;
}

var update = function(n) {
    return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1