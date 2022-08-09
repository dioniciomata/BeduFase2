// if (true) {
//     var foo = "Jony Doe";
//     console.log(foo)
// }
// console.log(foo)

// var numbers = [1,2,3,4,5]
// var doubles = []
// for (var i = 0; i < numbers.length; i++) {
//     doubles.push(numbers[i]*2)
// }
// console.log(numbers)
// console.log(doubles)
// console.log(i)

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function() {
//       const today = new Date()
//       const year = today.getFullYear()
//       this.age = year - this.birthYear
//     }
//   }
//   john.calculateAge();
//   console.log(john.age)
//   console.log(this)


// function logThis () {
//     console.log("Is this === window? " + (this === window))
//   }
  
//   const foo = {
//     logThis: logThis
//   }
  
//   logThis() // Is this === window? true
  
//   foo.logThis() // Is this === window? false

// var singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   ];
  
  
//   function pluck(list, propertyName) {
//     list = [];
//     if (propertyName === 'name'){
//         for (let i = 0; i < singers.length; i++) {
//             let {name} = singers[i];
//             list.push(name);    
//         }
//         return list;
//     } else if (propertyName === 'band'){
//         for (let i = 0; i < singers.length; i++) {
//             let {band} = singers[i];
//             list.push(band);    
//         }
//         return list;
//     } else if (propertyName === 'born'){
//         for (let i = 0; i < singers.length; i++) {
//             let {born} = singers[i];
//             list.push(born);    
//         }
//         return list;
//     }
//   }
  
//   console.log( pluck(singers, 'name') );
//   // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
//   console.log( pluck(singers, 'band') );
//   // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
//   console.log( pluck(singers, 'born') );
//   // [1948, 1950, 1967, 1964]


// function createPhoneNumber(arreglo){
//     if ( arreglo.length !== 10 ){
//         console.log("error: el arreglo no tiene 10 digitos")
//     } else {
//         for (let i = 0; i < arreglo.length; i++) {
//             if (arreglo[i] < 0 || arreglo[i] > 9 ) {
//                 console.log("error: alguno de los números tiene màs de un digito")
//             } else if ( arreglo[i] !== Number) {
//                 console.log("error: alguno no es un numero")
//             } else {
//                 return `(${arreglo[0]}${arreglo[1]}${arreglo[2]}) ${arreglo[3]}${arreglo[4]}${arreglo[5]}-${arreglo[6]}${arreglo[7]}${arreglo[8]}${arreglo[9]}`
//             }
//             }
               
//         }
        
//     }
    

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
// console.log(createPhoneNumber([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 0])); // "error: el arreglo no tiene 10 digitos"
// console.log(createPhoneNumber([1, 2, 3, "a", 53, "e", 7, 8, 9, 0])); // "error: alguno de los números tiene màs de un digito, o no es un numero"


//La función debe retornar un nuevo arreglo con los elementos faltantes del primer arreglo.
function findMissingNumbers (arreglo){
    arreglo.sort(function(a, b){return a-b});

    let faltan = [];

    let todos = [];
    for (var i = arreglo[0]; i <= arreglo[arreglo.length-1]; i++) {
        // console.log(i)
        todos.push(i)       
    }
    // console.log(todo)
    for (let todo of todos) {
       

        for (var falta of arreglo){
            var Falta = true ;

            // console.log(`todo es ${todo} y falta es ${falta}`)
            if (falta === todo){
                // console.log("coinciden, break")
                Falta = false;
                break;
            } 
            // console.log("Aún falta "+Falta + `- Todo es ${todo} y falta es ${falta}`)
            if (falta === arreglo[arreglo.length-1] && Falta === true){
                console.log("Reached last falta")
                faltan.push(todo)
            }
            // if we reach the last falta and Falta is true, add to faltan
        }
        
        
    } 
    
console.log(faltan)
    return console.log("function is over");

}

findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]
