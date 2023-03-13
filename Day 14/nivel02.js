console.log("--------------------------")
console.log(" -- DIA 14 -- NIVEL 02 --")
console.log("--------------------------")
console.log(" ----- Ejercicio 01 ------")

try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.log("Name of the error", err.name);
    console.log("Error message", err.message);
  } finally {
    console.log("In any case I will be executed");
  }