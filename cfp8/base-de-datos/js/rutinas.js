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

const botonesPanel = cursos.map((c,i) => 
    `<li class="nav-item"><a class="nav-link${i === 0 ? ' active' : ''}" data-bs-toggle="pill" href="#curso-${c.id}">${c.curso}</a></li>`).join("");
const contenidoPanel = cursos.map((c, i) => 
    `<div class="tab-pane container${i === 0 ? ' active' : ''}" id="curso-${c.id}">
        <ul>
            <li>Curso: ${c.curso}</li>
            <li>Docente: Francisco Acuña</li>
            <li>Día y hora: ${c.dias} de ${c.horario}</li>
        </ul>
        <hr>
        <strong>Material de presentación de curso</strong>
        <ul>
            ${c.presentaciones.map(p => `<li><a href="${p.enlace}" target="_blank" title="Ver el material">${p.archivo}</a></li>`).join("")}
        </ul>
    </div>`)
    .join("");

const cabeceraPanel = `<ul class="nav nav-pills">${botonesPanel}</ul>`;
const cuerpoPanel = `<div class="tab-content">${contenidoPanel}</div>`;
    $("#panel")
    .append(cabeceraPanel)
    .append(cuerpoPanel);