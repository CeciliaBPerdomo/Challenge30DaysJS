console.log("--------------------------")
console.log(" -- DAY 13 -- NIVEL 03 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

// 1. Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");