
document.addEventListener("DOMContentLoaded", function () {
    let participantes = JSON.parse(localStorage.getItem("participantes")) || []
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    let cont = 1
    for (let participante of participantes) {
        participante[4] = obtenerHoraActual()

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
        let recorrido = document.createElement("td")
        recorrido.innerHTML = `${redondearA2Decimales(parseInt(participante[7])/1000)}Km`

        tr.appendChild(puesto)
        tr.appendChild(nombre)
        tr.appendChild(edad)
        tr.appendChild(cedula)
        tr.appendChild(municipio)
        tr.appendChild(inicio)
        tr.appendChild(fin)
        tr.appendChild(tiempo)
        tr.appendChild(recorrido)
        tbody.append(tr)
        cont += 1
    }
    localStorage.clear()
    localStorage.setItem("participantes", JSON.stringify(participantes))
})

function formatear_segundos(s) {
    const segundos = parseInt(s)
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = Math.floor(segundos % 60);
  
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
}

function calcular_recorrido (acelerador) {
    // acelerador me va a permitir aumentar la velocidad para ver mejor el funcionamiento del programa
    let random = Math.random()
    let velocidad = 1.94 // 7k/m en m/s
    return velocidad * random * acelerador
}

function actualizar_tabla (acelerador) {
        let intervalo = setInterval(() => {
        let participantes = JSON.parse(localStorage.getItem("participantes")) || []
        let participantes_actualizados = []
        for (let participante of participantes) {
            if (parseInt(participante[7]) < 10000) {
                participante[6] = String(parseInt(participante[6]) + acelerador)
                participante[7] = String(parseInt(participante[7]) + calcular_recorrido(acelerador))
            }
            else {
                if (parseInt(participante[5]) === 0) {
                    participante[5] = String(parseInt(participante[4]) + parseInt(participante[6]))
                }
            }
        }
        participantes_actualizados = bubbleSort(participantes)
        localStorage.clear()
        
        localStorage.setItem("participantes", JSON.stringify(participantes_actualizados))
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = ""
        let cont = 1
        for (let participante of participantes_actualizados) {
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
            let recorrido = document.createElement("td")
            recorrido.innerHTML = `${redondearA2Decimales(parseInt(participante[7])/1000)}Km`
    
            tr.appendChild(puesto)
            tr.appendChild(nombre)
            tr.appendChild(edad)
            tr.appendChild(cedula)
            tr.appendChild(municipio)
            tr.appendChild(inicio)
            tr.appendChild(fin)
            tr.appendChild(tiempo)
            tr.appendChild(recorrido)
            tbody.append(tr)
            cont += 1
        }
        let cont2 = 0
        for (let participante of participantes_actualizados) {
            if (parseInt(participante[7]) > 10000) {
                cont2 += 1
                if (parseInt(participante[5]) === 0) {
                    participante[5] =  String(parseInt(participante[4]) + parseInt(participante[6]))
                    participantes_actualizados = bubbleSort2(participantes)
                }
            }
        }

        if (cont2 === participantes_actualizados.length) {
        localStorage.clear()
        localStorage.setItem("participantes", JSON.stringify(participantes_actualizados))
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = ""
        let cont = 1
        for (let participante of participantes_actualizados) {
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
            let recorrido = document.createElement("td")
            recorrido.innerHTML = `${redondearA2Decimales(parseInt(participante[7])/1000)}Km`
    
            tr.appendChild(puesto)
            tr.appendChild(nombre)
            tr.appendChild(edad)
            tr.appendChild(cedula)
            tr.appendChild(municipio)
            tr.appendChild(inicio)
            tr.appendChild(fin)
            tr.appendChild(tiempo)
            tr.appendChild(recorrido)
            tbody.append(tr)
            cont += 1
        }
            alert("Ha finalizado la caminata.")
            clearInterval(intervalo)
        }
    }, 1000)
}

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (parseInt(arr[j][7]) < parseInt(arr[j + 1][7])) { 

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function obtenerHoraActual() {
    const fechaActual = new Date();

    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    const totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

    return String(totalSegundos);
}

function redondearA2Decimales(numero) {
    return Math.round(parseInt(numero) * 100) / 100;
}

function bubbleSort2(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (parseInt(arr[j][6]) > parseInt(arr[j + 1][6])) { 

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}