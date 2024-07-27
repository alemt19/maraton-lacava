
var participantes = JSON.parse(localStorage.getItem("participantes")) || []

const edad = document.getElementById("edad")
edad.addEventListener("input", function () {
    let edadTxt = edad.value 
    if (parseInt(edadTxt) < 1 || parseInt(edadTxt) > 100) {
        edad.value = ""
    }
})

function registrar_participante () {
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    const cedula = document.getElementById("cedula")
    const municipio = document.getElementById("municipio")

    if (parseInt(cedula.value) > 34000000 || cedula.value.length < 8) {
        cedula.value = ""
        return alert("Cédula inválida.")
    }

    participantes.push([nombre.value, edad.value, cedula.value, municipio.value, "0", "0", "0"])
    nombre.value = ""
    edad.value = ""
    cedula.value = ""
    municipio.value = ""
    alert("Participante registrado. Si ya no se van a registrar más participantes debe confirmar el registro")
}

function confirmar_registro () {
    if (participantes.length > 0) {
        localStorage.clear()
        localStorage.setItem("participantes", JSON.stringify(participantes))
        alert("Se ha guardado el registro de participantes.")
        window.location.href = "index.html"
    }
    else {
        alert("Por favor registre a un participante antes de hacer la confirmación.")
    }
}