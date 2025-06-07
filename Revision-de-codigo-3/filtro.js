  // Arreglo de productos con sus propiedades
const productos = [  // Se creo una carpeta para colocar las imagenes juntas y se cambio la direccion
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./imagenes/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./imagenes/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./imagenes/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./imagenes/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./imagenes/zapato-rojo.jpg"}
];

  // Se corrigen varias cosas
  /* 
   *  las variables var se cambian por const
   *  Se corrige .getElementByName por .getElementById
   *  La variable li se cambio por listaDeDocumentos
   *  la variable $i se corrige por li
   *  Se elimina el . en const li = document.querySelector('.input');
   */
const listaDeProductos = document.getElementById("lista-de-productos");  
const li = document.querySelector('input'); 

for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div");
  d.classList.add("producto");

  const ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  listaDeProductos.appendChild(d);
}

const botonDeFiltro = document.querySelector("button");  // Se agrega la variable botonDeFiltro

botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const texto = li.value.toLowerCase();  // Se cambia y corrige $i.value por li.value.toLowerCase()
  const productosFiltrados = filtrado(productos, texto);  // Se agrega la variable productosFiltrados

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");
  
    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    listaDeProductos.appendChild(d);
  }
};

  // Se agrega toLowerCase() para convertir el texto a minúsculas y así hacer que la comparación sea insensible a mayúsculas o minúsculas.
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
  );
};