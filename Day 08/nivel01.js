// 1. Crear un objeto vacío llamado dog
const dog = {}

// 2. Imprime el objeto dog en la consola
console.log(dog)

// 3. Añade las propiedades name, legs, color, age y bark para el objeto dog. 
// La propiedad bark es un método que devuelve woof woof
dog.name = "Bruno"
dog.legs = 4
dog.color = "Black and white"
dog.age = 15
dog.bark = function () {
    return "woof woof"
}

// 4. Obtener name, legs, color, age y el valor de bark del objeto dog
console.log("Nombre: " + dog.name)
console.log("Patas: " + dog.legs)
console.log("Color: " + dog.color)
console.log("Edad: " + dog.age)
console.log("Ladrido: " + dog.bark())

// 5. Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "Siberiano"
console.log("Raza: " + dog.breed)

dog.getDogInfo = function() {
    return "Nombre: " + dog.name + ". Patas: " + dog.legs + ". Color: " + dog.color + ". Edad: " + dog.age + ". Raza: " + dog.breed
}

console.log("Informacion del perrito: " + dog.getDogInfo())