/* 1. 
 Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
        90-100, A
        70-89, B
        60-69, C
        50-59, D
        0-49, F
    */ 

        let nota = parseInt(prompt("Ingrese la nota: "))

        if (nota >= 90){
            console.log("Su nota: " + nota + " es A.")
        } else if (nota >= 70){
            console.log("Su nota: " + nota + " es B.")
        } else if (nota >= 60){
            console.log("Su nota: " + nota + " es C.")
        } else if (nota >= 50){
            console.log("Su nota: " + nota + " es D.")
        } else {
            console.log("Su nota: " + nota + " es F.")
        }

/* 2. 
    Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
     Si la entrada del usuario es :
        Septiembre, Octubre o Noviembre, la temporada es Otoño.
        Diciembre, Enero o Febrero, la temporada es Invierno.
        Marzo, Abril o Mayo, la temporada es Primavera
        Junio, Julio o Agosto, la temporada es Verano 
*/

let mes = prompt("Ingrese un mes: ")
mes = mes.toLocaleLowerCase()

if (mes == "diciembre" || mes == "enero" || mes == "febrero"){
    console.log(mes + ": la temporada es verano.")
} else if (mes == "setiembre" || mes == "octubre" || mes == "noviembre"){
    console.log(mes + ": la temporada es primavera.")
} else if (mes == "marzo" || mes == "abril" || mes == "mayo"){
    console.log(mes + ": la temporada es otoño.")
} else {
    console.log(mes + ": la temporada es invierno.")
}

/* 3. 
 Compruebe si un día es un día de fin de semana o un día laborable. 
 Su script tomará el día como entrada.
 */
let dia = prompt("Ingrese un dia: ")
dia = dia.toLocaleLowerCase()

switch (dia) {
    case "lunes":
      console.log("Hoy es Lunes, día laborable.");
      break;
    case "martes":
      console.log("Hoy es Martes, día laborable.");
      break;
    case "miercoles":
      console.log("Hoy es Miércoles, día laborable.");
      break;
    case "jueves":
      console.log("Hoy es Jueves, día laborable.");
      break;
    case "viernes":
      console.log("Hoy es Viernes, día laborable.");
      break;
    case "sabado":
      console.log("Hoy es Sábado, día de fin de semana.");
      break;
    case "domingo":
      console.log("Hoy es Domingo, día de fin de semana.");
      break;
    default:
      console.log("No es un día de semana.");
  }
