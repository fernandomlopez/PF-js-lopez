// primero pedir monto total a calcular en cuotas 

let montoTotal = 0
while (true){
  montoTotal = parseInt(prompt("Ingrese el monto total"));
    if(!isNaN(montoTotal) && montoTotal != null && montoTotal != " "){
      break;
}else {
    alert("Monto ingresado incorrectamente, vuelva a intentarlo por favor");
    continue;
}
}
// mostramos el monto total ingresado por el usuario en pantalla 

document.write("<h3> Monto total ingresado a calcular es: $"+montoTotal+"</h3><br>")
alert("Monto total ingresado a calcular es: $"+montoTotal+"")
console.log("Monto total ingresado a calcular es: $"+montoTotal+"")

// le recordamos de sus posibilidades de financiacion 
alert("Recuerde que tiene 6 y 12 cuotas sin interes")

// le pedimos que elija la cantidad de cuotas 

let cantidadCuotas = parseInt(prompt("Elija la cantidad de cuotas"));

function calcularCuotas(){
  if(cantidadCuotas == 1 ||  cantidadCuotas == 6 ||  cantidadCuotas == 12){
    let cuotasSinInteres = ( montoTotal / cantidadCuotas);
    cuotasSinInteresM = cuotasSinInteres.toFixed(2)
    document.write("<h5>Tu monto a pagar por mes $ "+cuotasSinInteresM+" sin interes</h5>")
  } else{
    let cuotas = (montoTotal / cantidadCuotas) * 1.05;
    cuotasM = cuotas.toFixed(2)
    document.write("<h5> tu monto a pagar por mes $ "+cuotasM+"</h5>");
  }
}
calcularCuotas();
