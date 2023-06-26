const carrito = JSON.parse(localStorage.getItem('carrito'));
console.log(carrito)
const precioPagar = document.getElementById("precioPagar");


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
      <button value="X" class="btnElimFinal" onclick = "eliminarDelCarrito (${prod.id})"><i class="bi bi-trash"></i></button>
      </li>  
    </div>
</div>
    `;
		finalizarCompra.appendChild(div);
	});
  precioPagar.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
};
finalCompra();

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
   // if(cantidadCuotas != 1 && cantidadCuotas != 3 && cantidadCuotas != 6){
    //cuota = (montoTotal/cantidadCuotas)* tasaInteres;
  //}
  //alert("Tu monto a pagar por mes $" + cuota.toFixed()+ "");
  //break;
 // }
//}
//calcularCuotas();
