// const Person = function(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//   }
// let Maria = new Person("Maria", 1991, "Front-end developer")
// console.log(Maria)


// const Vec = function(x, y) {
//     this.x = x;
//     this.y = y;
// }
// const vec1 = new Vec(1, 2);
// const vec2 = new Vec(2, 3);

// Vec.prototype.length = function() {
//     return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
// }
// Vec.prototype.plus = function(nuevo){
//     let result = {};
//     result.x = this.x + nuevo.x;
//     result.y = this.y + nuevo.y;
//     return result;
// }
// Vec.prototype.minus = function(nuevo){
//     let result = {};
//     result.x = this.x - nuevo.x;
//     result.y = this.y - nuevo.y;
//     return result;
// }
//   console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
//   console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
//   console.log(vec1.length()); // 2.23606797749979


// const Person = function(name) {
//     this.name = name;
// }
// const Developer = function(name, skills, yearsOfExperience) {
//     Person.call(this, name);
  
//     this.skills = skills;
//     this.yearsOfExperience = yearsOfExperience;
// }
// const john = new Developer('John', 'JavaScript', 10); 
// console.log( john );
// const Fruit = function(fruit){
//     this.fruit = fruit
// }
// const Especie = function(fruit, color, race){
//     Fruit.call(this, fruit)
//     this.color = color
//     this.race = race
// }
// const nuevaFruta = new Especie("manzana", "roja", "gala")
// console.log(nuevaFruta);


// const Group = function() {
//     this.members = []
// }
// const grupo = new Group();
// console.log(grupo)
// Group.prototype.has = function(value){
//     return this.members.includes(value);
// }
// console.log(grupo.has(1))
// Group.prototype.add = function(nuevo){
//     if (!this.has(nuevo)){
//         return this.members.push(nuevo)
//     }
// }
// grupo.add(1);
// grupo.add(2)
// console.log(grupo)
// Group.from = function(array){
//     let group = new Group();
//     group.add(array);
//     console.log(group)
//     return group
// }
// // Group.from = function(array){
// //     for (let i = 0; i < array.length; i++) {
// //         if (!array.has(value))
// //     }
// // }
// const group = Group.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false
// group.add(10);
// console.log(group.has(10)); // true


class Manzana {
    constructor(fruit, color, race){
        this.fruit = fruit;
        this.color = color;
        this.race = race;
    }

    readIt(){
        let result;
        result = `Esta ${this.fruit} es de color ${this.color} y especie ${this.race}`
        return result
        }
}

let nuevaFruta = new Manzana("manzana", "roja", "gala");
// console.log(nuevaFruta)
console.log(nuevaFruta.readIt());