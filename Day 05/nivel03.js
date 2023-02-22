// 1. El siguiente es un array de 10 edades de estudiantes:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    console.log("Edad de los estudiantes: " + ages)

// Ordene el array y encuentre la edad mínima y máxima
let edad = ages.sort()
let minima = edad[0]
let maxima = edad[edad.length - 1]

console.log("Edad minima: " + minima)
console.log("Edad maxima: " + maxima)

// Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
let total = (minima + maxima) / 2
console.log("Edad media: " + total)

// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let prom = 0
let i = 0
for(i = 0; i < ages.length; i++){
    prom = ages[i] + prom
}

prom = prom / i
console.log("La edad promedio es: " + prom)

// Encuentre el rango de las edades (max menos min)
let rango = maxima - minima
console.log("El rango de edad es: " + rango)

// Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
let minimo = Math.abs(minima)
console.log("Valor minimo: " + minimo)

let max = Math.abs(maxima)
console.log("Valor maximo: " + max)

// 2. Cortar los diez primeros países de la array de países
const countries = ["Uruguay", "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]
console.log("Longitud de countries: " + countries.length)

let paises = countries.splice(0, 10)
console.log("Paises: " + paises)
console.log("Longitud de countries: " + paises.length)

// Encuentre el país o países de en medio en el array de países
let medio = (paises.length) / 2
console.log("Pais del medio: " + paises[medio])

// Divide el array de países en dos arrays iguales si es par.
// Si el array de países no es par, agregue un país más para la primera mitad.

let largo = paises.length

if (largo % 2 == 0) {
    let array1 = paises
    console.log(array1.slice(0, 5))
    console.log(paises.slice(5, 10))
}