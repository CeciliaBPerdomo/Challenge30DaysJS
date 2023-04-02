async function fetchCountries() {
    try{
        let response = await fetch("https://restcountries.com/v2/all")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

async function paises() {
    let data = await fetchCountries()
    let tenpop = []
    let total = 0
    
    data = data.sort((x, y) => y.population - x.population)
    
    for(let i = 0; i < 10; i++){
        tenpop.push(data[i])
        total = total + data[i].population
    }
    
    // Los 10 paises con mas poblacion
    console.log(tenpop)
    console.log(total)

    const lista = document.getElementById("lista-poblacion")

    for(let j = 0; j < tenpop.length; j++){
        let porcentaje = 0
        porcentaje = parseInt((tenpop[j].population / total) * 100)
      //  console.log(porcentaje)
       
      const li = document.createElement("li");
        li.textContent = porcentaje + "%  <=> "  + tenpop[j].name + " <=> Población: " + tenpop[j].population
        li.style.color = "white"
        li.style.listStyle = "none"
        lista.appendChild(li);
      };
}

paises()