Ejercicios:Nivel 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

    crear un set vacío
    Crear un set que contenga de 0 a 10 utilizando el bucle
    Eliminar un elemento de set
    Limpia set
    Crear un set de 5 elementos string a partir de un array
    Crear un map de países y el número de caracteres de un país

Ejercicios:Nivel 2

    Encontrar a unión b
    Encontrar a intersección b
    Encontrar a con b

Ejercicios:Nivel 3

    Cuántos idiomas hay en el archivo de objetos de países.

    *** Utiliza los datos de los países para encontrar las 10 lenguas más habladas:

// El resultado debería ser el siguiente
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
];

// El resultado debería ser el siguiente
console.log(mostSpokenLanguages(countries, 3))[
  ({ English: 91 }, { French: 45 }, { Arabic: 25 })
];