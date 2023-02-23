// 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
// fe3jo1gl124g  //12
// xkqci4utda1lmbelpkm03rba //23 

let banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let aleatoria = "";
for (let i = 0; i <= 12; i++) {
    aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
}
console.log("Cadena aleatoria: " + aleatoria)

aleatoria = "";
for (let i = 0; i <= 23; i++) {
    aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
}
console.log("Cadena aleatoria: " + aleatoria)

// 2. Escribe un script que genere un número hexadecimal aleatorio.
// '#ee33df'
banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
aleatoria = "";
for (let i = 0; i <= 7; i++) {
    aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
}
console.log("Cadena aleatoria: " + aleatoria)

// 3.  Escribe un script que genere un número de color rgb aleatorio.
// rgb(240,180,80)
let r = ""
let g = ""
let b = ""

r = Math.floor(Math.random() * 255)
g = Math.floor(Math.random() * 255)
b = Math.floor(Math.random() * 255)

console.log("rgb(" + r + ", " + g + ", " + b +")")

// 4. Usando el array countries anterior, crea un array como el siguiente.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya", "Iceland"]
let paises = []
for (let i = 0; i < countries.length; i ++){
    paises[i] = countries[i].toUpperCase()
}
console.log("Paises: " + paises)

// 5. Usando el array countries anterior, crea un array para saber la longitud de cada país.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let longitud = []
for (let i = 0; i < countries.length; i ++){
    longitud[i] = countries[i].length
}
console.log("Longitud de paises: " + longitud)

// 6.  Utiliza el array countries para crear la siguiente array de arrays
/*
[
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
  */ 
  let arrayPaises = []
  for (let i = 0; i < countries.length; i ++){
      arrayPaises[i] = [countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]
  }
  console.log(arrayPaises)

  // 7. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. 
  // Si hay países que contienen 'land', imprimelo cono array.
  // Si no hay ningún país que contenga la palabra'land', imprima 
  // 'Todos estos países no tienen la palabra land'.
  // ['Finland','Ireland', 'Iceland']

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

// 8. En el array countries anterior, verifica si hay un país que termina con una 
// subcadena (substring) 'ia'. Si hay países que terminan con 'ia', 
// imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', 
// imprime 'Estos países no terminan con ia'.
// ['Albania', 'Bolivia','Ethiopia']
land = ""
conia = []
sinia = []
  for (let i = 0; i < countries.length; i ++){
    land = countries[i].includes("ia")
    if (land == true){
        conia = conia + " " + countries[i]
    } else {
        sinia = sinia + " " + countries[i]
    }
}

console.log("Pais con ia: " + conia)
console.log("Este pais no contiene ia: " + sinia)

// 9. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.
// Ethiopia
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

  // 10. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.
  //  ['Japan', 'Kenya']
  let otroArray = []
  for (let i = 0; i < countries.length; i ++){
    if (countries[i].length == 5){
        otroArray = otroArray + " " + countries[i]
    }
  }
console.log("Paises con 5 letras: " + otroArray)

// 11. Encuentra la palabra más larga en el array webTechs
webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ]

l = webTechs.length;
arr = webTechs
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[j].length > arr[j + 1].length ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }
  console.log("WebTech con mayor cantidad de letras: " + arr[(webTechs.length - 1)])

  // 12. Utiliza el array de webTechs para crear la el siguiente array de arrays:
 //   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let ArrayTech = []
 for (let i = 0; i < webTechs.length; i++){
  ArrayTech[i] = webTechs[i] + ", " + webTechs[i].length 
 }
console.log(ArrayTech)

// 13. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. 
// Crea el acrónimo MERN usando el array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"]
let siglas = []
for (let i = 0; i < mernStack.length; i++ ) {
    siglas = siglas + "" + mernStack[i].slice(0, 1)
}
console.log(siglas)

// 14. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// usando el bucle for o el bucle for of e imprime los elementos.
const mern = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for (const tech of mern) {
    console.log(tech);
  }

// 15. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] 
// invierte el orden usando un bucle sin usar el método reverse().
const frutas = ['banana', 'orange', 'mango', 'lemon']
for (let i = frutas.length - 1; i >= 0; i--){
    console.log(frutas[i])
}

// 16. Imprime todos los elementos del array como se muestra a continuación:

    const fullStack = [
        ["HTML", "CSS", "JS", "React"],
        ["Node", "Express", "MongoDB"],
      ];
  
 /*       HTML
        CSS
        JS
        REACT
        NODE
        EXPRESS
        MONGODB
    */ 
    
for (let i = 0; i < fullStack.length; i++ ) {
    for (let j = 0; j <= fullStack.length; j++ ) {
        console.log((fullStack[i][j]).toUpperCase())
    }
}
