

const input = document.getElementById("tarea")
const listado = document.getElementById("lista")
const texto = input.value


function agregarTarea(){

// no agrega lista si no tiene nada el imput
if (input.value.trim() === ""){
        return
}
// crear lista
const li = document.createElement("li")


const texto = input.value
li.textContent = texto
listado.appendChild(li)

 // agrega boton para borrar lista
const borrar = document.createElement("button")
 borrar.textContent = "borrar"
li.appendChild(borrar)
 borrar.onclick = function () {
    li.remove();
;}

 input.value = ""
    
}

document.addEventListener("keydown", presionarBoton)

function presionarBoton(presionar){
    if(presionar.key == "Enter"){
        agregarTarea()
    }
}