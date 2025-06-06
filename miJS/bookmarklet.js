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