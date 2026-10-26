// =====================================================
// EJERCICIO 1: contarPalabras(frase)
// =====================================================
// Devuelve cuántas palabras tiene la frase, aunque haya espacios de más.
//   trim()        → quita los espacios del inicio y del final.
//   split(/\s+/)  → separa por uno o MÁS espacios seguidos.
// Si la frase queda vacía, no hay palabras: se devuelve 0.
function contarPalabras(frase) {
    const limpia = frase.trim();

    if (limpia === "") {
        return 0;
    }

    return limpia.split(/\s+/).length;
}

console.log("===== EJERCICIO 1: contarPalabras =====");
console.log(`"Hola mundo"                → ${contarPalabras("Hola mundo")}`);                // 2
console.log(`"   Hola    mundo   ADSO  " → ${contarPalabras("   Hola    mundo   ADSO  ")}`); // 3
console.log(`"JavaScript"                → ${contarPalabras("JavaScript")}`);                // 1
console.log(`"      "                    → ${contarPalabras("      ")}`);                    // 0


// =====================================================
// EJERCICIO 2: formatoTitulo(frase)
// =====================================================
// Pone la primera letra de cada palabra en mayúscula y el resto en minúscula.
// Ejemplo: "hOLA mUNDO" → "Hola Mundo"
function formatoTitulo(frase) {
    const palabras = frase.trim().split(/\s+/);
    const resultado = [];

    for (const palabra of palabras) {
        // charAt(0) es la primera letra; slice(1) es el resto de la palabra.
        const primera = palabra.charAt(0).toUpperCase();
        const resto = palabra.slice(1).toLowerCase();
        resultado.push(primera + resto);
    }

    // join(" ") vuelve a unir las palabras con un solo espacio.
    return resultado.join(" ");
}

console.log("===== EJERCICIO 2: formatoTitulo =====");
console.log(`"hOLA mUNDO"                 → "${formatoTitulo("hOLA mUNDO")}"`);                 // Hola Mundo
console.log(`"análisis y DESARROLLO"      → "${formatoTitulo("análisis y DESARROLLO")}"`);      // Análisis Y Desarrollo
console.log(`"   juan    josé   holguín " → "${formatoTitulo("   juan    josé   holguín ")}"`); // Juan José Holguín


// =====================================================
// EJERCICIO 3: LISTA DE PENDIENTES
// =====================================================
const tareas = []; // aquí se guardan las tareas

// Agrega una tarea al arreglo. Devuelve un mensaje con lo que pasó.
function agregarTarea(nombre) {
    const limpia = nombre.trim();

    if (limpia === "") {
        return "No se agregó nada: la tarea estaba vacía.";
    }

    tareas.push(limpia);
    return `Tarea agregada: "${limpia}"`;
}

// Devuelve la lista numerada de tareas en un solo texto.
function verTareas() {
    if (tareas.length === 0) {
        return "No tienes tareas pendientes. 🎉";
    }

    let lista = "===== TAREAS PENDIENTES =====\n";
    for (let i = 0; i < tareas.length; i++) {
        lista += `${i + 1}. ${tareas[i]}\n`;
    }
    return lista;
}

// Elimina una tarea buscándola por su nombre.
// La búsqueda no distingue mayúsculas de minúsculas ("COMPRAR PAN" = "comprar pan").
function eliminarTarea(nombre) {
    const buscada = nombre.trim().toLowerCase();

    // findIndex devuelve la posición de la tarea, o -1 si no la encuentra.
    const posicion = tareas.findIndex((tarea) => tarea.toLowerCase() === buscada);

    if (posicion === -1) {
        return `No se encontró la tarea "${nombre.trim()}".`;
    }

    // splice(posicion, 1) quita 1 elemento en esa posición y lo devuelve en un arreglo.
    const eliminada = tareas.splice(posicion, 1)[0];
    return `Tarea eliminada: "${eliminada}"`;
}

// ---------- MENÚ ----------
const TEXTO_MENU =
    "===== LISTA DE PENDIENTES =====\n" +
    "1. Agregar tarea\n" +
    "2. Ver tareas\n" +
    "3. Eliminar tarea\n" +
    "0. Salir\n\n" +
    "Elige una opción:";

let opcion;

do {
    opcion = prompt(TEXTO_MENU);

    // Si presiona "Cancelar", se sale del menú.
    if (opcion === null) {
        opcion = "0";
    }

    let mensaje;

    switch (opcion.trim()) {
        case "1": {
            const nueva = prompt("Escribe la tarea que quieres agregar:");
            mensaje = nueva === null ? "No se agregó nada." : agregarTarea(nueva);
            break;
        }
        case "2":
            mensaje = verTareas();
            break;
        case "3": {
            if (tareas.length === 0) {
                mensaje = "No hay tareas para eliminar.";
                break;
            }
            const nombre = prompt(`${verTareas()}\nEscribe el nombre de la tarea que quieres eliminar:`);
            mensaje = nombre === null ? "No se eliminó nada." : eliminarTarea(nombre);
            break;
        }
        case "0":
            mensaje = "¡Hasta luego!";
            break;
        default:
            mensaje = `La opción "${opcion}" no existe. Elige 1, 2, 3 o 0.`;
    }

    console.log(mensaje);
    alert(mensaje);
} while (opcion.trim() !== "0");