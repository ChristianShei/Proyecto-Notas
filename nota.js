

const input = document.getElementById("tarea")
const input02 = document.getElementById("tareaAlgunMomento")
const listado1 = document.getElementById("lista")
const listado2 = document.getElementById("listaAlgun")



function agregarTarea(){

// no agrega lista si no tiene nada el imput
if (input.value.trim() === ""){
        return
}
// crear lista
const li = document.createElement("li")
const texto = input.value
li.textContent = texto
listado1.appendChild(li)

 // agrega boton para borrar lista
const borrar = document.createElement("button")
 borrar.textContent = "borrar"
 borrar.Id = "botonera"
 borrar.className = "borrar"
li.appendChild(borrar)
 borrar.onclick = function () {
    li.remove();
;}

 input.value = ""
    
}

function agregarTareaAlgun(){
if(input02.value.trim() === ""){
    return
};

    const list = document.createElement("li")
    const text1 = input02.value

    list.textContent = text1
    listado2.appendChild(list)

    input02.value = ""

document.createAttribute("button")

}
document.addEventListener("keydown", presionarBoton)

function presionarBoton(presionar){
    if(presionar.key == "Enter"){
        agregarTarea()
    }
}