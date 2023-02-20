// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y 
// calcule el área de un triángulo (área = 0,5 x b x h).

// Ingrese base: 20
// Ingrese altura: 10
// El área del triángulo es: 100

let base = 20
let altura = 10
let area = 0

area = 0.5 * base * altura
console.log("El área del triángulo es: " + area)

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y 
// el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

//Ingrese lado a: 5
// Ingrese lado b: 4
// Ingrese lado c: 3
// El perimetro del triangulo es: 12

let a = 5
let b = 4
let c = 3
let perimetro = a + b + c 

console.log("El perímetro del triángulo es: " + perimetro)

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo 
// (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
let ancho = parseInt(prompt("Ingrese el ancho: "))
let largo = parseInt(prompt("Ingrese el largo: "))

perimetro = 2 * (ancho + largo)
console.log("El perimetro es: " + perimetro)

// 4. Obtenga el radio usando prompt y calcule el área de un círculo 
// (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.

let radio = parseInt(prompt("Ingrese el radio: "))
area = 2 * 3.14 * radio
console.log("El área de la circunferencia es: " + area)

// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
let x = 10
let y = (2 * x) - 2
console.log("Interseccion de Y es: " + y)

// 6. La pendiente es m = (y2-y1)/(x2-x1). 
// Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

y1 = 2 
x1 = 2
y2 = 6
x2 = 10
let m = (y2-y1)/(x2-x1)
console.log("La pendiente es: " + m)

// 7. Calcula el valor de y (y = x2 + 6x + 9). 
// Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

x = 0
x2 = -9
y = ((x2) + (6 * x) + 9)
console.log("Y es: " + y + ". x es: " + x + " y x2 es: " + x2)

// 8. Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

    // Ingrese horas: 40
    // Introduce la tarifa por hora: 28
    // Su ganancia semanal es 1120

let horas = parseInt(prompt("Ingrese cantidad de horas: "))
let tarifa = parseInt(prompt("Ingrese la tarifa por hora: "))
let ganancia = horas * tarifa
console.log("Su ganancia semanal es: " + ganancia + ".")

// 9. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, 
// diga que su nombre es corto.
let nombre = prompt("Ingrese su nombre: ")
let longNombre = nombre.length

if (longNombre > 7) {
    console.log("Su nombre es largo.")
} else {
    console.log("Su nombre es corto.")
}

// 10. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

    let firstName = "Asabeneh";
    let lastName = "Yetayeh";

   // Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.

   longNombre = firstName.length
   let longApellido = lastName.length

   if(longNombre > longApellido){
        console.log("Tu primer nombre, " + firstName + ", es más largo que tu apellido, " + lastName)
   } else { 
        console.log("Tu primer nombre, " + firstName + ", es más corto que tu apellido, " + lastName)
   }

   // 11. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

    let myAge = 250;
    let yourAge = 257;

    // Soy 225 años mayor que tú.
    if(myAge > yourAge) {
        let total = myAge - yourAge 
        console.log("Soy " + total + " años mayor que tú.")
    } else { 
        total = yourAge - myAge
        console.log("Soy " + total + " años menor que tú.")
    }

    // 12. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más,
    // permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

    /* 
        Introduzca el año de nacimiento: 1995 
        Tienes 25 años. Tienes la edad suficiente para conducir.

        Introduzca el año de nacimiento: 2008
        Tienes 15 años. Podrás conducir después de 3 años.
    */

    let nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "))
    const now = new Date();
    let actual = now.getFullYear()
    let edad = actual - nacimiento
    console.log("Tiene: " + edad)

    if (edad > 18){
        console.log("Esta habilitado para conducir")
    } else {
        let falta = 18 - edad
        console.log("Le faltan " + falta + " años para conducir.")
    }

    // 13. Escriba un script que solicite por prompt al usuario que ingrese el número de años. 
    // Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
        // Ingrese el número de años de vida: 100
        // Viviste 3153600000 segundos.
    
    let segundos = parseInt(prompt("Ingrese cuantos años tiene: "))
    segundos = new Date().getTime(segundos)
    console.log(segundos)

    // 14. Cree un formato de hora legible por humanos usando el objeto Date.
      /*
        YYYY-MM-DD HH:mm
        DD-MM-YYYY HH:mm
        DD/MM/YYYY HH:mm
      */

    const now1 = new Date();
    const year = now1.getFullYear(); 
    const month = now1.getMonth() + 1; 
    const date = now1.getDate(); 
    const hours = now1.getHours(); 
    const minutes = now1.getMinutes(); 

     // YYYY-MM-DD HH:mm    
    console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

    // DD-MM-YYYY HH:mm
    console.log(`${date}-${month}-${year} ${hours}:${minutes}`);

    // DD/MM/YYYY HH:mm 
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
