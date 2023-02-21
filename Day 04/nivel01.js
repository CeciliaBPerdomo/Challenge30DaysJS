// 1.  Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
/*
    Ingrese su edad: 30
    Tiene la edad suficiente para conducir.

    Ingrese su edad:15
    Te faltan 3 años para conducir.
*/


let edad = parseInt(prompt("Ingrese su edad: "))
   
    if (edad > 18){
        console.log("Su edad es: " + edad + ". Esta habilitado para conducir")
    } else {
        let falta = 18 - edad
        console.log("Le faltan " + falta + " años para conducir.")
    }

    // 2. Compara los valores de myAge y yourAge usando if... else. 
    // Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo).
    // Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

    // Ingrese su edad: 30
    // Eres 5 años mayor que yo.

    let yourAge = parseInt(prompt("Ingrese su edad: "))
    let myAge = 25

    if(myAge > yourAge) {
        let total = myAge - yourAge 
        console.log("Soy " + total + " años mayor que tú.")
    } else { 
        total = yourAge - myAge
        console.log("Soy " + total + " años menor que tú.")
    }

    /* 
     Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
        Usando if else
        operador ternario.

    let a = 4;
    let b = 3;

      4 es mayor que 3 */

      let a = 4;
      let b = 3;

      if (a > b){
        console.log("a es mayor que b")
      } else {
        console.log("a es menor que b")
      }

      a > b ? console.log("a es mayor que b"): console.log("a es menor que b")

      /* 
      Los números pares son divisibles por 2 y el resto es cero. 
      ¿Cómo verificar si un número es par o no usando JavaScript?

    Ingrese un número: 2
    2 es un número par

    Ingrese un número: 9
    9 es un número impar */

    
let num1 = 2
let num2 = 9

if (num1 % 2 === 0){
    console.log("El numero " + num1 + " es par.")
} else {
    console.log("El numero " + num1 + " no es par.")
}

if (num2 % 2 === 0){
    console.log("El numero " + num2 + " es par.")
} else {
    console.log("El numero " + num2 + " no es par.")
}