

const input = document.getElementById("tarea")
const input02 = document.getElementById("tareaAlgunMomento")
const listado1 = document.getElementById("lista")
const listado2 = document.getElementById("listaAlgun")


let tareas = JSON.parse (localStorage.getItem("tareas"))|| []
tareas.forEach(function(tarea){

    const li = document.createElement("li");

    li.textContent = tarea.texto;

    listado1.appendChild(li);

});
///////////////////////////////////////////////////////////////////////////

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



const nuevaTarea = {
    texto: texto,
    completada: false
     
};
tareas.push(nuevaTarea);
localStorage.setItem("tareas", JSON.stringify(tareas)) 
    
 input.value = ""
}
input.addEventListener("keydown" ,presionarBotonera)

function presionarBotonera (presionar){
    if(presionar.key === "Enter"){
        agregarTarea()
    }

    console.log(nuevaTarea)
}

///////////////////////////////////////////////////////////////////////////////////////
function agregarTareaAlgun(){
if(input02.value.trim() === ""){
    return
};

const list = document.createElement("li")
const text1 = input02.value

    list.textContent = text1
    listado2.appendChild(list)
    input02.value = ""


const boton = document.createElement("button")
    boton.classList = "borrar"
    boton.textContent = "borrar"
    boton.onclick = function(){
    list.remove()
}
    list.appendChild(boton)

}
input02.addEventListener("keydown", presionarBoton)

function presionarBoton(presionar){
    if(presionar.key == "Enter"){
        agregarTareaAlgun()
    }
}






