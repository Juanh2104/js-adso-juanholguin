// =====================================================
// Sesión 01 - Tarea: "Datos del producto"
// Traducción de Python a JavaScript
// Autor: Juan Holguín
// =====================================================

// OJO: reemplaza los datos de este bloque por los del programa
// de Python de tu guía, para que la traducción sea exacta.

// ---------- 1. DATOS DEL PRODUCTO ----------
// En Python:  nombre = "Teclado mecánico"
// En JavaScript hay que declarar la variable con const o let.
const nombre = "Teclado mecánico"; // no cambia → const
const precio = 120000;             // no cambia → const
let cantidad = 5;                  // puede cambiar → let
let disponible = true;             // en Python sería True (con mayúscula)

// ---------- 2. CÁLCULO ----------
// En Python:  total = precio * cantidad
let total = precio * cantidad;

// ---------- 3. MOSTRAR LOS DATOS ----------
// En Python:  print(f"Producto: {nombre}")
// En JavaScript: console.log con comillas invertidas y ${variable}
console.log("===== DATOS DEL PRODUCTO =====");
console.log(`Producto:   ${nombre}`);
console.log(`Precio:     $${precio}`);
console.log(`Cantidad:   ${cantidad}`);
console.log(`Disponible: ${disponible}`);
console.log(`Total:      $${total}`);

// ---------- 4. CAMBIO DE UN VALOR ----------
// Se vende una unidad, así que la cantidad cambia (por eso es let).
cantidad = cantidad - 1;
total = precio * cantidad;

console.log("===== DESPUÉS DE UNA VENTA =====");
console.log(`Cantidad:   ${cantidad}`);
console.log(`Total:      $${total}`);

// =====================================================
// RESPUESTAS
// =====================================================

// ¿Qué hace JavaScript en una página web, comparado con HTML y CSS?
// HTML define la estructura y el contenido de la página (títulos,
// párrafos, botones). CSS define cómo se ve (colores, tamaños,
// posiciones). JavaScript le da comportamiento: hace cálculos,
// responde a lo que hace el usuario y puede cambiar el contenido
// de la página sin recargarla.

// ¿Cuándo usas let y cuándo const?
// Uso const cuando el valor no va a cambiar durante el programa
// (por ejemplo, el nombre del producto). Uso let cuando el valor
// sí puede cambiar (por ejemplo, la cantidad en inventario).
// Por defecto empiezo con const y solo paso a let si necesito
// reasignar la variable.

// ¿Qué tres diferencias encontraste entre Python y JavaScript
// al traducir el programa?
// 1. En Python las variables se crean solo con el nombre
//    (precio = 120000); en JavaScript hay que declararlas
//    con const o let.
// 2. Para mostrar en pantalla, Python usa print() y JavaScript
//    usa console.log(). Además, las plantillas de texto cambian:
//    f"{variable}" en Python y `${variable}` en JavaScript.
// 3. En Python los comentarios empiezan con # y en JavaScript
//    con //. También cambian los booleanos (True/False en Python,
//    true/false en JavaScript) y en JavaScript se acostumbra
//    terminar cada instrucción con punto y coma.
