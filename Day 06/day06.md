Ejercicios:Día 6
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

const mernStack = ["MongoDB", "Express", "React", "Node"];

    Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while

    Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while

    Itera de 0 a n usando el bucle for

    Escribe un bucle que haga el siguiente patrón usando console.log():

        #
        ##
        ###
        ####
        #####
        ######
        #######

    Usa un bucle para imprimir el siguiente patrón:

    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100

    Usando un bucle imprime el siguiente patrón:

     i    i^2   i^3
     0    0     0
     1    1     1
     2    4     8
     3    9     27
     4    16    64
     5    25    125
     6    36    216
     7    49    343
     8    64    512
     9    81    729
     10   100   1000

    Usa el bucle for para iterar de 0 a 100 e imprima solo números pares

    Usa el bucle for para iterar de 0 a 100 e imprima solo números impares

    Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos

    Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.

    La suma de todos los números de 0 a 100 es 5050.

    Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

    La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.

    Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

      [2550, 2500]

    Desarrolla un pequeño script que genera una matriz de 5 números aleatorios

    Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos

    Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

    5j2khz

Ejercicios: Nivel 2

    Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:

      fe3jo1gl124g

      xkqci4utda1lmbelpkm03rba

    Escribe un script que genere un número hexadecimal aleatorio.

    '#ee33df'

    Escribe un script que genere un número de color rgb aleatorio.

    rgb(240,180,80)

    Usando el array countries anterior, crea un array como el siguiente.

    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

    Usando el array countries anterior, crea un array para saber la longitud de cada país.

    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

    Utiliza el array countries para crear la siguiente array de arrays

      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]

    En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

    ['Finland','Ireland', 'Iceland']

    En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

    ['Albania', 'Bolivia','Ethiopia']

    Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

    Ethiopia

    Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

    ['Japan', 'Kenya']

    Encuentra la palabra más larga en el array webTechs

    Utiliza el array de webTechs para crear la el siguiente array de arrays:

    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

    Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack

    Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.

    Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().

    Imprime todos los elementos del array como se muestra a continuación:

    const fullStack = [
      ["HTML", "CSS", "JS", "React"],
      ["Node", "Express", "MongoDB"],
    ];

      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB

Ejercicios: Nivel 3

    Copia el array countries (Evita mutaciones)
    Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
    Ordena el array webTechs y el array mernStack
    Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
    Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
    Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
    Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
    Extrae todos los países que contengan dos o más palabras del array countries e imprimela como un array
    Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
