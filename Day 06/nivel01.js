// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// 2. Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

//  3. Escribe un bucle que haga el siguiente patrón usando console.log():
/*
#
##
###
####
#####
######
####### (7)
*/ 

let ast = "*"
for (let i = 0; i <= 7; i++) {
    console.log(ast);
    ast = ast + "*"
}

// 4. Usa un bucle para imprimir el siguiente patrón:
/*
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
*/

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 5. Usando un bucle imprime el siguiente patrón:
/*
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
*/

for (let i = 0; i <= 10; i++) {
    console.log(`${i}   ${i * i}   ${i * i * i}`);
}

// 6. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        console.log(i)
    }
}

// 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0){
        console.log(i)
    }
}

// 8. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
// Si yo supiera como se calculan

// 9. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
// La suma de todos los números de 0 a 100 es 5050.
let sumaTotal = 0
for (let i = 0; i <= 100; i++) {
    sumaTotal = i + sumaTotal
}
console.log("La suma total del 0 al 100 es: " + sumaTotal)

// 10. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
// La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
let par = 0
let impar = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        par = par + i
    } else {
        impar = impar + i
    }
}

console.log("La suma de todos los pares de 0 a 100 es: " + par)
console.log("La suma de todos los impares de 0 a 100 es: " + impar)

// 11. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y 
// la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
// [2550, 2500]
let arr = [par, impar]
console.log(arr)

//12. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let numeroAleatorio = ""
for (let i = 0; i <= 5; i++) {
    numeroAleatorio = numeroAleatorio + "" + (Math.floor((Math.random() * 10)))
}
console.log("Numero aletorio: " + numeroAleatorio)

// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
let numero = ""
for (let i = 0; i <= 5; i++) {
    numeroAleatorio = Math.floor((Math.random() * 10))
    if(!numero.includes(numeroAleatorio)) {
        numero = numero + "" + numeroAleatorio
    }
}
console.log("Numero aletorio: " + numero)

// Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
// 5j2khz
const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let aleatoria = "";
    for (let i = 0; i <= 6; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
console.log("Cadena aleatoria: " + aleatoria)