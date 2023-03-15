/*
console.log("--------------------------")
console.log(" -- DIA 21 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")
*/ 

// 1. Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la
// fuente, familia de la fuente)

// 2. Seleccione todos los párrafos y haga un bucle a través de cada uno de los elementos y dé al primer 
// y tercer párrafo un color verde, y al segundo y cuarto párrafo un color rojo

// 3. Establecer textContent, id y class a cada párrafo

const titulos = document.querySelectorAll("p");
titulos.forEach((title, i) => {
  title.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
})

const paraf = document.querySelectorAll("p");
paraf.forEach((title, i) => {
  title.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    title.style.backgroundColor = "lightpink";
  } else {
    title.style.backgroundColor = "lightgreen";
  }
})