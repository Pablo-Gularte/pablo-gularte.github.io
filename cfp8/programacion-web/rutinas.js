const cursos = [
    {
        id: "curso-igw",
        nombre: "Interface Gráfica Web",
        dia: "martes",
        turno: "noche",
        profesor: "Jorge Sánchez",
        imagen: "img-igw.png",
        trabajos: [
            {
                id: "tp1igw",
                nombre: "TP Nro. 1 HTML",
                diaEntrega: "2025-09-23",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867809/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%201.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764274",
                estado: "pendiente",
            },
            {
                id: "tp2igw",
                nombre: "TP Nro. 2 CSS",
                diaEntrega: "2025-10-01",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867811/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%202.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764276",
                estado: "pendiente",
            },
            {
                id: "tp3igw",
                nombre: "TP Nro. 3 Maquetación",
                diaEntrega: "2025-10-07",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867813/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%203.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764278",
                estado: "pendiente",
            },
            {
                id: "tp4igw",
                nombre: "TP Nro. 4 Bootstrap",
                diaEntrega: "2025-10-14",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867815/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%204.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764278",
                estado: "pendiente",
            },
        ],
    },
    {
        id: "curso-daw",
        nombre: "Desarrollo de Aplicaciones Web",
        dia: "miércoles",
        turno: "noche",
        profesor: "Jorge Sánchez",
        imagen: "img-daw.png",
        trabajos: [
            {
                id: "tp1daw",
                nombre: "TP Nro. 1 API Springboot",
                diaEntrega: "2025-10-08",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2868317/mod_assign/introattachment/0/TP%20N1%20APIs%20con%20SpringBoot.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764624",
                estado: "pendiente",
            },
        ],
    },
    {
        id: "curso-gbd",
        nombre: "Gestión de Base de Datos",
        dia: "jueves",
        turno: "noche",
        profesor: "Jorge Sánchez",
        imagen: "img-gbd.png",
        trabajos: [
            {
                id: "tp1gbd",
                nombre: "Trabajo Practico Diseño de BD",
                diaEntrega: "2025-10-02",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867776/mod_assign/introattachment/0/Trabajo%20Practico%20Dise%C3%B1o%20de%20Base%20de%20Datos.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764242",
                estado: "pendiente",
            },
            {
                id: "tp2gbd",
                nombre: "Trabajo Practico Integridad Referencial",
                diaEntrega: "2025-10-02",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867778/mod_assign/introattachment/0/Trabajo%20Practico%20Integridad%20Referencial.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764244",
                estado: "pendiente",
            },
            {
                id: "tp3gbd",
                nombre: "Trabajo Practico Indices",
                diaEntrega: "2025-10-16",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867782/mod_assign/introattachment/0/Trabajo%20Practico%20sobre%20%C3%ADndices.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764248",
                estado: "pendiente",
            },
            {
                id: "tp4gbd",
                nombre: "Trabajo Practico Vistas",
                diaEntrega: "2025-10-09",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867780/mod_assign/introattachment/0/Ejercitaci%C3%B3n%20sobre%20Vistas.docx.pdf?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764246",
                estado: "pendiente",
            },
            {
                id: "tp5gbd",
                nombre: "Trabajo Práctico sobre Funciones de Usuario",
                diaEntrega: "2025-10-23",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867784/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20sobre%20Funciones%20de%20Usuario.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764250",
                estado: "pendiente",
            },
            {
                id: "tp6gbd",
                nombre: "Trabajo Práctico sobre Procedimientos Almacenados",
                diaEntrega: "2025-10-30",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867786/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20sobre%20Procedimientos%20Almacenados.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764252",
                estado: "pendiente",
            },
        ],
    },
];

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el contenedor donde se insertarán el menú y los paneles
    const divMenu = $('#menu-paneles');

    // Generar el contenedor de menú
    const menuPaneles = document.createElement("ul");
    menuPaneles.className = "nav nav-pills";

    // Generar contenedor de los paneles de contenido a partir del vector de cursos
    const contenidoPaneles = document.createElement("div");
    contenidoPaneles.className = "tab-content";

    cursos.forEach(curso => {
        // Elementos del menú
        const etqLiMenu = document.createElement("li");
        etqLiMenu.className = "nav-item";
        const etqEnlaceMenu = document.createElement("a");
        etqEnlaceMenu.className = "nav-link";
        etqEnlaceMenu.setAttribute("data-bs-toggle", "pill");
        etqEnlaceMenu.href = `#${curso.id}`;
        etqEnlaceMenu.textContent = curso.nombre;
        $(etqLiMenu).append(etqEnlaceMenu);
        $(menuPaneles).append(etqLiMenu);

        // Filtro las fechas de entrega de la próxima semana para mostar aviso
        const proximosVencimientos = cursos.flatMap(v => v.trabajos).filter(d => estaEnSemanaActual(new Date(d.diaEntrega)));
        const nombresCursos = {
            igw: "Interface Gráfica Web",
            daw: "Desarrollo de Aplicaciones Web",
            gbd: "Gestión de Base de Datos",
        };
        const cartelProximosVencimientos =
            `<div class="alert alert-warning my-2 alert-dismissible shadow">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <h4 class="text-center text-danger">Entregas que cierran en los próximos 7 días</h4>
                ${proximosVencimientos.map(curso => `${nombresCursos[curso.id.substr(-3)]}: <em><strong class="text-dark">${curso.nombre}</strong></em> (${new Date(curso.diaEntrega + " " + curso.horaEntrega).toLocaleString("es-AR", { weekday: "long", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false })})<br>`).join("")}
            </div>
            <hr>`;

        // Paneles de contenido
        const etqDivPanel = document.createElement("div");
        etqDivPanel.className = "tab-pane container fade";
        etqDivPanel.id = curso.id;
        etqDivPanel.innerHTML = `
            ${proximosVencimientos.length > 0 ? cartelProximosVencimientos : ""}
            <div class="border border-1 border-info bg-light p-3 rounded-3 mt-1">
                <div class="row mx-1 pt-2 bg-info-subtle roundes-3 shadow-lg">
                    <div class="col-sm-2">
                        <img src="img/${curso.imagen}" alt="Imagen del curso ${curso.nombre}" class="img-fluid rounded-3 mb-2">
                    </div>
                    <div class="col-sm-10 align-items-sm-center">
                        <h3 class="w-100 bg-info text-center rounded-2">${curso.nombre}</h3>
                        <strong>Día:</strong> ${curso.dia}<br>
                        <strong>Turno:</strong> ${curso.turno}<br>
                        <strong>Profesor:</strong> ${curso.profesor}<br>
                        <strong>Total de trabajos prácticos:</strong> ${curso.trabajos.length}
                    </div>
                </div>
                <div class="row mt-5 px-3">
                    <p class="h4 mt-2 p-0">
                        <span class="badge bg-success w-100 py-2">Trabajos prácticos</span>
                    </p>
                    ${curso.trabajos.map(tp => {
                        const fechaActual = new Date();
                        const fechaEntrega = new Date(tp.diaEntrega + " " + tp.horaEntrega);
                        const fechaEntregaFormateada = fechaEntrega.toLocaleString("es-AR", { dateStyle: "full", timeStyle: "short", hour12: false });
                        const fechaVigente = `<span class="text-success"><em>${fechaEntregaFormateada}</em></span>`;
                        const fechaVencida = `<span class="text-secondary">${fechaEntregaFormateada}</span> <span class="badge bg-secondary">Entrega cerrada</span>`;
                        const entregaVencida = fechaEntrega < fechaActual;

                        // 2. Lógica para determinar el estado de entrega (Local Storage vs. Archivo JS)
                        const estadoLocal = localStorage.getItem(tp.id);
                        // Si hay un estado en localStorage, se usa. Si no, se usa el estado inicial del objeto.
                        const estadoActual = estadoLocal !== null ? estadoLocal : tp.estado;

                        // Determinar si el checkbox debe estar marcado
                        const estaEntregado = estadoActual === "entregado";
                        const checkedAttribute = estaEntregado ? "checked" : "";

                        // Cambiar el color de fondo del contenedor según el estado
                        const fondoContenedorTP = proximosVencimientos.map(d => d.id).includes(tp.id) ? "border-danger bg-danger-subtle" : entregaVencida || estaEntregado ? "border-secondary bg-secondary-subtle" : "border-success bg-success-subtle"

                        return `
                                <div class="border-start border-3 rounded-3 p-2 my-2 ${fondoContenedorTP}">
                                    <strong>${tp.nombre}</strong><br>
                                    <strong>Fecha de entrega:</strong> ${entregaVencida ? fechaVencida : fechaVigente}<br>
                                    <a href="${tp.consigna}" target="_blank" title="Click para abrir el archivo de consinga en el Aula Virtual">Enlace a la consigna</a><br>
                                    <a href="${tp.urlEntrega}" target="_blank" title="Click para abrir la sección de entrega del TP en el Aula Virtual">Enlace de entrega</a><br>
                                    <div class="form-check form-switch form-check-inline pt-1">
                                        <input class="form-check-input estado-tp-checkbox" type="checkbox" id="check-${tp.id}" data-tpid="${tp.id}" ${checkedAttribute}>
                                        <label class="form-check-label" for="check-${tp.id}">Trabajo entregado</label>
                                    </div>
                                </div>
                                `;
                    }).join("")}
                </div>
            </div>`;

        $(contenidoPaneles).append(etqDivPanel);
    });
    $(divMenu).append(menuPaneles);
    $(divMenu).append(contenidoPaneles);
    $("a.nav-link")[0].click(); // Selecciono la opción "Interface Gráfica Web" del menú

    // Agregar controlador de eventos para los checkboxes
    // Se utiliza delegación de eventos para capturar el click en cualquier checkbox de TP
    $(document).on('change', '.estado-tp-checkbox', function() {
        const checkbox = $(this);
        const tpid = checkbox.data('tpid');
        const nuevoEstado = checkbox.prop('checked') ? 'entregado' : 'pendiente';

        // 4. Guardar el nuevo estado en LocalStorage
        localStorage.setItem(tpid, nuevoEstado);
    });

    // Insertar el menú y los paneles en el documento
    document.getElementById("menu-paneles").appendChild(menuPaneles);
    document.getElementById("menu-paneles").appendChild(contenidoPaneles);

    // Funciones auxiliares
    /**
     * Comprueba si una fecha dada está dentro de los próximos 7 días.
     * El intervalo es inclusivo en ambos extremos: [hoy, hoy + 7 días].
     *
     * @param {Date} fechaRecibida - La fecha a evaluar.
     * @returns {boolean} - Devuelve verdadero si la fecha está en el intervalo; falso en caso contrario.
     */
    function estaEnSemanaActual(fechaRecibida) {
        // 1. Crear la fecha actual (hoy) y normalizarla al inicio del día (00:00:00) para una comparación precisa.
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        // 2. Crear la fecha límite superior (hoy + 7 días) y normalizarla al inicio del día.
        const limiteSuperior = new Date(hoy);
        // Sumamos 7 * 24 * 60 * 60 * 1000 milisegundos (7 días) a la fecha de 'hoy' ya normalizada.
        limiteSuperior.setDate(hoy.getDate() + 7);
        limiteSuperior.setHours(0, 0, 0, 0);

        // 3. Normalizar la fecha recibida al inicio del día.
        const fechaParaComparar = new Date(fechaRecibida);
        fechaParaComparar.setHours(0, 0, 0, 0);

        // 4. Realizar la comparación.
        // La fecha debe ser mayor o igual a 'hoy' Y menor o igual al 'límite superior'.
        const timestampHoy = hoy.getTime();
        const timestampLimiteSuperior = limiteSuperior.getTime();
        const timestampRecibido = fechaParaComparar.getTime();

        return (timestampRecibido >= timestampHoy && timestampRecibido <= timestampLimiteSuperior);
    }
});