//=========================== EJERCICIO NUMERO 1
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
console.log("EJERCICIO NUMERO 1");

function Ejercicio1(number) {
  if (number % 2 === 0) {
    console.log(`El numero ${number} es Par`);
  } else {
    console.log(`El numero ${number} es Impar`);
  }
}

Ejercicio1(5);
Ejercicio1(10);

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 2
//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
console.log("EJERCICIO NUMERO 2");

function Ejercicio2(number1, number2) {
  if (number1 > number2) {
    console.log(`El ${number1} es MAYOR al ${number2}`);
  } else if (number1 < number2) {
    console.log(`El ${number1} es MENOR al ${number2}`);
  } else {
    console.log("Los dos numeros son IGUALES");
  }
}

Ejercicio2(10, 5);
Ejercicio2(5, 10);
Ejercicio2(10, 10);

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 3
//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
console.log("EJERCICIO NUMERO 3");

function Ejercicio3(number) {
  if (number % 5 === 0) {
    console.log(`El numero ${number} es multiplo de 5`);
  } else {
    console.log(`El numero ${number} NO es multiplo de 5`);
  }
}

Ejercicio3(20);
Ejercicio3(6);

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 4
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
console.log("EJERCICIO NUMERO 4");

function Ejercicio4(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}

Ejercicio4(10);

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 5
//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
console.log("EJERCICIO NUMERO 5");

function Ejercicio5(palab, num) {
  for (let i = 0; i < num; i++) {
    console.log(palab);
  }
}

Ejercicio5("Javascript", 10);

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 6
//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
console.log("EJERCICIO NUMERO 6");

function Ejercicio6(miArray) {
  for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
  }
}

Ejercicio6(["Gorra", "Remera", "Jean", "Medias", "Zapatillas"]);

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 7
//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
console.log("EJERCICIO NUMERO 7");

function Ejercicio7() {
  for (let Array = 0; Array <= 10; Array++) {
    if (Array === 4) {
      /* console.log(`Numero ${Array} en quinta posicion salteado`); */
      continue;
    }
    console.log(Array);
  }
}

Ejercicio7();

console.log("===========================");
console.log("             ");

//===========================EJERCICIO NUMERO 8
//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
console.log("EJERCICIO NUMERO 8");

function Ejercicio8(ArrayNum, number) {
  for (let i = 0; i < ArrayNum.length; i++) {
    console.log(ArrayNum[i] * number);
  }
}

Ejercicio8([2, 4, 6, 8], 2);
