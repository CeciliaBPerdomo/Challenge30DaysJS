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

    let cantidad = document.getElementById("total")
    cantidad.textContent = "Número de países: " + data.length
}

paises()