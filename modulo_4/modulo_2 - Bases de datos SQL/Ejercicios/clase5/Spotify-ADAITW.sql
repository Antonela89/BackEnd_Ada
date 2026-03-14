CREATE DATABASE Spotify_DB;
USE Spotify_DB;

-- 1. Tablas Maestras (sin dependencias)
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    sexo ENUM('M', 'F', 'Otro'),
    codigo_postal VARCHAR(20),
    pais VARCHAR(50),
    fecha_modif_password DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Artista (
    id_artista INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    imagen_url VARCHAR(255)
);

CREATE TABLE Discografica (
    id_discografica INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    pais VARCHAR(50)
);

CREATE TABLE Genero (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- 2. Tablas con dependencias simples
CREATE TABLE Album (
    id_album INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    anio_publicacion YEAR,
    imagen_portada VARCHAR(255),
    id_artista INT,
    id_discografica INT,
    FOREIGN KEY (id_artista) REFERENCES Artista(id_artista),
    FOREIGN KEY (id_discografica) REFERENCES Discografica(id_discografica)
);

CREATE TABLE Playlist (
    id_playlist INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    cant_canciones INT DEFAULT 0,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    eliminada BOOLEAN DEFAULT FALSE,
    fecha_eliminacion DATETIME NULL,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Cancion (
    id_cancion INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    duracion TIME,
    reproducciones INT DEFAULT 0,
    likes INT DEFAULT 0,
    id_album INT,
    FOREIGN KEY (id_album) REFERENCES Album(id_album)
);

-- 3. Tablas Intermedias (Relaciones N a M)
CREATE TABLE Cancion_Genero (
    id_cancion INT,
    id_genero INT,
    PRIMARY KEY (id_cancion, id_genero),
    FOREIGN KEY (id_cancion) REFERENCES Cancion(id_cancion),
    FOREIGN KEY (id_genero) REFERENCES Genero(id_genero)
);

CREATE TABLE Playlist_Cancion (
    id_playlist INT,
    id_cancion INT,
    PRIMARY KEY (id_playlist, id_cancion),
    FOREIGN KEY (id_playlist) REFERENCES Playlist(id_playlist),
    FOREIGN KEY (id_cancion) REFERENCES Cancion(id_cancion)
);

-- Inserción en Artista y Discográfica (Necesarios para Album)
INSERT INTO Artista (nombre) VALUES ('Taylor Swift'), ('Bad Bunny'), ('Coldplay');
INSERT INTO Discografica (nombre, pais) VALUES ('Universal Music', 'USA'), ('Rimas Entertainment', 'Puerto Rico'), ('Parlophone', 'UK');

-- 1. Inserción de 3 registros en USUARIO
INSERT INTO Usuario (email, password, fecha_nacimiento, sexo, codigo_postal, pais) VALUES 
('juan.perez@email.com', 'Pass123!', '1995-05-15', 'M', '1425', 'Argentina'),
('maria.garcia@email.com', 'Maria_99', '1999-10-20', 'F', '28001', 'España'),
('alex.smith@email.com', 'Secure456', '2002-01-30', 'Otro', '90210', 'USA');

-- 2. Inserción de 3 registros en ALBUM
INSERT INTO Album (titulo, anio_publicacion, id_artista, id_discografica) VALUES 
('Midnights', 2022, 1, 1),
('Un Verano Sin Ti', 2022, 2, 2),
('Music of the Spheres', 2021, 3, 3);

-- 3. Inserción de 3 registros en CANCION
INSERT INTO Cancion (titulo, duracion, id_album, reproducciones, likes) VALUES 
('Anti-Hero', '00:03:20', 1, 1500000, 50000),
('Tití Me Preguntó', '00:04:03', 2, 2000000, 85000),
('My Universe', '00:03:48', 3, 1200000, 40000);
