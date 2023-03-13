console.log("--------------------------")
console.log(" -- DIA 15 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

// 1. Sobrescribir el método que se crea en la clase Animal.
class Especie {
    constructor(nombre, edad, color, piernas) {
        this.nombre = nombre
        this.edad = edad
        this.color = color
        this.piernas = piernas
    }

    get getNombre(){
        return nombre
    }

    set setNombre(nombre){
        this.nombre = nombre

    }

    get getEdad(){
        return edad
    }

    set setEdad(edad){
        this.edad = edad
    }

    get getColor(){
        return color
    }

    set setColor(color){
        this.color = color
    }

    get getPiernas(){
        return piernas
    }

    set setPiernas(piernas){
        this.piernas = piernas
    }
}

const animal1 = new Especie("Bruno", 15, "Gris", 4);
console.log(animal1)

animal1.setColor = "Blanco y negro"
console.log(animal1)

