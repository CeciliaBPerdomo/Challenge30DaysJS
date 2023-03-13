//  Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más 
// frecuentes de una cadena?

console.log("--------------------------")
console.log(" -- DAY 12 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(paragraph){
    let palabras = paragraph.split(' ')
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
console.log(tenMostFrequentWords(paragraph))