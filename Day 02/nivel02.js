// 1. Usando console.log() imprima la siguiente declaración:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let holmes = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(holmes)

// 2. Usando console.log() imprima la siguiente cita de la Madre Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let teresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(teresa)

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log(typeof 10) 

// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
let num = "9.8"
let numFloat = parseFloat(num)
console.log(numFloat)

let numInt = parseInt(num);
console.log(numInt + 1)

// 4.  Verifique si 'on' se encuentra tanto en Python como en la jerga
let texto1 = "Python"
let texto2 = "en la jerga"
console.log(texto1.includes("on"))
console.log(texto2.includes("on"))

// 5. Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
let oracion2 = "Espero que este curso no esté lleno de jerga"
console.log(oracion2.includes("jargon"))

// 6. Genere un número aleatorio entre 0 y 100 inclusive.
let num1 = Math.floor(Math.random() * 101)
console.log(num1)

// 7. Genere un número aleatorio entre 50 y 100 inclusive.
let num2 = Math.floor((Math.random() * (101- 50))+50)
console.log(num2)

// 8. Genere un número aleatorio entre 0 y 255 inclusive.
let num3 = Math.floor(Math.random() * 256)
console.log(num3)

// 9. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let caract = "JavaScript"
let posicion = Math.floor(Math.random() * 10)
console.log(caract.charAt(posicion))

// 10.  Use console.log() y caracteres de escape para imprimir el siguiente patrón.
/*
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
*/
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

// 11. Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion3 = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(oracion3.indexOf("porque"))
console.log(oracion3.substr(35, 20))


