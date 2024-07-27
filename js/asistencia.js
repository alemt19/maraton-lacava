console.log(JSON.parse(localStorage.getItem("participantes")))
var participantes = JSON.parse(localStorage.getItem("participantes")) || []
var tbody = document.getElementById("tbody")

document.addEventListener("DOMContentLoaded", function () {
    tbody.innerHTML = ""
    for (let participante of participantes) {
        let tr = document.createElement("tr")
        tr.className = "participantes"

        let nombre = document.createElement("td")
        nombre.innerHTML = participante[0]
        let edad = document.createElement("td")
        edad.innerHTML = participante[1]
        let cedula = document.createElement("td")
        cedula.innerHTML = participante[2]
        let municipio = document.createElement("td")
        municipio.innerHTML = participante[3]

        tr.addEventListener("click", function () {
            let filas = document.querySelectorAll('.participantes')
            if (this.className === "clicked") {
                this.classList.remove("clicked")
                
                this.classList.toggle("participantes")
            }
            else {
                this.classList.toggle("clicked")
                this.classList.toggle("participantes")
            }
        })

        tr.appendChild(nombre)
        tr.appendChild(edad)
        tr.appendChild(cedula)
        tr.appendChild(municipio)
        tbody.append(tr)
    }
})

function confirmar_asistencia () {
    const asistentes = document.querySelectorAll(".clicked")
    let asistentes_confirmados = []
    for (let asistente of asistentes) {
        let asistente_confirmado = []
        let celdas = asistente.children
        for (let celda of celdas) {
            asistente_confirmado.push(celda.innerHTML)
        }
        asistente_confirmado.push("0")
        asistente_confirmado.push("0")
        asistente_confirmado.push("0")
        asistente_confirmado.push("0")
        asistentes_confirmados.push(asistente_confirmado)
    }
    localStorage.clear()
    localStorage.setItem("participantes", JSON.stringify(asistentes_confirmados))
    alert("Se ha confirmado exitosamente la asistencia de los participantes.")
}
    