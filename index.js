// primero pedir monto total a calcular en cuotas 
let montoTotal = 0
//Nos aseguramos que sea un valor correcto y posible a calcular
while (true) {
  montoTotal = parseInt(prompt("Ingrese el monto total"));
  if (!isNaN(montoTotal) && montoTotal != null && montoTotal != " ") {
    break;
  } else {
    alert("Monto ingresado incorrectamente, vuelva a intentarlo por favor");
    continue;
  }
}

// Mostramos el monto total ingresado por el usuario en pantalla 

alert("Monto total ingresado a calcular es: $" + montoTotal + "")
console.log("Monto total ingresado a calcular es: $" + montoTotal + "")

// Le recordamos de sus posibilidades de financiacion en cuotas sin interes

alert("Recuerde que tiene 6 y 12 cuotas sin interes")

// le pedimos que elija la cantidad de cuotas y nos aseguramos que sea dentro de los valores posibles

let cantidadCuotas = 0
while (true) {
  cantidadCuotas = parseInt(prompt("Elija la cantidad de cuotas"));
  if (!isNaN(cantidadCuotas) && cantidadCuotas != null && cantidadCuotas != " ") {
    break;
  } else {
    alert("Vuelva a intentarlo por favor");
    continue;
  }
}
//TASA DE INTERES 
let tasaInteres = 1.05;

//funcion para calcular cuotas que muestra en pantalla solo el monto a pagar por mes
function calcularCuotas(){
  let cuota = montoTotal/cantidadCuotas;
  for(let i=0; i < cantidadCuotas; i++){
    if(cantidadCuotas != 1 && cantidadCuotas != 6 && cantidadCuotas != 12){
    cuota = (montoTotal/cantidadCuotas)* tasaInteres;
  }
  alert("Tu monto a pagar por mes $" + cuota.toFixed()+ "");
  break;
  }
}
calcularCuotas();

class Indumentaria {
   constructor(id, nombre, precio, talles, colores, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.talles = talles;
      this.colores = colores;
      this.categoria = categoria;
      this.stock = 5;
   }
   restaStock() {
      alert(`Sumaste ${this.nombre} a tu carrito`);
      this.stock = this.stock - 1;
      }
   sumarIva() {
      return this.precio * 1.21;
   }
   precioSugerido() {
      return this.precio * 1.21 * 1.25;
   }
}

const camperaDeJean = new Indumentaria(1, "Campera de jean", 15000, "S, M, L, XL", "Jean, Negro", "camperas");
const camperaCuero = new Indumentaria(2, "Campera de cuero", 25000, "S, M, L, XL", "Negro", "camperas");
const pantalonJean = new Indumentaria(3, "Pantalon de jean", 10516, "38, 40, 42, 44", "Jean, Negro", "pantalones");
const pantalonJoggerMom = new Indumentaria(4, "Pantalon Jogger MOM", 8200, "38, 40, 42, 44", "Black, Beige", "pantalones");
const remeraDark = new Indumentaria(5, "Remera Dark Oversize", 7500, "S, M, L, XL", "Negro", "remeras");
const remeraWhite = new Indumentaria(6, "Remera White Oversize", 7500, "S, M, L, XL", "Blanco", "remeras");
const buzoOversize = new Indumentaria(7, "Buzo oversize", 8400, "S, M, L, XL", "Negro, Gris, Azul, Naranja, Rojo, Beige", "remeras");
const buzoCanguro = new Indumentaria(8, "Buzo Canguro", 8800, "S, M, L, XL", "Negro, Gris, Azul, Naranja, Rojo, Beige", "remeras");

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

//mmostramos en pantalla los productos que tenemos en stock
alert("Estos son nuestros productos en stock");
arrayIndum.forEach(e => {
   alert(`- ${e.nombre}: \n* Precio: $ ${e.precio} \n* Talles: ${e.talles}\n* Colores: ${e.colores}`) 
})

//le pedimos al usuario un numero para poder checkear el stock disponible
let stockUser = parseInt(prompt("Ingrese un numero del 1 al 10"));
if (stockUser < 5){
  alert("No hay prendas sin stock")
}
console.log(`Numero ingresado por el usuario ${stockUser}`);

// filtramos las prendas con poco stock oara mostrarlo en pantalla // POCO STOCK
let stockMin = arrayIndum.filter((element)=> element.stock <= stockUser);
stockMin.forEach((element) => alert(`Estos son los productos a comprar nuevamente:\n ${element.nombre}`));

// productos sin stock
let sinStock = arrayIndum.filter((element) => element.stock == 0);
console.log(`Productos sin stock: ${sinStock}`);

// ordenamos los productos de menor a mayor precio y lo mostramos por alerta
arrayIndum.sort((a,b) => a.precio - b.precio);
console.log("Precios ordenados de menor a mayor :")
console.table(arrayIndum);

alert("Precios ordenados de menor a mayor")

arrayIndum.forEach((e)=> {
  alert(`- ${e.nombre}: \n- Precio: $ ${e.precio} \n- Talles: ${e.talles}\n- Colores: ${e.colores}`)  
})

//buscar por nombre del producto
let productoBuscado = prompt("Ingrese el nombre del producto a buscar");

console.log(productoBuscado);
const productoEncontrado = arrayIndum.filter((e) => e.nombre.toLowerCase() == productoBuscado);
productoEncontrado.forEach((e) => {
  alert(`Resultado para la busqueda " ${productoBuscado} " :\n
  - ${e.nombre}: \n- Precio: $ ${e.precio} \n- Talles: ${e.talles}\n- Colores: ${e.colores} `)
})
console.log(productoEncontrado);