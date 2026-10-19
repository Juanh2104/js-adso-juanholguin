// Estos valores no cambian durante el juego, por eso son const.
const MINIMO = 1;
const MAXIMO = 100;
const MAX_INTENTOS = 7;

// Número secreto entero entre 1 y 100:
// Math.random() da un decimal entre 0 y 0.999...
// Al multiplicarlo por 100 y usar Math.floor queda un entero de 0 a 99,
// y al sumarle 1 queda de 1 a 100.
const secreto = Math.floor(Math.random() * MAXIMO) + MINIMO;

// Estas sí cambian mientras se juega, por eso son let.
let intentos = 0;      // intentos válidos que lleva el jugador
let gano = false;      // pasa a true cuando adivina
let cancelado = false; // pasa a true si el jugador presiona "Cancelar"

alert(`¡Adivina el número secreto entre ${MINIMO} y ${MAXIMO}! Tienes ${MAX_INTENTOS} intentos.`);

// Se repite mientras queden intentos y el jugador no haya ganado.
while (intentos < MAX_INTENTOS && !gano) {
    const texto = prompt(`Intento ${intentos + 1} de ${MAX_INTENTOS}. Escribe un número del ${MINIMO} al ${MAXIMO}:`);

    // Si el jugador presiona "Cancelar", prompt devuelve null y se termina el juego.
    if (texto === null) {
        cancelado = true;
        break;
    }

    const numero = Number(texto.trim());

    // Validación: debe ser un número entero entre 1 y 100.
    // Si no lo es, se avisa y se usa "continue" para volver a preguntar
    // SIN sumar el intento.
    if (texto.trim() === "" || !Number.isInteger(numero) || numero < MINIMO || numero > MAXIMO) {
        alert(`"${texto}" no es válido. Escribe un número entero del ${MINIMO} al ${MAXIMO}. (No perdiste el intento)`);
        continue;
    }

    // El dato es válido: ahora sí se cuenta el intento.
    intentos++;

    if (numero === secreto) {
        gano = true;
    } else if (numero < secreto) {
        console.log(`Intento ${intentos}: ${numero} → Más alto`);
        alert(`Intento ${intentos} de ${MAX_INTENTOS}: Más alto ⬆️`);
    } else {
        console.log(`Intento ${intentos}: ${numero} → Más bajo`);
        alert(`Intento ${intentos} de ${MAX_INTENTOS}: Más bajo ⬇️`);
    }
}


let mensajeFinal;

if (gano) {
    mensajeFinal = `🎉 ¡Ganaste! Adivinaste el número en ${intentos} intento(s).`;
} else if (cancelado) {
    mensajeFinal = `Juego cancelado. El número secreto era ${secreto}.`;
} else {
    mensajeFinal = `😢 Perdiste. Se acabaron los ${MAX_INTENTOS} intentos. El número secreto era ${secreto}.`;
}

console.log(mensajeFinal);
alert(mensajeFinal);