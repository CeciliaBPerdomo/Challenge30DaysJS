// 1. Declara un array vacío.
const arrVacio = []
console.log(arrVacio)

// 2. Declara un array com mas de 5 elementos.
const vegetables = ["Tomate", "Papa", "Zapallo", "Cebolla", "Zanahoria"]
console.log("Vegetales:", vegetables)

// 3. Encuentra la longitud de tu array.
console.log("Numero de vegetales: " + vegetables.length)

// 4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
console.log("Primer elemento: " + vegetables[0])

let ultimo = vegetables.length - 1
console.log("Ultimo elemento: " + vegetables[ultimo])

let medio = parseInt(vegetables.length / 2)
console.log("Elemento del medio: " + vegetables[medio])

// 5. Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y 
// encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
const mixedDataTypes = [
    "Cecilia",
    250,
    true,
    { country: "Finland", city: "Helsinki" },
    { skills: ["HTML", "CSS", "JS", "React", "Python"] },
    "Perdomo",
  ]

console.log("mixedDataTypes: " + mixedDataTypes)
console.log("Longitud de mixedDataTypes: " + mixedDataTypes.length)

// 6. Declare un variable array de nombre itCompanies y asignarles 
// valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7. Imprima el array usando console.log().
console.log(itCompanies)

// 8. Imprima el número de empresas en el array.
console.log("Longitud de itCompanies: " + itCompanies.length)

// 9. Imprime la primer empresa , la intermedia y la última empresa
console.log("Primer empresa: " + itCompanies[0])
console.log("Ultima empresa: " + itCompanies[itCompanies.length - 1])

medio = parseInt(itCompanies.length / 2)
console.log("Empresa del medio: " + itCompanies[medio])

// 10. Imprime cada empresa.
for(let i = 0; i < itCompanies.length; i++){
    console.log("Empresa " + (i + 1) + ": " + itCompanies[i])
}

// 11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
let itCompaniesMay =[]
for(let i = 0; i < itCompanies.length; i++){
    itCompaniesMay[i] = itCompanies[i].toUpperCase()
    console.log("Empresa " + (i + 1) + ": " + itCompaniesMay[i])
}

// 12. Imprime el array como una oración: 
// Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI
console.log(itCompanies.toString())

// 13. Compruebe si existe una determinada empresa en el array itCompanies. 
// Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
console.log("Facebook esta en el array: " + itCompanies.includes("Facebook"))
console.log("Acer esta en el array: " + itCompanies.includes("Acer"))

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter()
let itCompaniesConO =[]
for(let i = 0; i < itCompanies.length; i++){
    itCompaniesConO[i] = itCompanies[i].includes("o")
    if (itCompaniesConO[i] == true) {
        console.log("Empresa: " + itCompanies[i])
    }
}

// 15. Ordene el array usando el método sort()
console.log(itCompanies.sort())

// 16. Invierte la array usando el método reverse()
console.log(itCompanies.reverse())

// 17. Cortar las primeras 3 empresas del array
const cortar = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(cortar.splice(0, 3))

// 18. Cortar las últimas 3 empresas del array
const corta = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(corta.splice((corta.length - 3), 3))

// 19. Cortar la empresa o empresas intermedias de TI del array
const cortando = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(cortando.splice((cortando.length - 5), 2))

// 20. Eliminar la primera empresa de TI del array
const eliminar = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("Eliminado: " + eliminar.shift())
console.log("Array resultante: " + eliminar)

// 21. Eliminar la empresa o empresas intermedias de TI del array
const elimina = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("Eliminado: " + elimina.splice(2, 2))
console.log("Array resultante: " + elimina)


// 22. Elimine la última empresa de TI del array
const eliminado = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("Eliminado: " + eliminado.pop())
console.log("Array resultante: " + eliminado)

// 23. Eliminar todas las empresas de TI
const elima = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log("Eliminado: " + elima.splice(0, (elima.length)))
console.log("Array resultante: " + elima)
