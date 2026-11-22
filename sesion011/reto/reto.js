
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const curso = document.getElementById("curso").value;
    const jornada = document.getElementById("jornada").value;
    const autorizacion = document.getElementById("autorizacion").checked;

    let errores = false;

    // Función para mostrar errores
    function validar(campo, mensaje, condicion) {

        const elemento = document.getElementById(campo);
        const error = document.getElementById("error-" + campo);

        error.textContent = "";
        elemento.classList.remove("invalido");

        if (condicion) {
            error.textContent = mensaje;
            elemento.classList.add("invalido");
            errores = true;
        }
    }

    // Validar nombre
    validar("nombre", "Ingrese un nombre válido (mínimo 3 caracteres).",
        !/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}$/.test(nombre));

    // Validar documento
    validar("documento", "El documento debe tener entre 6 y 10 números.",
        !/^\d{6,10}$/.test(documento));

    // Validar correo
    validar("correo", "Ingrese un correo electrónico válido.",
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo));

    // Validar celular
    validar("celular", "El celular debe tener 10 números.",
        !/^\d{10}$/.test(celular));

    // Validar curso
    validar("curso", "Debe seleccionar un curso.",
        curso === "");

    // Validar jornada
    validar("jornada", "Debe seleccionar una jornada.",
        jornada === "");

    // Validar autorización
    validar("autorizacion", "Debe autorizar el tratamiento de datos.",
        !autorizacion);

    // Si existen errores, detener el proceso
    if (errores) {
        return;
    }

    // Mostrar resumen de inscripción
    document.getElementById("resumen").textContent =
        `Inscripción recibida. Nombre: ${nombre}. Curso: ${curso}. Jornada: ${jornada}.`;

    // Limpiar formulario
    formulario.reset();

});
