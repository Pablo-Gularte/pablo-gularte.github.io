function extraerDatos() {
    const jsonData = {
        nombre: document.querySelector("#root > div > main > div.MuiGrid-root.css-3yheut > h2")?.textContent.trim() || '',
        categoria: document.querySelector("button[aria-selected='true']").innerText.trim(),
        criterios: []
    };

    if(jsonData.categoria == 'Área de Conocimiento') {
        // Recupero el nombre de la materia y lo agrego al JSON
        const materia = document.querySelector("#simple-tabpanel-3 > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-zfadxh > div > div").innerText.replace('\n','').trim();
        jsonData.materia = materia;
        // Recupero datos de PPI y lo agrego al JSON
        const ppi = document.querySelector("#simple-tabpanel-3 > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.css-rdtat3 > div > div").innerText;
        jsonData.ppi = ppi;
    }

    const tableRows = document.querySelectorAll('table tbody tr');

    tableRows.forEach((row) => {
        const celdas = row.querySelectorAll('td');

        const criterio = celdas[0]?.innerText.trim() || '';
        const calificacion = celdas[2]?.innerText.trim() || '';
        
        // Se asume que el "descriptor" ya está visible en la cuarta celda
        const descriptorElement = celdas[3];
        let descriptorTitulo = '';
        let descriptorTexto = '';

        if (descriptorElement) {
            const parrafos = descriptorElement.querySelectorAll('p');
            descriptorTitulo = parrafos[0]?.textContent.trim() || '';
            descriptorTexto = parrafos[1]?.textContent.trim() || '';
        }

        jsonData.criterios.push({
            criterio: criterio,
            calificacion: calificacion,
            descriptor: {
                titulo: descriptorTitulo,
                descripcion: descriptorTexto
            }
        });
    });

    return jsonData;
};