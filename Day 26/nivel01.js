async function fetchCountries() {
    try{
        let response = await fetch("https://restcountries.com/v2/all")
        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

// Ordenados de la A a la Z
async function paises() {
    let arrayData = []
    let data = await fetchCountries()

    let cantidad = document.getElementById("total")
    cantidad.textContent = "Número de países: " + data.length

    data = data.sort((x, y) => y.name - x.name)

    for(let i = 0; i < data.length; i++) {
        arrayData.push(data[i])
    }
    
    mostrarPaises(arrayData, "niveldos")
}

// Ordenados de la Z a la A
async function ordenarAlReves(){
    let otroArray = []
    let data = await fetchCountries()

    data = data.reverse((y, x) => x.name - y.name)

    for(let i = 0; i < data.length; i++) {
        otroArray.push(data[i])
    }
    
    mostrarPaises(otroArray, "niveluno")
}

// Buscar pais
async function buscar () {
    let data = await fetchCountries()
    let arrayBusqueda = []
    let pais = document.getElementById("specificSizeInputGroupUsername").value
    pais = pais.charAt(0).toUpperCase() + pais.slice(1);
   

    for(let i = 0; i < data.length; i++) {
        if(data[i].name == pais){
            arrayBusqueda.push(data[i])
        }
    }
    mostrarPaises(arrayBusqueda, "niveltres")
}

// Reinicia
function reiniciar(){
    paises()
}

function mostrarPaises(data, nivel) {
    let contenedor = ""

    if (nivel === "niveldos") {
        document.getElementById("niveluno").hidden = true
        document.getElementById("niveldos").hidden = false
        document.getElementById("niveltres").hidden = true

        contenedor = document.getElementById("niveldos");
    } else if (nivel === "niveluno"){
        document.getElementById("niveldos").hidden = true
        document.getElementById("niveluno").hidden = false
        document.getElementById("niveltres").hidden = true

        contenedor = document.getElementById("niveluno");
    } else if (nivel === "niveltres"){
        document.getElementById("niveldos").hidden = true
        document.getElementById("niveluno").hidden = true
        document.getElementById("niveltres").hidden = false
        
        contenedor = document.getElementById("niveltres");
    }


    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.style.marginLeft = "220px"
 
    let tr = document.createElement("tr"); 

    for(let i = 0; i < data.length; i++) {
        if (i % 5 == 0 && i != 0 )
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
        td.style.border = "3px solid"
        td.style.textAlign = "center"
        td.style.padding = "5px"
        td.style.width = "150px"
        td.style.height = "150px"
        td.style.color = "white"
        
        td.appendChild(tdText);
        tr.appendChild(td)
    }
    
    tabla.appendChild(tr);
    contenedor.appendChild(tabla)
}


paises()