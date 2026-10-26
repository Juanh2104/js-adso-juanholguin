// EJERCICIO 1: esBisiesto(anio)
// =====================================================
// Devuelve true si el año es bisiesto y false si no lo es.
// Es bisiesto si es divisible entre 4 y no entre 100, o si es divisible entre 400.
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

console.log("===== EJERCICIO 1: esBisiesto =====");

const aniosPrueba = [2024, 1900, 2000, 2026];

for (const anio of aniosPrueba) {
    // La función se usa directamente dentro del if,
    // porque ya devuelve true o false.
    if (esBisiesto(anio)) {
        console.log(`${anio} es bisiesto (esBisiesto devolvió ${esBisiesto(anio)})`);
    } else {
        console.log(`${anio} NO es bisiesto (esBisiesto devolvió ${esBisiesto(anio)})`);
    }
}


// Devuelve el mayor de tres números.
// Se usa >= para que también funcione cuando hay números iguales.
function mayorDeTres(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("===== EJERCICIO 2: mayorDeTres =====");
console.log(`mayorDeTres(3, 9, 5)   → ${mayorDeTres(3, 9, 5)}`);   // 9 (en el medio)
console.log(`mayorDeTres(10, 2, 7)  → ${mayorDeTres(10, 2, 7)}`);  // 10 (al inicio)
console.log(`mayorDeTres(1, 4, 8)   → ${mayorDeTres(1, 4, 8)}`);   // 8 (al final)
console.log(`mayorDeTres(-5, -2, -9) → ${mayorDeTres(-5, -2, -9)}`); // -2 (negativos)

// Pruebas con números iguales
console.log(`mayorDeTres(6, 6, 2)   → ${mayorDeTres(6, 6, 2)}`);   // 6 (dos iguales al inicio)
console.log(`mayorDeTres(3, 8, 8)   → ${mayorDeTres(3, 8, 8)}`);   // 8 (dos iguales al final)
console.log(`mayorDeTres(7, 1, 7)   → ${mayorDeTres(7, 1, 7)}`);   // 7 (iguales en los extremos)
console.log(`mayorDeTres(4, 4, 4)   → ${mayorDeTres(4, 4, 4)}`);   // 4 (los tres iguales)


// =====================================================
// EJERCICIO 3: precioFinal(precio, descuento = 0)
// =====================================================
// Función flecha que devuelve el precio con el descuento (en %) aplicado.
// "descuento = 0" es un parámetro por defecto: si no se envía, vale 0.
const precioFinal = (precio, descuento = 0) => precio - precio * (descuento / 100);

console.log("===== EJERCICIO 3: precioFinal =====");
console.log(`precioFinal(100000, 20) → ${precioFinal(100000, 20)}`); // 80000 (20 % de descuento)
console.log(`precioFinal(50000, 10)  → ${precioFinal(50000, 10)}`);  // 45000 (10 % de descuento)
console.log(`precioFinal(80000)      → ${precioFinal(80000)}`);      // 80000 (sin descuento: usa el 0 por defecto)
console.log(`precioFinal(30000, 100) → ${precioFinal(30000, 100)}`); // 0 (100 % de descuento)