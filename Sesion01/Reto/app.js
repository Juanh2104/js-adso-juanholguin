// =====================================================
// Sesión 01 - Reto: Tarjeta de presentación en consola
// Autor: Juan Holguín
// =====================================================

// ---------- 1. VARIABLES ----------
// Uso const para los datos que NO van a cambiar durante el programa.
const nombre = "Juan Holguín";
const programa = "Análisis y Desarrollo de Software (ADSO)";
const ficha = "3534466";

// Uso let para los datos que SÍ pueden cambiar.
let ciudad = "Medellín";
let frase = "Cada error es una pista para mejorar."; // TODO: escribe la frase que te represente

// ---------- 2. TARJETA EN CONSOLA ----------
// Uso plantillas de texto: comillas invertidas (`) y ${variable}
// para insertar el valor de cada variable dentro del texto.
console.log(`
==========================================
        TARJETA DE PRESENTACIÓN
==========================================
 Nombre:   ${nombre}
 Programa: ${programa}
 Ficha:    ${ficha}
 Ciudad:   ${ciudad}
 Frase:    "${frase}"
==========================================
`);

// ---------- 3. CAMBIO DE UNA VARIABLE let ----------
// Muestro el valor que tiene la frase antes de cambiarla.
console.log(`Frase anterior: "${frase}"`);

// Como frase se declaró con let, puedo asignarle un valor nuevo.
frase = "Hoy sé más que ayer y mañana sabré más que hoy.";

// Muestro el valor nuevo para comprobar que cambió.
console.log(`Frase nueva:    "${frase}"`);

// Si intentara cambiar una const (por ejemplo: nombre = "Otro";)
// JavaScript mostraría un error, porque las const no se pueden reasignar.
