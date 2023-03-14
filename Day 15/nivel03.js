console.log("--------------------------")
console.log(" -- DIA 15 -- NIVEL 03 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

/* 
Intentemos desarrollar un programa que calcule la medida de tendencia central de una muestra (media, 
mediana, moda) y la medida de variabilidad (rango, variación, desviación estándar). Además de esas 
medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias
de la muestra. Puedes crear una clase llamada Statistics y crear todas las funciones que hacen cálculos 
estadísticos como método para la clase Statistics. Comprueba el resultado que aparece a continuación.
*/

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(ages) {
        this.ages = ages
    }

    count(){
        let total = ages.length
        return total
    }

    sum(){
        let totalSuma = ages.reduce((a, b) => a + b, 0)
        return totalSuma
    }

    min(){
       let minimo = Math.min(...ages) 
       return minimo
    }

    max(){
        let max = Math.max(...ages)
        return max
    }

    range(){
        let min = Math.min(...ages);
        let max = Math.max(...ages);
        let output = Array.from({length: max - min + 1}, (v, i) => i + min);
        return output.length - 1 
    }

    mean(){
        let sum = ages.reduce((previous, current) => current += previous);
        let avg = sum / ages.length;
        return avg
    }

    median(){
        ages.sort((a, b) => a - b);
        let lowMiddle = Math.floor((ages.length - 1) / 2);
        let highMiddle = Math.ceil((ages.length - 1) / 2);
        let median = (ages[lowMiddle] + ages[highMiddle]) / 2;
        return median
    }
}

const statistics = new Statistics()
console.log('Count:' + statistics.count())   // 25
console.log('Suma: ' + statistics.sum())     // 744
console.log('Min: ' + statistics.min())      // 24
console.log('Max: '+ statistics.max())      // 38
console.log('Range: ' +  statistics.range())  // 14 --> No se que carajo es el rango
console.log('Mean: ' + statistics.mean())    // 30
console.log('Median: ' + statistics.median()) // 29