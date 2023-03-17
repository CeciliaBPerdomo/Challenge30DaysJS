const countriesAPI = "https://restcountries.com/v2/all"

fetch(countriesAPI)
  .then((response) => response.json()) // acceder a los datos de la API como JSON
  .then((data) => {
    mostrarPaises(data)
  })
  .catch((error) => console.error(error))



function mostrarPaises(data) {
    // console.log(data)
    // console.log(data[1].name)
    // console.log(data.length)
    const contenedor = document.getElementById("niveldos");
 
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.style.marginLeft = "15px"
 
    let tr = document.createElement("tr"); 

    for(let i = 0; i < data.length; i++) {
        if (i % 10 == 0 && i != 0 )
            {
                td = document.createElement("td");
                tdText = document.createTextNode(data[i].name);
                formato()
                td.appendChild(tdText)
                tr.appendChild(td)
                tabla.appendChild(tr);
                tr = document.createElement("tr");
        } 

        if(i <= data.length) {
            td = document.createElement("td");
            tdText = document.createTextNode(data[i].name);
        }

        formato()
    }

    function formato() {
        td.style.fontSize = "16px"
        td.style.border = "1px solid"
        td.style.textAlign = "center"
        td.style.padding = "5px"
        td.style.width = "320px"

        td.appendChild(tdText);
        tr.appendChild(td)
    }
    
    tabla.appendChild(tr);
    contenedor.appendChild(tabla)
}

