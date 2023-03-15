// 1.  Crear una closure que tenga tres funciones internas
console.log("--------------------------")
console.log(" -- DIA 19 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

function outerFunction() {
    let count = 0;
    function innerFunction() {
      count++;
      return count;
    }
  
    return innerFunction;
  }
  const innerFunc2 = outerFunction();
  
  console.log(innerFunc2());
  console.log(innerFunc2());
  console.log(innerFunc2());