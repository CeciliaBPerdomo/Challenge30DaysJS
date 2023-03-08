// 1. Encuentre el precio total de los productos encadenando dos o más iteradores de matrices 
// (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).

const products = [
    { product: "banana", price: 3},
    { product: "mango", price: 6},
    { product: "potato", price: 4},
    { product: "avocado", price: 8},
    { product: "coffee", price: 10},
    { product: "tea", price: 5},
  ];
  
  const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya", 
    "France", 
    "Fiji"
    ];
  
  const sumArray = (arr) => {
    let sum = 0 
    const productPrice = arr.filter((product) => product.price >= 1)
    productPrice.map(function(element){
        sum += element.price
    })
    return sum
}

console.log(sumArray(products))

// 2.  Encuentre la suma del precio de los productos usando sólo reduce(callback)).

// 3. Declara una función llamada categorizeCountries que retorna un array de países que tienen 
// algún patrón común (encuentras el array de países en este repositorio como countries.js
// (ej 'land', 'ia', 'island','stan')).
function categorizeCountries(arr) {
    const paises = arr.filter((country) => country.includes("land"));
    console.log(paises)
}

categorizeCountries(countries)

// 4. Cree una función que retorne un array de objetos, que es la letra y el número de veces 
// que la letra usa para empezar el nombre de un país.
function letra(arr){
    let total = 0
    const paises = arr.filter((country) => country.includes("a"));
    paises.map(function(element){
        if (element.includes("A")){
            total += 1
            console.log(element)
        }
    })
    console.log("Total: " + total)
}
letra(countries)

// 5. Declara una función getFirstTenCountries y retorna un array de diez países. 
// Utiliza diferente programación funcional para trabajar en el array countries.js.
function getFirstTenCountries(arr){
    arr.map(function(element, index){
        if(index < 10){
            console.log((index + 1) + ". " + element)
        }
    })
}
getFirstTenCountries(countries)

// 6. Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
function getLastTenCountries(arr) {
    let long = arr.length
    long = long - 10
    arr.map(function(element, index){
        if(index >= long){
            console.log((index + 1) + ". " + element)
        }
    })

}
getLastTenCountries(countries)

// 7. Encuentre qué letra se utiliza muchas veces 
// como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)