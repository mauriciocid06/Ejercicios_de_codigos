var formulario = document.querySelector("#form");

formulario.onsubmit = function(edad) {

  edad.prevent();
  
  const nombre = formulario.elements[0];   // Cambie todas las variables --var-- por --const-- 
  const edad = formulario.elements[1];
  const nacionalidad = formulario.elements[2];

  nombre = nombre.value; // No se puede redeclarar la variable de ámbito de bloque 'nombre'
  edad = edad.value; // No se puede redeclarar la variable de ámbito de bloque 'edad'

  var i = nacionalidad.selectedIndex;
  nacionalidad = nacionalidad.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados");

const elementoLista = document.createElement("div");
elementoLista.classList.added("elemento-lista");
lista.appendChild(elementoLista);

const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}