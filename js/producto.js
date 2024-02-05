// *CLASE: 6

// Aplique sintaxis ECMAScript 6

// Definí una clase
// class InteresadoEcommerce {
//   // Usé el método constructor
//   constructor(nombre, edad, empresa, productoInteresado) {
//     this.nombre = nombre.toUpperCase();
//     this.edad = edad;
//     this.empresa = empresa; // Corregí aquí
//     this.productoInteresado = productoInteresado;
//   }

// Otros métodos
//   presentarse() {
//     console.log(
//       `Hola, soy ${this.nombre}, tengo ${this.edad} años, trabajo en ${this.empresa} y estoy interesado en sus servicios de ${this.productoInteresado}.`
//     );
//   }

// Método para imprimir la lista de propiedades
//   imprimirPropiedades() {
//     console.log("Propiedades del objeto:");
//     for (const propiedad in this) {
//       if (this.hasOwnProperty(propiedad)) {
//         console.log(`${propiedad}: ${this[propiedad]}`);
//       }
//     }
//   }
// }

// Solicitar al interesado en ecommerce que ingrese los datos
// const nombreInteresado = prompt("Ingrese su nombre:");
// const edadInteresado = prompt("Ingrese su edad:");
// const empresaInteresado = prompt("Ingrese el nombre de su empresa:");
// const productoInteresado = prompt(
//   "Mencione a continuación en qué servicio está interesado:"
// );

// Crear una instancia del objeto con los datos ingresados por el usuario
// const interesadoEcommerce = new InteresadoEcommerce(
//   nombreInteresado,
//   parseInt(edadInteresado),
//   empresaInteresado,
//   productoInteresado
// );

// Llamar al método de la instancia
// interesadoEcommerce.presentarse();

// Llamar al método para imprimir propiedades
// interesadoEcommerce.imprimirPropiedades();

//* CLASE:7 prueba de una variable con suma:
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   total += i;
// }
// console.log("Total: " + total);

//* Abstracción con funcion:
// function sumarRango (valorInicial, valorFinal){
//   let total = 0
//   for (let i=valorInicial; i<=valorFinal; i++) {
// total += i;
//   }
//  return total;
// }
// console.log("Total: " + sumarRango(1,40));

// * Funciones de orden superior:
//function mayorQue (n) //1er ejemplo: Declarada como una funcion de for,a traducional
//{ return m => m > n;}

//let mayorQueDiez = mayorQue (10); // m => m > 10 let
//2do ejemplo: mayorQueDiez son variables funciones anonimas no hace falta definir con function

//console.log(mayorQueDiez(12));   //  12 => 12 > 10 ==> true
//console.log(mayorQueDiez(7));   //   7 => 7 > 10   ==> false

// * Retornar funciones como parametro
// function porCadaUno(unArray, unaFuncion) {
//   for (elemento of unArray) {
//     unaFuncion(elemento);
//   }
// }
// const numeros = [1, 5, 10, 20, 50];
// const nombres = ["Gabi", "Aye", "Laura", "Mariana"];

//porCadaUno(numeros, console.log); //numeros es un Array, con console le pedi q imprima c/u de los elementos del Array

// Declaro la funcion acumular
// let total = 0;
// function acumular(valor) {
//   total += valor;
// }
// porCadaUno(numeros, acumular);
// console.log("Total: " + total);
// porCadaUno(nombres, console.log);

// *Metodos de busqueda y transformación = forEach
// nombres.forEach(familia => {
//   console.log(familia);
// })

// *Metodos de busqueda y transformación = find
// let numeroBuscado = numeros.find (item => item == 97);
// let nombreBuscado = numeros.find (item => item == "Camila");
// if (numeroBuscado){
//   console.log( "Número encontrado")
// } else { console.log( "Número NO encontrado")
// }
// if (nombreBuscado){
//   console.log( "Nombre encontrado")
// } else { console.log( "Nombre NO encontrado")
// }

// const productosMimo = [
//   {id:1, nombre: "VESTIDO JR VOLADOS", precio: 25900 },
//   {id:2, nombre: "REMERA JR BASICA MC NEW", precio: 13900 },
//   {id:3, nombre: "CARDIGAN JR UNIVERSITY", precio: 34900 },
//   {id:4, nombre: "PIJAMA HAPPY", precio: 22900 },
//   {id:5, nombre: "CAMISON MARGARITAS", precio: 17500 },
//   {id:6, nombre: "PIJAMA ICECREAMS", precio: 22900 },
// ]
// console.log(productosMimo)

// let producto1= productosMimo.find (prod=> prod.id==2) //busque por ID
// console.log(producto1)

// let producto2= productosMimo.find (prod=> prod.nombre=="PIJAMA HAPPY") //busque por nombre
// console.log(producto2)

// let producto3= productosMimo.find (prod=> prod.precio== 17500) //busque por precio
// console.log(producto3)

// Clase Date
// const fecha = new Date();
// console.log(fecha)





