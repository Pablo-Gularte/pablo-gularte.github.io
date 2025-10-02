const cursos = [
    {
        id: "curso-igw",
        nombre: "Interface Gráfica Web",
        dia: "martes",
        turno: "noche",
        profesor: "Jorge Sánchez",
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
        ],
    },
];

document.addEventListener("DOMContentLoaded", function() {
    // Generar el contenedor de menú
    const menuPaneles = document.createElement("ul");
    menuPaneles.className = "nav nav-pills";

    // Generar las opciones de menú a partir de vector de cursos
    cursos.forEach(curso => {
        const menu = document.createElement("li");
        menu.className = "nav-item";
        menu.innerHTML = `<a class="nav-link" data-bs-toggle="pill" href="#${curso.id}">${curso.nombre}</a>`;
        menuPaneles.appendChild(menu);
    });

    // Generar contenedor de los paneles de contenido a partir del vector de cursos
    const contenidoPaneles = document.createElement("div");
    contenidoPaneles.className = "tab-content";

    // Generar paneles de contenido
    cursos.forEach(curso => {
        const panel = document.createElement("div");
        panel.className = "tab-pane fade";
        panel.id = curso.id;
        contenidoPaneles.appendChild(panel);
    });
    
    // Insertar el menú y los paneles en el documento
    document.getElementById("menu-paneles").appendChild(menuPaneles);
    document.getElementById("menu-paneles").appendChild(contenidoPaneles);
});