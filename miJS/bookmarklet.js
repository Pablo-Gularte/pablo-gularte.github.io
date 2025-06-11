// Favorito para barra de marcadores de Chrome que agrega scripts personalizados a la página actual
javascript:(() => {
	alert('bookmarklet');
	const enlaceMiJs = 'https://pablo-gularte.github.io/miJS/utiles.js';
	const tagScript = document.createElement('script');
	tagScript.src = enlaceMiJs;
	console.log('Creo la etiqueta');
	console.log(tagScript);
	document.head.appendChild(tagScript);
	console.log('Agrego la etiqueta al encabezado de la página');
    const encabezadoPagina = document.head;
    console.log(encabezadoPagina);
})();

// Bookmarklet para cargar scripts de automatización de tareas en Google Classroom
javascript:(() => {
	alert('bookmarklet');
	const enlaceMiJs = 'https://pablo-gularte.github.io/miJS/Classroom/activarPerfilEstudiante.js';
	const tagScript = document.createElement('script');
	tagScript.src = enlaceMiJs;
	console.log('Creo la etiqueta');
	console.log(tagScript);
	document.head.appendChild(tagScript);
	console.log('Agrego la etiqueta al encabezado de la página');
    const encabezadoPagina = document.head;
    console.log(encabezadoPagina);
})();