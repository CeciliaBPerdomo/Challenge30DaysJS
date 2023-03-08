const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway", "Uruguay", "Argentina"]

// 1. crear un set vacío
const numeros = new Set();
console.log(numeros)

// 2. Crear un set que contenga de 0 a 10 utilizando el bucle
for(let i = 0; i < 11; i++){
    numeros.add(i)
}
console.log(numeros)

// 3. Eliminar un elemento de set
numeros.delete(4)
console.log(numeros)

// 4. Limpia set
numeros.clear()
console.log(numeros)

// 5. Crear un set de 5 elementos string a partir de un array
const paises = new Set(countries)
console.log(paises)

// 6. Crear un map de países y el número de caracteres de un país
const counts = [];

for (const l of paises) {
  counts.push({ pais: l, caracteres: l.length });
}
console.log(counts);
