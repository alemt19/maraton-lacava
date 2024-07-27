console.log(JSON.parse(localStorage.getItem("participantes")))
var participantes = JSON.parse(localStorage.getItem("participantes")) || []
var tbody = document.getElementById("tbody")

document.addEventListener("DOMContentLoaded", function () {
    tbody.innerHTML = ""
    let cont = 1
    for (let participante of participantes) {
        let tr = document.createElement("tr")
        tr.className = "participantes"

        let puesto = document.createElement("td")
        puesto.innerHTML = cont
        let nombre = document.createElement("td")
        nombre.innerHTML = participante[0]
        let edad = document.createElement("td")
        edad.innerHTML = participante[1]
        let cedula = document.createElement("td")
        cedula.innerHTML = participante[2]
        let municipio = document.createElement("td")
        municipio.innerHTML = participante[3]
        let inicio = document.createElement("td")
        inicio.innerHTML = formatear_segundos(participante[4])
        let fin = document.createElement("td")
        fin.innerHTML = formatear_segundos(participante[5])
        let tiempo = document.createElement("td")
        tiempo.innerHTML = formatear_segundos(participante[6])

        tr.appendChild(puesto)
        tr.appendChild(nombre)
        tr.appendChild(edad)
        tr.appendChild(cedula)
        tr.appendChild(municipio)
        tr.appendChild(inicio)
        tr.appendChild(fin)
        tr.appendChild(tiempo)
        tbody.append(tr)
        cont += 1
    }
})

function formatear_segundos(s) {
    const segundos = parseInt(s)
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = Math.floor(segundos % 60);
  
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
  }