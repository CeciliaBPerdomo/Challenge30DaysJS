console.log("--------------------------")
console.log(" -- DIA 16 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1. Cambiar el array de habilidades a JSON usando JSON.stringify()
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const txt = JSON.stringify(skills, ["skills"], 4)
console.log(txt)

// 2. Stringify la variable de la edad
console.log("--------------------------")
console.log(" ----- Ejercicio 02 ------")
console.log("--------------------------")

let age = 250;
const edad = JSON.stringify(age, ["age"])
console.log(edad)

// 3. Stringify la variable isMarried
console.log("--------------------------")
console.log(" ----- Ejercicio 03 ------")
console.log("--------------------------")

let isMarried = true;
const casado = JSON.stringify(isMarried, ["isMarried"], 4)
console.log(casado)

console.log("--------------------------")
console.log(" ----- Ejercicio 04 ------")
console.log("--------------------------")

// 4. Stringify el objeto estudiante
const student = {
    firstName: "Asabeneh",
    lastName: "Yetayehe",
    age: 250,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
  };

const estudiante = JSON.stringify(student, ["firstName", "lastName", "age", "married", "skills"] ,4)
console.log(estudiante)