-- 1. Tablas de Catálogo
CREATE TABLE generos (
    id_genero INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL
);

CREATE TABLE nacionalidades (
    id_pais INT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE becas (
    id_beca INT PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL,
    abreviacion VARCHAR(10)
);

CREATE TABLE estados_asistencia (
    id_estado INT PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL,
    char_unique CHAR(1) NOT NULL
);

-- 2. Tabla de Secciones (Grados)
CREATE TABLE secciones (
    id_seccion INT PRIMARY KEY,
    nombre_seccion VARCHAR(100) NOT NULL,
    division CHAR(1) NOT NULL,
    jornada VARCHAR(50),
    turno VARCHAR(50)
);

-- 3. Tabla Principal de Alumnos
CREATE TABLE alumnos (
    id_alumno INT PRIMARY KEY,
    id_persona INT UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    documento VARCHAR(20) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL,
    email VARCHAR(150),
    id_genero INT,
    id_nacionalidad INT,
    id_beca INT,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (id_genero) REFERENCES generos(id_genero),
    FOREIGN KEY (id_nacionalidad) REFERENCES nacionalidades(id_pais),
    FOREIGN KEY (id_beca) REFERENCES becas(id_beca)
);

-- 4. Tabla de Asistencias Diarias
CREATE TABLE asistencias (
    id_presente INT PRIMARY KEY,
    id_alumno INT NOT NULL,
    id_seccion INT NOT NULL,
    fecha DATE NOT NULL,
    id_estado INT NOT NULL,
    is_jornada_extendida BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno) ON DELETE CASCADE,
    FOREIGN KEY (id_seccion) REFERENCES secciones(id_seccion),
    FOREIGN KEY (id_estado) REFERENCES estados_asistencia(id_estado),
    UNIQUE KEY unq_asistencia_diaria (id_alumno, fecha) -- Evita duplicados diarios
);

-- 5. Tablas para Notas y Eventos (Estructura inicial)
CREATE TABLE calificaciones (
    id_calificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_alumno INT NOT NULL,
    id_seccion INT NOT NULL,
    area VARCHAR(50) NOT NULL, -- 'Matemática' o 'Ciencias Sociales'
    bimestre INT NOT NULL,
    nota DECIMAL(4,2),
    FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno)
);

CREATE TABLE agenda_eventos (
    id_evento INT AUTO_INCREMENT PRIMARY KEY,
    tipo_evento VARCHAR(50) NOT NULL, -- 'Feriado', 'Reunión', 'Examen', etc.
    titulo VARCHAR(150) NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME,
    descripcion TEXT
);

-- ======================================
-- Modificaciones posteriores
-- ======================================
-- 1. Agregamos la columna a la tabla alumnos
ALTER TABLE alumnos ADD COLUMN id_seccion INT;

-- 2. Establecemos la clave foránea para mantener la integridad referencial
ALTER TABLE alumnos ADD CONSTRAINT fk_alumno_seccion 
FOREIGN KEY (id_seccion) REFERENCES secciones(id_seccion);

-- 3. ¡Magia SQL! Actualizamos el id_seccion de cada alumno buscando 
-- en qué sección registraron asistencias.
UPDATE alumnos a
JOIN (SELECT DISTINCT id_alumno, id_seccion FROM asistencias) AS asis 
  ON a.id_alumno = asis.id_alumno
SET a.id_seccion = asis.id_seccion;