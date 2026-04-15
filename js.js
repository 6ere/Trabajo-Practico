// ej 1:

let edad = 20;
if (edad >= 18) {
    console.log("Es mayor de edad");
}

// ej 2: 

let nota = 5;
if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}
        

// ej 3: 

let usuario = "admin";
let password = "1234";
if (usuario === "admin") {
    if (password === "1234") {
        console.log("Acceso concedido");
    } else {
        console.log("Acceso denegado");
    }
} else {
    console.log("Acceso denegado");
}

// ej 4:

let numero = 7;
let resultado = (numero % 2 === 0) ? "Par" : "Impar";
console.log(resultado);

// ej 5: 

let dia = 2;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
}

// ej 6:

let edad2 = 16;
let esMayor = edad >= 18;
console.log(esMayor); false