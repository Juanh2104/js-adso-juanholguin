
// Arreglo de productos
const productos = [
    { id: 1, nombre: "Camisa", precio: 50000 },
    { id: 2, nombre: "Pantalón", precio: 80000 },
    { id: 3, nombre: "Zapatos", precio: 120000 },
    { id: 4, nombre: "Gorra", precio: 35000 }
];

// Arreglo del carrito
let carrito = [];

let siguienteId = 1;

// Obtener elementos HTML
const listaProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("carrito");
const total = document.getElementById("total");

// Formato de pesos colombianos
const formatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});

// Función para mostrar productos y carrito
function render() {

    listaProductos.innerHTML = "";
    listaCarrito.innerHTML = "";

    // Mostrar productos disponibles
    productos.forEach(function(producto) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = formatoPesos.format(producto.precio);

        const boton = document.createElement("button");
        boton.textContent = "Agregar";

        // Agregar producto al carrito
        boton.addEventListener("click", function() {

            carrito.push({
                ...producto,
                idCarrito: siguienteId++
            });

            render();

        });

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        listaProductos.appendChild(tarjeta);

    });

    // Mostrar productos del carrito
    carrito.forEach(function(producto) {

        const li = document.createElement("li");

        const texto = document.createElement("span");

        texto.textContent =
            producto.nombre + " - " +
            formatoPesos.format(producto.precio);

        const botonQuitar = document.createElement("button");

        botonQuitar.textContent = "Quitar";
        botonQuitar.classList.add("quitar");

        // Eliminar producto del carrito
        botonQuitar.addEventListener("click", function() {

            carrito = carrito.filter(function(item) {
                return item.idCarrito !== producto.idCarrito;
            });

            render();

        });

        li.appendChild(texto);
        li.appendChild(botonQuitar);

        listaCarrito.appendChild(li);

    });

    // Calcular total con reduce
    const suma = carrito.reduce(function(acumulado, producto) {
        return acumulado + producto.precio;
    }, 0);

    // Mostrar total
    total.textContent = "Total: " + formatoPesos.format(suma);

}

// Mostrar información inicial
render();
