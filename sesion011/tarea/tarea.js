
const password = document.getElementById("password");
const confirmacion = document.getElementById("confirmacion");
const guardar = document.getElementById("guardar");

const nivel = document.getElementById("nivel");
const mensaje = document.getElementById("mensaje");

// Nombres de los requisitos
const elementos = [
    "longitud",
    "mayuscula",
    "minuscula",
    "numero",
    "simbolo"
];

const textos = [
    "Mínimo 8 caracteres",
    "Una letra mayúscula",
    "Una letra minúscula",
    "Un número",
    "Un símbolo"
];

// Función principal
function actualizar() {

    const clave = password.value;
    const repetir = confirmacion.value;

    // Comprobar requisitos
    const requisitos = [
        clave.length >= 8,
        /[A-Z]/.test(clave),
        /[a-z]/.test(clave),
        /[0-9]/.test(clave),
        /[^A-Za-z0-9\s]/.test(clave)
    ];

    // Actualizar lista de requisitos
    requisitos.forEach(function(cumple, indice) {

        const elemento = document.getElementById(elementos[indice]);

        if (cumple) {
            elemento.textContent = "✅ " + textos[indice];
        } else {
            elemento.textContent = "❌ " + textos[indice];
        }

    });

    // Contar requisitos cumplidos
    const puntos = requisitos.filter(Boolean).length;

    // Mostrar seguridad
    if (puntos === 5) {
        nivel.textContent = "Contraseña segura";
        nivel.style.color = "green";
    } else {
        nivel.textContent = "Contraseña débil";
        nivel.style.color = "red";
    }

    // Comprobar confirmación
    const coincide = clave !== "" && clave === repetir;

    if (repetir === "") {
        mensaje.textContent = "";
    } else if (coincide) {
        mensaje.textContent = "Las contraseñas coinciden";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Las contraseñas no coinciden";
        mensaje.style.color = "red";
    }

    // Habilitar botón
    guardar.disabled = !(puntos === 5 && coincide);
}

// Detectar escritura
password.addEventListener("input", actualizar);
confirmacion.addEventListener("input", actualizar);

// Comprobar también al cargar la página
actualizar();

// Guardar contraseña
guardar.addEventListener("click", function() {

    mensaje.textContent = "¡Contraseña guardada correctamente!";

});
