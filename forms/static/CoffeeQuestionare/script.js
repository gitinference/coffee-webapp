document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear() - 1;

  // For spans that need custom text
  const cafePlaceholder = document.getElementById("cafe-year-placeholder");
  if (cafePlaceholder) {
    cafePlaceholder.textContent = `6. ¿Cuál fue el total de cuerdas sembradas de café arábigo para el ${year}?`;
  }

  // For spans that only need the year
  const ids = [
    "alquiler-year",
    "empleados-year",
    "horas-year",
    "pago-year",
    "almud-year",
    "densidad-year",
    "costo-arbolito-year",
    "venta-cafe-year"
  ];

  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = year;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear() - 1;

  const insumosYear = document.getElementById("insumos-year");
  if (insumosYear) {
    insumosYear.textContent = year;
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("mostrarPreguntasBtn");
    const preguntas = document.getElementById("preguntasOcultas");

    // Evento al hacer clic en el botón
    boton.addEventListener("click", function () {
      boton.style.display = "none"; // Oculta el botón
      preguntas.style.display = "block"; // Muestra las preguntas
    });

    // Coloca el año dinámico en el span
    const currentYear = new Date().getFullYear();
    document.querySelectorAll("span[data-offset]").forEach(span => {
      const offset = parseInt(span.dataset.offset);
      span.textContent = currentYear - offset;
    });
  });


  window.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const yearCells = document.querySelectorAll('.year-dynamic');

    yearCells.forEach((cell, index) => {
      cell.textContent = currentYear - (3 - index);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("anio-perdida-cafe").textContent = currentYear - 1;
  });