console.log("--------------------------")
console.log(" -- DIA 15 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

// 1. Crea una clase de Animal. 
// La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.

class Animal {
    constructor(nombre, edad, color, piernas) {
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.piernas = piernas
    }

}

const animal = new Animal("Bruno", 15, "Gris", 4);
console.log(animal)

//2. Cree una clase hijo de Perro y Gato a partir de la Clase Animal
class Perro extends Animal {
    raza(){
        return "La Raza es perro"
    }
}

class Gato extends Animal {
    raza(){
        return "Hace rato, yo debi votar ese gato"
    }
}

const perro = new Perro("Camila", 14, "Rubia natural", 4)
console.log(perro, perro.raza())

const gato = new Gato("Gerard", 35, "Castano oscuro", 2)
console.log(gato, gato.raza())