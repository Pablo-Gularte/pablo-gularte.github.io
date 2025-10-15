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
            estado: "pendiente"
        });
    });
    console.info(`--> Recuperé ${listadoTPs.length} TPs para ${curso.nombreCurso}`);

});
console.info("Finalizo ejecución");
console.info(cursosAV);


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

// Comparar los ve tores de fehas del aula virtual (cursosAV) y de la página de seguimiento (cursos)
// El vector "cursos" está definido en el js de la página de seguimiento.
// Se debe ejecutar esta rutina desde la consola de esa página luego de copiar el vector cursosAV
// generado desde la consola de la página del aula virtual
function compararFechas() {
    cursosAV.forEach(curso => {
        // Muestro los IDs de cada TP de cada curso
        curso.trabajos.forEach(t => {
            const diaEntregaMio = t.diaEntrega;
            try {
                const diaEntregaAV = cursosAV.flatMap(c => c.tps).find(i => i.id === t.id).diaEntrega;
                const fechaEntregaAV = new Date(diaEntregaAV).toDateString();
                const fechaEntregaMio = new Date(diaEntregaMio).toDateString();
                if (fechaEntregaAV !== fechaEntregaMio) {
                    console.warn(`==> Encontré difrencias entre ${fechaEntregaAV} y ${fechaEntregaMio} (${t.id})`);
                    console.info(`==> Reemplazar ${diaEntregaMio.toLocaleString("es-AR", { dateStyle: "full" })} por \ndiaEntrega: "${diaEntregaAV.toLocaleString("es-AR", { dateStyle: "full" })}"\n en curso ${t.id}`);
                }
            } catch (e) {
                console.warn(`** El curso de id ${t.id} (${t.nombre}) no está definido en el aula virtual`);
                console.error(e)
            }
        });
    });

    // comparo por cantidades de registros para detectar dónde hay más y mostar la diferenica
    const totalCursosAV = cursosAV.flatMap(c => c.tps).length;
    const totalCursosPag = cursosAV.flatMap(c => c.trabajos).length;
    console.log("============================");
    console.info(" total registros de aula virtual         : " + totalCursosAV);
    console.info(" total registros de página de seguimiento: " + totalCursosPag);
    console.log("============================");

    // Tomo como base del bucle de búsqueda el vector que tenga más registros
    if(totalCursosAV > totalCursosPag) {
        cursosAV.flatMap(c => c.tps).forEach(reg => {
            if(cursosAV.flatMap(c => c.trabajos).find(tp => tp.id === reg.id) === undefined) {
                console.warn(`** El TP ${reg.id} (${reg.nombre}) del aula virtual no está en la página`);

            }
        });
    } else {
        cursosAV.flatMap(c => c.trabajos).forEach(reg => {
            if(cursosAV.flatMap(c => c.tps).find(tp => tp.id === reg.id) === undefined) {
                console.warn(`** El TP ${reg.id} (${reg.nombre}) del aula virtual no está en la página`);
            } 
        });
    }
}