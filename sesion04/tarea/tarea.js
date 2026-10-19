
function tablaDeMultiplicar() {
    const texto = prompt("EJERCICIO 1 - Escribe un número para ver su tabla de multiplicar:");

    // Si el usuario presiona "Cancelar", prompt devuelve null.
    if (texto === null) {
        console.log("Ejercicio 1 cancelado.");
        return;
    }

    const numero = Number(texto.trim().replace(",", "."));


    if (texto.trim() === "" || isNaN(numero)) {
        alert(`"${texto}" no es un número. Recarga la página e inténtalo de nuevo.`);
        return;
    }

    console.log(`===== TABLA DEL ${numero} =====`);

    // El ciclo for repite el bloque del 1 al 10.
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


// Las notas válidas van de 0.0 a 5.0.
const NOTA_MINIMA = 0;
const NOTA_MAXIMA = 5;

function estadisticasDelGrupo() {
    // ---------- 2.1 Cuántas notas ----------
    // do...while: el bloque se ejecuta AL MENOS una vez y se repite
    // mientras la condición del while sea verdadera (dato inválido).
    let textoCantidad;
    let cantidad;

    do {
        textoCantidad = prompt("EJERCICIO 2 - ¿Cuántas notas vas a ingresar? (número entero mayor que 0)");

        if (textoCantidad === null) {
            console.log("Ejercicio 2 cancelado.");
            return;
        }

        cantidad = Number(textoCantidad.trim());

        if (textoCantidad.trim() === "" || !Number.isInteger(cantidad) || cantidad <= 0) {
            alert("Escribe un número entero mayor que 0. Por ejemplo: 5");
        }
    } while (textoCantidad.trim() === "" || !Number.isInteger(cantidad) || cantidad <= 0);

    // ---------- 2.2 Pedir las notas una por una ----------
    let suma = 0;
    let mayor = -Infinity; // cualquier nota real será mayor que esto
    let menor = Infinity;  // cualquier nota real será menor que esto

    for (let i = 1; i <= cantidad; i++) {
        let textoNota;
        let nota;
        let notaValida;

        // do...while para rechazar las notas inválidas:
        // vuelve a pedir la MISMA nota hasta que sea válida.
        do {
            textoNota = prompt(`Nota ${i} de ${cantidad} (de ${NOTA_MINIMA}.0 a ${NOTA_MAXIMA}.0):`);

            if (textoNota === null) {
                console.log("Ejercicio 2 cancelado.");
                return;
            }

            nota = Number(textoNota.trim().replace(",", "."));
            notaValida = textoNota.trim() !== "" && !isNaN(nota) &&
                nota >= NOTA_MINIMA && nota <= NOTA_MAXIMA;

            if (!notaValida) {
                alert(`"${textoNota}" no es válida. La nota debe ser un número de ${NOTA_MINIMA}.0 a ${NOTA_MAXIMA}.0.`);
            }
        } while (!notaValida);

        // La nota es válida: se acumula y se compara con la mayor y la menor.
        suma += nota;

        if (nota > mayor) {
            mayor = nota;
        }
        if (nota < menor) {
            menor = nota;
        }
    }


    const promedio = suma / cantidad;

    console.log("===== ESTADÍSTICAS DEL GRUPO =====");
    console.log(`Cantidad de notas: ${cantidad}`);
    console.log(`Promedio:          ${promedio.toFixed(1)}`);
    console.log(`Nota mayor:        ${mayor.toFixed(1)}`);
    console.log(`Nota menor:        ${menor.toFixed(1)}`);
}



tablaDeMultiplicar();
estadisticasDelGrupo();