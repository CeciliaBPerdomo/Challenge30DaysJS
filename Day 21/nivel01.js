console.log("--------------------------")
console.log(" -- DIA 21 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1. Crear un archivo index.html y poner cuatro elementos p: Obtenga el primer párrafo utilizando 
// document.querySelector(tagname) y el nombre de la etiqueta

let firstTitle = document.querySelector("h1")
console.log(firstTitle)

// 2. Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
let secondTitle = document.getElementById("second-title");
console.log(secondTitle)


// 3. Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta 
const allTitles = document.querySelectorAll('h1') //# selects all the available h1 elements in the page


// 4. Recorrer nodeList y obtener el contenido del texto de cada párrafo
console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))

// 5. Establecer un textContent para el párrafo del cuarto párrafo,Fourth Paragraph
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title")
titles[3].textContent = "Cuarto titulo"

// 6. Establezca los atributos id y class para todos los párrafos utilizando diferentes métodos de 
// establecimiento de atributos
const titulo = document.querySelectorAll("h1");
titulo[3].className = "cuarto-titulo";
titulo[3].id = "cuarto-titulo";
console.log(titulo)