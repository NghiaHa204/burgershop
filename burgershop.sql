-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for burgershop
CREATE DATABASE IF NOT EXISTS `burgershop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `burgershop`;

-- Dumping structure for table burgershop.bills
CREATE TABLE IF NOT EXISTS `bills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `date_bill` date NOT NULL,
  `timeid` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `van_chuyen` varchar(50) NOT NULL,
  `total_money` varchar(20) NOT NULL,
  `trang_thai` varchar(20) DEFAULT 'Vừa đặt',
  `username` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_timeid` (`timeid`),
  KEY `fk_user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop.bills: ~6 rows (approximately)
INSERT INTO `bills` (`id`, `user_id`, `date_bill`, `timeid`, `address`, `van_chuyen`, `total_money`, `trang_thai`, `username`) VALUES
	(6, 7, '2024-12-11', '201615', 'áhd', '1', '126500', '5', 'admin234'),
	(7, 7, '2024-12-12', '16015', 'kksks', '1', '272000', 'Vừa đặt', 'admin234'),
	(8, 1, '2024-12-12', '16133', 'kdkd', '1', '126500', 'Vừa đặt', 'admin'),
	(9, 1, '2024-12-12', '165225', 'f', '1', '31000', 'Vừa đặt', 'admin'),
	(10, 1, '2024-12-12', '165854', 'dsd', '3', '48000', 'Vừa đặt', 'admin'),
	(11, 1, '2024-12-14', '17257', 'ạksnldsa', '1', '129000', 'Vừa đặt', 'admin');

-- Dumping structure for table burgershop.bill_items
CREATE TABLE IF NOT EXISTS `bill_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bill_timeid` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `count` int(11) NOT NULL,
  `price` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_timeid` (`bill_timeid`),
  CONSTRAINT `bill_items_ibfk_1` FOREIGN KEY (`bill_timeid`) REFERENCES `bills` (`timeid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop.bill_items: ~9 rows (approximately)
INSERT INTO `bill_items` (`id`, `bill_timeid`, `title`, `count`, `price`) VALUES
	(7, '201615', 'BURGER BÒ TEMPURA', 1, '126.5'),
	(8, '16015', 'COMBO GÀ BBQ(3 MIẾNG)', 1, '136'),
	(9, '16015', 'COMBO GÀ RÁN GIÒN CAY(3 MIẾNG)', 1, '136'),
	(10, '16133', 'BURGER BÒ TEMPURA', 1, '126.5'),
	(11, '165225', 'KHOAI TÂY TẮM PHÔ MAI', 1, '31'),
	(12, '165854', 'DASANI', 1, '24'),
	(13, '165854', 'COCA', 1, '24'),
	(14, '17257', 'GÀ CUỘN RONG BIỂN 6PCS', 1, '64.5'),
	(15, '17257', 'GÀ CUỘN RONG BIỂN 6PCS', 1, '64.5');

-- Dumping structure for table burgershop.menu_items
CREATE TABLE IF NOT EXISTS `menu_items` (
  `id` int(11) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping structure for table burgershop.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `dateSignup` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop.menu_items: ~56 rows (approximately)
INSERT INTO `menu_items` (`id`, `type`, `image`, `title`, `content`, `price`, `item_id`) VALUES
	(1, 'burger', './img/burger1.png', 'BURGER BÒ TEMPURA JR', '+Burger Bò Tempura Jr (size vừa): bò nướng lửa hồng cùng tempura rau củ', '67.500 VND', 1),
	(2, 'burger', './img/burger2.png', 'BURGER BÒ TEMPURA', 'Burger Bò Tempura (size lớn): bò nướng lửa hồng và tempura rau củ', '126.500 VND', 2),
	(3, 'burger', './img/burger3.jpg', 'BURGER BÒ NƯỚNG WHOPPER JR', 'BURGER BÒ NƯỚNG WHOPPER JR', '54.000 VND', 3),
	(4, 'burger', './img/burger4.jpg', 'BURGER CÁ', 'BURGER CÁ', '46.000 VND', 4),
	(5, 'burger', './img/burger5.jpg', 'Burger Bò Nướng Hành Chiên', 'Burger Bò Nướng Hành Chiên', '50.000 VND', 5),
	(6, 'burger', './img/burger6.jpg', 'BURGER GÀ GIÒN CAY', 'BURGER GÀ GIÒN CAY', '77.500 VND', 6),
	(7, 'burger', './img/burger7.jpg', 'BURGER GÀ NƯỚNG', 'BURGER GÀ NƯỚNG', '67.500 VND', 7),
	(8, 'burger', './img/burger8.jpg', 'Burger Bò Phô Mai', 'Burger Bò Phô Mai', '63.500 VND', 8),
	(9, 'burger', './img/burger9.jpg', 'BURGER BÒ THỊT HEO XÔNG KHÓI', 'BURGER BÒ THỊT HEO XÔNG KHÓI', '68.000 VND', 9),
	(10, 'burger', './img/burger10.jpg', 'BURGER 2 MIẾNG BÒ NƯỚNG', 'BURGER 2 MIẾNG BÒ NƯỚNG', '165.000 VND', 10),
	(11, 'burger', './img/burger11.jpg', 'WHOPPER BÒ NƯỚNG', 'BURGER BÒ NƯỚNG WHOPPER', '162.000 VND', 11),
	(12, 'burger', './img/burger12.jpg', 'BURGER 2 MIẾNG BÒ PHÔ MAI', 'BURGER 2 MIẾNG BÒ PHÔ MAI', '162.000 VND', 12),
	(1, 'combo', './img/chicken1.png', 'COMBO CHIC\'N LOVER 1P', ' 2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Nước ngọt', '93.000 VND', 13),
	(2, 'combo', './img/chicken2.jpg', 'COMBO CHIC\'N LOVER 1P', '2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Burger Bò Phô Mai + 2 Nước ngọt', '142.000 VND', 14),
	(3, 'combo', './img/combo1.png', 'COMBO BURGER BÒ TEMPURA JR(M)', '1 Burger Bò Tempura Jr (size vừa) + 1 Khoai Tây Chiên (M)', '87.000 VND', 15),
	(1, 'garan', './img/chicken4.jpg', 'GÀ GIÒN CRISPY', '1 Miếng Gà Giòn Crispy (không cay)', '44.000 VND', 16),
	(2, 'garan', './img/chicken5.jpg', 'COMBO GÀ BBQ(3 MIẾNG)', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 miếng gà BBQ', '136.000 VND', 17),
	(3, 'garan', './img/chicken6.jpg', 'COMBO GÀ RÁN GIÒN CAY(3 MIẾNG)', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 miếng gà rán giòn cay', '136.000 VND', 18),
	(4, 'garan', './img/chicken7.jpg', 'COMBO GÀ BBQ(2 MIẾNG)', 'BURGER GÀ NƯỚNGCombo Gồm : 1 Nước (M) + 1 Khoai Tây (M) + 2 miếng gà BBQ', '116.500 VND', 19),
	(5, 'garan', './img/chicken8.jpg', 'COMBO GÀ GIÒN KHONG CAY(2 MIẾNG)', 'MAIN COURSE : 1 Nước + 2 miếng Gà Giòn không cay + 1 Khoai Tây Chiên (M)', '116.500 VND', 20),
	(6, 'garan', './img/chicken9.jpg', 'COMBO GÀ GIÒN CAY(2 MIẾNG)', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây (M) + 2 miếng gà rán giòn cay', '116.500 VND', 21),
	(7, 'garan', './img/chicken10.jpg', 'COMBO GÀ GIÒN KHÔNG CAY(3 MIẾNG)', 'MAIN COURSE : 1 Nước + 3 miếng Gà Giòn không cay + 1 Khoai Tây Chiên (M)', '136.000 VND', 22),
	(8, 'garan', './img/chicken11.jpg', 'Mix Wing 4pcs', 'Mix Wing 4pcs', '87.000 VND', 23),
	(9, 'garan', './img/chicken12.jpg', 'Mix Wing 6pcs', 'Mix Wing 6pcs', '130.000 VND', 24),
	(10, 'garan', './img/chicken3.jpg', 'COMBO FAMILY CHIC\'N LOVERS', '3 Miếng Gà Giòn (cay/ không cay) + 3 Cánh Gà BBQ + 2 Khoai Tây Chiên (L) + 3 Nước ngọt', '289.000 VND', 25),
	(11, 'garan', './img/combo2.jpg', 'COMBO GÀ RÁN(M)', '3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi', '172.000 VND', 26),
	(12, 'garan', './img/combo3.jpg', 'COMBO GÀ RÁN (L)', '4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon', '191.000 VND', 27),
	(4, 'combo', './img/combo4.jpg', 'COMBO BURGER BÒ NƯỚNG HÀNH CHIÊNCHIÊN', '1 Burger Bò Nướng Hành Chiên + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', '76.000 VND', 28),
	(5, 'combo', './img/combo5.jpg', 'COMBO BURGER BÒ PHÔ MAI(M)', '1 Burger Bò Phô Mai (cỡ vừa) + Khoai Tây Chiên (M) + Nước ngọt', '93.000 VND', 29),
	(6, 'combo', './img/combo6.jpg', 'COMBO BURGER GÀ GIÒN CAY', '1 Burger Gà Giòn Cay + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', '97.000 VND', 30),
	(7, 'combo', './img/combo7.jpg', 'COMBO BURGER GÀ NƯỚNG', '1 Burger Gà Nướng + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', '97.000 VND', 31),
	(8, 'combo', './img/combo8.jpg', 'COMBO BURGER BÒ THỊT HEO XÔNG KHÓI WHOPPER', '1 Burger Bò Thịt Heo Xông Khói Sốt BBQ + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', '175.000 VND', 32),
	(9, 'combo', './img/combo9.jpg', 'COMBO BURGER 2 MIẾNG BÒ PHÔ MAI', '1 Burger 2 Miếng Bò Phô Mai + 1 Khoai Tây Chiên (L) + 1 Nước ngọt', '107.000 VND', 33),
	(10, 'combo', './img/combo10.png', 'COMBO BURGER BÒ TEMPURA (L)', '1 Burger Bò Tempura (size lớn) + 1 Khoai Tây Chiên (M)', '146.000 VND', 34),
	(11, 'combo', './img/combo11.jpg', 'COMBO BURGER BÒ TẮM PHÔ MAI(CỠ LỚN)', '1 Burger Bò Tắm Phô Mai (cỡ lớn) + Khoai Tây Chiên (M) + Nước ngọt', '150.000 VND', 35),
	(12, 'combo', './img/combo12.jpg', 'COMBO BURGER 2 MIẾNG BÒ + THỊT XÔNG KHÓI WHOPPER', '1 Burger 2 Miếng Bò Phô Mai Thịt Xông Khói WHOPPER + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', '244.000 VND', 36),
	(1, 'monankem', './img/food1.jpg', 'GÀ CUỘN RONG BIỂN 4PCS', 'SEAWEED CHICKEN ROLL 4PCS', '45.000 VND', 37),
	(2, 'monankem', './img/food2.jpg', 'GÀ CUỘN RONG BIỂN 6PCS', 'SEAWEED CHICKEN ROLL 6PCS', '64.500 VND', 38),
	(3, 'monankem', './img/food3.jpg', 'KHOAI TÂY TẮM PHÔ MAI', 'CHEESY FRIES', '31.000 VND', 39),
	(4, 'monankem', './img/food4.jpg', 'CÁ CUỘN RONG BIỂN 2PCS', 'SEAWEED FISH STICK 2PCS', '24.000 VND', 40),
	(5, 'monankem', './img/food5.jpg', 'CÁ CUỘN RONG BIỂN 4PCS', 'SEAWEED FISH STICK 4PCS', '45.000 VND', 41),
	(6, 'monankem', './img/food6.jpg', 'GÀ NUGGETS 3PCS', 'CHICKEN NUGGETS 3PCS', '77.500 VND', 42),
	(7, 'monankem', './img/food7.jpg', 'GÀ NUGGETS 4PCS', 'CHICKEN NUGGETS 4PCS', '34.000 VND', 43),
	(8, 'monankem', './img/food8.jpg', 'PHÔ MAI QUE 2PSC', 'CHEESE STICK 2 PSC', '24.500 VND', 44),
	(9, 'monankem', './img/food9.jpg', 'PHÔ MAI QUE 8PSC', 'CHEESE STICK 8PSC', '85.000 VND', 45),
	(10, 'monankem', './img/burger10.jpg', 'KHOAI TÂY TẮM PHÔ MAI THỊT XÔNG KHÓI', 'CHEESY FRIES BACON', '44.000 VND', 46),
	(11, 'monankem', './img/food11.jpg', 'KHOAI TÂY CHIÊN SIZE M', 'FRIES SIZE M', '28.000 VND', 47),
	(12, 'monankem', './img/food12.jpg', 'KHOAI TÂY CHIÊN SIZE L', 'FRIES SIZE L', '38.000 VND', 48),
	(1, 'thucuong', './img/water1.jpg', 'NƯỚC CAM', 'NƯỚC CAM', '26.000 VND', 49),
	(2, 'thucuong', './img/water2.jpg', 'MILO', 'MILO', '26.500 VND', 50),
	(3, 'thucuong', './img/water3.jpg', 'DASANI', 'DASANI', '24.000 VND', 51),
	(4, 'thucuong', './img/water4.jpg', 'TRÀ CHANH', 'TRÀ CHANH', '26.500 VND', 52),
	(5, 'thucuong', './img/water5.jpg', 'COCA', 'COCA', '24.000 VND', 53),
	(6, 'thucuong', './img/water6.jpg', 'FANTA', 'FANTA', '24.000 VND', 54),
	(7, 'thucuong', './img/water7.jpg', 'SPRITE', 'SPRITE', '24.000 VND', 55),
	(8, 'thucuong', './img/water8.jpg', 'COCA LIGHT', 'COCA LIGHT', '26.000 VND', 56);

-- Dumping data for table burgershop.users: ~3 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `phone_number`, `username`, `password`, `dateSignup`) VALUES
	(1, 'Hà Trọng Nghĩa', 'admin@gmail.com', '0921465660', 'admin', 'admin', '2024-11-30'),
	(6, 'nghia haa', 'kafknj243@gmail.com', '0234134444', 'Nghiaha111', 'Nghialamgi00*', '2024-12-10'),
	(7, 'be nhi', 'jbfns32@gmail.com', '0921543220', 'admin234', 'Nghialamgi00*', '2024-12-10');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
