-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 15, 2020 at 03:35 AM
-- Server version: 5.7.24
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelagency`
--

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `email`, `message`) VALUES
(1, 'Alexander', 'alexander1@gmail.com', 'Muy buen viaje a europa'),
(2, 'Jose', 'lopez@gmail.com', 'Espero algún día ir al viaje de Grecia.'),
(3, 'Jaime', 'mskmdkemde@klmlkml', 'felicidades!!!');

-- --------------------------------------------------------

--
-- Table structure for table `travels`
--

CREATE TABLE `travels` (
  `id` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `price` varchar(20) NOT NULL,
  `departure_date` date NOT NULL,
  `return_date` date NOT NULL,
  `image` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `available` varchar(10) NOT NULL,
  `slug` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `travels`
--

INSERT INTO `travels` (`id`, `title`, `price`, `departure_date`, `return_date`, `image`, `description`, `available`, `slug`) VALUES
(1, 'Italy', '50000', '2021-06-24', '2021-06-30', 'roma', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit impedit dolor. Qui facilis eius illo, tempore accusamus porro cum at ex officia sint dolores quo pariatur consectetur, fugiat eum.', '32', 'travel-to-italy'),
(2, 'Canada', '40000', '2021-06-09', '2021-06-30', 'canada', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit impedit dolor. Qui facilis eius illo, tempore accusamus porro cum at ex officia sint dolores quo pariatur consectetur, fugiat eum.', '25', 'travel-to-canada'),
(3, 'Greece', '50000', '2021-04-01', '2021-04-18', 'grecia', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit impedit dolor. Qui facilis eius illo, tempore accusamus porro cum at ex officia sint dolores quo pariatur consectetur, fugiat eum.', '18', 'travel-to-greece'),
(4, 'London', '65000', '2021-05-03', '2021-05-20', 'londres', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit impedit dolor. Qui facilis eius illo, tempore accusamus porro cum at ex officia sint dolores quo pariatur consectetur, fugiat eum.', '22', 'travel-to-london'),
(5, 'Rio de Janeiro', '45000', '2021-07-01', '2021-07-16', 'rio', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit impedit dolor. Qui facilis eius illo, tempore accusamus porro cum at ex officia sint dolores quo pariatur consectetur, fugiat eum.', '23', 'travel-to-rio'),
(6, 'France', '75000', '2021-06-16', '2021-06-30', 'paris', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sit impedit dolor. Qui facilis eius illo, tempore accusamus porro cum at ex officia sint dolores quo pariatur consectetur, fugiat eum.', '14', 'travel-to-france');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `travels`
--
ALTER TABLE `travels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
