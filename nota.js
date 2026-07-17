

const input = document.getElementById("tarea")
const input02 = document.getElementById("tareaAlgunMomento")
const listado1 = document.getElementById("lista")
const listado2 = document.getElementById("listaAlgun")


let tareas = JSON.parse (localStorage.getItem("tareas"))|| []
//localStorage.getItem("tareas")
//Busca en el almacenamiento del navegador un dato llamado "tareas".
//Devuelve un texto (string) o null si no existe.

//JSON.parse(...)
//Convierte ese texto en un objeto o arreglo de JavaScript.

tareas.forEach(function(tarea){    // recorre todo el elemento tarea, y por cada texto va agregando un li y lo guarda

    const li = document.createElement("li");
        li.textContent = tarea.texto;
        listado1.appendChild(li);
    const boton = document.createElement("button")
        boton.textContent= "borrar"
        boton.onclick = function(){
        li.remove()
        }

});
////////////////////////// AGREGA TAREA ///////////////////////////////

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
    borrar.Id = "botonera"
    borrar.textContent = "borrar"
    borrar.className = "borrar"
    li.appendChild(borrar)
    borrar.onclick = function () {
    li.remove();
    
;}
 guardarTareas()
 
////// CREA UN OBJETO POR CADA TAREA DEL IMPUT DE TAREA DE HOY    
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

