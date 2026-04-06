const toggleBtn = $('#theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 1. Al cargar la página, verificar si hay un tema guardado
if (currentTheme) {
     $("html").attr('data-theme', currentTheme);
} else {
    // Opcional: Detectar si el usuario prefiere modo oscuro en su sistema operativo
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        $("html").attr('data-theme', 'dark');
    }
}

// 2. Escuchar el clic para alternar
toggleBtn.on('click', () => {
    let theme =  $("html").attr('data-theme');

    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }

    // Aplicar el nuevo tema y guardarlo
     $("html").attr('data-theme', theme);
    localStorage.setItem('theme', theme);
});