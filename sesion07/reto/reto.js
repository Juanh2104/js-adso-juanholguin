
const catalogo = [
    { codigo: "P001", nombre: "Teclado mecánico",   categoria: "Periféricos",    precio: 120000, stock: 8 },
    { codigo: "P002", nombre: "Mouse inalámbrico",  categoria: "Periféricos",    precio: 45000,  stock: 15 },
    { codigo: "P003", nombre: "Monitor 24 pulgadas", categoria: "Pantallas",     precio: 650000, stock: 0 }, // agotado
    { codigo: "P004", nombre: "Audífonos USB",      categoria: "Audio",          precio: 80000,  stock: 5 },
    { codigo: "P005", nombre: "Memoria USB 64 GB",  categoria: "Almacenamiento", precio: 35000,  stock: 0 }, // agotado
    { codigo: "P006", nombre: "Disco SSD 500 GB",   categoria: "Almacenamiento", precio: 210000, stock: 3 }
];

function formatearPesos(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function buscarPorCodigo(codigo) {
    const buscado = codigo.trim().toUpperCase();

    for (const producto of catalogo) {
        if (producto.codigo === buscado) {
            return producto;
        }
    }

    return null;
}

function contarAgotados() {
    let contador = 0;

    for (const producto of catalogo) {
        if (producto.stock === 0) {
            contador++;
        }
    }

    return contador;
}

function valorInventario() {
    let total = 0;

    for (const producto of catalogo) {
        total += producto.precio * producto.stock;
    }

    return total;
}


const TEXTO_MENU =
    "===== CATÁLOGO DE PRODUCTOS =====\n" +
    "1. Ver catálogo\n" +
    "2. Buscar por código\n" +
    "3. Agotados\n" +
    "4. Valor del inventario\n" +
    "0. Salir\n\n" +
    "Elige una opción:";

let opcion;

do {
    opcion = prompt(TEXTO_MENU);


    if (opcion === null) {
        opcion = "0";
    }

    let mensaje;

    switch (opcion.trim()) {
        case "1":

            console.table(catalogo);
            mensaje = `El catálogo tiene ${catalogo.length} productos. Míralo en la consola (F12 → Console).`;
            break;

        case "2": {
            const codigo = prompt("Escribe el código del producto (por ejemplo: P001):");

            if (codigo === null || codigo.trim() === "") {
                mensaje = "No escribiste ningún código.";
                break;
            }

            const producto = buscarPorCodigo(codigo);

            if (producto === null) {
                mensaje = `No existe ningún producto con el código "${codigo.trim()}".`;
            } else {
                const estado = producto.stock === 0 ? "AGOTADO" : `${producto.stock} unidades`;
                mensaje =
                    `Código:    ${producto.codigo}\n` +
                    `Nombre:    ${producto.nombre}\n` +
                    `Categoría: ${producto.categoria}\n` +
                    `Precio:    ${formatearPesos(producto.precio)}\n` +
                    `Stock:     ${estado}`;
            }
            break;
        }

        case "3":
            mensaje = `Hay ${contarAgotados()} producto(s) agotado(s).`;
            break;

        case "4":
            mensaje = `Valor total del inventario: ${formatearPesos(valorInventario())}`;
            break;

        case "0":
            mensaje = "¡Hasta luego!";
            break;

        default:
            mensaje = `La opción "${opcion}" no existe. Elige 1, 2, 3, 4 o 0.`;
    }

    console.log(mensaje);
    alert(mensaje);
} while (opcion.trim() !== "0");