// console.log('ESTO ES JS DESDE EL SERVIDOR');

// const A2 = 40;
// const B2 = 30;

// console.log(A2 + B2);

// LOCAL VS GLOBAL //

// let i = 0; // variable global

// function foo() {
//    i = 1; // tengo accesso a i porque es global
//    let j = 2; // variable local a la funcion foo y todo su bloque
//    if (true) {
//      console.log(i);
//      console.log(j);
//    }
//  }
 
//  foo();
//  console.log(i);


// LOCAL a la funcion VS LOCAL al IF //

// function foo() {
//   let i = 0; // variable local al bloque de la funcion foo
//   if (true) {
//     let i = 1; // variable local al bloque del if
//     console.log(i);
//   }
//   console.log(i);
// }

// foo();

// let vs var //

// function foo() {
//   if (true) {
//     let i = 1; // variable local al bloque del if
//     console.log(i); // muestro la variable local
//   }
//   console.log(i); // ERROR, no tengo acceso a esa variable
// }

// foo();

// let vs const //

// const i = 0;
// i = 1; // error

// MUTABILIDAD Y CONST //

// const user = { name: 'Hernan' }; // TIPO DE DATO OBJETO

// user.name = 'Manolo'; // MUTACION DETECTED
// user.edad = '20'; // MUTACION DETECTED

// user = 2; // NO ES MUTACION, TIRAR ERROR de REASIGNACION

// console.log(user.name);

// const userName = 'Hernan'; // TIPO DE DATO PRIMITIVO
// userName = 'Manolo'; // TIPO DE DATO PRIMITIVO

// const foo = function () {
//   console.log('HOLA, soy una funcion anonima');
// }
// foo();

// function foo() {
//   return function() {
//     console.log('HOLA, soy una funcion anonima, retornada por otra funcion');
//   }
// }

// const funcionAnonima = foo();
// funcionAnonima();

// (function() {
//   console.log('HOLA, soy una funcion anonima y inmediata');
// })();

// comilla invertida
// const nombre = 'Coder';

// const getEdad = () => 25; // 

// const parrafo = `Hola yo soy:
//   ${nombre} y tengo ${getEdad()} años`;

// console.log(parrafo);

// function mostrarLista(lista) {
//   if (lista === undefined) {
//     return console.error('No has pasado una lista');
//   }

//   if (lista.length === 0) {
//     return console.error('Lista Vacia');
//   }

//   return console.log(lista);
// }

// // mostrarLista(["Item 1", "Item 2", "Item 3"])
// // mostrarLista([])
// // mostrarLista()

// ((lista) => {
//   if (lista === undefined) {
//     return console.error('No has pasado una lista');
//   }

//   if (lista.length === 0) {
//     return console.error('Lista Vacia');
//   }

//   return console.log(lista);
// })([11, 15, 30]);

// // mostrarListaAnonima([11, 15, 30])
// // mostrarListaAnonima([])
// // mostrarListaAnonima()
