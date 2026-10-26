// ---------- REGLA PARA ELEGIR EL PRIMER APELLIDO ----------
// En Colombia el nombre completo suele escribirse así:
//   Nombre1 [Nombre2] Apellido1 [Apellido2]
// Según la cantidad de palabras:
//   - 1 palabra  → no hay apellido: se usa solo esa palabra.
//                  Ej: "Andrea"                        → andrea
//   - 2 palabras → la 2.ª es el primer apellido.
//                  Ej: "Andrea Gómez"                  → agomez
//   - 3 palabras → se asume 1 nombre + 2 apellidos, así que la 2.ª es el
//                  primer apellido (es el caso más común).
//                  Ej: "Andrea Gómez Ruiz"             → agomez
//   - 4 o más    → se asume 2 nombres + apellidos, así que la 3.ª es el
//                  primer apellido.
//                  Ej: "Andrea Paola Gómez Ruiz"       → agomez
// Limitación: los apellidos compuestos ("de la Torre") no se detectan.
// -----------------------------------------------------------

const DOMINIO = "@adso.ejemplo.co";

// Quita tildes y convierte la ñ en n, todo en minúscula.
// normalize("NFD") separa la letra de su tilde ("é" → "e" + "´")
// y replace borra esas marcas. Al final se quita todo lo que no sea letra a-z.
function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z]/g, "");
}

// Arma el usuario base (sin número) a partir del nombre completo.
function armarUsuario(nombreCompleto) {
    // split(/\s+/) separa por espacios, aunque haya varios seguidos.
    const palabras = nombreCompleto.trim().split(/\s+/);
    const inicial = limpiarTexto(palabras[0]).charAt(0);

    let primerApellido;

    if (palabras.length === 1) {
        return limpiarTexto(palabras[0]);
    } else if (palabras.length <= 3) {
        primerApellido = palabras[1];
    } else {
        primerApellido = palabras[2];
    }

    return inicial + limpiarTexto(primerApellido);
}

// Devuelve un correo que todavía no exista en el arreglo.
// Si "agomez" ya está, prueba agomez2, agomez3... hasta encontrar uno libre.
function correoUnico(usuario, correos) {
    let correo = usuario + DOMINIO;
    let numero = 2;

    while (correos.includes(correo)) {
        correo = usuario + numero + DOMINIO;
        numero++;
    }

    return correo;
}

// ---------- PROGRAMA PRINCIPAL ----------
const correos = []; // aquí se guardan todos los correos generados
let nombre;

// Se piden nombres hasta que el prompt quede vacío (o se presione Cancelar).
do {
    nombre = prompt("Escribe el nombre completo del aprendiz (deja vacío para terminar):");

    if (nombre !== null && nombre.trim() !== "") {
        const usuario = armarUsuario(nombre);

        // Si el nombre no tenía ninguna letra válida (ej: "123"), no se genera correo.
        if (usuario === "") {
            alert(`"${nombre}" no tiene letras válidas. Intenta con otro nombre.`);
        } else {
            const correo = correoUnico(usuario, correos);
            correos.push(correo);
            console.log(`${nombre.trim()} → ${correo}`);
        }
    }
} while (nombre !== null && nombre.trim() !== "");

// ---------- RESULTADO FINAL ----------
let lista = "===== CORREOS GENERADOS =====\n";

for (let i = 0; i < correos.length; i++) {
    lista += `${i + 1}. ${correos[i]}\n`;
}

lista += `\nTotal: ${correos.length} correo(s) generado(s).`;

console.log(lista);
alert(lista);