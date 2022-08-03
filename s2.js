// Ejercicio 1 sesion 2

// const time = 24;
// let greeting;

// if(time >= 24 || time < 0){
//     greeting="Está tú loca!"
// } else if (time < 12){
//     greeting="Buenos dias"
// } else if (time < 19){
//     greeting="Buenas tardes"
// } else if(time >= 19){
//     greeting="Buenas noches"
// }

// console.log(greeting)

// const day = 5;
// let text;

// switch (day) {
//   case 0:
//     text = "Sunday";
//     break;
//   case 1:
//     text = "Monday";
//     break;
//   case 2:
//     text = "Tuesday";
//     break;
//   case 3:
//     text = "Wednesday";
//     break;
//   case 4:
//     text = "Thursday";
//     break;
//   case 5:
//     text = "Friday";
//     break;
//   case 6:
//     text = "Saturday";
//     break;
//   default:
//     text = "Error";

// }

// console.log(text); // Tuesday

// const speed = 20

// const message = speed > 100 ? "You're going too fast!" : "Under the limit"

// console.log(message)	// You're going too fast!

// for(let i = 0; i<100; i++){
//     if (i%2==0) {
//         console.log(i)
//     }
       
//   }

for(let count = 1; count<=100; count++){
    let isPrime = true;
    
    for (let index = 2 ; index <= count ; index++) {
        if(count%index===0 && index!==count){
            isPrime = false;
        }
    }
    if (isPrime) console.log(count+" es primo")
  }