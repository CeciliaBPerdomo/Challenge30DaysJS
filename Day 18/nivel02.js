console.log("--------------------------")
console.log(" -- DIA 18 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1.  Imprime todos los nombres de los gatos en la variable catNames
const catsAPI = "https://api.thecatapi.com/v1/breeds"

fetch(catsAPI)
  .then((response) => response.json()) // acceder a los datos de la API como JSON
  .then((data) => {
    // obtener los datos
    console.log(data);
  })
  .catch((error) => console.error(error))