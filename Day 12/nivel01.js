console.log("--------------------------")
console.log(" -- DAY 12 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
// Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 
// Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes.

function ganar(){
    let sueldo = 4000
    let bonif = 10000
    let cursos = 5500

    let total = (sueldo * 12) + bonif + cursos

    console.log("Sueldo del mes: $" + total)
}

ganar()

// La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa,
// 0 en el origen, 4 y 8 en la dirección positiva. 
// Extrae estos números y encuentra la distancia entre las dos partes más lejanas.

// Cuando sea ingeniera, lo hago, ta?

// Escribir un patrón que identifique si una cadena es una variable JavaScript válida

console.log("--------------------------")
console.log(" ----- Ejercicio 02 ------")
function is_valid_variable(variable){
    const pattern = /^first_/
    const pattern2 = /^firstn/ 

    const matches = variable.match(pattern);
    const matches2 = variable.match(pattern2);

    if (matches){
        console.log(variable + " true")
    }else if(matches2){
        console.log(variable + " true")
    } else {
        console.log(variable + " false")
    }
}
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True

