

const input = document.getElementById("tarea")
const input02 = document.getElementById("tareaAlgunMomento")
const listado1 = document.getElementById("lista")
const listado2 = document.getElementById("listaAlgun")
////////////////////////guardar en el local de la PC Las notas de Tareas algun////////////////////
let tareasAlgun = JSON.parse (localStorage.getItem("tareasAlgun"))|| []
tareasAlgun.forEach(function(tarea){


    const li = document.createElement("li");
        li.textContent = tarea.texto;
        listado2.appendChild(li);
    const boton = document.createElement("button")
            li.appendChild(boton) 
            boton.textContent = "borrar"
            boton.onclick = function(){
                li.remove();
            tareasAlgun = tareasAlgun.filter(function(item){
                return item.id !== tarea.id
            });
            localStorage.setItem("tareasAlgun", JSON.stringify(tareas))
            }})
////////////////////////guardar en el local de la PC Las notas de Tareas hoy ////////////////////
let tareas = JSON.parse (localStorage.getItem("tareas"))|| [] //Obtener las tareas, convertirlas nuevamente en un array y, si no existen, crear un array vacío.

tareas.forEach(function(tarea){

    const li = document.createElement("li");
        li.textContent = tarea.texto;
        listado1.appendChild(li);
    const boton = document.createElement("button")
            li.appendChild(boton) 
            boton.textContent = "borrar"
            boton.onclick = function(){
                li.remove();
            tareas = tareas.filter(function(item){
                return item.id !== tarea.id
            });
            localStorage.setItem("tareas", JSON.stringify(tareas))
            }

});
///////////////////////////////////////////////////////////////////////////

function agregarTarea(){

// no agrega lista si no tiene nada el imput
if (input.value.trim() === ""){
        return
}
// crear listañ
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
     guardarTareas()
;}
 guardarTareas()
 
    
const nuevaTarea = {
    id: Date.now(),
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
const nuevaTareaAlgun = {
    id: Date.now(),
    texto: text1,
    completada: false
}

tareasAlgun.push(nuevaTareaAlgun);
localStorage.setItem("tareasAlgun", JSON.stringify(tareasAlgun)) 

input02.addEventListener("keydown", presionarBoton)
function presionarBoton(presionar){
    if(presionar.key == "Enter"){
      agregarTareaAlgun()
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
        botonera.className = "borrar"
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