// 1. Gestión de Selección de Grados
function selectGrade(gradeName, element) {
  // UI: Activar botón
  document
    .querySelectorAll(".grade-btn")
    .forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");

  // Lógica: Cambiar contenido
  document.getElementById("view-title").innerText = `Gestión de ${gradeName}`;
  document.getElementById("view-desc").innerText =
    `Seleccione la acción que desea ejecutar para ${gradeName}:`;
  document.getElementById("action-menu").style.display = "flex";

  document
    .querySelectorAll(".grade-btn")
    .forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");

  document.getElementById("view-title").innerText = `Gestión de ${gradeName}`;
  document.getElementById("action-menu").style.display = "flex";

  // NUEVO: Mostrar el contenedor de la tabla y filtrar
  document.getElementById("contenedor-tabla-estudiantes").style.display =
    "block";
  document.getElementById("titulo-tabla").innerText =
    `Listado de Estudiantes - ${gradeName}`;

  // Extraemos la letra de la división del string (ej: de "6to A" extraemos "A")
  const divisionSeleccionada = gradeName.split(" ")[1];

  // Filtramos la tabla usando el método load de Bootstrap-Table
  const datosFiltrados = estudiantesData.filter(
    (estudiante) => estudiante.division === divisionSeleccionada,
  );
  $("#tabla-estudiantes").bootstrapTable("load", datosFiltrados);

  // Cerrar menú móvil si está abierto
  document.getElementById("nav-menu").classList.remove("open");
}

// 2. Control Menú Hamburguesa (Móvil)
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// 3. Gestión de Panel de Recordatorios
const panel = document.getElementById("reminder-panel");
const reopenBtn = document.getElementById("reopen-btn");

function togglePanel(collapse) {
  if (collapse) {
    panel.classList.add("collapsed");
    reopenBtn.style.display = "block";
  } else {
    panel.classList.remove("collapsed");
    reopenBtn.style.display = "none";
  }
}

// 4. Cambio de Tema (Claro/Oscuro)
const themeBtn = document.getElementById("theme-btn");
const htmlElement = document.documentElement;
const temaGuardado = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", temaGuardado);
console.info(htmlElement.getAttribute("data-theme"));

themeBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  // Ajustamos el cambio de tema para la tabla Bootstrap
  if (currentTheme === "dark") {
    // NOTA PARA BOOTSTRAP: Le avisamos que cambie a claro
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    // NOTA PARA BOOTSTRAP: Le avisamos que cambie a oscuro
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});

// ====================================================
// Sección de configuración de tooltips de botones    =
// ====================================================
// Defino opciones generales pra todo los tooltips
const generarOpcionesTooltip = (leyenda) => ({
  content: leyenda, // El texto que pediste
  trigger: "mouseenter", // Se muestra al posicionar el puntero
  hideOnClick: true, // Se oculta al hacer click en el botón
  placement: "top", // Ubicación (arriba, abajo, etc.)
  animation: "shift-away", // Animación suave
});

// Tooltip para botón de ocultamiento de panel de tareas
tippy(".close-panel-btn", generarOpcionesTooltip("Click para cerrar panel"));

// Tooltip para botón de desocultamiento de panel de tareas
tippy(".reopen-panel-btn", generarOpcionesTooltip("Click para ver tareas"));

// Tooltipo para botón de cambio de tema claro/oscuro
tippy(".theme-toggle", generarOpcionesTooltip("Cambiar tema"));

// Tooltip de botón de selección de grados
// tippy('.grade-btn', generarOpcionesTooltip("Seleccionar grado"));

// ===================================================
// Sección de funciones auxiliares
// ===================================================
const formatearCadena = (cadena) => {
  if (!cadena) return "";

  // Lista de palabras que se mantendrán en minúscula (a menos que sean la primera)
  const excepciones = [
    "art",
    "ante",
    "bajo",
    "con",
    "contra",
    "de",
    "del",
    "desde",
    "durante",
    "en",
    "entre",
    "hacia",
    "hasta",
    "mediante",
    "para",
    "por",
    "según",
    "sin",
    "sobre",
    "tras",
    "el",
    "la",
    "los",
    "las",
    "un",
    "una",
    "unos",
    "unas",
    "y",
    "e",
    "o",
    "u",
  ];

  return cadena
    .toLowerCase()
    .split(/\s+/) // Dividimos por cualquier tipo de espacio
    .map((palabra, indice) => {
      // Si es la primera palabra o no está en las excepciones, capitalizar
      if (indice === 0 || !excepciones.includes(palabra)) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
      }
      // De lo contrario, devolver en minúscula
      return palabra;
    })
    .join(" ");
};

// ===================================================
// Sección API y Peticiones HTTP
// ===================================================
/**
 * Función asíncrona para obtener el listado de estudiantes
 * Utiliza Fetch API nativa de JavaScript
 */
async function fetchEstudiantes() {
  try {
    // Hacemos la petición GET al endpoint PHP (con proxy corsproxy.io para poder acceder a buethost desde localhost)
    const url ="https://rosarito.byethost4.com/api/estudiantes.php";
    const response = await fetch(url);

    // Verificamos si la respuesta del servidor es exitosa
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Mostramos por consola para verificar (borraremos esto en producción)
    console.log("Datos de estudiantes recibidos:", data);

    // Retornamos los datos para usarlos posteriormente en Bootstrap-Table
    return data;
  } catch (error) {
    console.error("Fallo al obtener los estudiantes:", error);

    // Disparamos una alerta amigable usando SweetAlert2 (que ya tienes incluido)
    Swal.fire({
      icon: "error",
      title: "Error de conexión",
      text: "No se pudo cargar el listado de estudiantes. Verifica tu conexión o contacta al administrador.",
      confirmButtonColor: "#2d6a4f",
    });
  }
}

// ====================================================
// Sección de código HTML generado dinámicamente      =
// luego de finalizada la carga del contenido del DOM =
// ====================================================
// Variable global para almacenar los datos de los estudiantes
let estudiantesData = [];

document.addEventListener("DOMContentLoaded", async () => {
  // Genero menú de selección de grados
  const grados = ["6to A", "6to B", "6to C", "6to D"];
  const menuGrados = document.getElementById("nav-menu");
  const botonesGrados = grados
    .map(
      (grado) =>
        `<li><button class="grade-btn" onclick="selectGrade('${grado}', this)">${grado}</button></li>`,
    )
    .join("");
  menuGrados.innerHTML = botonesGrados;

  // 1. Obtener los datos al cargar la página
  estudiantesData = await fetchEstudiantes();

  // 2. Inicializar la tabla si los datos llegaron correctamente
  if (estudiantesData && estudiantesData.length > 0) {
    inicializarTablaEstudiantes(estudiantesData);
  }
});

/**
 * Inicializa Bootstrap-Table utilizando jQuery
 */
function inicializarTablaEstudiantes(data) {
  $("#tabla-estudiantes").bootstrapTable({
    data: data,
    class: "table table-striped table-hover",
    search: "true",
    showColumns: "true",
    searchAccentNeutralise: true,
    showAdvancedSearch: false,
    locale: "es-AR",
    stickyHeader: "true",
    stickyHeaderOffsetY: "70",
    pagination: "true",
    pageSize: "25",
    formatSearch: function () {
        return 'Buscar estudiante...';
    },
    showColumns: true,
    showPrint: true,
    showExport: true,
    exportDataType: "all",
    exportTypes: ['json', 'csv', 'txt', 'pdf'],
    trimOnSearch: false,
    columns: [
      { title: "#", formatter: (value, row, id) => id + 1 },
      {
        field: "apellido",
        title: "Apellido",
        sortable: true,
        switchable: false,
        formatter: (value) => formatearCadena(value).trim()
      },
      { 
        field: "nombre", 
        title: "Nombre", 
        sortable: true, 
        switchable: false,
        formatter: (value) => formatearCadena(value).trim()
      },
      { 
        field: "dni",
        title: "DNI",
        align: "end",
        sortable: true,
        formatter: (value) => Number(value) ? Number(value).toLocaleString("es-AR") : value 
      },
      { field: "cuenta_alu", title: "Cuenta ALU" },
      { field: "edad_30_junio", title: "Edad al 30/06", align: "center" },
      { field: "situacion_beca", title: "Beca" },
      {
        field: "estado_cursada",
        title: "Estado",
        align: "center",
        formatter: function (value) {
          // Agregamos un badge de Bootstrap para el estado
          let badgeClass = value === "Activo" ? "bg-success" : "bg-danger";
          return `<span class="badge ${badgeClass}">${value}</span>`;
        },
      },
    ],
    onPostBody: function() {
    // Selecciona el input de búsqueda generado por la tabla
    $('.search-input').typeahead({
        source: function (query, process) {
            // Obtiene todos los datos actuales de la tabla para las sugerencias
            var data = $("#tabla-estudiantes").bootstrapTable('getData');
            var results = data.map(function (row) {
                return formatearCadena(row.apellido) + ", " + formatearCadena(row.nombre); // La columna que quieras sugerir
            });
            process(results);
        },
        afterSelect: function (selection) {
            // Al seleccionar una sugerencia, dispara la búsqueda en la tabla
            $tabla.bootstrapTable('resetSearch', selection);
        }
    });
}
  });
}