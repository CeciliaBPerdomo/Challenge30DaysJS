// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y 
// asigne un valor, use el operador typeof para verificar diferentes tipos de datos.

let firstName = "Cecilia"
let lastName = "Perdomo"
let country = "Uruguay"
let city = "Colonia"
let age = 38
let isMarried = true
let year = 2023

console.log("Nombre: " + firstName + ". Es del tipo: " + typeof(firstName))
console.log("Apellido: " + lastName + ". Es del tipo: " + typeof(lastName))
console.log("Pais: " + country + ". Es del tipo: " + typeof(country))
console.log("Ciudad: " + city + ". Es del tipo: " + typeof(city))
console.log("Edad: " + age + ". Es del tipo: " + typeof(age))
console.log("Esta casado: " + isMarried + ". Es del tipo: " + typeof(isMarried))
console.log("Año: " + year + ". Es del tipo: " + typeof(year))

// 2. Verifique si typeof '10' es igual a 10
console.log(typeof 10) 

// 3. Verifique si parseInt('9.8') es igual a 10
let num = "9.8"
let numFloat = parseFloat(num)
console.log(numFloat)

let numInt = parseInt(num);
console.log(numInt + 1)

// 4. Verifique cualquier valor booleano true o false.
// Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
// Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isSingle = true;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// 6. Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let py = "Python"
let longPython = py.length
let ja = "jargon"
let longJargon = ja.length

console.log("Longitud de Python es mayor a Jargon: " + py > ja)

// 7. Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let frase = "No hay 'on' tanto en dragon como en python"
let dragon = "dragon"
console.log(frase)

console.log("Dragon incluye on: " + !dragon.includes("on"))
console.log("Python incluye on: " + !py.includes("on"))

// 8. Utilice el objeto Date para realizar las siguientes actividades

// ¿Qué año es hoy?
const now = new Date();
console.log("Año: " + now.getFullYear())

// ¿Qué mes es hoy con un número?
console.log("Mes: " + (now.getMonth() + 1))

// ¿Qué fecha es hoy?
console.log("Fecha: " + now)

//¿Qué día es hoy con un número?
console.log("Día: " + now.getDay())

// ¿Cuál es la hora actual?
console.log("Hora: " + now.getHours())

//¿Cuántos minutos hay actualmente?
console.log("Minutos: " + now.getMinutes())

//Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
const allSeconds = Date.now()
console.log("Segundos desde 01/01/1970: " + allSeconds)