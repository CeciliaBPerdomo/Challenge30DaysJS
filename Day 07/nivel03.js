// 1.  Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. 
//No toma ningún parámetro pero toma dos entradas usando prompt().
// Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se 
//supone que se generarán.
/*
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
*/

function userIdGenerator(cantidadIds, cantidadCaracteres){
    banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    aleatoria = "";
    let j = 1

    while (j <= cantidadIds) {
        for (let i = 0; i < cantidadCaracteres; i++) {
            aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
        }
        console.log("El id es:" + aleatoria)
        aleatoria = ""
        j++
    }
}

userIdGenerator(5, 5)
userIdGenerator(5, 15)

// 2. Escriba una función llamada rgbColorGenerator que genera colores rgb
/*
rgbColorGenerator()
rgb(125,244,255)
*/

function rgbColorGenerator() {
    let r = ""
    let g = ""
    let b = ""

r = Math.floor(Math.random() * 255)
g = Math.floor(Math.random() * 255)
b = Math.floor(Math.random() * 255)

console.log("rgb(" + r + ", " + g + ", " + b +")")
}

rgbColorGenerator()
rgbColorGenerator()

//3. Escriba una función arrayOfHexaColors 
// que retorna cualquier cantidad de colores hexadecimales en un array.

function arrayOfHexaColors(cantidad){
    let array =[]
    
    for (let i = 0; i <= cantidad; i ++){
        let color = Math.floor(Math.random() * 255)
        let color1 = Math.floor(Math.random() * 255)
        let colorTotal = "#" + color + color1

        array[i] = colorTotal
        color = ""
        color1 =""
        colorTotal = ""
    } 
    console.log(array)

}

arrayOfHexaColors(3)

// 4. Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.

function arrayOfRgbColors(cantidad){
    let r, g, b = ""

    for (let i = 0; i < cantidad; i ++){
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        console.log("rgb(" + r + ", " + g + ", " + b +")")
        r, g, b = ""
    } 

}
arrayOfRgbColors(3)

// 5. Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
/*
    console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors("hexa", 1)); // '#b334ef'
    console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
*/
function generateColors(tipo, cantidad){
    if (tipo == "hexa"){
        arrayOfHexaColors(cantidad)
    } else if(tipo == "rgb") {
        arrayOfRgbColors(cantidad) 
    } else {
        console.log("Mandaste cualquiera")
    }
}

generateColors("hexa", 3)
generateColors("hexa", 1)
generateColors("rgb", 3)
generateColors("rgb", 1)

// 6. Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
function shuffleArray(array){
    console.log(array.reverse())
}
shuffleArray(["Banana", "Sandia", "Uvas", "Higos", "Manzana"])

// 7. Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
// jajajajajaja

// 8. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
function isEmpty(param){
    if(!param){
        console.log("Parametro vacio")
    } else {
      console.log("El parametro es: " + param)  
    }
}

isEmpty()
isEmpty("Hello")

// 9. Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. 
//Compruebe si todos los elementos de la matriz son tipos de números. 
// Si no, dé una respuesta razonable.

function sumOfArrayItems(array){
    let total = 0
    let flag = true
    
    for (let i = 0; i < array.length; i ++){
        tipo = array[i]
        if (typeof(tipo) != "number") {
            flag = false
        }
    }
    
    if (flag == true) {
        for (let i = 0; i < array.length; i ++){
            total = total + array[i]
        }
        console.log("La suma total es: " + total)
    } else {
        console.log("Pusiste un valor que no correspondia en el array: " + array)
    }
}

sumOfArrayItems([2, 3, 4, 1])
sumOfArrayItems([2, "A", 4, 1])

// 10. Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. 
// Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.

function average(array){
    let total = 0
    let flag = true
    
    for (let i = 0; i < array.length; i ++){
        tipo = array[i]
        if (typeof(tipo) != "number") {
            flag = false
        }
    }
    
    if (flag == true) {
        for (let i = 0; i < array.length; i ++){
            total = total + array[i]
        }
        let longitud = array.length
        let promedio = total / longitud
        console.log("El promedio del array es: " + promedio)
    } else {
        console.log("Pusiste un valor que no correspondia en el array: " + array)
    }
}
average([2, 3, 4, 1])
average([2, "A", 4, 1])

// 11. Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto
// elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 
// 'elemento no encontrado'.

function modifyArray (array){
    if (array.length < 5){
        return "Not found"
    } else {
        let texto = array[4]
        texto = texto.toUpperCase()
        array[4] = texto
    }
    return array
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])) // ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM'])) // ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon'])) // 'Not Found'

// 12. Escribe una función llamada isPrime, que verifica si un número es un número primo.
// Y dale, que no se como se hace para saber si es primo o no

// 13.  Escriba una función que verifique si todos los elementos son únicos en un array.
// Me aburri de pensar 

// 14. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
function tipoDatos(array){
    let flag = true
    
    for (let i = 0; i < array.length; i ++){
        tipo = array[i]
        if (typeof(tipo) != "number") {
            flag = false
        } 
    }
    
    if (flag == true) {
        console.log("Todos los datos son numericos")
    } else {
        console.log("Pues no mi ciela: " + array)
    }
}
tipoDatos([2, 3, 4, 1])
tipoDatos([2, "A", 4, 1])

// 15.  El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, 
// excepto $ o _. 
// Escriba una función isValidVariable que verifique si una variable es válida o inválida.

function isValidVariable(array){
    if (array.includes("%")){
        console.log("Ups! No puede incluir %")
    } else if (array.includes("!")){
        console.log("Ups! No puede incluir !")
    } else if (array.includes("@")){
        console.log("Ups! No puede incluir @")
    } else if (array.includes("&")){
        console.log("Ups! No puede incluir &")
    } else if (array.includes("*")){
        console.log("Ups! No puede incluir *")
    } else if (array.includes("(")){
        console.log("Ups! No puede incluir (")
    } else if (array.includes(")")){
        console.log("Ups! No puede incluir )")
    } 
}
isValidVariable([2, "A", 4, 1, "%"])
isValidVariable([2, "A", 4, 1, "&"])
isValidVariable([2, "A", 4, 1, "$"])

// 16. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. 
// Todos los números deben ser únicos.
// sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];

function sevenRandomNumbers() {
    let numRandom = 0
    let array = []
   
    for (let i = 0; array.length <= 7; i++){
        numRandom = Math.floor(Math.random() * 10)
         if (!array.includes(numRandom)){
            array.push(numRandom)
        }
    } 
    console.log(array)
    

}
sevenRandomNumbers()

// 18. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array 
// y retorna el array original invertido 
function reverseCountries (array){
    let copiaArray = array
    copiaArray = copiaArray.reverse()
    return copiaArray
}

console.log(reverseCountries(["Uruguay", "Argentina", "Brasil", "Chile", "Peru", "Mexico"]))