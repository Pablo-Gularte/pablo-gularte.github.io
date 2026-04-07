const cursos = [
    {
        id: 1,
        curso: "Administración de Base de Datos",
        dias: "lunes y miércoles",
        horario: "19:00 a 22:30 hs.",
        imagen: "img/abd.png",
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
        ],
    },
    {
        id: 2,
        curso: "Gestión de Base de Datos",
        dias: "viernes",
        horario: "19:00 a 22:30 hs.",
        imagen: "img/gbd.png",
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
        ],
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
                <h3 class="fw-bold">${c.curso}</h3>
                <p class="text-secondary p-2 border-start border-success border-3 rounded-start-2 bg-info-subtle">
                    <i class="bi bi-person-badge me-2"></i>Docente: Francisco Acuña<br>
                    <i class="bi bi-calendar3 me-2"></i>${c.dias}<br>
                    <i class="bi bi-clock me-2"></i>${c.horario}
                </p>
                <h5>Asistencias</h5>
            </div>
        </div>
        <div class="row g-4 bg-success-subtle rounded-3 mt-2">
            <div class="col-md-6">
                <h5 class="mb-3 text-primary fw-bold">Presentaciones</h5>
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
                <h5 class="mb-3 text-primary fw-bold">Clases (Scripts SQL)</h5>
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
    <ul class="nav nav-pills mb-5 p-2 bg-light-subtle rounded-pill justify-content-center shadow-sm">
        ${cursos.map((c, i) => `
            <li class="nav-item">
                <a class="nav-link rounded-pill ${i === 0 ? 'active' : ''}" data-bs-toggle="pill" href="#curso-${c.id}">${c.curso}</a>
            </li>
        `).join("")}
    </ul>
    <div class="tab-content">${contenidoPanel}</div>
`);

// Lógica de Toggle con Persistencia
$('#themeToggler').on('click', function() {
    const html = $('html');
    const newTheme = html.attr('data-bs-theme') === 'dark' ? 'light' : 'dark';
    
    html.attr('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Cambiar icono dinámicamente
    $('#themeIcon').toggleClass('bi-sun-fill bi-moon-stars-fill');
});
