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
    textoBotonCerrar
}) {
    const objEstructuraModal = {
        "type": "div",
        "children": [
            {
                "type": "button",
                "class": "btn btn-primary",
                "attributes": {
                    "type": "button",
                    "data-bs-toggle": "modal",
                    "data-bs-target": `#${idModal}`
                },
                "text": textoBotonAbrir
            },
            {
                "type": "div",
                "id": idModal,
                "class": "modal",
                "attributes": {
                    "style": "display: none;",
                    "aria-hidden": "true"
                },
                "children": [
                    {
                        "type": "div",
                        "class": "modal-dialog",
                        "children": [
                            {
                                "type": "div",
                                "class": "modal-content",
                                "children": [
                                    {
                                        "type": "div",
                                        "class": "modal-header",
                                        "children": [
                                            {
                                                "type": "h4",
                                                "class": "modal-title",
                                                "text": tituloModal
                                            },
                                            {
                                                "type": "button",
                                                "class": "btn-close",
                                                "attributes": {
                                                    "type": "button",
                                                    "data-bs-dismiss": "modal"
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "div",
                                        "class": "modal-body",
                                        "text": cuerpoModal
                                    },
                                    {
                                        "type": "div",
                                        "class": "modal-footer",
                                        "children": [
                                            {
                                                "type": "button",
                                                "class": "btn btn-danger",
                                                "attributes": {
                                                    "type": "button",
                                                    "data-bs-dismiss": "modal"
                                                },
                                                "text": textoBotonCerrar
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
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
function crearTabla({
    encabezadoTabla,
    cuerpoTabla
}) {
    const htmlTabla = document.createElement('table');
    htmlTabla.className = 'ws-table-all w3-bordered w3-striped w3-border test w3-hoverable';
    htmlTabla.appendChild(crearEncabezadoTabla(encabezadoTabla));
    htmlTabla.appendChild(crearCuerpoTabla(cuerpoTabla));

    return htmlTabla;
}

// Función para crear el encabezado de una tabla a partir de un array con los encabezados
function crearEncabezadoTabla(encabezadoTabla) {
    const htmlEncabezado = document.createElement('thead');
    const htmlFila = document.createElement('tr');
    htmlFila.className = 'w3-green';
    encabezadoTabla.forEach((encabezado) => {
        const htmlCelda = document.createElement('th');
        htmlCelda.textContent = encabezado;
        htmlFila.appendChild(htmlCelda);
    });
    htmlEncabezado.appendChild(htmlFila);
    return htmlEncabezado;

}

// Función para crear el cuerpo de una tabla a partir de un array de objetos con los datos
function crearCuerpoTabla(cuerpoTabla) {
    const htmlCuerpo = document.createElement('tbody');
    cuerpoTabla.forEach((fila) => {
        const htmlFila = document.createElement('tr');
        Object.values(fila).forEach((celda) => {
            const htmlCelda = document.createElement('td');
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
    if(typeof elemento === 'string') {
        const divTemporal = document.createElement('div');
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
  