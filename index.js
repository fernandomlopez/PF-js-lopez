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


// filtramos las prendas con poco stock oara mostrarlo en pantalla // POCO STOCK
let stockMin = arrayIndum.filter((element)=> element.stock <= 3);
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
  alert(`- ${e.nombre}: \n- Precio: $ ${e.precio} \n- Talles: ${e.talles}`)  
})

//buscar por nombre del producto

const productoEncontrado = arrayIndum.filter((e) => e.nombre.toLowerCase() == productoBuscado);
productoEncontrado.forEach((e) => {
  alert(`Resultado para la busqueda " ${productoBuscado} " :\n
  - ${e.nombre}: \n- Precio: $ ${e.precio} \n- Talles: ${e.talles} `)
})
console.log(productoEncontrado);


