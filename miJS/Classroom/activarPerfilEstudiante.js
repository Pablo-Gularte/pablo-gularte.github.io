// Defino datos de estudiantes
const estudiantes = [
    {
        "6° A": "P_20040400_",
        "apellido": "ALEGRE MIÃ‘O",
        "nombre": "JEREMIAS",
        "segundo nombre": "NULL",
        "documento": "53465301",
        "correo": "jeremiasa5301@alu.bue.edu.ar",
        "clave": "futbolairepaloma",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "BERNARDO",
        "nombre": "JOAQUIN",
        "segundo nombre": "",
        "documento": "54101726",
        "correo": "joaquinb726@alu.bue.edu.ar",
        "clave": "fama.bici.BA",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "BONANNO",
        "nombre": "FEDERICO",
        "segundo nombre": "NULL",
        "documento": "53586277",
        "correo": "federicob277@alu.bue.edu.ar",
        "clave": "voleymicrogusano",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "CABRAL",
        "nombre": "EVA",
        "segundo nombre": "NULL",
        "documento": "53414775",
        "correo": "evac775@alu.bue.edu.ar",
        "clave": "ciervohockeysapo",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "CORTES",
        "nombre": "NOAH",
        "segundo nombre": "JOAQUIN",
        "documento": "53950821",
        "correo": "noahc821@alu.bue.edu.ar",
        "clave": "buceoviajefoca",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "DE IBARRETA TOBAL",
        "nombre": "CIRO",
        "segundo nombre": "NULL",
        "documento": "53751542",
        "correo": "cirod542@alu.bue.edu.ar",
        "clave": "futbolcielotero",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "DE VEDIA GODOY",
        "nombre": "FRANCISCA",
        "segundo nombre": "NULL",
        "documento": "53770925",
        "correo": "franciscad925@alu.bue.edu.ar",
        "clave": "Recreopolobanco.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "DI GIOVANNI",
        "nombre": "LUCIO",
        "segundo nombre": "NULL",
        "documento": "53983612",
        "correo": "luciod612@alu.bue.edu.ar",
        "clave": "Obrabillaraire.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "ECHAURI MARINO",
        "nombre": "MATEO",
        "segundo nombre": "JULIAN",
        "documento": "53724923",
        "correo": "mateoe923@alu.bue.edu.ar",
        "clave": "luchahimnotoro",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "EREU OVIEDO",
        "nombre": "ALAN",
        "segundo nombre": "DAVID",
        "documento": "585682021",
        "correo": "alane821@alu.bue.edu.ar",
        "clave": "lago.cuna.BA",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "ESPEJO",
        "nombre": "LILA",
        "segundo nombre": "NULL",
        "documento": "53720862",
        "correo": "lilae862@alu.bue.edu.ar",
        "clave": "remoaulatoro",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "FONTENLA",
        "nombre": "LEON",
        "segundo nombre": "DAVID",
        "documento": "53469788",
        "correo": "leonf788@alu.bue.edu.ar",
        "clave": "surfbancolobo",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "IANNONE",
        "nombre": "CLARA",
        "segundo nombre": "NULL",
        "documento": "53851354",
        "correo": "clarai354@alu.bue.edu.ar",
        "clave": "teniscamaratucan",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "LERMAN",
        "nombre": "FELIPE",
        "segundo nombre": "",
        "documento": "53647485",
        "correo": "felipel485@alu.bue.edu.ar",
        "clave": "muro.lino.BA",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "MAIDANA",
        "nombre": "JULIA",
        "segundo nombre": "NULL",
        "documento": "53948254",
        "correo": "juliam254@alu.bue.edu.ar",
        "clave": "rugbyrecreopaloma",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "MARTINEZ",
        "nombre": "JULIA",
        "segundo nombre": "NULL",
        "documento": "53724948",
        "correo": "juliam4948@alu.bue.edu.ar",
        "clave": "Patingusanovideo.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "MOSQUERA TORO",
        "nombre": "DIEGO",
        "segundo nombre": "ANDRÃ‰S",
        "documento": "122055801",
        "correo": "diegom801@alu.bue.edu.ar",
        "clave": "tela.foca.BA",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "PADRINO MARTINEZ",
        "nombre": "ISAIAS",
        "segundo nombre": "ALEJANDRO",
        "documento": "95836755",
        "correo": "isaiasp755@alu.bue.edu.ar",
        "clave": "skatecentropantera",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "PRIETTO",
        "nombre": "THIAGO",
        "segundo nombre": "RAMIRO",
        "documento": "53468235",
        "correo": "thiagop235@alu.bue.edu.ar",
        "clave": "Buceocastorgusano.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "RATTO",
        "nombre": "MARÃ□A",
        "segundo nombre": "VALENTINA",
        "documento": "53852920",
        "correo": "mariar920@alu.bue.edu.ar",
        "clave": "orcasumotiburon",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "ROJAS CACERES",
        "nombre": "SANTINO",
        "segundo nombre": "NULL",
        "documento": "533333333",
        "correo": "santinor3333@alu.bue.edu.ar",
        "clave": "Basketorcasilla.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "SALERNO BIAGGIO",
        "nombre": "CAMILA",
        "segundo nombre": "NULL",
        "documento": "53412831",
        "correo": "camilas831@alu.bue.edu.ar",
        "clave": "dardosmicrogusano",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "VIGO TANTALEÃ□N",
        "nombre": "MARTINA",
        "segundo nombre": "BELÃ‰N",
        "documento": "53652151",
        "correo": "martinav151@alu.bue.edu.ar",
        "clave": "remojuegotigre",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "VILLALBA TELLEZ",
        "nombre": "CAMILA",
        "segundo nombre": "ABRIL",
        "documento": "53722578",
        "correo": "camilav578@alu.bue.edu.ar",
        "clave": "rugbyobramosca",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "WACHEL WEISSEL",
        "nombre": "DARREN",
        "segundo nombre": "EMRICK",
        "documento": "53260079",
        "correo": "darrenw079@alu.bue.edu.ar",
        "clave": "sopa.bote.BA",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "ZANARDI",
        "nombre": "VICTORIA",
        "segundo nombre": "NULL",
        "documento": "53948431",
        "correo": "victoriaz431@alu.bue.edu.ar",
        "clave": "Golfgusanomosca.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "ZHOU",
        "nombre": "CAMILA",
        "segundo nombre": "NULL",
        "documento": "53646550",
        "correo": "camilaz6550@alu.bue.edu.ar",
        "clave": "Ayudaremoregla.",
        "anio": "2024"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "BIANCOFIORE LUNA",
        "nombre": "BENJAMIN",
        "segundo nombre": "BAUTISTA",
        "documento": "53236253",
        "correo": "benjaminb253@alu.bue.edu.ar",
        "clave": "Dardosteropuma.",
        "anio": "2023"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "DIAZ ARRAEZ",
        "nombre": "FAVIO",
        "segundo nombre": "ALFONZO",
        "documento": "144714520",
        "correo": "faviod1452@alu.bue.edu.ar",
        "clave": "Surfgusanotigre.",
        "anio": "2022"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "GALINDEZ",
        "nombre": "AGOSTINA",
        "segundo nombre": "NULL",
        "documento": "51552154",
        "correo": "agostinag2154@alu.bue.edu.ar",
        "clave": "copa.boca.BA",
        "anio": "2022"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "GIMENEZ VIVAS",
        "nombre": "AZUL",
        "segundo nombre": "LUJAN",
        "documento": "53238086",
        "correo": "azulg086@alu.bue.edu.ar",
        "clave": "Skitucanmosca.",
        "anio": "2023"
    },
    {
        "6° A": "P_20040400_",
        "apellido": "ORTA ARMANDO",
        "nombre": "PAULINA",
        "segundo nombre": "NULL",
        "documento": "52762631",
        "correo": "paulinao631@alu.bue.edu.ar",
        "clave": "remocamaratucan",
        "anio": "2023"
    }
];

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
