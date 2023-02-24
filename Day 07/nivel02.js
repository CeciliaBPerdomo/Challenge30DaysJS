// 1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. 
// Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.

function solveLinEquation (x, y) {
    let a = 1
    let b = 1
    let c = 1

    let total = (a * x) + (b * y) + c
    console.log("Ecuacion lineal, ponele que es: " + total)
}

solveLinEquation(2, 1)

// 2. La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. 
//Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

function solveQuadratic(a, b, c){
    if (!a){ a = 0 }
    if (!c){ c = 0 }
    if (!b){ b = 0 }
    
    let x = 1
    let ecuacion = (a * (x * x)) + (b * x) + c
    return ecuacion
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// 3. Declare una función llamada printArray.
// Toma un array como parámetro e imprime cada valor del array.

function printArray(arr) {
    for (let i = 0; i < arr.length; i ++){
        console.log(arr[i])
    }
}

let frutas = ["Banana", "Manzana", "Sandia", "Uvas"]
printArray(frutas)

// 4. Declare una función llamada showDateTime que muestre la hora en este formato:
// 01/08/2020 04:08 usando el objeto Date.
/*
    showDateTime()
    08/01/2020 04:08
*/

function showDateTime(){
    const now = new Date();
    const year = now.getFullYear(); 
    const month = now.getMonth() + 1; 
    const date = now.getDate(); 
    const hours = now.getHours(); 
    const minutes = now.getMinutes(); 
    console.log(date + "/" + month + "/" + year + " " + hours + ":" + minutes)

}

showDateTime()

// 5. Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
/*
    swapValues(3, 4); // x => 4, y=>3
    swapValues(4, 5); // x = 5, y = 4
*/

function swapValues(ay, bx) {
    let x = bx
    let y = ay
    console.log("Valor de x: " + x + ". Valor de y: " + y + ".")
}

swapValues(3, 4)
swapValues(4, 5)

// 6. Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido
// (no use el método reverse()).

function reverseArray(arr){
   let arrayAlreves = []

    for (let i = arr.length - 1; i >= 0; i--){
        arrayAlreves = arrayAlreves + " " + arr[i] 
    }
    return arrayAlreves
}

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

// 7. Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array 
//- capitalizedarray.

function capitalizeArray(array){
    let otro = array.join("")
    otro = otro.toLowerCase()
    return otro
}

console.log(capitalizeArray(["C", "e", "c", "i", "l", "i", "A"]))

// 8. Declare una función llamada addItem. Toma un elemento de paŕametro y 
// retorna un array después de agregar el un elemento.
let array = []
function addItem (item) {
    if (array.length >= 0) {
        array = array + " " + item
        return array
    } 
}

console.log(addItem(1))
console.log(addItem(2))
console.log(addItem(3))

// 9. Declare una función llamada removeItem. 
// Toma como parámetro un index y retorna un array después de 
// eleminar el elemento con ese index.

function removeItem(index){
    let frutas = ["Banana", "Manzana", "Sandia", "Uvas"]
    if (index > frutas.length - 1){
        return "Fuera de indice"
    } else {
        return frutas.slice(index)
    }
}

console.log(removeItem(1))
console.log(removeItem(2))
console.log(removeItem(7))

// 10. Declare una función llamada sumOfNumbers.
// Toma un número como parámetro y suma todos los números en ese rango.

function sumOfNumbers (a, b) {
    let total = 0
    for(a; a <= b; a++){
        total = total + a
    }
    return "La suma total es: " + total
}

console.log(sumOfNumbers(5, 10))
console.log(sumOfNumbers(7, 21))
console.log(sumOfNumbers(3, 5))

// 11. Declare una función llamada sumOfOdds. 
// Toma un parámetro numérico y suma todos los números impares en ese rango.

function sumOfOdds (a, b) {
    let total = 0
    for(a; a <= b; a++){
        if (a % 2 == 0) {
            total = total + a
        }
    }
    return "La suma total de los pares es: " + total
}

console.log(sumOfOdds(5, 10))
console.log(sumOfOdds(7, 21))
console.log(sumOfOdds(3, 5))

// 12. Declare una función llamada sumOfEven. 
// Toma un parámetro numérico y suma todos los números pares en ese rango.

function sumOfEven (a, b) {
    let total = 0
    for(a; a <= b; a++){
        if (a % 2 != 0) {
            total = total + a
        }
    }
    return "La suma total de los impares es: " + total
}

console.log(sumOfEven(5, 10))
console.log(sumOfEven(7, 21))
console.log(sumOfEven(3, 5))

// 13.  Declare una función llamada evensAndOdds . 
//Toma un entero positivo como parámetro y cuenta el número de pares e impares.
/*
    evensAndOdds(100);
    El número de impares son 50.
    El número de pares es 51.
*/ 
function evensAndOdds(num){
    let par = 0
    let impares = 0
    for(a = 0; a <= num; a++){
        if (a % 2 == 0) {
            par = par + 1
        } else {
            impares = impares + 1
        }
    }
    console.log("El número de impares son: " + impares)
    console.log("El número de pares es: " + par)
}
evensAndOdds(100)

// 14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
/*
    sum(1, 2, 3); // -> 6
    sum(1, 2, 3, 4); // -> 10
*/

function sum(a, b, c, d) { 
    if(!d){ d = 0}
    if(!c){ c = 0}

    let total = a + b + c + d  
    console.log("La suma total es: " + total)
}
sum(1, 2, 3)
sum(1, 2, 3, 4)

// 15. Escriba una función randomUserIp que genere una ip de usuario aleatoria.
function randomUserIp(){
    let ip1 =  Math.floor(Math.random() * 200)
    let ip2 =  Math.floor(Math.random() * 200)
    let ip3 =  Math.floor(Math.random() * 10)
    let ip4 =  Math.floor(Math.random() * 10)

    console.log("IP: (" + ip1 + "." + ip2 + "." + ip3 + "." + ip4 + ")")
}

randomUserIp()

//16. Escriba una función randomMacAddress que genere una dirección mac aleatoria.
// Ni idea como es una direccion mac

// 17. Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, 
// genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
/*
    console.log(randomHexaNumberGenerator());
    '#ee33df'
*/

function randomHexaNumberGenerator(){
    banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    aleatoria = "";
    for (let i = 0; i <= 7; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    console.log("Cadena aleatoria: #" + aleatoria)
}

randomHexaNumberGenerator()

// 18. Declare una función llamada userIdGenerator. 
// Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
/*
    console.log(userIdGenerator());
    41XTDbE
*/ 
function userIdGenerator(){
    banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    aleatoria = "";
    for (let i = 0; i <= 7; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return ("El id es:" + aleatoria)
}
console.log(userIdGenerator())