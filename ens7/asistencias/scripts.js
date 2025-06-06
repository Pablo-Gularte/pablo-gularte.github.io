let currentGrado = null;
let currentFecha = document.getElementById("fecha").value;

// Cargar grados al iniciar
window.onload = function () {
  cargarGrados();
  document.getElementById("fecha").value = new Date()
    .toISOString()
    .split("T")[0];
  currentFecha = document.getElementById("fecha").value;

  // Configurar evento de cambio de fecha
  document.getElementById("fecha").addEventListener("change", function () {
    currentFecha = this.value;
    if (currentGrado) cargarEstudiantes(currentGrado);
  });

  // Configurar evento de búsqueda
  document.getElementById("busqueda").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    if (document.querySelector("table")) {
      document.querySelectorAll("table tr").forEach((row, index) => {
        if (index === 0) return; // Saltar cabecera
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? "" : "none";
      });
    }
  });
};

// Cargar lista de grados
async function cargarGrados() {
  const response = await fetch("get_grados.php");
  const grados = await response.json();

  const select = document.getElementById("grado-select");
  let cuartoGradoId = null;

  // Poblar el selector de grados
  grados.forEach((grado) => {
    const option = document.createElement("option");
    option.value = grado.id;
    option.textContent = `${grado.grado} ${grado.seccion} - ${grado.turno}`;

    // Identificar 4to grado
    if (
      grado.grado.toLowerCase().includes("4") ||
      grado.grado.toLowerCase().includes("cuarto") ||
      grado.grado.toLowerCase().includes("iv")
    ) {
      cuartoGradoId = grado.id;
    }

    select.appendChild(option);
  });

  // Configurar evento de cambio
  select.addEventListener("change", function () {
    currentGrado = this.value;
    cargarEstudiantes(this.value);
  });

  // Selección automática inicial
  if (cuartoGradoId) {
    select.value = cuartoGradoId;
    select.dispatchEvent(new Event("change"));
  } else if (grados.length > 0) {
    select.selectedIndex = 0;
    select.dispatchEvent(new Event("change"));
  }
}

// Cargar estudiantes y asistencia
async function cargarEstudiantes(idGrado) {
  const response = await fetch(
    `get_estudiantes.php?id_grado=${idGrado}&fecha=${currentFecha}`
  );
  const estudiantes = await response.json();

  const tablaHTML = `
            <table>
                <tr>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Asistencia</th>
                </tr>
                ${estudiantes
                  .map(
                    (est) => `
                    <tr>
                        <td>${est.apellido}</td>
                        <td>${est.nombre}</td>
                        <td>${est.documento}</td>
                        <td>
                            <select data-est-id="${
                              est.id
                            }" class="asistencia-select">
                                <option value="P" ${
                                  est.asistencia === "P" ? "selected" : ""
                                }>Presente</option>
                                <option value="A" ${
                                  est.asistencia === "A" ? "selected" : ""
                                }>Ausente</option>
                                <option value="T" ${
                                  est.asistencia === "T" ? "selected" : ""
                                }>Tardanza</option>
                            </select>
                        </td>
                    </tr>
                `
                  )
                  .join("")}
            </table>
        `;

  document.getElementById("tabla-container").innerHTML = tablaHTML;
}

// Guardar asistencia
async function guardarAsistencia() {
  if (!currentGrado) {
    alert("Seleccione un grado primero");
    return;
  }

  const asistencias = [];
  document.querySelectorAll(".asistencia-select").forEach((select) => {
    asistencias.push({
      id_estudiante: select.dataset.estId,
      tipo_asistencia: select.value,
    });
  });

  try {
    const response = await fetch("guardar_asistencia.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_grado: currentGrado,
        fecha: currentFecha,
        asistencias: asistencias,
      }),
    });

    const result = await response.json();
    if (result.message) {
      alert("Asistencia guardada correctamente");
      // Recargar datos actualizados
      cargarEstudiantes(currentGrado);
    } else {
      throw new Error(result.error || "Error desconocido");
    }
  } catch (error) {
    alert(`Error al guardar: ${error.message}`);
  }
}
