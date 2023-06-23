const finalizarCompra = document.getElementById("finalizarCompra")
const carritoContenedor = document.getElementById("carrito-contain")

fetch("../js/indumentaria.json") 
    .then(res => res.json())
    .then(data => {
         arrayIndum = data;
    });

    let carrito = [];


    //local storage del carrito
document.addEventListener(`DOMContentLoaded`, () => {
  if (localStorage.getItem(`carrito`)) {
     carrito = JSON.parse(localStorage.getItem(`carrito`))
     actCarrito()
  }
})

const agregarAlCarrito = (indumId) => {
      const item = arrayIndum.find((indum) => indum.id === indumId)
      const repeat = carrito.some((indum) => indum.id === indumId)
      if (repeat) {
         const index = carrito.findIndex((indum) => indum.id === indumId)
         carrito[index].cantidad++
      } else {
         const newItem = {...item, cantidad: 1} 
         carrito.push(newItem)
      }
      actCarrito()
   }

    const eliminarDelCarrito = (indumId) => {
      const item = carrito.find((indum) => indum.id === indumId)
      const indice = carrito.indexOf(item)
      carrito.splice(indice, 1)
      actCarrito()
   }
   
   const actCarrito = () => {

    carritoContenedor.innerHTML = " ";
 
    carrito.forEach((prod) => {
       const div = document.createElement(`div`)
       div.className = (`prodEnCarrito`)
       div.innerHTML = `
       <p>${prod.nombre}</p>
       <p>Precio: $${prod.precio}</p>
       <p>Cantidad: ${prod.cantidad}</p>
       <button value="X" onclick = "eliminarDelCarrito (${prod.id})"><i class="bi bi-trash"></i></button>
       `
 
       carritoContenedor.appendChild(div)
 
       localStorage.setItem(`carrito`, JSON.stringify(carrito))
    })
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    contadorCarrito.innerText = carrito.length
 }

const finalCompra = () => {
  carrito.forEach((prod) => {
     const div = document.createElement("div")
     div.className = (`prodFinalCompra`)
     div.innerHTML = `
     <img src="${prod.img}>"
     <p>${prod.nombre}</p>
     <p>Precio: $${prod.precio}</p>
     <p>Cantidad: ${prod.cantidad}</p>
     <button value="X" onclick = "eliminarDelCarrito (${prod.id})"><i class="bi bi-trash"></i></button>
     `
     finalizarCompra.appendChild(div)
  })
  }
  finalCompra()

  // primero pedir monto total a calcular en cuotas 
//let montoTotal = 0
//Nos aseguramos que sea un valor correcto y posible a calcular
//while (true) {
//  montoTotal = parseInt(prompt("Ingrese el monto total"));
 // if (!isNaN(montoTotal) && montoTotal != null && montoTotal != " ") {
   // break;
  //} else {
 //   alert("Monto ingresado incorrectamente, vuelva a intentarlo por favor");
    //continue;
  //}
//}

// Mostramos el monto total ingresado por el usuario en pantalla 

//alert("Monto total ingresado a calcular es: $" + montoTotal + "")
//console.log("Monto total ingresado a calcular es: $" + montoTotal + "")

// Le recordamos de sus posibilidades de financiacion en cuotas sin interes

//alert("Recuerde que tiene 6 y 12 cuotas sin interes")

// le pedimos que elija la cantidad de cuotas y nos aseguramos que sea dentro de los valores posibles

//let cantidadCuotas = 0
//while (true) {
  //cantidadCuotas = parseInt(prompt("Elija la cantidad de cuotas"));
  //if (!isNaN(cantidadCuotas) && cantidadCuotas != null && cantidadCuotas != " ") {
    //break;
  //} else {
 //   alert("Vuelva a intentarlo por favor");
  //  continue;
  //}
//}
//TASA DE INTERES 
//let tasaInteres = 1.05;

//funcion para calcular cuotas que muestra en pantalla solo el monto a pagar por mes
//function calcularCuotas(){
 // let cuota = montoTotal/cantidadCuotas;
  //for(let i=0; i < cantidadCuotas; i++){
   // if(cantidadCuotas != 1 && cantidadCuotas != 6 && cantidadCuotas != 12){
    //cuota = (montoTotal/cantidadCuotas)* tasaInteres;
  //}
  //alert("Tu monto a pagar por mes $" + cuota.toFixed()+ "");
  //break;
 // }
//}
//calcularCuotas();
