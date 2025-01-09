/* 
-- FUnciones personalizadas de JavaScript para personalizar el Bootstrap
-- y crear elementos a partir de objetos JavaScript
-- Autor: Pablo Gularte
-- Fecha inicial: 2025-01-09
-- Última modificación: 2025-01-09
*/

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
    return crearElementoHTML(objEstructuraModal);
}