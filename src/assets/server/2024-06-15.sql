-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2025 at 07:01 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `id_tipo_pago` int(11) NOT NULL,
  `nombre_cliente` varchar(255) NOT NULL,
  `fecha_venta` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ventas`
--

INSERT INTO `ventas` (`id`, `total`, `id_tipo_pago`, `nombre_cliente`, `fecha_venta`) VALUES
(1, '4500.00', 1, 'ZIANNY', '2024-06-15 21:09:10'),
(2, '1500.00', 1, 'RONNIER', '2024-06-15 21:12:43'),
(3, '12500.00', 1, 'JOSSY', '2024-06-15 21:14:49'),
(4, '2000.00', 1, 'ANITA', '2024-06-15 21:15:43'),
(5, '1000.00', 1, 'AMANDA', '2024-06-15 21:16:18'),
(6, '6000.00', 1, 'OLMAN', '2024-06-15 21:19:51'),
(7, '2000.00', 1, 'DANNA', '2024-06-15 21:22:47'),
(8, '2500.00', 1, 'ANITA', '2024-06-15 21:23:38'),
(9, '1000.00', 1, 'MARGERI', '2024-06-15 21:25:32'),
(10, '1000.00', 1, 'KOKI', '2024-06-15 21:26:12'),
(11, '500.00', 1, 'DAYSHERY', '2024-06-15 21:26:43'),
(12, '500.00', 1, 'MARYERY', '2024-06-15 21:28:45'),
(13, '1000.00', 1, 'KARLA', '2024-06-15 21:33:50'),
(14, '1000.00', 1, 'AMANDA', '2024-06-15 21:41:22'),
(15, '500.00', 1, 'SOFIA', '2024-06-15 21:41:52'),
(16, '500.00', 1, 'RONNIER', '2024-06-15 21:42:29'),
(17, '3500.00', 1, 'ANA', '2024-06-15 21:43:29'),
(18, '500.00', 1, 'DANNA', '2024-06-15 21:46:00'),
(19, '500.00', 1, 'ANTHONY', '2024-06-15 21:52:20'),
(20, '3500.00', 1, 'MELISSA', '2024-06-15 21:53:40'),
(21, '1000.00', 1, 'Cliente Anónimo', '2024-06-15 21:54:08'),
(22, '1500.00', 1, 'Cliente Anónimo', '2024-06-15 21:55:20'),
(23, '1000.00', 1, 'DAYSHERI', '2024-06-15 21:55:56'),
(24, '500.00', 1, 'ANTHONY', '2024-06-15 21:56:25'),
(25, '500.00', 1, 'ANTHONY', '2024-06-15 21:56:26'),
(26, '500.00', 1, 'KALEF', '2024-06-15 21:56:53'),
(27, '500.00', 1, 'ANTHONY', '2024-06-15 21:57:55'),
(28, '1500.00', 2, 'ALEJANDRO', '2024-06-15 22:16:11'),
(29, '2000.00', 1, 'Cliente Anónimo', '2024-06-15 22:19:31'),
(30, '3500.00', 1, 'MAESTRA KARLA', '2024-06-15 22:27:12'),
(31, '1000.00', 1, 'ANITA', '2024-06-15 22:27:41'),
(32, '1000.00', 1, 'MARYINY', '2024-06-15 22:29:05'),
(33, '2000.00', 1, 'MAESTRA KARLA', '2024-06-15 22:29:35'),
(34, '1500.00', 1, 'MAESTRA KARLA', '2024-06-15 22:34:53'),
(35, '1500.00', 1, 'ELSA', '2024-06-15 22:49:13'),
(36, '2500.00', 1, 'Cliente Anónimo', '2024-06-15 23:09:15'),
(37, '3000.00', 1, 'Cliente Anónimo', '2024-06-15 23:15:40'),
(38, '3000.00', 1, 'ANNIA', '2024-06-15 23:16:03'),
(39, '500.00', 1, 'Cliente Anónimo', '2024-06-15 23:34:03'),
(40, '1000.00', 1, 'RONNIER SALAS', '2024-06-15 23:34:25'),
(41, '1000.00', 1, 'NOEMI', '2024-06-15 23:34:44'),
(42, '2000.00', 1, 'Cliente Anónimo', '2024-06-15 23:35:15'),
(43, '6000.00', 1, 'Cliente Anónimo', '2024-06-15 23:35:53'),
(44, '2500.00', 1, 'ORLANDO', '2024-06-15 23:36:34'),
(45, '2500.00', 1, 'Cliente Anónimo', '2024-06-15 23:37:02'),
(46, '2000.00', 1, 'Cliente Anónimo', '2024-06-15 23:37:26'),
(47, '3000.00', 1, 'Cliente Anónimo', '2024-06-15 23:38:05'),
(48, '1000.00', 1, 'Cliente Anónimo', '2024-06-15 23:38:36'),
(49, '500.00', 1, 'AMANDA', '2024-06-15 23:39:01'),
(50, '2000.00', 1, 'DIEGO', '2024-06-15 23:39:31'),
(51, '1500.00', 1, 'Cliente Anónimo', '2024-06-15 23:39:52'),
(52, '1000.00', 1, 'EMANUEL', '2024-06-15 23:40:37'),
(53, '2500.00', 1, 'Cliente Anónimo', '2024-06-15 23:41:29'),
(54, '2000.00', 1, 'MATHIAS', '2024-06-15 23:43:27'),
(55, '1000.00', 1, 'Cliente Anónimo', '2024-06-15 23:44:38'),
(56, '500.00', 1, 'Cliente Anónimo', '2024-06-15 23:45:12'),
(57, '1000.00', 1, 'Cliente Anónimo', '2024-06-15 23:45:43'),
(58, '500.00', 1, 'Cliente Anónimo', '2024-06-15 23:46:04'),
(59, '2000.00', 1, 'DIEGO', '2024-06-15 23:46:21'),
(60, '1000.00', 1, 'Cliente Anónimo', '2024-06-15 23:46:45'),
(61, '1000.00', 1, 'Cliente Anónimo', '2024-06-15 23:47:22'),
(62, '1000.00', 1, 'ADIEL', '2024-06-15 23:48:44'),
(63, '500.00', 1, 'Cliente Anónimo', '2024-06-15 23:49:09'),
(64, '6000.00', 1, 'Cliente Anónimo', '2024-06-15 23:51:06'),
(65, '500.00', 1, 'Cliente Anónimo', '2024-06-15 23:51:30'),
(66, '500.00', 1, 'Cliente Anónimo', '2024-06-15 23:52:44'),
(67, '2500.00', 1, 'Cliente Anónimo', '2024-06-15 23:53:22'),
(68, '2000.00', 1, 'Cliente Anónimo', '2024-06-15 23:54:06'),
(69, '3000.00', 1, 'Cliente Anónimo', '2024-06-15 23:55:14'),
(70, '2000.00', 1, 'ANITA', '2024-06-16 00:00:57'),
(71, '2500.00', 1, 'Cliente Anónimo', '2024-06-16 00:49:33'),
(72, '500.00', 1, 'Cliente Anónimo', '2024-06-16 00:54:25'),
(73, '500.00', 1, 'Cliente Anónimo', '2024-06-16 00:56:07'),
(74, '2000.00', 1, 'Cliente Anónimo', '2024-06-16 01:06:59'),
(75, '2000.00', 1, 'MELISSA', '2024-06-16 01:18:37'),
(76, '2000.00', 1, 'Cliente Anónimo', '2024-06-16 01:19:01'),
(77, '2000.00', 1, 'Cliente Anónimo', '2024-06-16 01:19:29'),
(78, '6000.00', 1, 'HAROLD', '2024-06-16 01:20:21'),
(79, '500.00', 1, 'Cliente Anónimo', '2024-06-16 01:20:42'),
(80, '3000.00', 1, 'Cliente Anónimo', '2024-06-16 01:21:38'),
(81, '500.00', 1, 'Cliente Anónimo', '2024-06-16 01:22:53'),
(82, '2000.00', 1, 'Cliente Anónimo', '2024-06-16 01:23:42'),
(83, '1500.00', 1, 'Cliente Anónimo', '2024-06-16 01:23:59'),
(84, '3000.00', 1, 'Cliente Anónimo', '2024-06-16 01:25:29'),
(85, '500.00', 1, 'Cliente Anónimo', '2024-06-16 01:26:53'),
(86, '1500.00', 1, 'Cliente Anónimo', '2024-06-16 01:27:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tipo_pago` (`id_tipo_pago`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`id_tipo_pago`) REFERENCES `tipos_pago` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
