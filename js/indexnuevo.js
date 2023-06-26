const indumProductos = document.getElementById("indumProductos");
const carritoContenedor = document.getElementById("carrito-contain");
const precioTotal = document.getElementById("precioTotal");
const contadorCarrito = document.getElementById("contadorCarrito");
const finalizarCompra = document.getElementById("finalizarCompra");
let carrito = [];
let arrayIndum = [];

fetch("./js/indumentaria.json")
	.then((res) => res.json())
	.then((data) => {
		arrayIndum = data;
		renderizar();
	});

// recorremos el array y creamos una card por cada producto
const renderizar = () => {
	arrayIndum.forEach((e) => {
		let divCard = document.createElement("div");

		divCard.innerHTML = `
     <div class="card carta" style="width: 18rem;">
     <img src="./img/${e.img}" class="card-img-top img-css" alt="${e.nombre}">
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
   <input type="button" class="btn btn-outline-primary" value="Agregar al carrito" id="agregar${e.id}"></a>
   </div>
 </div>
     `;
		indumProductos.append(divCard);

		const btnAgregar = document.getElementById(`agregar${e.id}`);

		btnAgregar.addEventListener(`click`, () => {
			agregarAlCarrito(e.id);
			Swal.fire({
				position: "center",
				showCancelButton: false,
				showClass: {
					popup: "animate_animated animate_fadeInDown",
				},
				hideClass: {
					popup: "animate_animated animate_fadeOutUp",
				},
				icon: "success",
				html: `Agregaste <b>${e.nombre}</b> al carrito`,
				showConfirmButton: false,
				timer: 3000,
			});
		});
	});
};
const prodBuscado = (e) => {
	e.preventDefault();
	indumProductos.innerHTML = "";
	let buscar = document.getElementById("buscar");
	let valor = buscar.value;
	console.log(valor);
	const prodEncontrado = arrayIndum.filter((producto) => {
		return producto.nombre.toLowerCase().includes(valor.toLowerCase());
	});
	console.log(prodEncontrado);
	prodEncontrado.forEach((e) => {
		let divCard = document.createElement("div");

		divCard.innerHTML = `
      <div class="card carta" style="width: 18rem;">
      <img src="./img/${e.img}" class="card-img-top img-css" alt="${e.nombre}">
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
      `;
		indumProductos.append(divCard);
		const btnAgregar = document.getElementById(`agregar${e.id}`);
		btnAgregar.addEventListener(`click`, () => {
			agregarAlCarrito(e.id);
			Swal.fire({
				position: "center",
				showCancelButton: false,
				showClass: {
					popup: "animate_animated animate_fadeInDown",
				},
				hideClass: {
					popup: "animate_animated animate_fadeOutUp",
				},
				icon: "success",
				html: `Agregaste <b>${e.nombre}</b> al carrito`,
				showConfirmButton: false,
				timer: 3000,
			});
		});
	});
};
const formBusqueda = document.getElementById("formBusqueda");
formBusqueda.addEventListener("submit", (e) => {
	prodBuscado(e);
});
const filtrarCategorias = (categoria) => {
	indumProductos.innerHTML = "";
	const catEncontrada = arrayIndum.filter((prod) => prod.categoria === categoria);
	console.log(catEncontrada);

	catEncontrada.forEach((e) => {
		let divCard = document.createElement("div");

		divCard.innerHTML = `
   <div class="card carta" style="width: 18rem;">
   <img src="/img/${e.img}" class="card-img-top img-css" alt="${e.nombre}">
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
   `;
		indumProductos.append(divCard);
		const btnAgregar = document.getElementById(`agregar${e.id}`);
		btnAgregar.addEventListener(`click`, () => {
			agregarAlCarrito(e.id);
			Swal.fire({
				position: "center",
				showCancelButton: false,
				showClass: {
					popup: "animate_animated animate_fadeInDown",
				},
				hideClass: {
					popup: "animate_animated animate_fadeOutUp",
				},
				icon: "success",
				html: `Agregaste <b>${e.nombre}</b> al carrito`,
				showConfirmButton: false,
				timer: 3000,
			});
		});
	});
};

const catCamperas = document.getElementById("cat-camperas");
catCamperas.addEventListener("click", () => {
	filtrarCategorias("camperas");
});

const catBuzos = document.getElementById("cat-buzos");
catBuzos.addEventListener("click", () => {
	filtrarCategorias("buzos");
});

const catPantalones = document.getElementById("cat-pantalones");
catPantalones.addEventListener("click", () => {
	filtrarCategorias("pantalones");
});

const catRemeras = document.getElementById("cat-remeras");
catRemeras.addEventListener("click", () => {
	filtrarCategorias("remeras");
});

const home = document.getElementById("home");
home.addEventListener(`click`, () => {
	location.reload();
});

//filtro para ordenar los precios en forma ascendente
const filtroPreciosAsc = () => arrayIndum.sort((a, b) => a.precio - b.precio);
const filtroPreciosDes = () => arrayIndum.sort((a, b) => b.precio - a.precio);
const filtrito = document.getElementById("filtrito");
filtrito.addEventListener(`change`, (e) => {
	let valorOption = e.target.value;
	if (valorOption == "ascendente") {
		indumProductos.innerHTML = "";
		console.log(filtroPreciosAsc());
		arrayIndum.forEach((e) => {
			let divCard = document.createElement("div");

			divCard.innerHTML = `
      <div class="card carta" style="width: 18rem;">
      <img src="/img/${e.img}" class="card-img-top img-css" alt="${e.img}">
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
      `;
			indumProductos.append(divCard);
			const btnAgregar = document.getElementById(`agregar${e.id}`);
			btnAgregar.addEventListener(`click`, () => {
				agregarAlCarrito(e.id);
				Swal.fire({
					position: "center",
					showCancelButton: false,
					showClass: {
						popup: "animate_animated animate_fadeInDown",
					},
					hideClass: {
						popup: "animate_animated animate_fadeOutUp",
					},
					icon: "success",
					html: `Agregaste <b>${e.nombre}</b> al carrito`,
					showConfirmButton: false,
					timer: 3000,
				});
			});
		});
	} else if (valorOption == "descendente") {
		indumProductos.innerHTML = "";
		console.log(filtroPreciosDes());
		arrayIndum.forEach((e) => {
			let divCard = document.createElement("div");

			divCard.innerHTML = `
      <div class="card carta" style="width: 18rem;">
      <img src="./img/${e.img}" class="card-img-top img-css" alt="${e.nombre}">
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
      `;
			indumProductos.append(divCard);
			const btnAgregar = document.getElementById(`agregar${e.id}`);
			btnAgregar.addEventListener(`click`, () => {
				agregarAlCarrito(e.id);
				Swal.fire({
					position: "center",
					showCancelButton: false,
					showClass: {
						popup: "animate_animated animate_fadeInDown",
					},
					hideClass: {
						popup: "animate_animated animate_fadeOutUp",
					},
					icon: "success",
					html: `Agregaste <b>${e.nombre}</b> al carrito`,
					showConfirmButton: false,
					timer: 3000,
				});
			});
		});
	}
});

document.addEventListener(`DOMContentLoaded`, () => {
	if (localStorage.getItem(`carrito`)) {
		carrito = JSON.parse(localStorage.getItem(`carrito`));
		actCarrito();
	}
});
const agregarAlCarrito = (indumId) => {
	const item = arrayIndum.find((indum) => indum.id === indumId);
	const repeat = carrito.some((indum) => indum.id === indumId);
	if (repeat) {
		const index = carrito.findIndex((indum) => indum.id === indumId);
		carrito[index].cantidad++;
	} else {
		const newItem = { ...item, cantidad: 1 };
		carrito.push(newItem);
	}
	actCarrito();
};

const eliminarDelCarrito = (indumId) => {
	const item = carrito.find((indum) => indum.id === indumId);
	const indice = carrito.indexOf(item);
	carrito.splice(indice, 1);
	actCarrito();
};

const actCarrito = () => {
	carritoContenedor.innerHTML = " ";

	carrito.forEach((prod) => {
		const div = document.createElement(`div`);
		div.className = `prodEnCarrito`;
		div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <button value="X" onclick = "eliminarDelCarrito (${prod.id})"><i class="bi bi-trash"></i></button>
        `;

		carritoContenedor.appendChild(div);

		localStorage.setItem(`carrito`, JSON.stringify(carrito));
	});
	precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
	contadorCarrito.innerText = carrito.length;
};
