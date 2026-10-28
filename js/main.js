/* 
Práctica Arrays en JavaScript
1. Obtener el primer elemento del array

Enunciado: Dado un array, retorna el primer elemento del mismo.

*/

let miArray = [1,2,3,4,5]

function devolverPrimero (array){
  return array[0]
}

console.log('Primer elemento del array: ' + devolverPrimero(miArray));

/*
2. Obtener el último elemento del array

Enunciado: Dado un array, retorna el último elemento del mismo.
*/


function devolverUltimo (array){
  return array[array.length-1]
}

console.log('Último elemento del array: ' + devolverUltimo(miArray));

/*
3. Agregar un elemento al inicio del array

Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado.

*/

miArray.unshift(0);
console.log(miArray);

/*
4. Eliminar el primer elemento del array

Enunciado: Elimina el primer elemento de un array y devuelve el array resultante.
*/

let eliminado = miArray.pop()
console.log(`Has eleminiado el elemento ${eliminado} del array y asi queda:`)
console.log(miArray);
/*
5. Agregar un elemento al final del array

Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado.
*/

function agregarFinal (array, elemento){
  array.push(elemento)
  return `Tras agregar el elemento ${elemento} tu array tiene los siguientes elementos: ` + array
}

console.log(agregarFinal(miArray, 5)); // 


/*
6. Eliminar el último elemento del array

Enunciado: Elimina el último elemento de un array y devuelve el array resultante.
*/

function eliminarUltimo (miArray) {
  miArray.pop()
  return miArray
}

console.log(eliminarUltimo (miArray));
/*
7. Combinar dos arrays

Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.

*/
let arrayChicos = ['Pepe','Andres','Hector']
let arrayChicas = ['Ana','Pepa','Laura']


let combinar = arrayChicos.concat(arrayChicas);
console.log(combinar);




/*
8. Encontrar si un array incluye un elemento

Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.
*/

let nombre = 'Pepe'

let mirarIncluye = arrayChicos.includes('Pepe')

if (mirarIncluye) {
  console.log(`El array incluye a ${nombre}`);
} else {
  console.log(`El array incluye no a ${nombre}`);
}


/*


9. Buscar el índice de un elemento

Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.

*/
const frutas = ["mandarina", "manzana", "pera", "naranja", "manzana"];
console.log('Manzana aparece por primera vez en el indice: ' + frutas.indexOf("manzana"));

/*
10. Reemplazar un elemento en un array

Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado.

*/
//array.splice(indice, cantidad, elemento1, elemento2, ...);
let arrayCoches = ['Seat','Renault', 'Ferrari']

function reEmplazarElemento (array, indice, elemento){
  array.splice(indice, 1, elemento)
}

reEmplazarElemento (arrayCoches, 2, 'Porche')
console.log(arrayCoches);


/*
11. Sumar todos los elementos del array

Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.
*/

let numeros = [1,2,3,4,5]

function sumarArray (array){
  let suma = 0;
  array.forEach((numero)=>{
    suma += numero
  })
  return suma
}

console.log(sumarArray(numeros)); 

// AHORA con reduce
// array.reduce(función(acumulador, elemento, índice, array), valorInicial);
let sumaReduce = numeros.reduce((acumulador, elemento) => {
  return acumulador + elemento
}, 0)
console.log('Suma con reduce da: ' + sumaReduce); 

/*
12. Multiplicar todos los elementos del array
Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.
*/
let multiplicador = 5
let multiMap = numeros.map((elemento) => elemento*multiplicador ) // return implicito

console.log(multiMap);


/*
13. Filtrar números mayores a un valor

Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.


*/
let num = [3, 4, 5, 6, 7, 8];
let valor = 5;

let filtrar = num.filter((elemento) => elemento > valor );

console.log(filtrar); 
/*

14. Verificar si todos los elementos son mayores a un número

Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.
*/

let numArr = [3, 4, 5, 6, 7, 8];

function verificarMayor (array, valor){
  for (let num of array){
    if (num > valor){
      return 'Lo siento ' + num + ' es menor que ' + valor
    }
  }

return 'todos los elementos del array son mayores a ' + valor;
  
}

console.log(verificarMayor(numArr, 2));
console.log(verificarMayor(numArr, 10));

/* con find() 
let numDado = 5;

let encontrado2 = numArr.find(function (num) {
  return num > numDado ;
});

if (encontrado2) {
  console.log('lo siento no cumple');
} else {
  console.log('si cumple');
}

*/

/*
15. Obtener el primer elemento que cumple una condición

Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

*/
let valorDado = 5;

let encontrado = numArr.find(function (num) {
  return num > valorDado;
});

console.log(encontrado);



/*
16. Imprimir cada elemento del array

Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.

*/

numArr.forEach((elemento)=>{console.log(elemento);})

/*
17. Crear un array con el doble de cada número

Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.
*/

let arrayDoble = numArr.map((elemento) => elemento*2) 

console.log(arrayDoble);

/*

18. Convertir un array de nombres en mayúsculas

Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas.

 */

let arrayMayusculas = arrayChicas.map((elemento) => elemento.toUpperCase()) 

console.log(arrayMayusculas);