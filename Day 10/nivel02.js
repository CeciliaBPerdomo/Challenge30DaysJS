let d = [4, 5, 8, 9];
let f = [3, 4, 5, 7];

// 1.  Encontrar a unión b
let c = [...d, ...f]
console.log("Union: " + c)

// 2.  Encontrar a intersección b
let A = new Set(d);
let B = new Set(f);

let h = d.filter((num) => B.has(num));
console.log("Interseccion: " + h)

// 3. Encontrar a con b 
// Ni idea que queres que haga aca