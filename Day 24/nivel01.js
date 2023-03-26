/* 
Gravedad: 
    * Tierra    -->     9,807
    * Saturno   -->     10,44
    * Mercurio  -->     3,7
    * Jupiter   -->     24,79
    * Venus     -->     8,87
    * Urano     -->     8,87
    * Marte     -->     3,721
    * Neptuno   -->     11,15
*/

function calculo(){
   
    let peso = document.getElementById("validationDefault03").value
    let lugar = document.getElementById("validationDefault04").value

    document.getElementById("resultado").style.opacity= "80%"

    if (!peso){
        document.getElementById("planeta").textContent = "Falta la masa del objeto!"
    } else if(!lugar){
        document.getElementById("planeta").textContent = "Falta elegir el planeta!"
    } else {
        switch (lugar){
            case "Tierra": 
                let totalTierra = peso * 9.807
                let urlTierra = "https://static.nationalgeographic.es/files/styles/image_3200/public/940.jpg?w=1900&h=1427"
                formato(lugar, totalTierra, urlTierra, "75%")
                break;
            case "Saturno":
                let totalSaturno = peso * 10.44
                let urlSaturno = "https://www.pngplay.com/wp-content/uploads/13/Saturn-Transparent-Background.png"
                formato(lugar, totalSaturno, urlSaturno, "50%")
                break;
            case "Mercurio": 
                let totalMercurio = peso * 3.7
                let urlMercurio = "https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2708.png"
                formato(lugar, totalMercurio, urlMercurio, "40%")
                break;
            case "Jupiter":
                let totalJupiter = peso * 24.79
                let urlJupiter = "https://www.pngplay.com/wp-content/uploads/13/Jupiter-Transparent-Background.png"
                formato(lugar, totalJupiter, urlJupiter, "45%")
                break;
            case "Venus":
                let totalVenus = peso * 8.87
                let urlVenus = "https://www.pngmart.com/files/4/Venus-PNG-Photos.png"
                formato(lugar, totalVenus, urlVenus, "45%")
                break;
            case "Urano":   
                let totalUrano = peso * 8.87
                let urlUrano = "https://images.vexels.com/media/users/3/152680/isolated/preview/22e162e0d0066ad0881e1ee797574680-icono-del-planeta-urano.png"
                formato(lugar, totalUrano, urlUrano, "45%")
                break;        
            case "Marte":
                let totalMarte = peso * 3.721
                let urlMarte = "https://www.pngall.com/wp-content/uploads/13/Mars-Transparent.png"
                formato(lugar, totalMarte, urlMarte, "40%")
                break;
            case "Neptuno":
                let totalNeptuno = peso * 11.15
                let urlNeptuno = "https://images.freeimages.com/vme/images/3/0/301841/neptune_preview"
                formato(lugar, totalNeptuno, urlNeptuno, "50%")
                break;
            default:
                break;
        }

        function formato (planeta, resultado, url, tam){
            document.getElementById("planeta").textContent = "El planeta elegido es: " + planeta
            document.getElementById("gravedad").textContent = "El peso del objeto es: " + resultado

            let imagen = new Image()
            imagen.src = url
            imagen.style.width = tam
            document.getElementById("imagenPlaneta").appendChild(imagen)

        }
    }

}