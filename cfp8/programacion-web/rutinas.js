const cursos = [
    {
        id: "curso-igw",
        nombre: "Interface Gráfica Web",
        dia: "martes",
        turno: "noche",
        profesor: "Jorge Sánchez",
        imagen: "img-igw.png",
        calificaciones: "https://aulasvirtuales.bue.edu.ar/grade/report/user/index.php?id=23842",
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
                diaEntrega: "2025-10-14",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867813/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%203.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764278",
                estado: "pendiente",
            },
            {
                id: "tp4igw",
                nombre: "TP Nro. 4 Bootstrap",
                diaEntrega: '2025-11-04',
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867815/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%204.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764278",
                estado: "pendiente",
            },
            {
                id: "tp5igw",
                nombre: "TP Nro. 5 Manejo de Eventos",
                diaEntrega: '2025-11-04',
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867817/mod_assign/introattachment/0/TP%20Nro%205%20Javascript%20Manejo%20de%20Eventos.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764282",
                estado: "pendiente",
            },
            {
                id: "tp6igw",
                nombre: "TP Nro. 6 Gestión de APIs mediante JavaScript",
                diaEntrega: "2025-11-04",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2879323/mod_assign/introattachment/0/Trabajo%20Practico%20Nro%206.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=771727",
                estado: "pendiente",
            },
            {
                id: "tp7igw",
                nombre: "TP Nro. 7 Gestión de APIs mediante Axios",
                diaEntrega: "2025-11-11",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2882583/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20Nro%207.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=774618",
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
        calificaciones: "https://aulasvirtuales.bue.edu.ar/grade/report/user/index.php?id=23843",
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
            {
                id: "tp2daw",
                nombre: "TP N2 JPA Hibernate",
                diaEntrega: '2025-10-30',
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2876374/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20Nro2%20JPA%20Hibernate.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=769192",
                estado: "pendiente",
            },
            {
                id: "tp3daw",
                nombre: "TP Nro.3 DTO - Query Method",
                diaEntrega: '2025-11-05',
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2880046/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20Nro3%20DTO-Method%20query.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=772390",
                estado: "pendiente",
            },
            {
                id: "tp4daw",
                nombre: "TP Nro. 4 Thymeleaf",
                diaEntrega: '2025-11-08',
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2868319/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20Nro%204%20Thymeleaf.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764626",
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
        calificaciones: "https://aulasvirtuales.bue.edu.ar/grade/report/user/index.php?id=23841",
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
                diaEntrega: "2025-10-13",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867780/mod_assign/introattachment/0/Ejercitaci%C3%B3n%20sobre%20Vistas.docx.pdf?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764246",
                estado: "pendiente",
            },
            {
                id: "tp5gbd",
                nombre: "Trabajo Práctico sobre Funciones de Usuario",
                diaEntrega: "2025-11-06",
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
            {
                id: "tp7gbd",
                nombre: "Trabajo Practico Triggers",
                diaEntrega: "2025-10-23",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867788/mod_assign/introattachment/0/Trabajo%20Practico%20triggers.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764254",
                estado: "pendiente",
            },
            {
                id: "tp8gbd",
                nombre: "Trabajo Practico sobre Transacciones",
                diaEntrega: "2025-11-13",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867790/mod_assign/introattachment/0/Trabajo%20Practico%20sobre%20Transacciones%20en%20MySQL.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764256",
                estado: "pendiente",
            },
            {
                id: "tp9gbd",
                nombre: "Trabajo practico sobre Usuarios y Permisos",
                diaEntrega: "2025-11-20",
                horaEntrega: "23:59",
                consigna: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/2867792/mod_assign/introattachment/0/Trabajo%20Pr%C3%A1ctico%20Sistema%20de%20Usuarios%20y%20Permisos.docx?forcedownload=1",
                urlEntrega: "https://aulasvirtuales.bue.edu.ar/mod/assign/view.php?id=764258",
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
        const proximosVencimientos = cursos.flatMap(v => v.trabajos).filter(d => estaEnSemanaActual(new Date(d.diaEntrega + " " + d.horaEntrega)));
        const nombresCursos = {
            igw: "Interface Gráfica Web",
            daw: "Desarrollo de Aplicaciones Web",
            gbd: "Gestión de Base de Datos",
        };
        const cartelProximosVencimientos = `
            <div class="alert alert-warning my-2 alert-dismissible shadow">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <h4 class="text-center text-danger">Entregas que cierran esta semana</h4>
                ${proximosVencimientos.map(curso => {
                    const nombreCurso = `<strong>${nombresCursos[curso.id.substr(-3)]}</strong>`;
                    const nombreTP = `<em><strong class="text-dark">${curso.nombre}</strong></em>`;
                    const formatoFecha = { weekday: "long", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }
                    const fechaEntrega = `${new Date(curso.diaEntrega + " " + curso.horaEntrega).toLocaleString("es-AR", formatoFecha)} h`;
                    const leyendaFecha = `${nombreCurso}: ${nombreTP} (${fechaEntrega})<br>`;

                    return leyendaFecha;
                }).join("")}
            </div>
            <hr>`;

        // Paneles de contenido
        const etqDivPanel = document.createElement("div");
        let trabajosEntregados = 0;
        curso.trabajos.forEach(t => { if (localStorage.getItem(t.id)) trabajosEntregados++ });
        const trabajosPendientes = curso.trabajos.length - trabajosEntregados;
        etqDivPanel.className = "tab-pane container fade";
        etqDivPanel.id = curso.id;
        etqDivPanel.innerHTML = `
            ${proximosVencimientos.length > 0 ? cartelProximosVencimientos : ""}
            <div class="border border-1 border-info bg-light p-3 rounded-3 mt-1">
                <div class="row mx-1 pt-2 bg-info-subtle roundes-3 shadow-lg">
                    <div class="col-sm-2">
                        <img src="img/${curso.imagen}" alt="Imagen del curso ${curso.nombre}" class="img-fluid rounded-3 mb-2">
                    </div>
                    <div class="col-sm-10 align-items-sm-center pb-2">
                        <h3 class="w-100 bg-info text-center rounded-2">${curso.nombre}</h3>
                        <strong>Día:</strong> ${curso.dia}<br>
                        <strong>Turno:</strong> ${curso.turno}<br>
                        <strong>Profesor:</strong> ${curso.profesor}<br>
                        <strong>Total de trabajos prácticos:</strong> ${curso.trabajos.length} <span class="badge bg-success">${trabajosEntregados} ${trabajosEntregados === 1 ? 'entregado' : 'entregados'}</span> <span class="badge bg-info">${trabajosPendientes} ${trabajosPendientes === 1 ? 'pendiente' : 'pendientes'}</span>
                        </ul>
                    </div>
                </div>
                <div class="row mt-5 px-3">
                    <p class="h4 mt-2 p-0">
                        <span class="badge bg-success w-100 py-2">Trabajos prácticos</span>
                    </p>
            ${curso.trabajos.map(tp => {
                const fechaActual = new Date();
                const fechaEntrega = new Date(tp.diaEntrega + " " + tp.horaEntrega);
                const diasHastaEntrega = (Math.ceil((fechaEntrega.getTime() - fechaActual.getTime()) / (1000 * 60 * 60 * 24))) - 1;
                const fechaEntregaFormateada = fechaEntrega.toLocaleString("es-AR", { dateStyle: "full", timeStyle: "short", hour12: false }) + " h";
                const fechaVigente = `<span class="text-success"><em>${fechaEntregaFormateada}</em></span>`;
                const fechaVencida = `<span class="text-secondary">${fechaEntregaFormateada}</span> <span class="badge bg-secondary">Entrega cerrada</span>`;
                const entregaVencida = fechaEntrega < fechaActual;
                const tpVenceEstaSemana = proximosVencimientos.map(d => d.id).includes(tp.id);

                // Variables con estilos para fondo de panel de TP según tiempo de entrega
                const fondoProximoVencimiento = "border-danger bg-danger-subtle position-relative";
                const fondoVencidoEntregado = "border-secondary bg-secondary-subtle position-relative";
                const fondoEntregaVigente = "border-success bg-success-subtle";
                const etiquetaSupDerVenceEstaSemana = `<span class="badge bg-danger etiqueta-esquina-superior-derecha">Vence esta semana</span>`;
                const etiquetaSupDerTpEntregado = `<i class="bi bi-check-square text-success etiqueta-esquina-superior-derecha"></i>`;
                const etiquetaDiasHastaEntrega = `<span class="badge bg-dark">${diasHastaEntrega} dias</span>`;

                // 2. Lógica para determinar el estado de entrega (Local Storage vs. Archivo JS)
                const estadoLocal = localStorage.getItem(tp.id);
                // Si hay un estado en localStorage, se usa. Si no, se usa el estado inicial del objeto.
                const estadoActual = estadoLocal !== null ? estadoLocal : tp.estado;

                // Determinar si el checkbox debe estar marcado
                const estaEntregado = estadoActual === "entregado";
                const checkedAttribute = estaEntregado ? "checked" : "";

                // Cambiar el color de fondo del contenedor según el estado
                const fondoContenedorTP = 
                    tpVenceEstaSemana                   // --> Si el TP vence esta semana (condición)
                    ? fondoProximoVencimiento           // -> Aplico fondoProximoVencimientno
                    : entregaVencida || estaEntregado   // --> Si ya venció o fue entregado (condición)
                    ? fondoVencidoEntregado             // -> aplico fondoVencidoEntregado
                    : fondoEntregaVigente;              // Si no vence esta semana, no está entregado ni vencido, el TP tiene entrega vigente

                return `
                    <div class="border-start border-3 rounded-3 p-2 my-2 ${fondoContenedorTP}">
                        ${estaEntregado ? etiquetaSupDerTpEntregado : "" ||
                            tpVenceEstaSemana ? etiquetaSupDerVenceEstaSemana : ""}
                        <strong>${tp.nombre}</strong><br>
                        <strong>Fecha de entrega:</strong> ${entregaVencida ? fechaVencida : fechaVigente} ${diasHastaEntrega > 1 && !estaEntregado ? etiquetaDiasHastaEntrega : ""}<br>
                        <a href="${tp.consigna}" class="link-underline link-underline-opacity-0" target="_blank" title="Click para abrir el archivo de consinga en el Aula Virtual">Enlace a la consigna</a><br>
                        <a href="${tp.urlEntrega}" class="link-underline link-underline-opacity-0" target="_blank" title="Click para abrir la sección de entrega del TP en el Aula Virtual">Enlace de entrega</a><br>
                        <div class="form-check form-switch form-check-inline pt-1">
                            <input class="form-check-input estado-tp-checkbox" type="checkbox" id="check-${tp.id}" data-tpid="${tp.id}" ${checkedAttribute}>
                            <label class="form-check-label" for="check-${tp.id}">Trabajo entregado</label>
                        </div>
                    </div>`;
            }).join("")}
                </div>
            </div>`;

        $(contenidoPaneles).append(etqDivPanel);
    });

    // Agrego un botón más en la botonera para mostrar una tabla con todos los cursos
    // Boton para la tabla
    const botonAdicional = `<li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tabla-cursos">Todos los cursos</a></li>`;
    
    // Panel con la tabla de cursos
    const filasTabla = [];
    cursos.forEach(curso => curso.trabajos.map(t => {
        filasTabla.push( {
            idCurso: curso.id,
            nombreCurso: curso.nombre,
            diaCurso: curso.dia,
            turnoCurso: curso.turno,
            profecor: curso.profesor,
            ...t
        });
    }));
    const leyendasEncabezados = [
        "Curso",
        "Día",
        "Trabajo práctico",
        "Fecha de entrega",
        "Estado"
    ];
    const celdasTabla = filasTabla.map(fila => [fila.nombreCurso, fila.diaCurso, fila.nombre, fila.diaEntrega + " " + fila.horaEntrega, fila.estado]);
    const cntColumnasTabla = leyendasEncabezados.length;
    const encabezadosTabla = `
        <tr class="text-center">${leyendasEncabezados.map(leyenda => 
            `<th>${leyenda}</th>`
        ).join("")}</tr>`;
    const datosTabla = `
        ${filasTabla.map(fila => `
            <tr class="item">
                <td>${fila.nombreCurso}</td>
                <td>${fila.diaCurso}</td>
                <td>${fila.nombre}</td>
                <td>${new Date(fila.diaEntrega + " " + fila.horaEntrega).toLocaleString("es-AR", {dateStyle: "full"})}</td>
                <td>${fila.estado}</td>
            </tr>`).join("")}`;
    const pieTabla = `<tr><td colspan="${cntColumnasTabla}">Cantidad total de registros XXX</td></tr>`;
    const panelAdicional = `
        <div class="tab-pane container fade" id="tabla-cursos">
            <div class="border border-1 border-info bg-light p-3 rounded-3 mt-1">
                <table id="tabla-cursos" class="table table-bordered table-hover">
                    <thead class="table-secondary">
                        ${encabezadosTabla}
                    </thead>
                    <tbody class="table-success">
                        ${datosTabla}
                    </tbody>
                    <tfoot class="bg-secondary">
                        ${pieTabla}
                    </tfoot>
                </table>
            </div>
        </div>`;
    
    // Agrego nuevo botón y panel
    // $(menuPaneles).append(botonAdicional);
    // $(contenidoPaneles).append(panelAdicional);


    // Agrego botonera y paneles con todo el contenido generado
    $(divMenu).append(menuPaneles);
    $(divMenu).append(contenidoPaneles);
    $("a.nav-link")[0].click(); // Selecciono la opción "Interface Gráfica Web" del menú

    // Agregar controlador de eventos para los checkboxes
    // Se utiliza delegación de eventos para capturar el click en cualquier checkbox de TP
    $(document).on('change', '.estado-tp-checkbox', function () {
        const checkbox = $(this);
        const tpid = checkbox.data('tpid');
        const nuevoEstado = checkbox.prop('checked') ? 'entregado' : 'pendiente';

        // 4. Guardar el nuevo estado en LocalStorage
        localStorage.setItem(tpid, nuevoEstado);
    });
});

// Funciones auxiliares
/**
 * Verifica si una fecha dada está en el intervalo entre el día actual
 * y el viernes siguiente (ambos inclusive).
 *
 * @param {Date} fechaAValidar - El objeto Date a verificar.
 * @returns {boolean} - Devuelve 'true' si la fecha está en el intervalo, 'false' en caso contrario.
 */
function estaEnSemanaActual(fechaAValidar) {
    // 1. Establecer el inicio del intervalo (Hoy a las 00:00:00.000)
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Establece la hora a medianoche

    // 2. Calcular el final del intervalo (El próximo viernes a las 23:59:59.999)
    const proximoViernes = new Date();
    proximoViernes.setHours(0, 0, 0, 0); // Empezamos desde hoy a medianoche

    // Obtener el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const diaActual = proximoViernes.getDay();

    // Calcular cuántos días faltan para el próximo viernes (día 5)
    let diasHastaViernes;
    if (diaActual <= 5) {
        // Si hoy es de Domingo (0) a Viernes (5)
        diasHastaViernes = 5 - diaActual;
    } else {
        // Si hoy es Sábado (6)
        diasHastaViernes = 6; // Sábado(6) a Domingo(0) son 1 día, y luego de Domingo(0) a Viernes(5) son 5 días, en total 6 días
    }

    // Avanzar la fecha hasta el próximo viernes
    proximoViernes.setDate(proximoViernes.getDate() + diasHastaViernes);

    // Ajustar la hora al final del día del viernes (23:59:59.999)
    proximoViernes.setHours(23, 59, 59, 999);

    // 3. Obtener el valor numérico de la fecha a validar
    const tiempoValidar = fechaAValidar.getTime();

    // 4. Realizar la verificación
    // La fecha debe ser mayor o igual a 'hoy' Y menor o igual a 'proximoViernes'
    return tiempoValidar >= hoy.getTime() && tiempoValidar <= proximoViernes.getTime();
}
