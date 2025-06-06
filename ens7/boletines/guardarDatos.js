function guardarDatosEnJson() {
    datosSolapas.push(extraerDatos());
    const ultimoRegistro = datosSolapas[datosSolapas.length-1]
    console.info(`Se recuperaron los datos de ${ultimoRegistro.nombre} - ${ultimoRegistro.categoria} (${datosSolapas.length} registros)`);
    document.querySelector("#NextButton").click();
}