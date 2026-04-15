const cursos = [
    {
        id: 1,
        curso: "Administración de Bases de Datos",
        dias: "lunes y miércoles",
        horario: "19:00 a 22:30 hs.",
        totalFaltas: 5,
        imagen: "img/abd.png",
        github: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE",
        aulaVirtual: "https://aulasvirtuales.bue.edu.ar/course/view.php?id=27621",
        presentaciones: [
            {
                archivo: "ABD - Módulo 1.pdf",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/Presentaciones/ABD%20-%20M%C3%B3dulo%201.pdf",
            },
            {
                archivo: "ABD - Módulo 2.pdf",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/Presentaciones/ABD%20-%20M%C3%B3dulo%202.pdf",
            },
            {
                archivo: "Instructivo de instalación de SQL Server 2022.pdf",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/Presentaciones/Instructivo%20de%20instalaci%C3%B3n%20de%20SQL%20Server%202022.pdf",
            },
        ],
        clases: [
            {
                archivo: "clase_02.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_02.sql",
                fecha: "2026-03-31T01:01:21.000Z",
            },
            {
                archivo: "clase_04.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_04.sql",
                fecha: "2026-03-19T01:14:21.000Z",
            },
            {
                archivo: "clase_05.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_05.sql",
                fecha: "2026-03-26T01:13:07.000Z",
            },
            {
                archivo: "clase_06.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_06.sql",
                fecha: "2026-03-31T01:16:08.000Z",
            },
            {
                archivo: "clase_07.sql",
                url: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_07.sql",
                fecha: "2026-04-06T22:23:02.000Z",
            },
            {
                archivo: "clase_08.sql",
                url: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_08.sql",
                fecha: "2026-04-07T01:15:47.000Z",
            },
            {
                archivo: "clase_09.sql",
                url: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_09.sql",
                fecha: "2026-04-09T01:13:13.000Z"
            },
            {
                archivo: "clase_10.sql",
                url: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/clase_10.sql",
                fecha: "2026-04-14T00:19:22.000Z"
            },
            {
                archivo: "Operational Handover (hoja de instalación).txt",
                url: "https://github.com/Francisco-Acuna/2026_1C_ADB_NOCHE/blob/main/actividades/Operational%20Handover%20(hoja%20de%20instalaci%C3%B3n).txt",
                fecha: "2026-04-14T00:21:19.000Z"
            }
        ],
        calendario: [
            {
                "fecha": "2026-03-09T03:00:00.000Z",
                "dia": "lunes",
                "mes": "marzo",
                "id": "clase-marzo-9"
            },
            {
                "fecha": "2026-03-11T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "marzo",
                "id": "clase-marzo-11"
            },
            {
                "fecha": "2026-03-16T03:00:00.000Z",
                "dia": "lunes",
                "mes": "marzo",
                "id": "clase-marzo-16"
            },
            {
                "fecha": "2026-03-18T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "marzo",
                "id": "clase-marzo-18"
            },
            {
                "fecha": "2026-03-23T03:00:00.000Z",
                "dia": "lunes",
                "feriado": "Día no laborable con fines turísticos",
                "tipoFeriado": "turistico",
                "seCursa": false,
                "mes": "marzo",
                "id": "clase-marzo-23"
            },
            {
                "fecha": "2026-03-25T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "marzo",
                "id": "clase-marzo-25"
            },
            {
                "fecha": "2026-03-30T03:00:00.000Z",
                "dia": "lunes",
                "mes": "marzo",
                "id": "clase-marzo-30"
            },
            {
                "fecha": "2026-04-01T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "abril",
                "id": "clase-abril-1"
            },
            {
                "fecha": "2026-04-06T03:00:00.000Z",
                "dia": "lunes",
                "mes": "abril",
                "id": "clase-abril-6"
            },
            {
                "fecha": "2026-04-08T03:00:00.000Z",
                "dia": "miércoles",
                "feriado": "Últimos dos días de la Pascua Judía",
                "tipoFeriado": "no_laborable",
                "seCursa": true,
                "mes": "abril",
                "id": "clase-abril-8"
            },
            {
                "fecha": "2026-04-13T03:00:00.000Z",
                "dia": "lunes",
                "mes": "abril",
                "id": "clase-abril-13"
            },
            {
                "fecha": "2026-04-15T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "abril",
                "id": "clase-abril-15"
            },
            {
                "fecha": "2026-04-20T03:00:00.000Z",
                "dia": "lunes",
                "mes": "abril",
                "id": "clase-abril-20"
            },
            {
                "fecha": "2026-04-22T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "abril",
                "id": "clase-abril-22"
            },
            {
                "fecha": "2026-04-27T03:00:00.000Z",
                "dia": "lunes",
                "mes": "abril",
                "id": "clase-abril-27"
            },
            {
                "fecha": "2026-04-29T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "abril",
                "id": "clase-abril-29"
            },
            {
                "fecha": "2026-05-04T03:00:00.000Z",
                "dia": "lunes",
                "mes": "mayo",
                "id": "clase-mayo-4"
            },
            {
                "fecha": "2026-05-06T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "mayo",
                "id": "clase-mayo-6"
            },
            {
                "fecha": "2026-05-11T03:00:00.000Z",
                "dia": "lunes",
                "mes": "mayo",
                "id": "clase-mayo-11"
            },
            {
                "fecha": "2026-05-13T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "mayo",
                "id": "clase-mayo-13"
            },
            {
                "fecha": "2026-05-18T03:00:00.000Z",
                "dia": "lunes",
                "mes": "mayo",
                "id": "clase-mayo-18"
            },
            {
                "fecha": "2026-05-20T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "mayo",
                "id": "clase-mayo-20"
            },
            {
                "fecha": "2026-05-25T03:00:00.000Z",
                "dia": "lunes",
                "feriado": "Día de la Revolución de Mayo",
                "tipoFeriado": "inamovible",
                "seCursa": false,
                "mes": "mayo",
                "id": "clase-mayo-25"
            },
            {
                "fecha": "2026-05-27T03:00:00.000Z",
                "dia": "miércoles",
                "feriado": "Fiesta del Sacrificio (religión islámica)",
                "tipoFeriado": "no_laborable",
                "seCursa": true,
                "mes": "mayo",
                "id": "clase-mayo-27"
            },
            {
                "fecha": "2026-06-01T03:00:00.000Z",
                "dia": "lunes",
                "mes": "junio",
                "id": "clase-junio-1"
            },
            {
                "fecha": "2026-06-03T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "junio",
                "id": "clase-junio-3"
            },
            {
                "fecha": "2026-06-08T03:00:00.000Z",
                "dia": "lunes",
                "mes": "junio",
                "id": "clase-junio-8"
            },
            {
                "fecha": "2026-06-10T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "junio",
                "id": "clase-junio-10"
            },
            {
                "fecha": "2026-06-15T03:00:00.000Z",
                "dia": "lunes",
                "feriado": "Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes (17/6)",
                "tipoFeriado": "trasladable",
                "seCursa": false,
                "mes": "junio",
                "id": "clase-junio-15"
            },
            {
                "fecha": "2026-06-17T03:00:00.000Z",
                "dia": "miércoles",
                "feriado": "Año Nuevo Islámico",
                "tipoFeriado": "no_laborable",
                "seCursa": true,
                "mes": "junio",
                "id": "clase-junio-17"
            },
            {
                "fecha": "2026-06-22T03:00:00.000Z",
                "dia": "lunes",
                "mes": "junio",
                "id": "clase-junio-22"
            },
            {
                "fecha": "2026-06-24T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "junio",
                "id": "clase-junio-24"
            },
            {
                "fecha": "2026-06-29T03:00:00.000Z",
                "dia": "lunes",
                "mes": "junio",
                "id": "clase-junio-29"
            },
            {
                "fecha": "2026-07-01T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "julio",
                "id": "clase-julio-1"
            },
            {
                "fecha": "2026-07-06T03:00:00.000Z",
                "dia": "lunes",
                "mes": "julio",
                "id": "clase-julio-6"
            },
            {
                "fecha": "2026-07-08T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "julio",
                "id": "clase-julio-8"
            },
            {
                "fecha": "2026-07-13T03:00:00.000Z",
                "dia": "lunes",
                "mes": "julio",
                "id": "clase-julio-13"
            },
            {
                "fecha": "2026-07-15T03:00:00.000Z",
                "dia": "miércoles",
                "mes": "julio",
                "id": "clase-julio-15"
            }
        ]
    },
    {
        id: 2,
        curso: "Gestión de Bases de Datos",
        dias: "viernes",
        horario: "19:00 a 22:30 hs.",
        totalFaltas: 3,
        imagen: "img/gbd.png",
        github: "https://github.com/Francisco-Acuna/2026_1C_GESTION_BD_NOCHE",
        aulaVirtual: "https://aulasvirtuales.bue.edu.ar/enrol/index.php?id=27619",
        presentaciones: [
            {
                archivo: "Gestión de Base de Datos.pdf",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_GESTION_BD_NOCHE/blob/main/Presentaciones/Gesti%C3%B3n%20de%20Base%20de%20Datos.pdf",
            },
        ],
        clases: [
            {
                archivo: "clase01_gestion_bd.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_GESTION_BD_NOCHE/blob/main/clase01_gestion_bd.sql",
                fecha: "2026-03-14T01:16:23.000Z",
            },
            {
                archivo: "clase02_gestion_bd.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_GESTION_BD_NOCHE/blob/main/clase02_gestion_bd.sql",
                fecha: "2026-03-21T01:20:38.000Z",
            },
            {
                archivo: "clase03_gestion_bd.sql",
                enlace: "https://github.com/Francisco-Acuna/2026_1C_GESTION_BD_NOCHE/blob/main/clase03_gestion_bd.sql",
                fecha: "2026-03-28T01:14:41.000Z",
            },
            {
                archivo: "clase04_gestion_bd.sql",
                url: "https://github.com/Francisco-Acuna/2026_1C_GESTION_BD_NOCHE/blob/main/clase04_gestion_bd.sql",
                fecha: "2026-04-11T01:08:59.000Z"
            }
        ],
        calendario: [
            {
                "fecha": "2026-03-13T03:00:00.000Z",
                "dia": "viernes",
                "mes": "marzo",
                "id": "clase-marzo-13"
            },
            {
                "fecha": "2026-03-20T03:00:00.000Z",
                "dia": "viernes",
                "feriado": "Fiesta de la Ruptura del Ayuno del Sagrado Mes de Ramadán (religión islámica)",
                "tipoFeriado": "no_laborable",
                "seCursa": true,
                "mes": "marzo",
                "id": "clase-marzo-20"
            },
            {
                "fecha": "2026-03-27T03:00:00.000Z",
                "dia": "viernes",
                "mes": "marzo",
                "id": "clase-marzo-27"
            },
            {
                "fecha": "2026-04-03T03:00:00.000Z",
                "dia": "viernes",
                "feriado": "Viernes Santo Festividad Cristiana",
                "tipoFeriado": "inamovible",
                "seCursa": false,
                "mes": "abril",
                "id": "clase-abril-3"
            },
            {
                "fecha": "2026-04-10T03:00:00.000Z",
                "dia": "viernes",
                "mes": "abril",
                "id": "clase-abril-10"
            },
            {
                "fecha": "2026-04-17T03:00:00.000Z",
                "dia": "viernes",
                "mes": "abril",
                "id": "clase-abril-17"
            },
            {
                "fecha": "2026-04-24T03:00:00.000Z",
                "dia": "viernes",
                "feriado": "Día de acción por la tolerancia y el respeto entre los pueblos (conmemoración armenia)",
                "tipoFeriado": "no_laborable",
                "seCursa": true,
                "mes": "abril",
                "id": "clase-abril-24"
            },
            {
                "fecha": "2026-05-01T03:00:00.000Z",
                "dia": "viernes",
                "feriado": "Día del Trabajador",
                "tipoFeriado": "inamovible",
                "seCursa": false,
                "mes": "mayo",
                "id": "clase-mayo-1"
            },
            {
                "fecha": "2026-05-08T03:00:00.000Z",
                "dia": "viernes",
                "mes": "mayo",
                "id": "clase-mayo-8"
            },
            {
                "fecha": "2026-05-15T03:00:00.000Z",
                "dia": "viernes",
                "mes": "mayo",
                "id": "clase-mayo-15"
            },
            {
                "fecha": "2026-05-22T03:00:00.000Z",
                "dia": "viernes",
                "mes": "mayo",
                "id": "clase-mayo-22"
            },
            {
                "fecha": "2026-05-29T03:00:00.000Z",
                "dia": "viernes",
                "mes": "mayo",
                "id": "clase-mayo-29"
            },
            {
                "fecha": "2026-06-05T03:00:00.000Z",
                "dia": "viernes",
                "mes": "junio",
                "id": "clase-junio-5"
            },
            {
                "fecha": "2026-06-12T03:00:00.000Z",
                "dia": "viernes",
                "mes": "junio",
                "id": "clase-junio-12"
            },
            {
                "fecha": "2026-06-19T03:00:00.000Z",
                "dia": "viernes",
                "mes": "junio",
                "id": "clase-junio-19"
            },
            {
                "fecha": "2026-06-26T03:00:00.000Z",
                "dia": "viernes",
                "mes": "junio",
                "id": "clase-junio-26"
            },
            {
                "fecha": "2026-07-03T03:00:00.000Z",
                "dia": "viernes",
                "mes": "julio",
                "id": "clase-julio-3"
            },
            {
                "fecha": "2026-07-10T03:00:00.000Z",
                "dia": "viernes",
                "feriado": "Día no laborable con fines turísticos",
                "tipoFeriado": "turistico",
                "seCursa": false,
                "mes": "julio",
                "id": "clase-julio-10"
            },
            {
                "fecha": "2026-07-17T03:00:00.000Z",
                "dia": "viernes",
                "mes": "julio",
                "id": "clase-julio-17"
            }
        ]
    },
];

// Función para formatear fechas de manera amigable (ej: 31 de marzo)
const formatearFecha = (iso) => {
    return new Date(iso).toLocaleDateString('es-AR', { dateStyle: 'full' });
};

const contenidoPanel = cursos.map((c, i) => `
    <div class="tab-pane fade${i === 0 ? ' show active' : ''}" id="curso-${c.id}">
        <div class="row g-4">
            <div class="col-md-5">
                <img src="${c.imagen}" class="img-fluid rounded-4 mb-3 shadow-sm mx-auto" alt="${c.curso}">
            </div>
            <div class="col-md-7">
                <h3 class="fw-bold text-primary bg-info-subtle ps-3 py-2 rounded-3">Curso: ${c.curso}</h3>
                <p class="text-primary p-2 border-start border-success border-3 rounded-start-2 bg-success-subtle">
                    <i class="bi bi-person-badge me-2"></i>Docente: Francisco Acuña<br>
                    <i class="bi bi-calendar3 me-2"></i>${c.dias}<br>
                    <i class="bi bi-clock me-2"></i>${c.horario}<br>
                    <i class="bi bi-github me-2"></i><a href="${c.github}" target="_blank" title="Visitar repositorio de clases del profe">Repositorio de clases</a><br>
                    <i class="bi bi-display me-2"></i>${c.aulaVirtual ? `<a href="${c.aulaVirtual}" target="_blank" title="Visitar aula virtual">Aula virtual</a>` : 'Aula virtual: N/D'}<br>
                    <i class="bi bi-card-checklist me-2"></i>Máximo inasistencias: ${c.totalFaltas}<br>
                    <i class="bi bi-marker-tip me-2"></i>Total de clases: ${c.calendario.filter(c => !Object.keys(c).includes('feriado') || (c.feriado && c.seCursa)).length}
                </p>
                <h5>Asistencias</h5>
                <!-- Botonera -->
                <div class="btn-group w-100" role="group" aria-label="Selección de meses">
                    ${Array.from(new Set(cursos[0].calendario.map(c => c.mes))).map(mes =>
    `<input type="radio" class="btn-check" name="mes" id="${mes}${c.id}" value="${mes}${c.id}" aria-mes="${mes}">
                        <label class="btn btn-outline-primary" for="${mes}${c.id}">${mes}</label>`
).join("")}
                </div>

                <!-- Panel Inferior -->
                <div class="mt-4 p-3 border rounded bg-success-subtle">
                    <h5>Seguimiento de asistencia:</h5>
                    <div id="panel-dias-${c.id}" class="list-group">
                        <!-- Se llena dinámicamente -->
                        <span class="text-muted">Seleccione un mes para ver los días.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-4 bg-success-subtle rounded-3 mt-2 px-2">
            <h3 class="alert alert-info text-center round-3">Material de clases</h3>
            <div class="col-md-6">
                <h5 class="mb-3 text-primary fw-bold">Teoría presentada en clase</h5>
                <div class="list-group mb-4">
                    ${c.presentaciones.map(p => `
                        <a href="${p.enlace}" target="_blank" class="list-group-item list-group-item-action d-flex align-items-center">
                            <i class="bi bi-file-earmark-pdf-fill text-danger me-3 fs-4"></i>
                            ${p.archivo}
                        </a>
                    `).join("")}
                </div>
            </div>
            <div class="col-md-6">
                <h5 class="mb-3 text-primary fw-bold">Registro de trabajo en clases</h5>
                <div class="list-group">
                    ${c.clases.map(cl => `
                        <a href="${cl.enlace}" target="_blank" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <span><i class="bi bi-database-fill-gear text-secondary me-3"></i>${cl.archivo}</span>
                            <small class="text-muted">${formatearFecha(cl.fecha)}</small>
                        </a>
                    `).join("")}
                </div>
            </div>
        </div>
    </div>
`).join("");

// Inyectar el contenido con clases de Nav Pills mejoradas
$("#panel").html(`
    <h2 class="text-center text-primary pb-3">Información de cursada</h2>
    <ul class="nav nav-pills mb-5 p-2 bg-light-subtle rounded-pill justify-content-center shadow-sm">
        ${cursos.map((c, i) => `
            <li class="nav-item">
                <a class="nav-link rounded-pill ${i === 0 ? 'active' : ''}" data-bs-toggle="pill" href="#curso-${c.id}" aria-id-curso="${c.id}" title="Ver detalle de curso">${c.curso}</a>
            </li>
        `).join("")}
    </ul>
    <div class="tab-content">${contenidoPanel}</div>
`);

// Lógica de Toggle con Persistencia
$('#themeToggler').on('click', function () {
    const $html = $('html');
    const newTheme = $html.attr('data-bs-theme') === 'dark' ? 'light' : 'dark';

    $html.attr('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Cambiar icono dinámicamente
    $('#themeIcon').toggleClass('bi-sun-fill bi-moon-stars-fill');
});


// Desencadenadores de tareas al cargar la página
$(document).ready(function () {
    $('input[name="mes"]').each(function () {
        $(this).on('change', (e) => {
            const idCursoActivo = Number($(".nav-link.active").attr("aria-id-curso"));
            const mesSeleccionado = this.getAttribute('aria-mes');
            const $panel = $(`#panel-dias-${idCursoActivo}`);
            const clasesMes = cursos.find(c => c.id === idCursoActivo).calendario.filter(c => c.mes === mesSeleccionado);
            $panel.empty(); // Limpiar panel de forma eficiente


            if (clasesMes) {
                let htmlContenedor = '';
                let htmlContenido = '';
                // Variables con cantidades para el encabezado de panel de asistencias
                const totalDiasMes = clasesMes.length;
                const totalFeriadosMes = clasesMes.filter(c => c.feriado && c.seCursa === false).length;
                const totalClasesMes = totalDiasMes - totalFeriadosMes;
                const idTotalAsistenciasMesCurso = `total-asistencias-${mesSeleccionado}${idCursoActivo}`;
                const idTotalInasistenciasMesCurso = `total-inasistencias-${mesSeleccionado}${idCursoActivo}`;
                const nroMeses = {
                    marzo: 2,
                    abril: 3,
                    mayo: 4,
                    junio: 5,
                    julio: 6
                };
                const esMesFuturo = nroMeses[mesSeleccionado] > new Date().getMonth();
                const clasesFuturasMesActual = clasesMes.filter(c => new Date(c.fecha) > new Date()).length;
                let totAsistencias = Object.keys(localStorage).filter(r => r.startsWith(`asist-${mesSeleccionado}${idCursoActivo}`)).length;
                let totInasistencias = esMesFuturo ? 0 : totalClasesMes - totAsistencias - clasesFuturasMesActual;

                const encabezado =
                    `<p>
                        <i class="bi bi-mortarboard-fill"></i> Total de clases en el mes: <span id="total-clases">${totalClasesMes}</span><br>
                        <i class="bi bi-calendar3"></i> Feriados del mes: <span id="total-feriados">${totalFeriadosMes}</span><br>
                        <i class="bi bi-person-check"></i> Asistencias: <span id="${idTotalAsistenciasMesCurso}">${totAsistencias}</span><br>
                        <i class="bi bi-ban"></i> Inasistencias: <span id="${idTotalInasistenciasMesCurso}">${totInasistencias}</span><br>
                    </p>`;

                clasesMes.forEach(item => {
                    const idInputCHkBox = `asist-${item.mes}${idCursoActivo}-${new Date(item.fecha).getDate()}`;
                    const asistie = localStorage.getItem(idInputCHkBox);

                    // Verifico si ya se marcó alguna asistencia para registrarla en el chekbox
                    if (asistie) {
                        totAsistencias++;
                    }

                    // Genero los checkbox de asistencias
                    const esClaseFutura = new Date(item.fecha) > new Date();
                    const botonAsistencia = `
                        <div class="form-check form-switch form-check-inline pt-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${esClaseFutura ? 'Se habilitará cuando llegue la fecha' : 'Click para registrar asistencia'}">
                            <input class="form-check-input" type="checkbox" id="${idInputCHkBox}"  ${asistie ? 'checked' : ''} ${esClaseFutura ? 'disabled' : ''} onchange="actualizarAsistencia('${idInputCHkBox}', '${idTotalAsistenciasMesCurso}', '${idTotalInasistenciasMesCurso}')">
                        </div>`;

                    // Variables de estilos para días feriados y de cursada
                    const diaFeriado = `<span class="badge text-bg-warning">feriado</span>`;
                    const diaCursada = `<span><strong>${item.dia}</strong> ${new Date(item.fecha).toLocaleDateString("es-AR", { day: "numeric" })}</span>`;
                    const textoDia = diaCursada + (item.feriado && item.seCursa === false ? diaFeriado : botonAsistencia);
                    const estiloCompartido = 'col list-group-item d-flex justify-content-between align-items-center';
                    const estiloNoSeCursa = 'text-decoration-line-through text-muted text-bg-secondary';
                    const atributosTooltip = `data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${item.feriado} (feriado ${item.tipoFeriado})"`;

                    htmlContenido += item.seCursa === false && item.feriado ?
                        `<div class="${estiloCompartido} ${estiloNoSeCursa}" ${atributosTooltip}>
                            ${textoDia}
                        </div>`
                        :
                        `<div class="${estiloCompartido}" ${item.seCursa === true ? atributosTooltip : ''}>
                            ${textoDia}
                        </div>`
                        ;
                });

                $(idTotalAsistenciasMesCurso).text(totAsistencias);
                htmlContenedor = `
                    <div class="row">
                        <div class="col">
                            ${encabezado}
                        </div>
                    </div>
                    <div class="row row-cols-2">
                        ${htmlContenido}
                    </div>`;

                $panel.html(htmlContenedor);

                // Inicializo tooltips
                const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
                const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
            } else {
                $panel.html(`<p class="p-2">No hay datos cargados para ${e.target.value}.</p>`);
            }
        });
    });
});

// Funciones auxiliares
function actualizarAsistencia(id, asist, inasist) {
    const itemGuardado = localStorage.getItem(id);
    const idAsist = `#${asist}`;
    const idInasist = `#${inasist}`;

    let totalAsistencias = Number($(idAsist).text());
    let totalInasistencias = Number($(idInasist).text());

    // Si la asistencia ya está almacenada la borro del almacenamiento local y actualizo las etiquetas de cantidades
    if (itemGuardado) {
        localStorage.removeItem(id);
        totalAsistencias = Math.max(0, totalAsistencias - 1);
        totalInasistencias++;

        $(idAsist).text(totalAsistencias);
        $(idInasist).text(totalInasistencias);
    } else {
        localStorage.setItem(id, true);
        totalAsistencias++;
        totalInasistencias = Math.max(0, totalInasistencias - 1);

        $(idAsist).text(totalAsistencias);
        $(idInasist).text(totalInasistencias);
    }
}