
// Obtener elementos HTML
const titulo = document.getElementById("titulo");
const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const tema = document.getElementById("tema");

// Colocar el título desde JavaScript
titulo.textContent = "📝 Tareas de Ana";

// Arreglo para guardar las tareas
let tareas = [];

// Identificador de las tareas
let siguienteId = 1;

// Función para agregar tareas
function agregarTarea() {

    const texto = tarea.value.trim();

    // Comprobar si el campo está vacío
    if (texto === "") {
        tarea.classList.add("error");
        tarea.focus();
        return;
    }

    // Crear objeto de la tarea
    const nuevaTarea = {
        id: siguienteId,
        texto: texto,
        hecha: false
    };

    // Guardar tarea en el arreglo
    tareas.push(nuevaTarea);

    siguienteId++;

    // Limpiar el campo
    tarea.value = "";
    tarea.classList.remove("error");

    // Actualizar la lista
    render();
}

// Función para mostrar las tareas
function render() {

    lista.innerHTML = "";

    // Recorrer el arreglo
    tareas.forEach(function(elemento) {

        // Crear elemento de lista
        const li = document.createElement("li");

        // Crear texto de la tarea
        const span = document.createElement("span");
        span.textContent = elemento.texto;
        span.classList.add("texto-tarea");

        // Marcar tarea como hecha
        if (elemento.hecha) {
            span.classList.add("hecha");
        }

        span.addEventListener("click", function() {

            elemento.hecha = !elemento.hecha;

            render();

        });

        // Crear botón para eliminar
        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click", function() {

            tareas = tareas.filter(function(item) {
                return item.id !== elemento.id;
            });

            render();

        });

        // Agregar elementos a la lista
        li.appendChild(span);
        li.appendChild(botonEliminar);

        lista.appendChild(li);

    });

    // Contar tareas pendientes
    const pendientes = tareas.filter(function(item) {
        return item.hecha === false;
    }).length;

    // Mostrar contador
    contador.textContent =
        pendientes + " pendientes de " + tareas.length;
}

// Evento del botón Agregar
agregar.addEventListener("click", agregarTarea);

// Agregar tarea al presionar Enter
tarea.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        agregarTarea();
    }

});

// Quitar error cuando se escribe
tarea.addEventListener("input", function() {

    if (tarea.value.trim() !== "") {
        tarea.classList.remove("error");
    }

});

// Cambiar entre modo claro y oscuro
tema.addEventListener("click", function() {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        tema.textContent = "☀️ Modo claro";
    } else {
        tema.textContent = "🌙 Modo oscuro";
    }

});

// Mostrar lista inicial
render();
