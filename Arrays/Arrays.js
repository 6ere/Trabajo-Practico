//Ejercicio 1:

let frutas = ["manzana", "banana", "pera"];
frutas[1] = "naranja";
console.log(frutas); // ["manzana", "naranja", "pera"]

//Ejercicio 2:

let numeros = [1, 2, 3];
numeros.push(4);
numeros.pop();
console.log(numeros); // [1, 2, 3]

//Ejercicio 3:

let numeros = [1, 2, 3];
numeros.push(4);
numeros.pop();
console.log(numeros); // [1, 2, 3]

//Ejercicio 3:

let animales1 = ["perro", "gato"];
let animales2 = ["loro", "pez"];
let animales = animales1.concat(animales2);
console.log(animales); // ["perro", "gato", "loro", "pez"]

//Ejercicio 4:

let numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]

//Ejercicio 5:

let colores = ["rojo", "verde", "azul", "amarillo", "violeta"];
let seleccion = colores.slice(1, 3);
console.log(seleccion); // ["verde", "azul"]

//Ejercicio 6:

let edades = [10, 15, 20, 25];
let mayores = edades.map(e => e >= 18);
console.log(mayores); // [false, false, true, true]

//Ejercicio 7:

let numeros = [2, 4, 6, 8];
numeros.forEach(function(num) {
    console.log(num * 2);
});