-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2025 a las 04:59:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `id_autor` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `biografia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`id_autor`, `nombre`, `nacionalidad`, `fecha_nacimiento`, `biografia`) VALUES
(2, 'Haruki Murakami', 'Japonesa', '1949-01-12', 'Escritor contemporáneo japonés, conocido por su estilo surrealista.'),
(3, 'Isabel Allende', 'Chilena', '1942-08-02', 'Escritora chilena, reconocida por sus novelas históricas y de realismo mágico.'),
(4, 'George Orwell', 'Británica', '1903-06-25', 'Periodista y novelista británico, conocido por sus críticas al totalitarismo.'),
(5, 'Jane Austen', 'Británica', '1775-12-16', 'Novelista británica famosa por sus obras sobre la sociedad inglesa del siglo XIX.'),
(6, 'Octavia E. Butler', 'Estadounidense', '1947-06-22', 'Autora de ciencia ficción especulativa, pionera en el género afrofuturista.'),
(7, 'Mario Vargas Llosa', 'Peruana', '1936-03-28', 'Novelista, ensayista y político peruano, Premio Nobel de Literatura en 2010.'),
(8, 'Gabriel García Márquez', 'Colombiana', '1927-03-06', 'Escritor y periodista colombiano, ganador del Premio Nobel de Literatura en 1982.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id_libro` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `año_publicacion` int(11) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `resumen` text DEFAULT NULL,
  `id_autor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id_libro`, `titulo`, `año_publicacion`, `genero`, `resumen`, `id_autor`) VALUES
(2, 'Kafka en la orilla', 2002, 'Ficción contemporánea', 'Un joven huye de su hogar mientras un anciano busca sentido a su vida.', 2),
(3, 'La casa de los espíritus', 1982, 'Novela histórica', 'Relato multigeneracional de una familia chilena a través de eventos mágicos y reales.', 3),
(4, '1984', 1949, 'Distopía', 'Una crítica al totalitarismo en una sociedad vigilada por el Gran Hermano.', 4),
(6, 'Sputnik, mi amor', 1999, 'Ficción contemporánea', 'Un relato sobre amor no correspondido y desapariciones misteriosas.', 2),
(7, 'Paula', 1994, 'Autobiografía', 'Un testimonio íntimo dedicado a su hija, entre la vida y la muerte.', 3),
(8, 'Rebelión en la granja', 1945, 'Sátira política', 'Una fábula sobre la corrupción del poder tras una revolución animal.', 4),
(9, 'Orgullo y prejuicio', 1813, 'Romance', 'La historia de Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX.', 5),
(10, 'Sentido y sensibilidad', 1811, 'Romance', 'Dos hermanas con visiones opuestas sobre el amor enfrentan la vida y las dificultades sociales.', 5),
(11, 'Parentesco', 1979, 'Ciencia ficción', 'Una mujer afroamericana viaja en el tiempo a la época de la esclavitud.', 6),
(12, 'La parábola del sembrador', 1993, 'Ciencia ficción', 'Una joven profetisa funda una nueva religión en un mundo colapsado por el cambio climático.', 6),
(13, 'La ciudad y los perros', 1963, 'Ficción', 'Crítica al autoritarismo en un colegio militar en Lima.', 7),
(14, 'Conversación en La Catedral', 1969, 'Ficción política', 'Exploración del poder y la corrupción en el Perú de los años 50.', 7),
(15, 'La fiesta del chivo', 2000, 'Novela histórica', 'Una mirada al régimen de Trujillo en la República Dominicana.', 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id_autor`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id_libro`),
  ADD KEY `id_autor` (`id_autor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `id_autor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libro`
--
ALTER TABLE `libro`
  ADD CONSTRAINT `libro_ibfk_1` FOREIGN KEY (`id_autor`) REFERENCES `autor` (`id_autor`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
