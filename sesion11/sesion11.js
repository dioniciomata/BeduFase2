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
    function foo() {
        return new Promise((resolve) => {
          setTimeout(() => resolve('Hello await'), 1000)
        })
      }
      
      async function bar() {
        let result = await foo()
      
        console.log(result)
      }
      
      bar() // Hello World
      

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

// promise
// function foo() {
//   return new Promise((resolve) => {
//     // Async operations...
//     resolve("hi");
//     reject ("rror");
//   })
// }

// foo()
//   .then(value => console.log(value))
//   .catch(error => console.log(error))

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