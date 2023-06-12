//stock disponible constructor para desarrollarlo 
class Indumentaria {
   constructor(id, nombre, img, precio, talles, categoria) {
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

const camperaDeJean = new Indumentaria(1, "Campera de jean", `./img/camperajean.png`, 15000, ["S", "M", "L", "XL"], "camperas");
const camperaCuero = new Indumentaria(2, "Campera de cuero", `./img/images.jpg`, 25000, ["S", "M", "L", "XL"], "camperas");
const pantalonJean = new Indumentaria(3, "Pantalon de jean", `./img/pantalonjean.jpg`, 10516, ["38", "40", "42", "44"], "pantalones");
const pantalonJoggerMom = new Indumentaria(4, "Pantalon Jogger MOM", `./img/patanlonjoggermom.jpg`, 8200, ["38", "40", "42", "44"], "pantalones");
const remeraDark = new Indumentaria(5, "Remera Dark Oversize", `./img/remeradark.jpg`, 7500, ["S", "M", "L", "XL"], "remeras");
const remeraWhite = new Indumentaria(6, "Remera White Oversize", `./img/remerawhite.jpg`, 7500, ["S", "M", "L", "XL"], "remeras");
const buzoOversize = new Indumentaria(7, "Buzo oversize", `./img/buzooversize.jpg`, 8400, ["S", "M", "L", "XL"], "buzos");
const buzoCanguro = new Indumentaria(8, "Buzo Canguro", `./img/buzocanguro.jpg`, 8800, ["S", "M", "L", "XL"], "buzos");

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
const contadorCarrito = document.getElementById("contadorCarrito")

// recorremos el array y creamos una card por cada producto
const renderizar = () => {
   arrayIndum.forEach((e => {
      let divCard = document.createElement("div")

      divCard.innerHTML = `
     <div class="card carta" style="width: 18rem;">
     <img src="${e.img}" class="card-img-top img-css" alt="${e.img}">
   <div class="card-body">
     <h5 class="card-title nombreProd">${e.nombre}</h5>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Precio: $${e.precio}</li>
     <li class="list-group-item">
     <select class="form-select form-select-sm" aria-label=".form-select-sm example">
     <option selected>Elegí tu talle</option>
     <option value="1">${e.talles[0]}</option>
     <option value="2">${e.talles[1]}</option>
     <option value="3">${e.talles[2]}</option>
     <option value="4">${e.talles[3]}</option>
     </select></li>
   </ul>
   <div class="card-body d-flex justify-content-center">
   <input type="button" class="btn" value="Agregar al carrito" id="agregar${e.id}"></a>
   </div>
 </div>
     `
      indumProductos.append(divCard)

      const btnAgregar = document.getElementById(`agregar${e.id}`)

      btnAgregar.addEventListener(`click`, () => {
         agregarAlCarrito(e.id)
         Swal.fire({
            position: 'bottom-end',
            showCancelButton:false,
            showClass: {
               popup: 'animate__animated animate__fadeInDown'
             },
             hideClass: {
               popup: 'animate__animated animate__fadeOutUp'
             },
            icon: 'success',
            html:
            `Agregaste <b>${e.nombre}</b> al carrito`, 
            showConfirmButton: false,
            timer: 3000
         })
      })
   }))
}
renderizar();

// creamos un array vacio para el carrito
let carrito = [];



//local storage del carrito
document.addEventListener(`DOMContentLoaded`, () => {
   if (localStorage.getItem(`carrito`)) {
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
   carrito.splice(indice, 1)
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
      <button value="X" onclick = "eliminarDelCarrito (${prod.id})"><i class="bi bi-trash"></i></button>
      `

      carritoContenedor.appendChild(div)

      localStorage.setItem(`carrito`, JSON.stringify(carrito))
   })
   precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
   contadorCarrito.innerText = carrito.length
}



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
   prodEncontrado.forEach((e => {

      let divCard = document.createElement("div")

      divCard.innerHTML = `
      <div class="card carta" style="width: 18rem;">
      <img src="${e.img}" class="card-img-top img-css" alt="${e.img}">
    <div class="card-body">
      <h5 class="card-title nombreProd">${e.nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Precio: $${e.precio}</li>
      <li class="list-group-item">
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>Elegí tu talle</option>
      <option value="1">${e.talles[0]}</option>
      <option value="2">${e.talles[1]}</option>
      <option value="3">${e.talles[2]}</option>
      <option value="4">${e.talles[3]}</option>
      </select></li>
    <div class="card-body d-flex justify-content-center">
    <input type="button" class="btn" value="Agregar al carrito" id="agregar${e.id}"></a>
    </div>
  </div>
      `
      indumProductos.append(divCard)
      const btnAgregar = document.getElementById(`agregar${e.id}`)
      btnAgregar.addEventListener(`click`, () => {
         agregarAlCarrito(e.id)
         Swal.fire({
            position: 'bottom-end',
            showCancelButton:false,
            showClass: {
               popup: 'animate__animated animate__fadeInDown'
             },
             hideClass: {
               popup: 'animate__animated animate__fadeOutUp'
             },
            icon: 'success',
            html:
            `Agregaste <b>${e.nombre}</b> al carrito`,
            showConfirmButton: false,
            timer: 3000,
         })
      })
   }))
}
const formBusqueda = document.getElementById("formBusqueda")
formBusqueda.addEventListener("submit", (e) => {
   prodBuscado(e)
})

const filtrarCategorias = (categoria) => {
   indumProductos.innerHTML = ""
   const catEncontrada = arrayIndum.filter((prod) => prod.categoria.toLowerCase() === categoria);
   console.log(catEncontrada);

   catEncontrada.forEach((e => {

      let divCard = document.createElement("div")

      divCard.innerHTML = `
   <div class="card carta" style="width: 18rem;">
   <img src="${e.img}" class="card-img-top img-css" alt="${e.img}">
 <div class="card-body">
   <h5 class="card-title nombreProd">${e.nombre}</h5>
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">Precio: $${e.precio}</li>
   <li class="list-group-item">
   <select class="form-select form-select-sm" aria-label=".form-select-sm example">
   <option selected>Elegí tu talle</option>
   <option value="1">${e.talles[0]}</option>
   <option value="2">${e.talles[1]}</option>
   <option value="3">${e.talles[2]}</option>
   <option value="4">${e.talles[3]}</option>
   </select></li>
 <div class="card-body d-flex justify-content-center">
 <input type="button" class="btn" value="Agregar al carrito" id="agregar${e.id}"></a>
 </div>
</div>
   `
      indumProductos.append(divCard)
      const btnAgregar = document.getElementById(`agregar${e.id}`)
      btnAgregar.addEventListener(`click`, () => {
         agregarAlCarrito(e.id)
         Swal.fire({
            position: 'bottom-end',
            showCancelButton:false,
            showClass: {
               popup: 'animate__animated animate__fadeInDown'
             },
             hideClass: {
               popup: 'animate__animated animate__fadeOutUp'
             },
            icon: 'success',
            html:
            `Agregaste <b>${e.nombre}</b> al carrito`,
            showConfirmButton: false,
            timer: 3000
         })
      })
   }))
}

const catCamperas = document.getElementById("cat-camperas")
catCamperas.addEventListener("click", () => {
   filtrarCategorias("camperas")
})

const catBuzos = document.getElementById("cat-buzos")
catBuzos.addEventListener("click", () => {
   filtrarCategorias("buzos")
})

const catPantalones = document.getElementById("cat-pantalones")
catPantalones.addEventListener("click", () => {
   filtrarCategorias("pantalones")
})

const catRemeras = document.getElementById("cat-remeras")
catRemeras.addEventListener("click", () => {
   filtrarCategorias("remeras")
})

const home = document.getElementById("home")
home.addEventListener(`click`, () => {
   location.reload()
})

//filtro para ordenar los precios en forma ascendente 
const filtroPreciosAsc = () => arrayIndum.sort((a, b) => a.precio - b.precio)
console.log(filtroPreciosAsc())
const filtroPreciosDes = () => arrayIndum.sort((a, b) => b.precio - a.precio)
console.log(filtroPreciosDes())


const filtrito = document.getElementById("filtrito");
filtrito.addEventListener(`change`, (e) => {
   let valorOption = e.target.value;
   if (valorOption == "ascendente") {
      console.log(filtroPreciosAsc())
   } else if (valorOption == "descendente") {
      console.log(filtroPreciosDes())
   }
})
