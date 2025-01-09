/*
-- Funciones personalizadas de JavaScript para propósitos generales
-- Autor: Pablo Gularte
-- Fecha inicial: 2025-01-09
-- Última modificación: 2025-01-09
*/ 

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
  