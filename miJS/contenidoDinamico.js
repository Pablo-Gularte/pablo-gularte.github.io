const idContenedorpanelesPestanias = "#paneles-pestanias";
const contenidoDinamico = [
    {
        boton: "Boton 1",
        contenido: {id: "panel1", texto: "Panel de contenido del botón 1"}
    }
];

// Genero los elementos contenedores de la estructura de pestañas y paneles y aplico estilos
const botonesNavegacion = $("<ul>");
const panelesContenido = $("<div>");

// estilos
botonesNavegacion.addClass("nav nav-tabs");
panelesContenido.addClass("tab-content");

// Contenido de botones y paneles
// agrego botones
botonesNavegacion.append(
    
);
// agrego contenido de paneles

// Insterto los bloques HTML en el contenedor especificado por ID
$(idContenedorpanelesPestanias)
    .append(botonesNavegacion)
    .append(panelesContenido);