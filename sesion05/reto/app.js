// Cambia todos los días: actualízalo si lo necesitas.
const PESOS_POR_DOLAR = 3160;

// 1 kilómetro equivale a 0.621371 millas.
const MILLAS_POR_KM = 0.621371;


// =====================================================
// 2. FUNCIÓN PARA LEER NÚMEROS
// =====================================================
// Pide un número con el mensaje recibido y lo vuelve a pedir
// hasta que el usuario escriba un número válido. Luego lo devuelve.
function leerNumero(mensaje) {
    let texto;
    let numero;

    do {
        texto = prompt(mensaje);

        // Si presiona "Cancelar", prompt devuelve null: se trata como texto vacío.
        if (texto === null) {
            texto = "";
        }

        // Se acepta coma o punto decimal ("3,5" o "3.5").
        numero = Number(texto.trim().replace(",", "."));

        // Number("") da 0, por eso el texto vacío se revisa aparte.
        if (texto.trim() === "" || isNaN(numero)) {
            alert("Eso no es un número válido. Inténtalo de nuevo.");
        }
    } while (texto.trim() === "" || isNaN(numero));

    return numero;
}

// Cada conversor solo calcula y DEVUELVE el resultado con return.
// No tienen console.log adentro.

// Opción 1: pesos colombianos a dólares (función tradicional).
function pesosADolares(pesos) {
    return pesos / PESOS_POR_DOLAR;
}

const celsiusAFahrenheit = (celsius) => celsius * 9 / 5 + 32;

// Opción 3: kilómetros a millas (función flecha).
const kmAMillas = (km) => km * MILLAS_POR_KM;


function segundosAReloj(segundosTotales) {
    if (segundosTotales < 0) {
        return "no se pueden convertir segundos negativos";
    }

    const total = Math.floor(segundosTotales);      // se quitan los decimales
    const horas = Math.floor(total / 3600);         // 1 hora = 3600 segundos
    const minutos = Math.floor((total % 3600) / 60); // lo que sobra de las horas, en minutos
    const segundos = total % 60;                    // lo que sobra de los minutos

    // padStart(2, "0") agrega un cero a la izquierda: 5 → "05"
    const hh = String(horas).padStart(2, "0");
    const mm = String(minutos).padStart(2, "0");
    const ss = String(segundos).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
}


// El menú solo llama a las funciones y muestra los resultados.
// do...while: se muestra al menos una vez y se repite hasta elegir 0.
const TEXTO_MENU =
    "===== MENÚ DE CONVERSORES =====\n" +
    "1. Pesos a dólares\n" +
    "2. °C a °F\n" +
    "3. Km a millas\n" +
    "4. Segundos a reloj\n" +
    "0. Salir\n\n" +
    "Elige una opción:";

let opcion;

do {
    opcion = leerNumero(TEXTO_MENU);
    let resultado;

    switch (opcion) {
        case 1: {
            const pesos = leerNumero("¿Cuántos pesos colombianos?");
            resultado = `${pesos} COP = ${pesosADolares(pesos).toFixed(2)} USD`;
            break;
        }
        case 2: {
            const celsius = leerNumero("¿Cuántos grados Celsius?");
            resultado = `${celsius} °C = ${celsiusAFahrenheit(celsius).toFixed(1)} °F`;
            break;
        }
        case 3: {
            const km = leerNumero("¿Cuántos kilómetros?");
            resultado = `${km} km = ${kmAMillas(km).toFixed(2)} millas`;
            break;
        }
        case 4: {
            const segundos = leerNumero("¿Cuántos segundos?");
            resultado = `${segundos} segundos = ${segundosAReloj(segundos)}`;
            break;
        }
        case 0:
            resultado = "¡Hasta luego! Gracias por usar el conversor.";
            break;
        default:
            resultado = `La opción ${opcion} no existe. Elige 1, 2, 3, 4 o 0.`;
    }

    console.log(resultado);
    alert(resultado);
} while (opcion !== 0);