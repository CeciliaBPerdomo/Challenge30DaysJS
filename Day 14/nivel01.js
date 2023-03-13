console.log("--------------------------")
console.log(" -- DIA 14 -- NIVEL 01 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.error(err); // podemos utilizar console.log() o console.error()
  } finally {
    console.log("In any case I will be executed");
  }