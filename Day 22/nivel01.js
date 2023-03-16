function init(){
 
    const contenedor = document.getElementById("resultado");
 
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.style.marginLeft = "325px"
 
    let tr = document.createElement("tr"); 

    for(let i = 1; i <= 100; i++) {
        if (i < 10) {
            td = document.createElement("td");
            tdText = document.createTextNode(i);
            
            if (i % 2 == 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"
            td.style.width = "60px"

            td.appendChild(tdText);
            tr.appendChild(td);
        } else if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50 || 
            i == 60 || i == 70 || i == 80 || i == 90 || i == 100) {
                td = document.createElement("td");
                tdText = document.createTextNode(i);
                td.style.fontSize = "24px"
                td.appendChild(tdText);

                if (i == 10 || i == 30 || i == 50 ||  i == 70 || i == 90){
                    td.style.backgroundColor = "lightgreen"
                } else if (i == 60) {
                    td.style.backgroundColor = "lightyellow"
                } else {
                    td.style.backgroundColor = "lightpink"
                }

                td.style.border = "1px solid"
                td.style.textAlign = "center"
                td.style.width = "60px"

                tr.appendChild(td)
                tabla.appendChild(tr);
                tr = document.createElement("tr");
        } else if (i < 20){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 != 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 30){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 == 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 40){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 != 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 50){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 == 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 60){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 != 0){
                td.style.backgroundColor = "lightblue"
            } else {
                td.style.backgroundColor = "lightyellow"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 70){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 == 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"
            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 80){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 != 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"

            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 90){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 == 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"
            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        } else if (i < 100){ 
            td = document.createElement("td");
            tdText = document.createTextNode(i);

            if (i % 2 != 0){
                td.style.backgroundColor = "lightgreen"
            } else {
                td.style.backgroundColor = "lightpink"
            }

            td.style.fontSize = "24px"
            td.style.border = "1px solid"
            td.style.textAlign = "center"

            td.appendChild(tdText);
            tr.appendChild(td)
        }
    }

    tabla.appendChild(tr);
    contenedor.appendChild(tabla);
}
 
init()