/* Escribe un programa que diga el número de días en un mes.

  Introduce un mes: Enero
  Enero tiene 31 días.

  Introduce un mes: ENERO
  enero tiene 31 dias

  Introduce un mes: Febrero
  Febrero tiene 28 días.

  Introduce un mes: FEbrero
  Febrero tiene 28 días.

  con 31 dias enero marzo mayo julio agosto octubre diciembre
  con 30 abril junio setiembre noviembre
  con 28 - febrero


Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto. */

let mes = prompt("Ingrese un mes: ")
mes = mes.toLocaleLowerCase()

if (mes == "diciembre" || mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre"){
    console.log(mes + ": tiene 31 días.")
} else if (mes == "abril" || mes == "junio" || mes == "noviembre" || mes == "setiembre" ){
    console.log(mes + ": tiene 30 días.")
} else if (mes == "febrero") {
    let year = prompt("Ingrese el año: ")
    if (year % 4 === 0) {
        console.log(mes + ": tiene 29 días.")
    } else {
        console.log(mes + ": tiene 28 días.")
    } 
} else {
    console.log(mes + ": mes incorrecto")
}

