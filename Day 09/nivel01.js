const countries = [
"Albania",
"Bolivia",
"Canada",
"Denmark",
"Ethiopia",
"Finland",
"Germany",
"Hungary",
"Ireland",
"Japan",
"Kenya"
];

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 2. Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
console.log("Arrow Function")
countries.forEach((element, index, countries) => {
    console.log(element);
})

// 3. Utiliza forEach para mostrar con console.log cada país del array de países.
console.log("forEach")
countries.forEach(function (element, index, countries) {
    console.log(element);
});

// 4. Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
names.forEach((element) => {console.log(element)})

// 5. Utiliza forEach para mostrar con console.log cada número del array de números.
numbers.forEach((element) => {console.log(element)})

// 6. Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
countries.forEach((element) => console.log(element.toUpperCase()))

// 7. Utilice map para crear un array de longitudes de países a partir del array de países.
countries.forEach((element) => console.log(element.length))

// 8. Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

// 9.  Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase)

// 10. Utilice map para asignar el array de productos a sus correspondientes precios.
// No entendi

// 11.  Utilice filter para filtrar los países que contienen land.
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand)

// 12. Utilice filter para filtrar los países que tienen seis caracteres.
const sixLetters = countries.filter(
  (country) => country.length === 6
);
console.log(sixLetters);

// 13. Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const moreSixLetters = countries.filter(
  (country) => country.length >= 6
);
console.log(moreSixLetters);

// 14. Utilice filter para filtrar los países que empiezan por "E";
const countryE = countries.filter((country) => country.startsWith("E"))
console.log(countryE)

// 15. Utilice filter para filtrar sólo los precios con valores.
const productPrice = products.filter((product) => product.price >= 1);
console.log(productPrice)

// 16. Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
function getStringLists (){
  let texto = ""
  countries.forEach(function (element) {
      texto = texto + " " + element;
  });
  console.log(texto)
}
getStringLists()

// 17. Usa reduce para sumar todos los números del array de números.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum)

// 18. Utiliza reduce para concatenar todos los países y producir esta frase: 
// Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const frase = countries.reduce((acc, cur) => acc + " " + cur, "Son paises del norte de Europa: ")
console.log(frase)

// 19. Explique la diferencia entre some y every

// 20. Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
const longNames = names.map((name) => name.longitud);
const seven = longNames.some((element) => element >= 7)
console.log(seven)

// 21. Utilice every para comprobar si todos los países contienen la palabra land.
const land = countries.every((country) => country.includes("land"))
console.log(land)

// 22. Explique la diferencia entre find y findIndex.

// 23. Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
const result = countries.find((country) => country.length === 6);
console.log(result)

// 24. Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
const resultado = countries.findIndex((country) => country.length === 6);
console.log(resultado)

// 25. Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1
const Norway = countries.findIndex((country) => country == "Norway");
console.log(Norway)

// 26. Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
const Russia = countries.findIndex((country) => country == "Russia");
console.log(Russia)
