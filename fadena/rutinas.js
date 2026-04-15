// Recupero datos de materias desde el campus MOODLE de la carrera
// DATA_MOODLE: petición del estilo
// https://campus.fadena.undef.edu.ar/lib/ajax/service.php?sesskey=DMHkedaQc8&info=core_course_get_enrolled_courses_by_timeline_classification
const datosMoodle = await fetch(DATA_MOODLE);
const jsonMaterias = await datosMoodle.json();

// Genero colección personalizada para filtrar atributos de MOODLE y agregar personalizados
const colTmpMaterias = jsonMaterias[0].data.courses.map(c => ({
    idCampus: c.id,
    fullname: c.fullname,
    viewurl: c.viewurl
}));

// ====================================================================================
// Obtengo los datos de clases de la materia del panel de la izquierda del aula virtual
// ====================================================================================
// Busco el reg.viewurl de la materia correspondiente y recupero el cronograma de clases del aula viertual con el siguiente código
const panelIzquierdo = document.querySelector("#course-index");
// Selecciono los enlaces de las clases para obtener el texto y el enlace de cada una
const clasesAV = [];
panelIzquierdo.querySelectorAll("div > div > a.courseindex-link.text-truncate").forEach(r => clasesAV.push({
	titulo: r.textContent.replaceAll("\n", "").trim(),
	enlace: r.href
}));
// ====================================================================================

// filtro materias de primer año (.includes("1er")) y genero el objeto JSON correspondiente a la materia 
// que se guardará en archivo cursada.json
const anioFiltrado = "1er";
const objetoMateria = colTmpMaterias.map((reg) => {
	if (reg.fullname.startsWith(anioFiltrado)) {
		const atributoFullname = reg.fullname;
		const primeraParteFullname = atributoFullname.split(") ")[0];
		const segundaParteFullname = atributoFullname.split(") ")[1];
		const nroOrden = primeraParteFullname.substring(primeraParteFullname.length - 2);
		const leyenda = segundaParteFullname.replace(segundaParteFullname.substring(segundaParteFullname.length - 5), "");
		const nombreCarpetaMateria = generarNombreCarpetaMateria(reg.fullname);
		const cmdCrearCarpeta = `mkdir ${nombreCarpetaMateria}`;
		const clave = toPascalCase(leyenda);

		return {
			[clave]: {
				id: reg.idCampus,
				leyenda: leyenda,
				nroOrden: nroOrden,
				grupoWhatsApp: "",
				carpetaProtonMe: "",
				datosCampus: {
					fullname: reg.fullname,
					viewurl: reg.viewurl,
					clases: clasesAV
				},
				sistemaArchivos: {
					nombreCarpetaMateria: nombreCarpetaMateria,
					cmdCrearCarpeta: cmdCrearCarpeta
				},
				plantel: [
					{
						nombre: "",
						cargo: ""
					}
				],
				bibliografia: {
					carpetaGoogleDrive: ""
				},
				cronograma: []
			}
		};
	} else {
		return reg;
	}

});




// *********************
// Funciones auxiliares
// *********************
// convierte una cadena a PascalCase considerando tildes y números romanos
function toPascalCase(str) {
  // Regex para números romanos válidos del 1 al 3999 (I a MMMCMXCIX)
  const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;

  return str
    .match(/\p{L}+|\p{N}+/gu)
    ?.map(word => {
      // Validamos si es romano y NO es una cadena vacía (el regex coincide con cadena vacía)
      if (word.length > 0 && romanRegex.test(word)) {
        return word.toUpperCase();
      }
      
      // Formato PascalCase estándar para el resto
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('') || '';
}

// Genero cadena limpia de nombre de materia a partir del "fullname" de MOODLE
const generarNombreCarpetaMateria = (cadena) => {
	return cadena.split(" - ")[1]
			.replace("(LCiberDef-", "")
			.replace(") ", ".")
			.replace(" 2026", "")
			.replaceAll(" ", "_");
}