

const input = document.getElementById("tarea")
const input02 = document.getElementById("tareaAlgunMomento")
const listado1 = document.getElementById("lista")
const listado2 = document.getElementById("listaAlgun")


let tareas = JSON.parse (localStorage.getItem("tareas"))|| []

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
    input.value = ""

 // agrega boton para borrar lista
const borrar = document.createElement("button")
    borrar.textContent = "borrar"
    borrar.className = "borrar"
    li.appendChild(borrar)
    borrar.onclick = function () {
    li.remove();
     guardarTareas()
;}
 guardarTareas()
 
    
}
input.addEventListener("keydown", presionarBoton)
function presionarBoton(presionar){
    if(presionar.key == "Enter"){
        agregarTarea()
    }
}
// funcion de boton de tarea de algun momento////////////////////////////////////
function agregarTareaAlgun(){

    if(input02.value.trim() === ""){
    return
    }
//creación de lista
const list = document.createElement("li")
const text1 = input02.value
        list.textContent = text1
        listado2.appendChild(list)
        input02.value = ""
// boton de borrar
    const botonera = document.createElement("button")
        botonera.textContent = "borrar"
        botonera.className = "borrares"
        list.appendChild(botonera)
        botonera.onclick = function(){
            list.remove()}
            
}
input02.addEventListener("keydown", presionarBotonAlgun)
function presionarBotonAlgun(presionar){
    if(presionar.key == "Enter"){
       agregarTareaAlgun()
    }
}

// Cada vez que agregues o elimines una tarea, llamá a una función
function guardarTareas() {
    localStorage.setItem("tarea", listado1.innerHTML);
    localStorage.setItem("tareaAlgunMomento", listado2.innerHTML);
}


window.onload = function () {
    listado1.innerHTML = localStorage.getItem("tarea") || "";
    listado2.innerHTML = localStorage.getItem("tareaAlgunMomento") || "";
};