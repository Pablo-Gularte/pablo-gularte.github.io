const formatearCadena = (cadena) => {
    if (!cadena) return "";

    // Lista de palabras que se mantendrán en minúscula (a menos que sean la primera)
    const excepciones = ["art", "ante", "bajo", "con", "contra", "de", "del", "desde", "durante", "en", "entre", "hacia", "hasta", "mediante", "para", "por", "según", "sin", "sobre", "tras", "el", "la", "los", "las", "un", "una", "unos", "unas", "y", "e", "o", "u"];

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

const grados = [
    { id: "sextoA", leyenda: "Sexto A" },
    { id: "sextoB", leyenda: "Sexto B" },
    { id: "sextoC", leyenda: "Sexto C" },
    { id: "sextoD", leyenda: "Sexto D" },
];

const listadoCrudoDelServidor = {
    sextoA: [
        {
            "idAlumno": "373712",
            "documento": "54222182",
            "nombre": "THOMAS LEONEL",
            "apellido": "ACOSTA PARRA",
            "idSeccion": "152387",
            "idPersona": "896091",
            "idPeriodo": 13,
            "idCalificacion": 856739,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "457973",
            "documento": "54460819",
            "nombre": "GUADALUPE",
            "apellido": "AQUINO",
            "idSeccion": "152387",
            "idPersona": "898452",
            "idPeriodo": 13,
            "idCalificacion": 856743,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "608683",
            "documento": "54742712",
            "nombre": "IZAN AGUSTIN",
            "apellido": "BULACIO GALLARDO",
            "idSeccion": "152387",
            "idPersona": "1183225",
            "idPeriodo": 13,
            "idCalificacion": 1792593,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "705021",
            "documento": "53661862",
            "nombre": "JAZMIN",
            "apellido": "CALON MIGUEL",
            "idSeccion": "152387",
            "idPersona": "1287693",
            "idPeriodo": 13,
            "idCalificacion": 2058161,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "573089",
            "documento": "96122441",
            "nombre": "LUCIA ANTONELLA",
            "apellido": "CHACON ACOSTA",
            "idSeccion": "152387",
            "idPersona": "1140596",
            "idPeriodo": 13,
            "idCalificacion": 1375596,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "704271",
            "documento": "54789303",
            "nombre": "Valeria ",
            "apellido": "Chen",
            "idSeccion": "152387",
            "idPersona": "1286929",
            "idPeriodo": 13,
            "idCalificacion": 2062477,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "431989",
            "documento": "54181187",
            "nombre": "AITANA",
            "apellido": "CHEN MEDINA",
            "idSeccion": "152387",
            "idPersona": "907021",
            "idPeriodo": 13,
            "idCalificacion": 856749,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "466211",
            "documento": "54458847",
            "nombre": "JOAQUIN LEON ",
            "apellido": "ECHEVESTE ARMAS",
            "idSeccion": "152387",
            "idPersona": "911646",
            "idPeriodo": 13,
            "idCalificacion": 856753,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "475494",
            "documento": "54381456",
            "nombre": "MATEO",
            "apellido": "GALARZA LOPEZ",
            "idSeccion": "152387",
            "idPersona": "915060",
            "idPeriodo": 13,
            "idCalificacion": 856756,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "394846",
            "documento": "54299904",
            "nombre": "ELIAS GAEL",
            "apellido": "GUAYUAN PALACIOS",
            "idSeccion": "152387",
            "idPersona": "918629",
            "idPeriodo": 13,
            "idCalificacion": 913712,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "443782",
            "documento": "54379423",
            "nombre": "LOLA",
            "apellido": "GUINDZBERG",
            "idSeccion": "152387",
            "idPersona": "974131",
            "idPeriodo": 13,
            "idCalificacion": 856751,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "501733",
            "documento": "54225943",
            "nombre": "LUCIANO BENJAMIN",
            "apellido": "LIZARRAGA",
            "idSeccion": "152387",
            "idPersona": "1020197",
            "idPeriodo": 13,
            "idCalificacion": 856742,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "405192",
            "documento": "54452220",
            "nombre": "MALENA ANGELINA",
            "apellido": "NIEVA",
            "idSeccion": "152387",
            "idPersona": "929581",
            "idPeriodo": 13,
            "idCalificacion": 856760,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "734174",
            "documento": "54087385",
            "nombre": "Ciro Mateo",
            "apellido": "Olivera Barrionuevo ",
            "idSeccion": "152387",
            "idPersona": "1318102",
            "idPeriodo": 13,
            "idCalificacion": 3361356,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "448839",
            "documento": "54456466",
            "nombre": "CELENE BELÉN ",
            "apellido": "ORTEGA",
            "idSeccion": "152387",
            "idPersona": "930736",
            "idPeriodo": 13,
            "idCalificacion": 856747,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "407567",
            "documento": "54697886",
            "nombre": "VICENTE",
            "apellido": "PASCHETTA",
            "idSeccion": "152387",
            "idPersona": "932104",
            "idPeriodo": 13,
            "idCalificacion": 1819250,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "534454",
            "documento": "470/14",
            "nombre": "SANTIAGO  JOSUE ",
            "apellido": "PEÑA MENDEZ ",
            "idSeccion": "152387",
            "idPersona": "1098432",
            "idPeriodo": 13,
            "idCalificacion": 1840772,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "460779",
            "documento": "54792310",
            "nombre": "MORENA VALENTINA",
            "apellido": "REYES",
            "idSeccion": "152387",
            "idPersona": "936185",
            "idPeriodo": 13,
            "idCalificacion": 856745,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "574902",
            "documento": "53536289",
            "nombre": "LUISANA MAILEN",
            "apellido": "RODRÍGUEZ ",
            "idSeccion": "152387",
            "idPersona": "1144376",
            "idPeriodo": 13,
            "idCalificacion": 1356982,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "474076",
            "documento": "54696073",
            "nombre": "JUANA LUDMILA",
            "apellido": "TARZIA CABAÑAS",
            "idSeccion": "152387",
            "idPersona": "943153",
            "idPeriodo": 13,
            "idCalificacion": 856758,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "453479",
            "documento": "54380024",
            "nombre": "RAMIRO",
            "apellido": "TULEJKO JOSIP",
            "idSeccion": "152387",
            "idPersona": "985331",
            "idPeriodo": 13,
            "idCalificacion": 856746,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "458793",
            "documento": "54098290",
            "nombre": "JUAN SEBASTIAN",
            "apellido": "VERNAY LEMUS",
            "idSeccion": "152387",
            "idPersona": "961125",
            "idPeriodo": 13,
            "idCalificacion": 770316,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152387,
                "nombreSeccion": "6° Grado Mañana Extendida A",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "A",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        }
    ],
    sextoB: [
        {
            "idAlumno": "377793",
            "documento": "54629633",
            "nombre": "ENZO",
            "apellido": "BARBIERO",
            "idSeccion": "152388",
            "idPersona": "900476",
            "idPeriodo": 13,
            "idCalificacion": 1449691,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "570904",
            "documento": "54320704",
            "nombre": "JUAN EMMANUEL",
            "apellido": "BARRIONUEVO",
            "idSeccion": "152388",
            "idPersona": "1137289",
            "idPeriodo": 13,
            "idCalificacion": 1365650,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "457886",
            "documento": "54183158",
            "nombre": "GIAN",
            "apellido": "BARRIOS HRUZD",
            "idSeccion": "152388",
            "idPersona": "900876",
            "idPeriodo": 13,
            "idCalificacion": 843733,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "379184",
            "documento": "54298228",
            "nombre": "RAFAELA",
            "apellido": "BERTILOTTI",
            "idSeccion": "152388",
            "idPersona": "901982",
            "idPeriodo": 13,
            "idCalificacion": 720776,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "467877",
            "documento": "54457230",
            "nombre": "MATÍAS",
            "apellido": "CAVALLINI",
            "idSeccion": "152388",
            "idPersona": "906261",
            "idPeriodo": 13,
            "idCalificacion": 720760,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "426780",
            "documento": "54104312",
            "nombre": "FRANCESCO GABRIEL",
            "apellido": "CHAIO",
            "idSeccion": "152388",
            "idPersona": "962409",
            "idPeriodo": 13,
            "idCalificacion": 3414505,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "386712",
            "documento": "54624776",
            "nombre": "MARCOS NEHUEN",
            "apellido": "DE LIMA",
            "idSeccion": "152388",
            "idPersona": "909971",
            "idPeriodo": 13,
            "idCalificacion": 720756,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "468789",
            "documento": "95776602",
            "nombre": "PAULA ISABELLA",
            "apellido": "FERNANDEZ VILLEGAS",
            "idSeccion": "152388",
            "idPersona": "948642",
            "idPeriodo": 13,
            "idCalificacion": 698792,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "452978",
            "documento": "54630386",
            "nombre": "NAHUEL",
            "apellido": "FIGOLA",
            "idSeccion": "152388",
            "idPersona": "913780",
            "idPeriodo": 13,
            "idCalificacion": 720773,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "451687",
            "documento": "54796855",
            "nombre": "LUCAS GILBERTO",
            "apellido": "GALICIA VELASQUEZ",
            "idSeccion": "152388",
            "idPersona": "915175",
            "idPeriodo": 13,
            "idCalificacion": 720754,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "394494",
            "documento": "54627432",
            "nombre": "LUPE",
            "apellido": "GONZALEZ VISCOVICH",
            "idSeccion": "152388",
            "idPersona": "918253",
            "idPeriodo": 13,
            "idCalificacion": 720781,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "429422",
            "documento": "54788886",
            "nombre": "MÁXIMO MÍLAN",
            "apellido": "MARHABA DOMINGO",
            "idSeccion": "152388",
            "idPersona": "925194",
            "idPeriodo": 13,
            "idCalificacion": 720782,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "17329",
            "documento": "54095928",
            "nombre": "HELENA",
            "apellido": "MATTAR DUBOIS",
            "idSeccion": "152388",
            "idPersona": "161368",
            "idPeriodo": 13,
            "idCalificacion": 852545,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "435578",
            "documento": "54297091",
            "nombre": "KEIRA GUADALUPE",
            "apellido": "MEDINA",
            "idSeccion": "152388",
            "idPersona": "926364",
            "idPeriodo": 13,
            "idCalificacion": 720778,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "403111",
            "documento": "54705384",
            "nombre": "NICOLÁS BRUNO",
            "apellido": "MIGUEL",
            "idSeccion": "152388",
            "idPersona": "927371",
            "idPeriodo": 13,
            "idCalificacion": 720759,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "407080",
            "documento": "54895189",
            "nombre": "LEON VALENTINO",
            "apellido": "PALAVECINO FERNÁNDEZ VILC",
            "idSeccion": "152388",
            "idPersona": "931598",
            "idPeriodo": 13,
            "idCalificacion": 1449881,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "432927",
            "documento": "54300957",
            "nombre": "BLAS",
            "apellido": "PIGNUOLI",
            "idSeccion": "152388",
            "idPersona": "933528",
            "idPeriodo": 13,
            "idCalificacion": 1838486,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "453409",
            "documento": "54905065",
            "nombre": "PEDRO URIEL",
            "apellido": "RINSKY",
            "idSeccion": "152388",
            "idPersona": "936425",
            "idPeriodo": 13,
            "idCalificacion": 720771,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "439011",
            "documento": "54628392",
            "nombre": "VALENTIN",
            "apellido": "ROBERTO MANSILLA",
            "idSeccion": "152388",
            "idPersona": "936886",
            "idPeriodo": 13,
            "idCalificacion": 720761,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "413864",
            "documento": "54795185",
            "nombre": "JULIAN NESTA",
            "apellido": "ROZO",
            "idSeccion": "152388",
            "idPersona": "938781",
            "idPeriodo": 13,
            "idCalificacion": 720772,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "454046",
            "documento": "54136407",
            "nombre": "SOFÍA",
            "apellido": "RUIZ DIAZ RANONI",
            "idSeccion": "152388",
            "idPersona": "938987",
            "idPeriodo": 13,
            "idCalificacion": 720767,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "414593",
            "documento": "54701712",
            "nombre": "OWEN",
            "apellido": "SALINAS ESERETZ",
            "idSeccion": "152388",
            "idPersona": "939562",
            "idPeriodo": 13,
            "idCalificacion": 1459090,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "414626",
            "documento": "54301374",
            "nombre": "PEDRO",
            "apellido": "SALLAGO DIAZ",
            "idSeccion": "152388",
            "idPersona": "939600",
            "idPeriodo": 13,
            "idCalificacion": 720777,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "450976",
            "documento": "54697518",
            "nombre": "JUAN MANUEL",
            "apellido": "SASSA",
            "idSeccion": "152388",
            "idPersona": "940650",
            "idPeriodo": 13,
            "idCalificacion": 720757,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "481787",
            "documento": "54299612",
            "nombre": "JULIAN GAEL",
            "apellido": "SKUTNISKY",
            "idSeccion": "152388",
            "idPersona": "941762",
            "idPeriodo": 13,
            "idCalificacion": 720766,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "420638",
            "documento": "54792407",
            "nombre": "BRISA ALDANA",
            "apellido": "VERA",
            "idSeccion": "152388",
            "idPersona": "945972",
            "idPeriodo": 13,
            "idCalificacion": 720758,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "420906",
            "documento": "54629637",
            "nombre": "LUCA",
            "apellido": "VICEIRO CASOLA",
            "idSeccion": "152388",
            "idPersona": "946264",
            "idPeriodo": 13,
            "idCalificacion": 720774,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "422372",
            "documento": "54451843",
            "nombre": "LOLA",
            "apellido": "ZARAGOZA SEOANE",
            "idSeccion": "152388",
            "idPersona": "947831",
            "idPeriodo": 13,
            "idCalificacion": 720779,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152388,
                "nombreSeccion": "6° Grado Mañana Extendida B",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "B",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        }
    ],
    sextoC: [
        {
            "idAlumno": "373589",
            "documento": "54704606",
            "nombre": "JULIETA",
            "apellido": "ACOSTA",
            "idSeccion": "152389",
            "idPersona": "895955",
            "idPeriodo": 13,
            "idCalificacion": 1449682,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "735789",
            "documento": "54243460",
            "nombre": "Caterine Nataly",
            "apellido": "Cardozo Guanca",
            "idSeccion": "152389",
            "idPersona": "1320047",
            "idPeriodo": 13,
            "idCalificacion": 3370986,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "382280",
            "documento": "54792626",
            "nombre": "VERA",
            "apellido": "CARIATI",
            "idSeccion": "152389",
            "idPersona": "905276",
            "idPeriodo": 13,
            "idCalificacion": 1449711,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "454195",
            "documento": "54797991",
            "nombre": "TANIA",
            "apellido": "ESTEVEZ",
            "idSeccion": "152389",
            "idPersona": "912399",
            "idPeriodo": 13,
            "idCalificacion": 1449715,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "391171",
            "documento": "54628718",
            "nombre": "TAMARA ELIZABETH",
            "apellido": "FRETES NUÑEZ",
            "idSeccion": "152389",
            "idPersona": "914725",
            "idPeriodo": 13,
            "idCalificacion": 1449718,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "769136",
            "documento": "96476381",
            "nombre": "Yesseniya",
            "apellido": "Kamalova",
            "idSeccion": "152389",
            "idPersona": "1356286",
            "idPeriodo": 13,
            "idCalificacion": 3414506,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "477312",
            "documento": "54383902",
            "nombre": "TEO",
            "apellido": "LOMBARDIA",
            "idSeccion": "152389",
            "idPersona": "922842",
            "idPeriodo": 13,
            "idCalificacion": 1449723,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "461747",
            "documento": "54184535",
            "nombre": "SIMON",
            "apellido": "LYARDET",
            "idSeccion": "152389",
            "idPersona": "923958",
            "idPeriodo": 13,
            "idCalificacion": 1449735,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "464724",
            "documento": "54631638",
            "nombre": "DOLORES",
            "apellido": "MINNICELLI GAUNA",
            "idSeccion": "152389",
            "idPersona": "964507",
            "idPeriodo": 13,
            "idCalificacion": 1449864,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "474891",
            "documento": "54296187",
            "nombre": "LUCÍA",
            "apellido": "NEJAMKIS",
            "idSeccion": "152389",
            "idPersona": "929471",
            "idPeriodo": 13,
            "idCalificacion": 1449872,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "423691",
            "documento": "51709481",
            "nombre": "MIRANDA",
            "apellido": "REARDON",
            "idSeccion": "152389",
            "idPersona": "949324",
            "idPeriodo": 13,
            "idCalificacion": 1449892,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "411251",
            "documento": "54380423",
            "nombre": "CATALINA ",
            "apellido": "REINECKE",
            "idSeccion": "152389",
            "idPersona": "936019",
            "idPeriodo": 13,
            "idCalificacion": 1449896,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "436192",
            "documento": "54300855",
            "nombre": "LUCÍA EVA",
            "apellido": "ROLLANO CABREJAS",
            "idSeccion": "152389",
            "idPersona": "938089",
            "idPeriodo": 13,
            "idCalificacion": 1449750,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "448464",
            "documento": "54458117",
            "nombre": "BIANCA AYLIN",
            "apellido": "RUIZ DIAZ",
            "idSeccion": "152389",
            "idPersona": "938961",
            "idPeriodo": 13,
            "idCalificacion": 1449777,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "460730",
            "documento": "54903369",
            "nombre": "MORA MARIA",
            "apellido": "SALINA DÍAZ",
            "idSeccion": "152389",
            "idPersona": "971929",
            "idPeriodo": 13,
            "idCalificacion": 1449781,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "415863",
            "documento": "54186014",
            "nombre": "LUA",
            "apellido": "SCHWEIZER ",
            "idSeccion": "152389",
            "idPersona": "940912",
            "idPeriodo": 13,
            "idCalificacion": 1449806,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "439914",
            "documento": "54383414",
            "nombre": "ALMENDRA",
            "apellido": "VERA",
            "idSeccion": "152389",
            "idPersona": "945971",
            "idPeriodo": 13,
            "idCalificacion": 1449809,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152389,
                "nombreSeccion": "6° Grado Tarde Extendida C",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "C",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        }
    ],
    sextoD: [
        {
            "idAlumno": "607309",
            "documento": "167315454",
            "nombre": "RODRIGO ALONSO",
            "apellido": "ARCEO MARTINEZ",
            "idSeccion": "152390",
            "idPersona": "1181615",
            "idPeriodo": 13,
            "idCalificacion": 1786071,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "467004",
            "documento": "54627021",
            "nombre": "LOLA",
            "apellido": "BERIACHETTO",
            "idSeccion": "152390",
            "idPersona": "901849",
            "idPeriodo": 13,
            "idCalificacion": 795355,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "495022",
            "documento": "81270003",
            "nombre": "BIANCA DANIELA",
            "apellido": "DE LA CRUZ MONTAÑEZ ",
            "idSeccion": "152390",
            "idPersona": "49",
            "idPeriodo": 13,
            "idCalificacion": 795352,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "458987",
            "documento": "54702741",
            "nombre": "KIARA",
            "apellido": "DE MARCO EL AKRA",
            "idSeccion": "152390",
            "idPersona": "910019",
            "idPeriodo": 13,
            "idCalificacion": 795350,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "510899",
            "documento": "54303644",
            "nombre": "EMMA CONSTANZA",
            "apellido": "DIAZ BARONE",
            "idSeccion": "152390",
            "idPersona": "1030523",
            "idPeriodo": 13,
            "idCalificacion": 795343,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "570100",
            "documento": "54424265",
            "nombre": "ISABELLA NAHIARA",
            "apellido": "FALCONIER",
            "idSeccion": "152390",
            "idPersona": "1136266",
            "idPeriodo": 13,
            "idCalificacion": 1375622,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "478945",
            "documento": "54893303",
            "nombre": "AURORA",
            "apellido": "FOURMENT VILLEGAS",
            "idSeccion": "152390",
            "idPersona": "914520",
            "idPeriodo": 13,
            "idCalificacion": 795341,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "607346",
            "documento": "54190808",
            "nombre": "AMBAR ESMERALDA",
            "apellido": "FRIAS MORALES",
            "idSeccion": "152390",
            "idPersona": "1181652",
            "idPeriodo": 13,
            "idCalificacion": 1786069,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "430944",
            "documento": "54382888",
            "nombre": "SURI ",
            "apellido": "FUMERO ABATE",
            "idSeccion": "152390",
            "idPersona": "914898",
            "idPeriodo": 13,
            "idCalificacion": 709203,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "392263",
            "documento": "54185525",
            "nombre": "MAITE HILLARY",
            "apellido": "GARCÍA MONTAÑEZ",
            "idSeccion": "152390",
            "idPersona": "915869",
            "idPeriodo": 13,
            "idCalificacion": 795345,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "530603",
            "documento": "54183520",
            "nombre": "VICENTE",
            "apellido": "REPOSSI",
            "idSeccion": "152390",
            "idPersona": "1089862",
            "idPeriodo": 13,
            "idCalificacion": 748008,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "452537",
            "documento": "54630344",
            "nombre": "MAXIMO ALAN",
            "apellido": "RIVAS",
            "idSeccion": "152390",
            "idPersona": "936642",
            "idPeriodo": 13,
            "idCalificacion": 689926,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "412063",
            "documento": "54624942",
            "nombre": "LEONEL ISMAEL",
            "apellido": "ROBALDO PULIDO",
            "idSeccion": "152390",
            "idPersona": "936878",
            "idPeriodo": 13,
            "idCalificacion": 739699,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "356925",
            "documento": "54185073",
            "nombre": "TOMAS EZEQUIEL ",
            "apellido": "SEQUEIRA",
            "idSeccion": "152390",
            "idPersona": "109847",
            "idPeriodo": 13,
            "idCalificacion": 782556,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "453578",
            "documento": "54299868",
            "nombre": "ROCIO JAZMIN",
            "apellido": "SOSA",
            "idSeccion": "152390",
            "idPersona": "942119",
            "idPeriodo": 13,
            "idCalificacion": 781393,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "465639",
            "documento": "54704068",
            "nombre": "GONZALO AGUSTIN",
            "apellido": "TORRES",
            "idSeccion": "152390",
            "idPersona": "943879",
            "idPeriodo": 13,
            "idCalificacion": 795353,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        },
        {
            "idAlumno": "419055",
            "documento": "96163642",
            "nombre": "MIKEILA",
            "apellido": "TRUJILLO PLATA",
            "idSeccion": "152390",
            "idPersona": "944299",
            "idPeriodo": 13,
            "idCalificacion": 795342,
            "idCicloLectivo": 27,
            "calificacionesAbiertas": {
                "aspectosGenerales": true,
                "trabajosEnElAula": true,
                "convivencia": true,
                "primario": false,
                "sintesisConceptual": true,
                "informeValorativo": true
            },
            "calificacionesGuardadas": {
                "aspectosGenerales": false,
                "trabajosEnElAula": false,
                "convivencia": false,
                "primario": {
                    "educacinfsica": false,
                    "matemtica": false,
                    "tecnologasDiseoyProgramacin": false,
                    "cienciasnaturales": false,
                    "educacinArtsticaArtesVisuales": false,
                    "educacinArtsticaMsica": false,
                    "lenguasAdicionales": false,
                    "cienciassociales": false,
                    "lengua": false
                },
                "sintesisConceptual": false,
                "informeValorativo": false
            },
            "espaciosCurricularesKeyValues": {
                "educacinfsica": "Educación física",
                "matemtica": "Matemática",
                "tecnologasDiseoyProgramacin": "Tecnologías, Diseño y Programación",
                "cienciasnaturales": "Ciencias naturales",
                "educacinArtsticaArtesVisuales": "Educación Artística: Artes Visuales",
                "educacinArtsticaMsica": "Educación Artística: Música",
                "lenguasAdicionales": "Lenguas Adicionales",
                "cienciassociales": "Ciencias sociales",
                "lengua": "Lengua"
            },
            "seccion": {
                "idSeccion": 152390,
                "nombreSeccion": "6° Grado Tarde Extendida D",
                "jornada": "Extendida",
                "capacidadRecomendada": 0,
                "capacidadMaxima": 28,
                "division": "D",
                "createdAt": "2026-02-23T14:09:27.450Z",
                "updatedAt": "2026-02-23T14:09:27.476Z",
                "updatedBy": "169129",
                "activo": true,
                "copiedTo": null,
                "anio": {
                    "idAnio": 6,
                    "numeroAnio": 6,
                    "descripcionAnio": "6° grado",
                    "createdAt": null,
                    "updatedAt": null,
                    "deletedAt": null,
                    "updatedBy": null,
                    "createdBy": null,
                    "deletedBy": null
                }
            },
            "cicloLectivo": {
                "idCicloLectivo": 27,
                "anio": 2026,
                "fechaInicio": "2026-02-23T03:00:00.000Z",
                "fechaFin": "2026-12-18T03:00:00.000Z",
                "createdAt": null,
                "updatedAt": null,
                "updatedBy": null,
                "createdBy": null
            },
            "estado": "3"
        }
    ]
};

const estudiantes = {
    sextoA: listadoCrudoDelServidor.sextoA.map(r => {
        return {
            idAlumno: r.idAlumno,
            apellido: formatearCadena(r.apellido),
            nombre: formatearCadena(r.nombre),
            documento: r.documento
        }
    }),
    sextoB: listadoCrudoDelServidor.sextoB.map(r => {
        return {
            idAlumno: r.idAlumno,
            apellido: formatearCadena(r.apellido),
            nombre: formatearCadena(r.nombre),
            documento: r.documento
        }
    }),
    sextoC: listadoCrudoDelServidor.sextoC.map(r => {
        return {
            idAlumno: r.idAlumno,
            apellido: formatearCadena(r.apellido),
            nombre: formatearCadena(r.nombre),
            documento: r.documento
        }
    }),
    sextoD: listadoCrudoDelServidor.sextoD.map(r => {
        return {
            idAlumno: r.idAlumno,
            apellido: formatearCadena(r.apellido),
            nombre: formatearCadena(r.nombre),
            documento: r.documento
        }
    })
};

function cargarTabla(grado) {
    // Obtengo la tabla del DOM
    var $tabla = $('#estudiantes');
    $tabla.html();
    $("h3#titulo-grado").text("Listado de estudiantes de " + grados.find(g => g.id === grado).leyenda);

    // Cargar datos en la tabla
    $tabla.bootstrapTable('destroy').bootstrapTable({
        data: estudiantes[grado],
        theadClasses: "text-center table-success",
        columns: [
            {
                field: 'rowNumber',
                title: '#',
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1; // Devuelve el índice + 1 (empezando en 1)
                }

            },
            {
                field: 'apellido',
                title: "Apellido",
            },
            {
                field: 'nombre',
                title: "Nombre",
            },
            {
                field: 'documento',
                title: "Documento",
                align: 'center'
            }
        ]
    });
}


$(document).ready(function () {
    // Genero el menú desplegable
    const menuDesplegableGrados = `
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
            data-bs-toggle="dropdown" aria-expanded="false">
            Seleccionar Grado
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            ${grados.map(g => `<li><a class="dropdown-item" href="#" onclick="cargarTabla('${g.id}')">${g.leyenda}</a></li>`).join("")}
        </ul>`;

    // Agrego el menpu desplegable al DOM
    $("div.dropdown").html(menuDesplegableGrados);
});