/*
console.log("--------------------------")
console.log(" -- DIA 18 -- NIVEL 03 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1. Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
const cats = "https://api.thecatapi.com/v1/breeds"

const fetchData = async () => {
    try {
        const response = await fetch(cats);
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
      console.error(err);
    }
  };
  
  fetchData()
 
*/
// 2. Lee la api de países y descubre los 10 países más grandes
// 3. Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales