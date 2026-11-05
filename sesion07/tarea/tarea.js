
const agenda = [
    { nombre: "Andrea Gómez",   telefono: "3001234567", correo: "andrea.gomez@correo.com" },
    { nombre: "Carlos Restrepo", telefono: "3109876543", correo: "carlos.restrepo@correo.com" },
    { nombre: "Ana María López", telefono: "3205551234", correo: "ana.lopez@correo.com" }
];


function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "");
}


function pedirDato(mensaje) {
    let texto;

    do {
        texto = prompt(mensaje);

        if (texto === null) {
            return null;
        }

        if (texto.trim() === "") {
            alert("Este dato no puede quedar vacío.");
        }
    } while (texto.trim() === "");

    return texto.trim();
}

function agregarContacto(nombre, telefono, correo) {
    agenda.push({ nombre: nombre, telefono: telefono, correo: correo });
    return `Contacto agregado: ${nombre}. Ahora hay ${agenda.length} contactos.`;
}

function buscarContactos(texto) {
    const buscado = normalizar(texto.trim());
    return agenda.filter((contacto) => normalizar(contacto.nombre).includes(buscado));
}

const TEXTO_MENU =
    "===== AGENDA DE CONTACTOS =====\n" +
    "1. Agregar contacto\n" +
    "2. Ver agenda\n" +
    "3. Buscar contacto\n" +
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
        case "1": {

            const nombre = pedirDato("Nombre del contacto:");
            if (nombre === null) {
                mensaje = "No se agregó el contacto.";
                break;
            }

            const telefono = pedirDato(`Teléfono de ${nombre}:`);
            if (telefono === null) {
                mensaje = "No se agregó el contacto.";
                break;
            }

            const correo = pedirDato(`Correo de ${nombre}:`);
            if (correo === null) {
                mensaje = "No se agregó el contacto.";
                break;
            }

            mensaje = agregarContacto(nombre, telefono, correo);
            break;
        }

        case "2":

            console.table(agenda);
            mensaje = `La agenda tiene ${agenda.length} contactos. Mírala en la consola (F12 → Console).`;
            break;

        case "3": {
            const texto = prompt("Escribe el nombre o parte del nombre que buscas:");

            if (texto === null || texto.trim() === "") {
                mensaje = "No escribiste nada para buscar.";
                break;
            }

            const encontrados = buscarContactos(texto);

            if (encontrados.length === 0) {
                mensaje = `No se encontró ningún contacto con "${texto.trim()}".`;
            } else {
                console.table(encontrados);
                mensaje = `Se encontraron ${encontrados.length} contacto(s) con "${texto.trim()}":\n`;
                for (let i = 0; i < encontrados.length; i++) {
                    const c = encontrados[i];
                    mensaje += `${i + 1}. ${c.nombre} - ${c.telefono} - ${c.correo}\n`;
                }
            }
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