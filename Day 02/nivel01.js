// 1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = "30 días de JavaScript"

// 2. Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio)

// 3. Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log("Longitud de la cadena: " + desafio.length + " caracteres.")

// 4. Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
let mayusculas = desafio.toUpperCase()
console.log(mayusculas)

// 5. Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
let minusculas = desafio.toLowerCase()
console.log(minusculas)

// 6. Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substr(3, 4))
console.log(desafio.substring(3, 4))

// 7. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.split());
console.log(desafio.split(" "))

// 8. Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes("script"))

// 9. Divide la cadena en un array usando el método split()
console.log(desafio.split())

// 10. Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafio.split(" "))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let redes = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(redes.split(","))

// 12. Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace("JavaScript", "Python"))

// 13. ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafio.charAt(15))

// 14. ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafio.charCodeAt(12));

// 15. Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf("a")); // 4

// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf("a"))

// 17.  Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion)
console.log(oracion.indexOf("porque"))

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.lastIndexOf("porque"))

// 19. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.search("porque"))

// 20. Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(desafio.trim(" "))

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.startsWith("30")) 

// 22. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.endsWith("JavaScript")) 

// 23. Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(desafio.match("a"))

// 24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let texto = '30 días de '
console.log(texto.concat("JavaScript"))

// 25. Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2));
