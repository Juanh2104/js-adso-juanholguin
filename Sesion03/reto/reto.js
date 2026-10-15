
const nombre = prompt("Ingresa el nombre del aprendiz:");
const textoNota = prompt("Ingresa la nota (de 0.0 a 5.0):");

// Se cambia la coma por punto para aceptar "3,5" además de "3.5",
// y luego Number() convierte el texto en número (NaN si no lo es).
const nota = textoNota === null ? NaN : Number(textoNota.trim().replace(",", "."));

// ---------- 2. VALIDAR Y CLASIFICAR ----------
// Se revisa el texto vacío aparte porque Number("") da 0, no NaN.
if (textoNota === null || textoNota.trim() === "" || isNaN(nota)) {
    // Caso 1: la nota no es un número.
    alert("La nota debe ser un número. Por ejemplo: 3.5");
} else if (nota < 0 || nota > 5) {
    // Caso 2: es un número, pero está fuera del rango permitido.
    alert("La nota debe estar entre 0.0 y 5.0. Inténtalo de nuevo.");
} else {
    // Caso 3: la nota es válida, se clasifica.
    // Se revisa de la nota más alta a la más baja.
    let resultado;

    if (nota >= 4.6) {
        resultado = "Excelente";
    } else if (nota >= 4.0) {
        resultado = "Sobresaliente";
    } else if (nota >= 3.0) {
        resultado = "Aprobado";
    } else {
        resultado = "No aprobado";
    }


    // toFixed(1) muestra la nota con un solo decimal (4 → "4.0").
    console.log("===== RESULTADO DEL APRENDIZ =====");
    console.log(`Nombre:    ${nombre}`);
    console.log(`Nota:      ${nota.toFixed(1)}`);
    console.log(`Resultado: ${resultado}`);

    // El resultado también se muestra en un alert.
    alert(`${nombre}: ${resultado} (nota ${nota.toFixed(1)})`);
}