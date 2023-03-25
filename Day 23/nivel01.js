// Nivel 1
// Generar números y marcar pares, impares y primos con tres colores diferentes.

function init(){
    let numero =  document.getElementById("numero").value
    
    const contenedor = document.getElementById("numeros");
 
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.style.marginLeft = "200px"
 
    let tr = document.createElement("tr"); 

    for(let i = 0; i < numero; i++) {
        if (i % 10 == 0 && i != 0 )
            {
                td = document.createElement("td");
                tdText = document.createTextNode(i);
                formato()
                td.appendChild(tdText)
                tr.appendChild(td)
                tabla.appendChild(tr);
                tr = document.createElement("tr");
               
        }

        else if(i <= numero) {
            td = document.createElement("td");
            tdText = document.createTextNode(i);
        }

        formato()
    }

    function formato() {
        td.style.fontSize = "16px"
        td.style.border = "1px solid"
        td.style.textAlign = "center"
        td.style.padding = "5px"
        td.style.width = "85px"
        
        td.appendChild(tdText);
        tr.appendChild(td)
    }
    
    tabla.appendChild(tr);
    contenedor.appendChild(tabla)
    
    tabla.addEventListener("click", pares)
    

}

function pares(e) {
    let valor = e.target.textContent
    if (valor %2 == 0){
        e.target.bgColor = "lightgreen"
    } else {
        e.target.bgColor = "lightpink"
    }
} 
