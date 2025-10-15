const cursosAV = [{
    idCurso: "igw",
    nombreCurso: "Interface Gráfica Web",
    calificaciones: "https://aulasvirtuales.bue.edu.ar/grade/report/user/index.php?id=23842",
    tps: []
},
{
    idCurso: "daw",
    nombreCurso: "Desarrollo de Aplicaciones Web",
    calificaciones: "https://aulasvirtuales.bue.edu.ar/grade/report/user/index.php?id=23843",
    tps: []
},
{
    idCurso: "gbd",
    nombreCurso: "Gestión de Base de Datos",
    calificaciones: "https://aulasvirtuales.bue.edu.ar/grade/report/user/index.php?id=23841",
    tps: []
}];

// Recorro los cursos para completar los datos de los trabajos prácticos
console.info(`Inicio recorrido de ${cursosAV.length} cursos en AulaVirtual`);
cursosAV.forEach(async curso => {
    console.info(`--> Curso: ${curso.nombreCurso}`);

    // Obtengo los enlaces a los detaslles de cada TP
    const domCalificaciones = await obtenerDOMDeURL(curso.calificaciones);
    const listadoTPs = domCalificaciones.querySelectorAll("a.gradeitemheader");

    // Recorro el listado de TPs para recuperar datos y guardarlos en "curso.tps"
    listadoTPs.forEach(async (tp, i) => {
        const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        const domTP = await obtenerDOMDeURL(tp.href);

        // Genero la fecha a partir del DOM recibido
        const rutaCSS = "div.activity-dates > div > div:nth-child(2)";
        const cadenaFecha = domTP.querySelector(rutaCSS).textContent;
        const cadenaDia = cadenaFecha.substring(cadenaFecha.search(",") + 2, cadenaFecha.search(" de"));
        let cadenaMes;
        const anio = "2025";
        meses.forEach((m, i) => {
            if (cadenaFecha.includes(m)) {
                cadenaMes = i + 1;
            }
        });

        // Guardo los datos de TPs
        curso.tps.push({
            id: `tp${i + 1}${curso.idCurso}`,
            nombre: tp.textContent,
            diaEntrega: `${anio}-${cadenaMes.toString().padStart(2, "0")}-${cadenaDia.toString().padStart(2, "0")}`,
            horaEntrega: "23:59",
            consigna: domTP.querySelector("div.fileuploadsubmission > a").href,
            urlEntrega: tp.href,
            estado: domTP.querySelector(".submissionstatussubmitted") ? "entregado" : "pendiente"
        });
    });
    console.info(`--> Recuperé ${listadoTPs.length} TPs para ${curso.nombreCurso}`);

});
console.info("Finalizo ejecución");
console.info(cursosAV);
trabajosPendientes();


// Funciones auxiliares
// Obtener DOM de una página web a partir de un enlace
async function obtenerDOMDeURL(url) {
    try {
        // 1. Obtener el contenido de la URL como texto (HTML)
        const response = await fetch(url);

        // Verificar si la respuesta es exitosa (código 200-299)
        if (!response.ok) {
            console.error(`Error al hacer fetch: ${response.status} ${response.statusText}`);
            return null;
        }

        const htmlText = await response.text();

        // 2. Crear y devolver el objeto DOM a partir del texto HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        return doc;

    } catch (error) {
        // Manejar errores de red, errores de CORS (si ocurre al inicio) o cualquier otro error
        console.error("Error al obtener o parsear el DOM:", error);

        // El error de CORS se manifestará como un TypeError de fetch, por ejemplo.
        console.warn("Recuerde: Si la URL es de un dominio diferente, puede que necesite CORS habilitado en el servidor de destino.");

        return null;
    }
}

// Comparar los vectores de fehas del aula virtual (vectorAV) y de la página de seguimiento (vectorPS)
// El vector "cursos" está definido en el js de la página de seguimiento.
// Se debe ejecutar esta rutina desde la consola de esa página luego de copiar el vector cursosAV
// generado desde la consola de la página del aula virtual
function compararFechas(vectorAV, vectorPS) {
    // Comparo las cantidades de TPs por cursos cargados en cada vector para detectar diferencias
    const nombreCursos = cursos.map(reg => reg.nombre);
    nombreCursos.forEach(nombre => {
        const tpsAV = vectorAV.filter(c => c.nombreCurso === nombre).map(reg => reg.tps);
        const tpsPS = vectorPS.filter(c => c.nombre === nombre).map(reg => reg.trabajos);
        const difTPs = tpsAV.length - tpsPS.length;

        if (difTPs !== 0) {
            if (difTPs > 0) {
                console.info(`==> El Aula Virtual tiene ${difTPs} ${difTPs === 1 ? "tp" : "tps"} más que la página de seguimiento para el curso ${nombre}`);
            } else {
                console.info(`==> El Aula Virtual tiene ${difTPs} ${difTPs === 1 ? "tp" : "tps"} menos que la página de seguimiento para el curso ${nombre}`);
            }
            console.log(`==> TPs en AV: ${totalTPsAV} - TPS en página de seguimiento: ${totalTPsPS}`)
            console.log("==[ DETALLES ]");
            console.log("--AV--");
            console.log(cursosAV.find(reg => reg.nombreCurso === nombre).tps);
            console.log("--Página de segimiento--");
            console.log(cursos.find(reg => reg.nombre === nombre).trabajos);
        } else {
            console.log(`==> Las cantidades de TPs coinciden para el curso ${nombre}`);
            // Recorro el vector de TPs del AV y comparo contra el de PS para detectar diferencias en las fechas
            let cnt = 0;
            tpsAV.forEach(t => {
                const diaEntregaAV = t.diaEntrega;
                const diaEntregaPS = tpsPS.find(reg => reg.id === t.id).diaEntrega;
                if (diaEntregaAV !== diaEntregaPS) {
                    console.log(`==> diaEntrega de AV: ${diaEntregaAV} - diaEntrega de PS: ${diaEntregaPS}`);
                    cnt++;
                }
            });
            console.log(`${cnt !== 0 ? "Diferencias de fechas detectadas: " + cnt : "No se detectaron diferencias de fechas"}`);
        }
    });

}

// Rutina para listar los TPs pendientes de entregar
function trabajosPendientes() {
    cursosAV.forEach(curso => {
        console.log(`[ ${curso.nombreCurso} ]`);
        const pendientes = [];
        curso.tps.forEach(tp => {
            if (tp.estado === "pendiente") {
                pendientes.push(tp);
            }
        });
        if (pendientes.length > 0) {
            console.log("-- PENDIENTES");
            pendientes.forEach(p => {
                const fechaEntrega = new Date(p.diaEntrega);
                const fechaActual = new Date();
                const fechaEntregaFormateada = p.diaEntrega.toLocaleString("es-AR", { dateStyle: "full" });
                const tpVencido = fechaEntrega < fechaActual;
                console.log(`----> ${p.nombre} (${fechaEntregaFormateada}) ${tpVencido ? "## VENCIDO ##" : ""}`)
            });
        } else {
            console.log("---> No hay ningún TP pendiente de enterga");
        }
    });
}