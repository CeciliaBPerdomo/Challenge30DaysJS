console.log("--------------------------")
console.log(" -- DAY 13 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

// 1. Mostrar la matriz de países como una tabla
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];
console.table(countries)

console.log("--------------------------")
console.log(" ----- Ejercicio 02 ------")

// 2. Mostrar el objeto países como una tabla
const paises = [
    {Pais: "Finland"}, 
    {Pais: "Helsinki"},
    {Pais: "Sweden"}, 
    {Pais: "Stockholm"},
    {Pais: "Norway"}, 
    {Pais: "Oslo"},
]
console.table(paises)

// 3. Utilice console.group() para agrupar los registros
console.log("--------------------------")
console.log(" ----- Ejercicio 03 ------")
console.group("Countries");
console.log(countries);
console.groupEnd();
