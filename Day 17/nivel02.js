console.log("--------------------------")
console.log(" -- DIA 17 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1. Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las
// habilidades, el país, las claves inscritas y los valores para las claves. 
// Almacena el objeto estudiante en el localStorage de tu navegador.

const student = {
    firstName: "Cecilia",
    lastName: "Perdomo",
    age: 38,
    country: "Uruguay",
    skills: ["HTML", "CSS", "JS", "React"],
  };
  
  const userText = JSON.stringify(student, undefined, 4);
  localStorage.setItem("student", userText);
  console.log(localStorage)