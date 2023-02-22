Ejercicios
Ejercicios: Nivel 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

    Declara un array vacío.
    Declara un array com mas de 5 elementos.
    Encuentra la longitud de tu array.
    Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
    Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
    Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
    Imprima el array usando console.log().
    Imprima el número de empresas en el array.
    Imprime la primer empresa , la intermedia y la última empresa
    Imprime cada empresa.
    Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
    Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
    Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
    Filtre las empresas que tienen más de una 'o' sin el método filter()
    Ordene el array usando el método sort()
    Invierte la array usando el método reverse()
    Cortar las primeras 3 empresas del array
    Cortar las últimas 3 empresas del array
    Cortar la empresa o empresas intermedias de TI del array
    Eliminar la primera empresa de TI del array
    Eliminar la empresa o empresas intermedias de TI del array
    Elimine la última empresa de TI del array
    Eliminar todas las empresas de TI

Ejercicios: Nivel 2

    Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js

    Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array

    let text =
      "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
    console.log(words);
    console.log(words.length);

    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    13

    En el siguiente carrito de compras agregue, elimine, edite artículos

    const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

        Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
        Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
        Elimine 'Honey' si es alérgico a la miel (honey)
        Modificar Tea a 'Green Tea'

    En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

    En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

    Concatene las siguientes dos variables y guardelas en una variable fullStack.

    const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
    const backEnd = ["Node", "Express", "MongoDB"];

    console.log(fullStack);

    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

Ejercicios: Nivel 3

    El siguiente es un array de 10 edades de estudiantes:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Ordene el array y encuentre la edad mínima y máxima
    - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
    - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
    - Encuentre el rango de las edades (max menos min)
    - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_

    1.Cortar los diez primeros países de la array de países

    Encuentre el país o países de en medio en el array de países

    Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
