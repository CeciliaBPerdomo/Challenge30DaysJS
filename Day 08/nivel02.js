const users = {
    Alex: {
      name: "Alex",
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      name: "Asab",
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      name: "Brook",
      email: 'brook@brook.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      name: "Daniel",
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      name: "John",
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      name: "Thomas",
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      name: "Paul",
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// 1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
let clave = Object.keys(users); 
for(let i=0; i< clave.length; i++){
  let otra = clave[i];
  console.log(users[otra].name + " tiene: " + users[otra].skills.length + " skills.");
}

// 2. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del 
// siguiente objeto.
let claves = Object.keys(users)
let conectados = 0
for(let i=0; i< claves.length; i++){
  let clave = claves[i];
  if ((users[clave]).isLoggedIn == true){
    conectados = conectados + 1
  }
}
console.log("Usuarios conectados: " + conectados)

let otraCuenta = 0
for(let i=0; i< claves.length; i++){
    let clave = claves[i];
    if ((users[clave]).points > 50){
      otraCuenta = otraCuenta + 1
    }
  }
console.log("Usuarios con mas de 50 puntos: " + otraCuenta)

// 3. Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
for(let i=0; i< claves.length; i++){
    let clave = claves[i];

    // express react node
    for (let h =0; h < (users[clave]).skills.length; h++ ){
        if((users[clave]).skills[h] == "MongoDB"){
            console.log("Usuarios con MERN: " + (users[clave]).name)
        }
    }
}

// 4. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
users.Cecilia = {name: "Cecilia", email: "cecilia@cecilia", age: 38, points: 51, isLoggedIn: true, skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node']}
console.log(users)

//5. Obtener todas las claves o propiedades del objeto usuarios
console.log("Claves: " + claves)

// 6. Obtener todos los valores del objeto usuarios
const values = Object.values(users);
console.log("Valores" + values)

// 7. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
// y donde esta???
