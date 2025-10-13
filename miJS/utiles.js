/*
-- Funciones personalizadas de JavaScript para propósitos generales
-- Autor: Pablo Gularte
-- Fecha inicial: 2025-01-09
-- Última modificación: 2025-01-09
*/

/* ******************************************************************************************************************** */
// Funciones de personalización de Bootstrap 5
/* ******************************************************************************************************************** */
// Función para crear un modal personalizado a partir de un objeto con los siguientes parámetros:
// {
//     idModal,         -> id del modal,
//     tituloModal,     -> título del modal,
//     cuerpoModal,     -> cuerpo del modal,
//     textoBotonAbrir, -> texto del botón que abre el modal,
//     textoBotonCerrar -> texto del botón que cierra el modal
// }
function crearModal({
  idModal,
  tituloModal,
  cuerpoModal,
  textoBotonAbrir,
  textoBotonCerrar,
}) {
  const objEstructuraModal = {
    type: "div",
    children: [
      {
        type: "button",
        class: "btn btn-primary",
        attributes: {
          type: "button",
          "data-bs-toggle": "modal",
          "data-bs-target": `#${idModal}`,
        },
        text: textoBotonAbrir,
      },
      {
        type: "div",
        id: idModal,
        class: "modal",
        attributes: {
          style: "display: none;",
          "aria-hidden": "true",
        },
        children: [
          {
            type: "div",
            class: "modal-dialog",
            children: [
              {
                type: "div",
                class: "modal-content",
                children: [
                  {
                    type: "div",
                    class: "modal-header",
                    children: [
                      {
                        type: "h4",
                        class: "modal-title",
                        text: tituloModal,
                      },
                      {
                        type: "button",
                        class: "btn-close",
                        attributes: {
                          type: "button",
                          "data-bs-dismiss": "modal",
                        },
                      },
                    ],
                  },
                  {
                    type: "div",
                    class: "modal-body",
                    text: cuerpoModal,
                  },
                  {
                    type: "div",
                    class: "modal-footer",
                    children: [
                      {
                        type: "button",
                        class: "btn btn-danger",
                        attributes: {
                          type: "button",
                          "data-bs-dismiss": "modal",
                        },
                        text: textoBotonCerrar,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  return crearElementoHtml(objEstructuraModal);
}

/* ******************************************************************************************************************** */
// Funciones personalizadas
/* ******************************************************************************************************************** */
// Función para crear una tabla personalizada a partir de un objeto con los siguientes parámetros:
// {
//  encabezadoTabla
//  cuerpoTabla
// }
function crearTabla({ encabezadoTabla, cuerpoTabla }) {
  const htmlTabla = document.createElement("table");
  htmlTabla.className =
    "ws-table-all w3-bordered w3-striped w3-border test w3-hoverable";
  htmlTabla.appendChild(crearEncabezadoTabla(encabezadoTabla));
  htmlTabla.appendChild(crearCuerpoTabla(cuerpoTabla));

  return htmlTabla;
}

// Función para crear el encabezado de una tabla a partir de un array con los encabezados
function crearEncabezadoTabla(encabezadoTabla) {
  const htmlEncabezado = document.createElement("thead");
  const htmlFila = document.createElement("tr");
  htmlFila.className = "w3-green";
  encabezadoTabla.forEach((encabezado) => {
    const htmlCelda = document.createElement("th");
    htmlCelda.textContent = encabezado;
    htmlFila.appendChild(htmlCelda);
  });
  htmlEncabezado.appendChild(htmlFila);
  return htmlEncabezado;
}

// Función para crear el cuerpo de una tabla a partir de un array de objetos con los datos
function crearCuerpoTabla(cuerpoTabla) {
  const htmlCuerpo = document.createElement("tbody");
  cuerpoTabla.forEach((fila) => {
    const htmlFila = document.createElement("tr");
    Object.values(fila).forEach((celda) => {
      const htmlCelda = document.createElement("td");
      htmlCelda.textContent = celda;
      htmlFila.appendChild(htmlCelda);
    });
    htmlCuerpo.appendChild(htmlFila);
  });
  return htmlCuerpo;
}

// La función crearElementoHTML() recibe un objeto con las propiedades del elemento a crear y devuelve el elemento creado
// en formato HTML
// La estructura del objeto parámetro es la siguiente:
// objeto = {
//     type: 'tipo de elemento',
//     id: 'id del elemento',
//     class: 'clase del elemento',
//     text: 'texto interno del elemento',
//     attributes: {'':'', ...},  -> par clave-valor con los attributes del elemento
//     children: [objeto, objeto, ...], -> array de objetos hijos
// }
function crearElementoHtml(objeto) {
  const elementoHTML = document.createElement(objeto.type);
  if (objeto.id) elementoHTML.id = objeto.id;
  if (objeto.class) elementoHTML.className = objeto.class;
  if (objeto.text) elementoHTML.textContent = objeto.text;

  if (objeto.attributes) {
    for (const [clave, valor] of Object.entries(objeto.attributes)) {
      elementoHTML.setAttribute(clave, valor);
    }
  }

  if (objeto.children) {
    objeto.children.forEach((subitem) => {
      elementoHTML.appendChild(crearElementoHtml(subitem));
    });
  }

  return elementoHTML;
}

// Función para generar un objeto JS a partir de un elemento HTML
function convertirHtmlEnJs(elemento) {
  if (typeof elemento === "string") {
    const divTemporal = document.createElement("div");
    divTemporal.innerHTML = elemento;
    elemento = divTemporal;
  }

  const objeto = {
    type: elemento.tagName.toLowerCase(),
  };

  // Agregar ID si existe
  if (elemento.id) objeto.id = elemento.id;

  // Agregar clases si existen
  if (elemento.className) objeto.class = elemento.className;

  // Agregar atributos adicionales
  if (elemento.attributes.length > 0) {
    objeto.attributes = {};
    for (let attr of elemento.attributes) {
      if (attr.name !== "id" && attr.name !== "class") {
        objeto.attributes[attr.name] = attr.value;
      }
    }
    // Si no se agregaron atributos se elimina la propiedad "attributes" del objeto a retornar
    if (Object.values(objeto.attributes).length == 0) delete objeto.attributes;
  }

  // Procesar hijos recursivamente.
  // Si no hay hijos se agrega la propiedad "text" con el texto interno del elemento
  const children = Array.from(elemento.children).map(convertirHtmlEnJs);
  if (children.length > 0) {
    objeto.children = children;
  } else {
    const text = elemento.textContent.trim();
    if (text) {
      objeto.text = text;
    }
  }

  return objeto;
}

/**
 * Función para agregar jQuery al documento si no está cargado.
 * Carga la versión 3.6.0 desde CDN.
 */
function agregarJquery() {
  if (typeof jQuery === "undefined") {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.7.1.js";
    script.integrity = "sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=";
    script.crossorigin = "anonymous";
    script.onload = () => console.log("jQuery cargado correctamente");
    document.head.appendChild(script);
  } else {
    console.log("jQuery ya está cargado");
  }
}

/**
 * Función para agregar Bootstrap al documento si no está cargado.
 * Carga la versión 5.3.6 de CSS y JS desde CDN.
 * Asegura que los estilos y scripts de Bootstrap estén disponibles.
 * Si ya están cargados, no hace nada.
 * 
 */
function agregarBootstrap() {
  if (typeof bootstrap === "undefined") {
    const linkCss = document.createElement("link");
    linkCss.rel = "stylesheet";
    linkCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css";
    linkCss.integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
    linkCss.crossOrigin = "anonymous";

    const scriptJs = document.createElement("script");
    scriptJs.src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js";
    scriptJs.integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO";
    scriptJs.crossOrigin = "anonymous";
    scriptJs.onload = () => console.log("Bootstrap cargado correctamente");
    
    document.head.appendChild(linkCss);
    document.head.appendChild(scriptJs);
  } else {
    console.log("Bootstrap ya está cargado");
  }
}

/**
 * Función para agregar W3.CSS al documento si no está cargado.
 * Carga la versión 5 de W3.CSS desde CDN.
 * Asegura que los estilos de W3.CSS estén disponibles.
 * Si ya está cargado, no hace nada.
 * 
 */
function agregarW3Css() {
  if (typeof w3 === "undefined") {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.w3schools.com/w3css/5/w3.css";
    link.onload = () => console.log("W3.CSS cargado correctamente");
    document.head.appendChild(link);
  } else {
    console.log("W3.CSS ya está cargado");
  }
}

/**
 * Función para agregar AppML al documento si no está cargado.
 * Carga la versión 2.0.3 de AppML desde CDN.
 * Asegura que AppML esté disponible para su uso.
 * Si ya está cargado, no hace nada.
 * 
 */
function agregarAppML() {
  if (typeof AppML === "undefined") {
    const script = document.createElement("script");
    script.src = "https://www.w3schools.com/appml/2.0.3/appml.js";
    script.onload = () => console.log("AppML cargado correctamente");
    document.head.appendChild(script);
  } else {
    console.log("AppML ya está cargado");
  }
}

/**
 * Obtiene y devuelve el objeto Document (DOM) de una URL dada.
 * * NOTA IMPORTANTE: Esta función está sujeta a la política de seguridad
 * de mismo origen (Same-Origin Policy). Solo funcionará si la URL de destino
 * se encuentra en el mismo origen (protocolo, dominio y puerto) que la
 * página actual, o si el servidor de la URL de destino ha habilitado
 * el Intercambio de Recursos de Origen Cruzado (CORS) y lo permite.
 * 
 * Enlace GEMINI: https://gemini.google.com/app/f5b2713b81a94598?hl=es_419
 * USuario GEMINI: pablog
 *
 * @param {string} url La dirección URL de la página web a obtener.
 * @returns {Promise<Document | null>} Una promesa que se resuelve con el objeto Document (DOM)
 * de la página, o null en caso de error (p. ej., fallo de fetch o CORS).
 */
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