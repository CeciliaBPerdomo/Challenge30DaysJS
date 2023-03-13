// 1. Escribe una función que limpie el texto. Limpia el siguiente texto. 
// Después de la limpieza, cuente tres palabras más frecuentes en la cadena.

console.log("--------------------------")
console.log(" -- DAY 12 -- NIVEL 03 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(sentence) {
    sentence = sentence.replace(/[^\w\s]/gi, '')
    return sentence
}

console.log(cleanText(sentence));

// 2. Escriba una función que encuentre las palabras más frecuentes. 
// Después de la limpieza, cuente tres palabras más frecuentes en la cadena.

console.log("--------------------------")
console.log(" -- DAY 12 -- NIVEL 03 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 02 ------")

function mostFrequentWords(cleanedText){
    let palabras = cleanedText.split(' ')
    obj = new Array();
    
    for(let i=0; i < palabras.length; i++){
        obj[palabras[i]] = 1
        for(let j=0; j < palabras.length; j++) {
            if(i != j){
                if(palabras[i] == palabras[j]){
                    obj[palabras[i]]++;
                }
            }
        }
    }
    return obj
}

let cleanedText = sentence.replace(/[^\w\s]/gi, '')
console.log(mostFrequentWords(cleanedText))