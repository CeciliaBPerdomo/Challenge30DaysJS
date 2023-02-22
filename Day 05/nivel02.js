// 1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, 
// cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo.
// Acceda a ambos archivos en el archivo main.js

const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ]

// 2. Primero elimine todos los signos de puntuación y cambie de string a array y 
// cuente el número de palabras en el array

let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
//console.log(words);
// console.log(words.length);

// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(text)

let words = text.split(",")
console.log(words)
console.log("Longitud del array: " + words.length)

words = text.split(" ")
console.log(words)
console.log("Longitud del array: " + words.length)

// 3.  En el siguiente carrito de compras agregue, elimine, edite artículos

    const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
    console.log(shoppingCart)

// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
shoppingCart.unshift("Meat")
console.log(shoppingCart)

// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
shoppingCart.push("Sugar")
console.log(shoppingCart)

// Elimine 'Honey' si es alérgico a la miel (honey)
shoppingCart.splice(4, 1)
console.log(shoppingCart)

// Modificar Tea a 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

// 4. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'.
// Si no existe agregar a la lista de países.
if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
} else {
    countries.push("Euthopia")
    console.log(countries)
}

// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 
// 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

if(webTechs.includes("Sass")){
    console.log("Sass es un preproceso de CSS")
} else {
    webTechs.push("Sass")
    console.log(webTechs)
}

// 6. Concatene las siguientes dos variables y guardelas en una variable fullStack.

    const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
    const backEnd = ["Node", "Express", "MongoDB"];

    
    // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)