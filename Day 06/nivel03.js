// 1. Copia el array countries (Evita mutaciones)
const countries = ["Uruguay", "Brazil", "Peru", "Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya", "Iceland"]
console.log(countries)

// 2. Los arrays son mutables. Crea una copia del array que no modifique el original. 
// Ordena la copia del array y guárdala en una variable sortedCountries
let paises = countries.sort()
console.log(paises)

// 3. Ordena el array webTechs y el array mernStack
webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ]

const mernStack = ["MongoDB", "Express", "React", "Node"]

console.log(webTechs.sort())
console.log(mernStack.sort())

// 4. Extrae todos los países que contengan la palabra 'land' del array countries e 
// imprimela como un array

let land = ""
conland = []
sinland = []
  for (let i = 0; i < countries.length; i ++){
    land = countries[i].includes("land")
    if (land == true){
        conland = conland + " " + countries[i]
    } else {
        sinland = sinland + " " + countries[i]
    }
}
console.log("Pais con land: " + conland)
console.log("Este pais no contiene land: " + sinland)

// 5. Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
let l = countries.length;

let arr = countries
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[j].length > arr[j + 1].length ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }
  console.log("Pais con mayor cantidad de letras: " + arr[(countries.length - 1)])

// 6. Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
land = ""
sinland = []
  for (let i = 0; i < countries.length; i ++){
    land = countries[i].includes("land")
    if (land != true){
        sinland = sinland + " " + countries[i]
    }
}

console.log("Paises sin land: " + sinland)

// 7. Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
let otroArray = []
for (let i = 0; i < countries.length; i ++){
  if (countries[i].length == 4){
      otroArray = otroArray + " " + countries[i]
  } 
}

if (otroArray.length >= 1) {
  console.log("Paises con 4 caracteres:" + otroArray)
} else {
  console.log("No hay paises con 4 caracteres.")

}

// 8. Extrae todos los países que contengan dos o más palabras del array countries e imprimela como un array
// Te lo debo, no entendi que hay que hacer

// 9. Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
let ordenados = countries.sort()
ordenados = ordenados.reverse()
ordenados = ordenados.toString()
ordenados = ordenados.toUpperCase()
console.log("Paises: " + ordenados)