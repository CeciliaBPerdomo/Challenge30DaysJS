console.log("--------------------------")
console.log(" -- DIA 14 -- NIVEL 03 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

const throwErrorExampleFun = () => {
    let message;
    let x = prompt("Enter a number: ");
    try {
      if (x == "") throw "empty";
      if (isNaN(x)) throw "not a number";
      x = Number(x);
      if (x < 5) throw "too low";
      if (x > 10) throw "too high";
      if (x >= 5 || x <= 10) throw "Perfect"
    } catch (err) {
      console.log(err);
    }
  };
  throwErrorExampleFun();