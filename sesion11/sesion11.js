// console.log("hello")
// setTimeout(() => console.log('Hello World'), 1000);

// setTimeout(()=>console.log("hey honey"), 2000);

// // Promise
// function foo() {
//     return new Promise((resolve) => {
//       resolve('Hello Dio')
//     })
//   }
  
//   foo()
//    .then((value) => console.log(value)) // Hello Dio

// function dospordos(){
//   return new Promise(
//     function(total){total("2x2")} 
//   )
// }

// dospordos()
//   .then((total)=>{console.log(total)});

// Async is a very simple way to write a Promise 

    // async function foo() {
    // return 'Hello async';
    // }
  
    // foo()
    // .then((value) => console.log(value)) // Hello async

    // async function dospordos(){
    //   return "2 x 2";
    // }

    // dospordos().then(function (valor){console.log(valor)})

// // Await pauses current function and waits for the result of another function to be returned
    // function foo() {
    //     return new Promise((resolve) => {
    //       setTimeout(() => resolve('Hello await'), 2000)
    //     })
    //   }
      
    //   async function bar() {
    //     let result = await foo()
      
    //     console.log(result)
    //   }
      
    //   bar() // Hello World

      // function delay(){
      //   return new Promise((resolve) => {
      //     setTimeout(() => {resolve("las muloselos res")}, 2000); })
      // }

      // async function llamado(){
      //   const vengan = "Invitamos a "+ await delay();
      //   console.log(vengan);
      // }

      // llamado()

// function startProcess() {
//   console.log('Start Phase 1. Wait one second...');
//   setTimeout(function () {
//     console.log('Phase 1 completed. Wait two seconds...');
//     setTimeout(function () {
//       console.log('Phase 2 completed.');
//     }, 2000);
//   }, 1000);
// }

// startProcess();

// function stepper(){
//   console.log("starting step 1, one second");

//   setTimeout(() => {
//     console.log("starting step 2, one second");
//       setTimeout(() => {
//         console.log("starting step 3, 3 seconds");
//         setTimeout(() => {
//           console.log("3 steps completed")
//         }, 3000);
//       }, 1000);
//   }, 1000); 
    

// }

// stepper();

// The promise constructor parameters are resolve and reject
// The Promise says "keep moving, I promise I will return a value later"
// function foo() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Que dificil es 2+2=4`)
//     }, 2000);
//     resolve("hi");
//     reject ("rror");
//   })
// }

// foo()
//   .then(value => console.log(value))
//   .catch(error => console.log(error))

// console.log("antes o despues de la operacion?")

// promise catch, la ejecucion se reanuda despues del catch
// function addOne(value) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(value + 1), 500)
//   })
// }

// addOne(1)
//   .then(result => {
//     console.log(result) // 2
//     return addOne(result)
//   })
//   .then(result => {
//     console.log(result) // 3
//     return Promise.reject('Oops!')
//   })
//   .catch(err => {
//     console.log(err) // Oops!
//     return addOne(1)
//   })
//   .then(result => {
//     console.log(result) // 2
//     return addOne(result)
//   })
//   .then(result => console.log(result)); // 3

// function double(valor){
//   return new Promise(resolve =>{
//     setTimeout(() => {
//       resolve(valor*2)
//     }, 2000);
//   })
// }

//   double(2)
//   .then(result => {console.log(result) // 4
//   return double(result)})
//   .then(result  => {console.log(result) //8
//   return Promise.reject("Rechazado")})
//   .catch(err => {console.log(err)
//   return double(2)})
//   .then(result => {console.log(result)}) //4


// Crear una implementación de Promise.all


function promiseAll(promises) {
  
  return new Promise((resolve, reject) => {
    // espera a que todas las promesas del arreglo se resuelvan
    // retorna un arreglo con los resultados de cada promesa
    // si una promesa falla, la promesa mayor se rechaza, ignorar el resto
    const arreglo = promises;
    console.log(arreglo[0]); 

  arreglo[0]
   .then(results=>{console.log(results)
    return arreglo[1]})
    .then(results=>{console.log(results)
      return arreglo[2]})
      .then(results=>{console.log(results)})



    resolve(arreglo);
    reject();
    })
    

    // function resolver(promesa){
    //   return new Promise((resolve)=>{
    //     resolve(console.log(promesa));
    //   });
    // }
    // resolver(promises)
    // .then(result =>{console.log(result)});

    // return arreglo;
  }

function soon(value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), 1000)
  })
}

// Test cases
// promiseAll([])
//   .then(results => {
//     console.log('Expected result []: ', results)
//   })

promiseAll([soon(1), soon(2), soon(3)])
  .then(results => {
    console.log('Expected result [1, 2, 3]: ', results)
  })

// promiseAll([soon(1), Promise.reject('X'), soon(3)])
//   .then(results => {
//     console.log('We should not get here')
//   })
//   .catch(error => {
//     console.log('Expected error X: ', error)
//   })