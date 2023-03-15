console.log("--------------------------")
console.log(" -- DIA 18 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1. Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas,
// la población y la superficie.

const countriesAPI = "https://restcountries.com/v2/all"

fetch(countriesAPI)
  .then((response) => response.json()) // acceder a los datos de la API como JSON
  .then((data) => {
    // obtener los datos
    console.log(data);
  })
  .catch((error) => console.error(error))
