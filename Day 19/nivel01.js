console.log("--------------------------")
console.log(" -- DIA 19 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")
console.log("--------------------------")

// 1. Crear una closure que tenga una función interna

function outerFunction() {
    let count = 0;
    function innerFunction() {
      count++;
      return count;
    }
  
    return innerFunction;
  }
  const innerFunc = outerFunction();
  
  console.log(innerFunc());