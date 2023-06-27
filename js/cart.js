const carrito = JSON.parse(localStorage.getItem('carrito'));
console.log(carrito)
const precioPagar = document.getElementById("precioPagar");
const tarjetaCuotas = document.getElementById("tarjetaCuotas");
const precioPagarTarjeta = document.getElementById("precioPagarTarjeta");
const compraFinalizada = document.getElementById("compraFinalizada");

const finalCompra = () => {
	carrito.forEach((prod) => {
		const div = document.createElement("div");
		div.className = `prodFinalCompra`;
		div.innerHTML = `
<div class="containProdFin">
    <div class="card card-body cartaFin">
    <li class="list-group-item listaProd">
      <img src="../img/${prod.img}" class="card-img-top" alt="..." style="width: 5rem;">
      <p>${prod.nombre}</p>
      <p> $${prod.precio}</p>
      <p>X: ${prod.cantidad}</p>
      </li>  
    </div>
</div>
    `;
		finalizarCompra.appendChild(div);
	});
  precioPagar.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
};
finalCompra();

//TASA DE INTERES 
let tasaInteres = 1.08;

let montoTotal = precioPagar.innerHTML;

tarjetaCuotas.addEventListener(`change`, (e) => {

let cantidadCuotas = e.target.value;

let cuota = montoTotal/cantidadCuotas;

for(let i = 0; i < cantidadCuotas; i++){

  if (cantidadCuotas != 3 && cantidadCuotas != 6){

  cuota = (montoTotal/cantidadCuotas) * tasaInteres;

}

precioPagarTarjeta.innerHTML = cuota.toFixed();
break
}
})

compraFinalizada.addEventListener(`click`, () =>{
    
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por tu compra ',
    text: 'En breve nos estaremos comunicando via mail con los datos de envio y detalles de tu compra.',
    footer: '<p class="marca">Milo indum</p>',
    showConfirmButton: false,
    timer: 5000
  })
  setTimeout(() => {
    window.location.href = "../index.html";
  }, "5050");
  
})
