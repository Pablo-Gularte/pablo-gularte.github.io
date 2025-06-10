// Función que simula la carga del correo y presiona el botón "Siguiente"
function cargarCorreo(correo) {
    // 1. Seleccionar el campo de correo
    const campoCorreo = document.getElementById('identifierId');
    
    if (!campoCorreo) {
        console.error('No se encontró el campo de correo');
        return;
    }

    // 2. Asignar el valor
    campoCorreo.value = correo;
    
    // 3. Disparar eventos de entrada para activar validaciones
    const inputEvent = new Event('input', { bubbles: true });
    campoCorreo.dispatchEvent(inputEvent);
    
    const changeEvent = new Event('change', { bubbles: true });
    campoCorreo.dispatchEvent(changeEvent);

    // 4. Esperar breve momento para procesamiento (opcional)
    setTimeout(() => {
        // 5. Buscar el botón "Siguiente"
        const botonSiguiente = document.querySelector('#identifierNext button');
        
        if (!botonSiguiente) {
            console.error('No se encontró el botón "Siguiente"');
            return;
        }

        // 6. Simular clic
        botonSiguiente.click();
        console.log('Acción completada: correo ingresado y botón presionado');
    }, 100); // Pequeño delay para procesar eventos
}

// Función que simula la carga de la clave y presiona el botón "Siguiente"
function cargarClave(clave) {
    // 1. Localizar el campo de contraseña
    const campoClave = document.querySelector(
        '#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input'
    );
    
    if (!campoClave) {
        console.error('No se encontró el campo de contraseña');
        return;
    }

    // 2. Establecer el valor de la contraseña
    campoClave.value = clave;
    
    // 3. Disparar eventos de entrada
    ['input', 'change', 'blur'].forEach(eventType => {
        const event = new Event(eventType, { bubbles: true });
        campoClave.dispatchEvent(event);
    });

    // 4. Localizar el botón "Siguiente"
    setTimeout(() => {
        const botonSiguiente = document.querySelector(
            '#passwordNext > div > button'
        );
        
        if (!botonSiguiente) {
            console.error('No se encontró el botón "Siguiente"');
            return;
        }

        // 5. Simular clic en el botón
        botonSiguiente.click();
        console.log('Contraseña ingresada y botón activado');
    }, 200); // Delay para permitir procesamiento de validación
}

// Presiono el voton "Entendido" para continuar con el inicio de sesión
function clickEntendido() {
    const botonEntendido = document.querySelector("#confirm");
    if (botonEntendido) {
        botonEntendido.click();
        console.log('Botón "Entendido" presionado');
    } else {
        console.warn('No se encontró el botón "Entendido"');
    }
}

// Presiono el botón "Continuar" para confirmar el inicio de sesión con el perfil de estudiante
function clickContinuar() {
    const botonContinuar = document.querySelector("#yDmH0d > div.VfPpkd-Sx9Kwc.VfPpkd-Sx9Kwc-OWXEXe-n9oEIb.VfPpkd-Sx9Kwc-OWXEXe-n9oEIb-OWXEXe-diJVc.cC1eCc.UDxLd.PzCPDd.e0Cfsd.u8pvgb.VfPpkd-Sx9Kwc-OWXEXe-FNFY6c > div.VfPpkd-wzTsW > div > div.VfPpkd-cnG4Wd > div > div > div:nth-child(4) > div > button");
    if (botonContinuar) {
        botonContinuar.click();
        console.log('Botón "Continuar" presionado');
    } else {
        console.warn('No se encontró el botón "Continuar"');
    }
}

// Selecciono la función "Soy estudiante"
function clickSoyEstudiante() {
  // 1. Buscamos el contenedor con data-role="3"
  const contenedor = document.querySelector('[data-role="3"]');
  if (!contenedor) {
    console.warn('No se encontró ningún elemento con data-role="3".');
    return;
  }

  // 2. Dentro de ese contenedor, buscamos el elemento con role="button"
  const boton = contenedor.querySelector('[role="button"]');
  if (!boton) {
    console.warn('Se encontró el contenedor data-role="3", pero no un botón en su interior.');
    return;
  }

  // 3. Simulamos el clic
  boton.click();
  console.log('Clic simulado en el botón “Soy estudiante”.');
}

// Desplegar menú de selección de perfil
function clickMenuPerfil() {
    // 1. Buscar el botón del menú de perfil
    const menuPerfil = document.querySelector("#gb > div > div.gb_Re > div.gb_z.gb_dd.gb_Nf.gb_0 > div > a");
    
    if (!menuPerfil) {
        console.error('No se encontró el menú de perfil');
        return;
    }

    // 2. Simular clic en el menú
    menuPerfil.click();
    console.log('Menú de perfil desplegado');
}

// Apretar botón "Salir" para cerrar perfil
function clickSalirPerfil() {
    // 1. Buscar el botón de salir del perfil
    const botonSalir = document.querySelector("#yDmH0d > c-wiz > div > div > div > div").querySelector('a[href*="Logout"]');
    
    if (!botonSalir) {
        console.error('No se encontró el botón "Salir" del perfil');
        return;
    }

    // 2. Dentro del contenedor, buscar el botón específico
    // 2. Simular clic en el botón
    botonSalir.click();
    console.log('Botón "Salir" presionado');
}

// Apretar botón "Usar otra cuenta" para cambiar de perfil
function clickOtraCuenta() {
    // 1. Buscar el botón de "Otra cuenta"
    const botonOtraCuenta = document.querySelector('#yDmH0d > c-wiz').querySelector('ul > li:last-child').previousSibling.children[0];
    
    if (!botonOtraCuenta) {
        console.error('No se encontró el botón "Usar otra cuenta"');
        return;
    }

    // 2. Simular clic en el botón
    botonOtraCuenta.click();
    console.log('Botón "Usar otra cuenta" presionado');
}