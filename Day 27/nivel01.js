function mostrar() {

  let estudios = [
    "💻 Full Stack Developer",
    "📱 Analista Programador",
    "🔋 Mentora",
    "🔌 Teacher-Assistant",
  ];

  let n = 0; //un contador utilizado como index del array texto1
  setInterval(function () {
    document.getElementById("what").innerHTML =
      estudios[n % estudios.length];
    n++;
  }, 5000);
}

mostrar();
mostrar();
mostrar();
mostrar();
mostrar();
mostrar();
mostrar();
