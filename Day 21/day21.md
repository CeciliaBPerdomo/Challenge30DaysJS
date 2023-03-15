Ejercicios: Nivel 1

    Crear un archivo index.html y poner cuatro elementos p: Obtenga el primer párrafo utilizando document.querySelector(tagname) y el nombre de la etiqueta
    Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
    Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta
    Recorrer nodeList y obtener el contenido del texto de cada párrafo
    Establecer un textContent para el párrafo del cuarto párrafo,Fourth Paragraph
    Establezca los atributos id y class para todos los párrafos utilizando diferentes métodos de establecimiento de atributos

Ejercicios: Nivel 2

    Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la fuente, familia de la fuente)
    Seleccione todos los párrafos y haga un bucle a través de cada uno de los elementos y dé al primer y tercer párrafo un color verde, y al segundo y cuarto párrafo un color rojo
    Establecer textContent, id y class a cada párrafo

Ejercicios: Nivel 3
DOM: Mini proyecto 1

    Desarrolle la siguiente aplicación, utilice los siguientes elementos HTML para empezar. Obtendrá el mismo código en la carpeta de inicio. Aplique todos los estilos y la funcionalidad utilizando sólo JavaScript.
        El color del año cambia cada 1 segundo
        El color de fondo de la fecha y la hora cambia cada dos segundos
        El reto completado tiene fondo verde
        El desafío en curso tiene fondo amarillo
        Los próximos retos tienen fondo rojo

<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript para todos: DOM</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>Asabeneh Yetayeh retos en 2020</h1>
      <h2>Reto 30DaysOfJavaScript</h2>
      <ul>
        <li>Reto 30DaysOfPython Realizado</li>
        <li>Reto 30DaysOfJavaScript en curso</li>
        <li>Reto 30DaysOfReact próximamente</li>
        <li>Reto 30DaysOfFullStack próximamente</li>
        <li>Reto 30DaysOfDataAnalysis próximamente</li>
        <li>Reto 30DaysOfReactNative próximamente</li>
        <li>Reto 30DaysOfMachineLearning próximamente</li>
      </ul>
    </div>
  </body>
</html>