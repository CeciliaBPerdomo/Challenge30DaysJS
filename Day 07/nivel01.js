// 1. Declare una función fullName e imprima su nombre completo.
function fullName(){
    console.log("Cecilia Perdomo")
}

fullName()

// 2. Declare una función fullName y
// ahora toma firstName, lastName como parámetro y retorna su nombre completo.

function fullName2(){
    let firstName = "Cecilia"
    let lastName = "Perdomo"
    return firstName + " " + lastName
}

console.log(fullName2())

// 3. Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
function addNumbers (a, b) {
    let total = a + b
    return total
}

console.log("La suma total es: " + addNumbers(1, 2))

// 4 El área de un rectángulo se calcula de la siguiente manera: area = length x width. 
// Escribe una función areaOfRectangle que calcule el área de un rectángulo.

function areaOfRectangle(){
    let length = 8
    let width = 5
    let area = length * width

    return area
}

console.log("El area del rectangulo es: " + areaOfRectangle())

// 5. El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). 
// Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.

function perimeterOfRectangle(){ 
    let length = 8
    let width = 5
    let permietro = 2 * (length + width)

    console.log("El perimetro del rectangulo es: " + permietro)
}

perimeterOfRectangle()

// 6. El volumen de un prisma rectangular se calcula de la siguiente manera: 
// volume = length x width x height. 
// Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
function volumeOfRectPrism(){ 
    let length = 8
    let width = 5
    let height = 10
    let volume = length * width * height

    console.log("El volumen del prisma es: " + volume)
}

volumeOfRectPrism()

// 7. El área de un círculo se calcula de la siguiente manera: area = π x r x r. 
// Escribe una función areaOfCircle que calcule el área de un círculo.

function areaOfCircle(){ 
    let r = 8
    let area = 3.14 * r * r

    console.log("El área del círculo es: " + area)
}

areaOfCircle()

// 8. La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. 
// Escribe una función circumOfCircle que calcule la circunferencia de un círculo.

function circumOfCircle(){ 
    let r = 8
    let area = (2 * 3.14) * r

    console.log("El área del círculo es: " + area)
}

circumOfCircle()

// 9. La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. 
// Escribe una función density que calcule la densidad de una sustancia.

function density(){ 
    let mass = 8
    let volume = 5
    let density = mass / volume

    console.log("La densidad de la sustancia es: " + density)
}

density()

// 10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en 
// movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en 
// movimiento, speed.


function speed(){ 
    let distancia = 100
    let tiempo = 5
    let velocidad = distancia / tiempo

    console.log("La velocidad es: " + velocidad)
}

speed()

// 11. El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. 
// Escribe una función weight que calcule el peso de una sustancia.

function weight(){
    let mass = 8
    let gravity = 10
    let weight = mass * gravity

    console.log("El peso de una sustancia es: " + weight)

}
weight()

// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32.
// Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.

function convertCelsiusToFahrenheit(){
    let c = 32
    let f = (c * 9/5) + 32
    console.log(c + "°C son " + f + "°F.")
}
convertCelsiusToFahrenheit()

// 13. El índice de masa corporal (IMC) se calcula de la siguiente manera: 
// imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. 
// El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. 
// Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
/* Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
Peso bajo: IMC inferior a 18,5
Peso normal: IMC de 18,5 a 24,9
Sobrepeso: IMC de 25 a 29,9
Obeso: IMC es 30 o más*/

function imc(peso, altura) {
    altura = altura * altura
    let calculo = parseInt((peso / altura) * 10000)

    if (calculo <= 18.5) {
        console.log("Su IMC es: " + calculo + ". Peso bajo.")
    } else if (calculo >= 18.6 && calculo <= 24.9) {
        console.log("Su IMC es: " + calculo + ". Peso normal.")
    } else if (calculo >= 25 && calculo <= 29.9){
        console.log("Su IMC es: " + calculo + ". Sobrepeso.")
    } else if (calculo >= 30){
        console.log("Su IMC es: " + calculo + ". Obeso.")
    }
}

imc(70, 161)
imc(80, 187)
imc(90, 120)


// 14. Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: 
// Otoño, Invierno, Primavera o Verano.

function checkSeason(mesS) {
    let mes = mesS.toLowerCase()
    if (mes == "diciembre" || mes == "enero" || mes == "febrero"){
        console.log(mesS + ": la temporada es verano.")
    } else if (mes == "setiembre" || mes == "octubre" || mes == "noviembre"){
        console.log(mesS + ": la temporada es primavera.")
    } else if (mes == "marzo" || mes == "abril" || mes == "mayo"){
        console.log(mesS + ": la temporada es otoño.")
    } else {
        console.log(mesS + ": la temporada es invierno.")
    }
}

checkSeason("Agosto")
checkSeason("Setiembre")
checkSeason("Enero")

// 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
/*
    console.log(findMax(0, 10, 5));
    10;
    console.log(findMax(0, -10, -2));
    0;
*/

function findMax(a, b, c) {
    let max = Math.max(a, b, c)
    return max
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))