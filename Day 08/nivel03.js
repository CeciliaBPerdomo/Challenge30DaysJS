// 1. Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, 
// incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense
// y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de 
// egresos y su descripción.

const personAccount = {
    Cecilia :{ 
        firstName: "Cecilia",
        lastName: "Perdomo",
        totalIncomes: 1000, 
        totalExpenses: 500, 
        expenses: 0,
        incomes: 0,
        totalIncome: function(){
            return `Incomes: ${this.incomes}`
        },
        totalExpense: function(){
            return `Expenses: ${this.expenses}`
        }, 
        accountInfo: "Bank",
        addExpense: function(){
            this.totalExpense = this.totalExpense - this.expenses
        },
        addIncome: 0,
        accountBalance: 500
    }
}


// 2. Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB.
// a. Crear una función llamada signUp que permita al usuario añadirse a la colección. 
// Si el usuario existe, informar al usuario que ya tiene una cuenta.



const users = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];
  
  const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ]

function signUp(username, email, password, createdAt, isLoggedIn){ 
    let flag = false
    let otra = 0
    let clave = Object.keys(users); 
    for(let i=0; i< clave.length; i++){
        otra = clave[i];
        console.log(users[otra])
        if (users[otra].username == username){
            flag = true
        }
    }
    if (flag) {
        console.log ("El usuario: " + username + " ya existe")
    } else {
        otra = otra + 1
        users[otra] = {
            _id: "dfrgsf", 
            username: username,
            email: email,
            password: password,
            createdAt: createdAt,
            isLoggedIn: isLoggedIn
        }
    }
}

const now = new Date();
signUp("Cecilia", "Cecilia@cecilia.com", 123456, now, true)
signUp("Thomas", "thomas@thomas.com", 123333, now, false)

// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
function signIn(username){
    let otra = 0
    let clave = Object.keys(users); 
    for(let i=0; i< clave.length; i++){
        otra = clave[i];
        if (users[otra].username == username){
            users[otra].isLoggedIn = true
            console.log (`El usuario esta logueado ${users[otra].username} - ${users[otra].isLoggedIn}`)
        }
    } 
}

signIn("Cecilia")
signIn("Martha")

// 3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. 
// a. Crear una función llamada rateProduct que califique el producto 
function rateProduct(idUsuario, rate, idProducto){
    let otra = 0
    let clave = Object.keys(products); 
    for(let i=0; i< clave.length; i++){
        otra = clave[i];
        
        if (products[otra]._id == idProducto){
            products[otra].ratings.push({
                userId: idUsuario,
                rate: rate
            })
        }
        console.log(products[otra])
    } 
}


rateProduct("dfrgsf", 5, "hedfcg")

// b. Crear una función llamada averageRating que calcule la valoración media de un producto
function averageRating (idProducto){
    let otra = 0, total = 0
    let clave = Object.keys(products); 
    for(let i=0; i< clave.length; i++){
        otra = clave[i];
        
        if (products[otra]._id == idProducto) {
            for(let j=0; j < products[otra].ratings.length; j++){
                total = total + products[otra].ratings[j].rate
            }
            total = total / (products[otra].ratings.length)
        }
        console.log("El rating promedio es de: " + total + " del producto: " + idProducto)
    }
}

averageRating("hedfcg")

// Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto.
// Si no le gusta eliminar el like y si le gusta darle like
function likeProduct(idProducto, idUsuario){
    let otra = 0, total = 0
    let clave = Object.keys(products); 
    for(let i=0; i< clave.length; i++){
        otra = clave[i];
        
        if (products[otra]._id == idProducto) {
            products[otra].likes.push(idUsuario)
        }
    }
    console.log(products[otra])
}

likeProduct("hedfcg", "dfrgsf")

function unLike(idProducto, idUsuario){
    let otra = 0, total = 0
    let clave = Object.keys(products); 
    for(let i=0; i< clave.length; i++){
        otra = clave[i];
        
        if (products[otra]._id == idProducto) {
            //products[otra].likes.push(idUsuario)
            for(let j=0; j < products[otra].likes.length; j++){
                if (products[otra].likes[j] == idUsuario){
                    delete(products[otra].likes[j])
                }
            }
        }
    }
    console.log(products[otra])
}

unLike("hedfcg", "dfrgsf")
