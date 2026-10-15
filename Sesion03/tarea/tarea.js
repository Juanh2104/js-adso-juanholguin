
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

console.log("===== EJERCICIO 1: AÑO BISIESTO =====");

// Los años que pide la guía para probar.
const aniosPrueba = [2024, 1900, 2000];

for (const anio of aniosPrueba) {
    if (esBisiesto(anio)) {
        console.log(`${anio} SÍ es bisiesto.`);
    } else {
        console.log(`${anio} NO es bisiesto.`);
    }
}
// Resultado esperado:
// 2024 → sí (divisible entre 4 y no entre 100)
// 1900 → no (divisible entre 100 pero no entre 400)
// 2000 → sí (divisible entre 400)



// Recibe dos números y una operación (+, -, *, /).
// switch compara la operación con cada case hasta encontrar la que coincide.

function calcular(numero1, numero2, operacion) {
    let resultado;

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            // No se puede dividir entre cero: se avisa en lugar de calcular.
            if (numero2 === 0) {
                return "Error: no se puede dividir entre cero.";
            }
            resultado = numero1 / numero2;
            break;
        default:
            // default se ejecuta cuando la operación no es ninguna de las anteriores.
            return `Error: la operación "${operacion}" no existe. Usa +, -, * o /.`;
    }

    return `${numero1} ${operacion} ${numero2} = ${resultado}`;
}

console.log("===== EJERCICIO 2: CALCULADORA =====");
console.log(calcular(10, 5, "+"));  // 10 + 5 = 15
console.log(calcular(10, 5, "-"));  // 10 - 5 = 5
console.log(calcular(10, 5, "*"));  // 10 * 5 = 50
console.log(calcular(10, 5, "/"));  // 10 / 5 = 2
console.log(calcular(10, 0, "/"));  // aviso de división entre cero
console.log(calcular(10, 5, "%"));  // operación que no existe → default



function clasificarImc(peso, estatura) {
    const imc = peso / estatura ** 2;
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    // toFixed(1) muestra el IMC con un solo decimal.
    return `Peso: ${peso} kg, estatura: ${estatura} m → IMC: ${imc.toFixed(1)} (${clasificacion})`;
}

console.log("===== EJERCICIO 3: IMC =====");
console.log(clasificarImc(50, 1.75));  // Bajo peso
console.log(clasificarImc(68, 1.75));  // Normal
console.log(clasificarImc(85, 1.75));  // Sobrepeso
console.log(clasificarImc(100, 1.75)); // Obesidad