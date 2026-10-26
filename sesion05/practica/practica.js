function saludar (nombre){
    console.log('Hola ${nombre}')
}

saludar("Edison")
saludar("Daniel")
saludar("Juan")
saludar("Jose")

function areaRectangulo(b, h){
    return b * h
}

let arearec = areaRectangulo(5, 4)
console.log('El area del rectangulo es ${arearec}')
console.log('El area del rectangulo es ${areaRectangulo(3, 8)}')

function areaRectangulo(){
    let b = Number(prompt("Digite el valor de la base"))
    let h = 10
    return b * h
}

function esPar(numero) {
    return numero % 2 === 0;
}

let n = Number(prompt("Escribe un número:"));
if (esPar(n)) {
    console.log(`${n} es par`);
} else {
    console.log(`${n} es impar`);
}

// Si no dicen la tasa, usa 19 %
function calcularIVA(precio, tasa = 0.19) {
    return precio * tasa;
}
console.log(calcularIVA(10000));
console.log(calcularIVA(10000, 0.05));

// La misma idea, más corta
const doble = (n) => n * 2;
const saludo = (nombre) => {
    return `Hola, ${nombre}`;
};
console.log(doble(21), saludo("Sofía"));


function evaluarNota(nota){
    if(nota < 3)
        return `Nota: %{nota} - Insuficinete - No Aprobado`
    else if (nota < 4.1)
        return "Aceptable - Aprovado"
    else if (nota < 4.6)
        return "Sobresaliente - Aprovado"
    else 
        return "Excelente - Aprovado"
}
console.log(clasificarNota(4.8));
console.log(clasificarNota(3.2));
console.log(clasificarNota(1.5));