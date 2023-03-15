/* 
DOM: Mini proyecto 1

    Desarrolle la siguiente aplicación, utilice los siguientes elementos HTML para empezar. 
    Obtendrá el mismo código en la carpeta de inicio. Aplique todos los estilos y la funcionalidad 
    utilizando sólo JavaScript.
    
        El color del año cambia cada 1 segundo
        El color de fondo de la fecha y la hora cambia cada dos segundos
        El reto completado tiene fondo verde
        El desafío en curso tiene fondo amarillo
        Los próximos retos tienen fondo rojo

*/

const now = new Date()
let start = now.getFullYear() + "/" +  (now.getMonth() + 1) + "/" + now.getDay() + " " + now.getHours() + ":" + now.getMinutes()  

const h3 = document.querySelectorAll("h3")
h3[0].textContent = start

const li = document.querySelectorAll("li")

li[0].style.backgroundColor = "yellow";
li[1].style.backgroundColor = "green";
li[2].style.backgroundColor = "red";
li[3].style.backgroundColor = "yellow"
li[4].style.backgroundColor = "green"
li[5].style.backgroundColor = "red"
li[6].style.backgroundColor = "yellow"
