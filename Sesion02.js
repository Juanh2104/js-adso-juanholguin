
const IVA = 0.19;

// Función para mostrar un número como pesos colombianos.
// Ejemplo: 120000 → "$ 120.000"
function formatearPesos(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// ---------- 2. PEDIR LOS DATOS ----------
// prompt() siempre devuelve texto (o null si el usuario cancela).
const textoPrecio = prompt("Ingresa el precio unitario del producto:");
const textoCantidad = prompt("Ingresa la cantidad:");
const textoDescuento = prompt("Ingresa el porcentaje de descuento (0 si no hay):");

// Number() convierte el texto en número. Si el texto no es un número,
// el resultado es NaN ("Not a Number").
const precio = Number(textoPrecio);
const cantidad = Number(textoCantidad);
const porcentajeDescuento = Number(textoDescuento);

// ---------- 3. VALIDAR LOS DATOS ----------
// Un dato es válido si el usuario escribió algo y ese algo es un número.
// Se revisa el texto vacío aparte porque Number("") da 0, no NaN.
function esNumeroValido(texto, numero) {
    return texto !== null && texto.trim() !== "" && !isNaN(numero);
}

const datosValidos =
    esNumeroValido(textoPrecio, precio) &&
    esNumeroValido(textoCantidad, cantidad) &&
    esNumeroValido(textoDescuento, porcentajeDescuento);

if (!datosValidos) {
    // Si algún dato no es un número, se muestra un mensaje amable y no se calcula.
    const mensaje = "Uy, parece que algún dato no es un número 😅. " +
        "Recarga la página e inténtalo de nuevo escribiendo solo números (por ejemplo: 25000).";
    console.log(mensaje);
    alert(mensaje);
} else {
    // ---------- 4. CÁLCULOS ----------
    // Subtotal: precio por cantidad.
    const subtotal = precio * cantidad;

    // Descuento: el porcentaje se divide entre 100 (10 % → 0.10).
    const descuento = subtotal * (porcentajeDescuento / 100);

    // Valor con descuento: sobre este valor se calcula el IVA.
    const valorConDescuento = subtotal - descuento;

    // IVA del 19 % sobre el valor con descuento.
    const valorIva = valorConDescuento * IVA;

    // Total a pagar.
    const total = valorConDescuento + valorIva;

    // ---------- 5. MOSTRAR RESULTADOS ----------
    // En la consola, con plantillas de texto y formato de pesos colombianos.
    console.log("===== DETALLE DE LA COMPRA =====");
    console.log(`Subtotal:   ${formatearPesos(subtotal)}`);
    console.log(`Descuento:  ${formatearPesos(descuento)} (${porcentajeDescuento} %)`);
    console.log(`IVA (19 %): ${formatearPesos(valorIva)}`);
    console.log(`Total:      ${formatearPesos(total)}`);

    // El total también se muestra en una ventana emergente.
    alert(`El total a pagar es: ${formatearPesos(total)}`);
}
