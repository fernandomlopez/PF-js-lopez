//stock disponible constructor para desarrollarlo 
class Indumentaria {
    constructor(id, nombre,img, precio, talles, categoria) {
       this.id = id;
       this.nombre = nombre;
       this.img = img;
       this.precio = parseFloat(precio);
       this.talles = talles;
       this.categoria = categoria;
       this.stock = 5;
    }
    restaStock() {
       this.stock = this.stock - 1;
       }
    sumarIva() {
       return this.precio * 1.21;
    }
    precioSugerido() {
       return this.precio * 1.21 * 1.25;
    }
 }
 
 const camperaDeJean = new Indumentaria(1, "Campera de jean",`./img/camperajean.png`, 15000, "S, M, L, XL", "camperas");
 const camperaCuero = new Indumentaria(2, "Campera de cuero",`./img/images.jpg`, 25000, "S, M, L, XL", "camperas");
 const pantalonJean = new Indumentaria(3, "Pantalon de jean",`./img/pantalonjean.jpg`, 10516, "38, 40, 42, 44", "pantalones");
 const pantalonJoggerMom = new Indumentaria(4, "Pantalon Jogger MOM",`./img/patanlonjoggermom.jpg`, 8200, "38, 40, 42, 44", "pantalones");
 const remeraDark = new Indumentaria(5, "Remera Dark Oversize",`./img/remeradark.jpg`, 7500, "S, M, L, XL", "remeras");
 const remeraWhite = new Indumentaria(6, "Remera White Oversize",`./img/remerawhite.jpg`, 7500, "S, M, L, XL", "remeras");
 const buzoOversize = new Indumentaria(7, "Buzo oversize",`./img/buzooversize.jpg`, 8400, "S, M, L, XL", "remeras");
 const buzoCanguro = new Indumentaria(8, "Buzo Canguro",`./img/buzocanguro.jpg`, 8800, "S, M, L, XL", "remeras");
 
 const arrayIndum = [
    camperaDeJean, 
    camperaCuero, 
    buzoOversize, 
    buzoCanguro, 
    pantalonJean, 
    pantalonJoggerMom, 
    remeraDark, 
    remeraWhite,
 ];
 

const indumProductos = document.getElementById("indumProductos")
const carritoContenedor = document.getElementById("carrito-contain") 
const precioTotal = document.getElementById("precioTotal")


const prodBuscado = (e) => {
   e.preventDefault()
   indumProductos.innerHTML = ""
   let buscar = document.getElementById("buscar")
   let valor = buscar.value
   console.log(valor)
   const prodEncontrado = arrayIndum.filter((producto) => {
      return producto.nombre.toLowerCase().includes(valor.toLowerCase());
   });
   console.log(prodEncontrado)
   prodEncontrado.forEach(( e => { 
  
      let divCard = document.createElement("div")
 
      divCard.innerHTML = `
      <div class="card carta" style="width: 18rem;">
      <img src="${e.img}" class="card-img-top img-css" alt="${e.img}">
    <div class="card-body">
      <h5 class="card-title nombreProd">${e.nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Precio: $${e.precio}</li>
      <li class="list-group-item">Talles: ${e.talles}</li>
    </ul>
    <div class="card-body d-flex justify-content-center">
    <input type="button" class="btn" value="Agregar" id="agregar${e.id}"></a>
    </div>
  </div>
      `
      indumProductos.append(divCard)
      const btnAgregar = document.getElementById(`agregar${e.id}`)
      btnAgregar.addEventListener(`click`, () => {
       agregarAlCarrito(e.id)
      })
 }))
}
const formBusqueda = document.getElementById("formBusqueda")
formBusqueda.addEventListener("submit", (e) =>{
   prodBuscado(e)
})

// recorremos el array y creamos una card por cada producto
const renderizar = () => {
   arrayIndum.forEach(( e => { 
     let divCard = document.createElement("div")
 
     divCard.innerHTML = `
     <div class="card carta" style="width: 18rem;">
     <img src="${e.img}" class="card-img-top img-css" alt="${e.img}">
   <div class="card-body">
     <h5 class="card-title nombreProd">${e.nombre}</h5>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Precio: $${e.precio}</li>
     <li class="list-group-item">Talles: ${e.talles}</li>
   </ul>
   <div class="card-body d-flex justify-content-center">
   <input type="button" class="btn" value="Agregar" id="agregar${e.id}"></a>
   </div>
 </div>
     `
     indumProductos.append(divCard)

     const btnAgregar = document.getElementById(`agregar${e.id}`)

     btnAgregar.addEventListener(`click`, () => {
      agregarAlCarrito(e.id)
     })
}))
}
renderizar();

// creamos un array vacio para el carrito
let carrito = [];

document.addEventListener(`DOMContentLoaded`, () => {
   if(localStorage.getItem(`carrito`)){
      carrito = JSON.parse(localStorage.getItem(`carrito`))
      actCarrito()
   }
})

//funcion para agregar al carrito

const agregarAlCarrito = (indumId) => {
     const item = arrayIndum.find((indum) => indum.id === indumId)
     carrito.push(item)
     actCarrito()
}

//funcion para eliminar del carrito 

const eliminarDelCarrito = (indumId) => {
   const item = carrito.find((indum) => indum.id === indumId)
   const indice = carrito.indexOf(item)
   carrito.splice(indice,1)
   actCarrito()
}

//funcion para actualizar carrito 

const actCarrito = () => {

    carritoContenedor.innerHTML = ""

   carrito.forEach((prod) => {
      const div = document.createElement(`div`)
      div.className = (`prodEnCarrito`)
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio: $${prod.precio}</p>
      <button value="X" onclick = "eliminarDelCarrito (${prod.id})" class = "btn-css"></button>
      `

      carritoContenedor.appendChild(div)

      localStorage.setItem(`carrito`, JSON.stringify(carrito))
   })
   precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio,0)
}