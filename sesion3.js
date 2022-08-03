// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7]
// let avg = 0;
// let sum = 0;

// for (let number of numbers){
// 	sum=sum+number;
// };
// console.log("sum is "+sum);
// console.log(numbers.length);
// avg = sum/numbers.length;
// console.log("average is "+avg);


// const car = {
//   brand: 'Nissan',
//   model: 'Versa',
//   year: 2020
// }

// let keys = Object.keys(car)
// var pairs = []

// for(let i = 0; i < keys.length; i++) {
//   pairs.push( [keys[i], car[keys[i]]] )
// }

// // console.log(pairs)



// var auto = {};

// for (var i = 0; i < pairs.length; i++) {
// 	auto[pairs[i][0]]= pairs[i][1];
// 	};

// console.log(auto);



// const colors = ['blue', 'red', 'yellow'];
// const copyOfColors = [ ...colors ];

// console.log(colors);
// console.log("copy " + copyOfColors); // ['blue', 'red', 'yellow']

// colors[0]="pink";

// console.log(colors);
// console.log("copy " + copyOfColors);


const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    }, 
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    } 
  }
}

// Extraer las URLs de facebook e instagram 
// y renombrar las variables por fb e ig respectivamente.

const {links: {social: {facebook: fb, instagram: ig}}}  = person;
console.log(fb, ig);

// const {links} = person;
// const {social} = links;
// const {facebook: fb, instagram: ig} = social;
// console.log(fb, ig);
