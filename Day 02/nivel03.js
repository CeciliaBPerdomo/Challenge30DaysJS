// 1. 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. 
// Cuente el número de palabras amor en esta oración.
let amor = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.'
console.log(amor)
console.log(amor.match("amor"));

// 2. Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion)
console.log(oracion.match("porque"));

// 3. Limpia el siguiente texto y encuentra la palabra más frecuente 
// (pista, usa replace y expresiones regulares).
let sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let reg = /%/g
sentence = sentence.replace(reg, "")
//console.log(sentence)
reg = /@/g
sentence = sentence.replace(reg, "")

reg = /#/g
sentence = sentence.replace(reg, "")

reg = /&/g
sentence = sentence.replace(reg, "")

sentence = sentence.replaceAll("$", "")
console.log(sentence)

// 4. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 
// 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 
// euros por mes.'

let mes = 5000
let bonoAnual = 10000
let cursos = 15000
let salario = 0

mes = mes * 12
cursos = cursos * 12

salario = mes + bonoAnual + cursos
console.log("Sueldo anual: " + salario)
