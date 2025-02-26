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


-- Dumping database structure for burgershop2
CREATE DATABASE IF NOT EXISTS `burgershop2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `burgershop2`;

-- Dumping structure for table burgershop2.bills
CREATE TABLE IF NOT EXISTS `bills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `date_bill` datetime DEFAULT current_timestamp(),
  `timeid` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `van_chuyen` varchar(255) DEFAULT NULL,
  `total_money` varchar(255) DEFAULT NULL,
  `trang_thai` varchar(50) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 3` (`timeid`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `khachhang` (`maKhachHang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.bills: ~0 rows (approximately)

-- Dumping structure for table burgershop2.bill_items
CREATE TABLE IF NOT EXISTS `bill_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bill_timeid` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bill_timeid` (`bill_timeid`),
  CONSTRAINT `bill_items_ibfk_1` FOREIGN KEY (`bill_timeid`) REFERENCES `bills` (`timeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.bill_items: ~0 rows (approximately)

-- Dumping structure for table burgershop2.chitietcongthuc
CREATE TABLE IF NOT EXISTS `chitietcongthuc` (
  `maCongThuc` int(11) NOT NULL,
  `maNguyenLieu` int(11) NOT NULL,
  `soLuong` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.chitietcongthuc: ~177 rows (approximately)
INSERT INTO `chitietcongthuc` (`maCongThuc`, `maNguyenLieu`, `soLuong`) VALUES
	(1, 4, 1),
	(2, 4, 3),
	(2, 9, 1),
	(2, 13, 1),
	(2, 20, 3),
	(3, 4, 3),
	(3, 9, 1),
	(3, 13, 1),
	(3, 19, 3),
	(4, 4, 2),
	(4, 9, 1),
	(4, 13, 1),
	(4, 20, 2),
	(5, 4, 2),
	(5, 9, 1),
	(5, 13, 1),
	(17, 4, 2),
	(17, 9, 1),
	(17, 13, 1),
	(17, 19, 2),
	(18, 4, 3),
	(18, 9, 1),
	(18, 13, 1),
	(19, 7, 4),
	(20, 7, 6),
	(26, 1, 2),
	(26, 2, 1),
	(26, 17, 1),
	(27, 1, 2),
	(27, 2, 2),
	(27, 17, 1),
	(28, 1, 2),
	(28, 2, 1),
	(28, 8, 1),
	(28, 17, 1),
	(29, 1, 2),
	(29, 3, 1),
	(29, 17, 1),
	(30, 1, 2),
	(30, 2, 1),
	(30, 18, 1),
	(31, 1, 2),
	(31, 4, 1),
	(31, 17, 1),
	(31, 19, 1),
	(32, 1, 2),
	(32, 4, 1),
	(32, 17, 1),
	(33, 1, 2),
	(33, 2, 1),
	(33, 6, 1),
	(33, 17, 1),
	(34, 1, 2),
	(34, 2, 1),
	(34, 5, 1),
	(34, 17, 1),
	(35, 1, 2),
	(35, 2, 2),
	(35, 17, 1),
	(36, 1, 2),
	(36, 2, 2),
	(36, 8, 1),
	(36, 17, 1),
	(37, 1, 2),
	(37, 2, 1),
	(37, 6, 2),
	(37, 17, 1),
	(38, 4, 2),
	(38, 13, 1),
	(38, 20, 2),
	(39, 1, 2),
	(39, 2, 1),
	(39, 6, 1),
	(39, 7, 2),
	(39, 10, 2),
	(39, 17, 1),
	(39, 20, 2),
	(40, 1, 2),
	(40, 2, 1),
	(40, 9, 1),
	(40, 17, 1),
	(41, 1, 2),
	(41, 2, 1),
	(41, 4, 3),
	(41, 16, 2),
	(41, 17, 1),
	(42, 4, 4),
	(42, 9, 1),
	(42, 16, 2),
	(43, 1, 2),
	(43, 2, 1),
	(43, 9, 1),
	(43, 13, 1),
	(43, 17, 1),
	(43, 18, 1),
	(44, 1, 2),
	(44, 2, 1),
	(44, 6, 1),
	(44, 9, 1),
	(44, 13, 1),
	(44, 17, 1),
	(45, 1, 2),
	(45, 4, 1),
	(45, 9, 1),
	(45, 13, 1),
	(45, 17, 1),
	(45, 19, 1),
	(46, 1, 2),
	(46, 4, 1),
	(46, 9, 1),
	(46, 13, 1),
	(46, 17, 1),
	(47, 1, 2),
	(47, 5, 1),
	(47, 9, 1),
	(47, 13, 1),
	(47, 17, 1),
	(47, 20, 1),
	(48, 4, 2),
	(48, 8, 4),
	(49, 4, 3),
	(49, 8, 6),
	(50, 6, 1),
	(50, 9, 1),
	(51, 3, 1),
	(51, 8, 2),
	(52, 3, 2),
	(52, 8, 4),
	(53, 4, 3),
	(53, 6, 3),
	(54, 4, 4),
	(54, 6, 4),
	(55, 6, 2),
	(56, 6, 8),
	(57, 2, 1),
	(57, 6, 1),
	(57, 9, 1),
	(58, 9, 1),
	(59, 9, 2),
	(60, 14, 1),
	(61, 13, 1),
	(62, 13, 1),
	(63, 12, 1),
	(64, 13, 1),
	(65, 14, 1),
	(66, 15, 1),
	(67, 16, 1),
	(68, 4, 3),
	(68, 7, 3),
	(68, 9, 2),
	(68, 13, 3),
	(68, 19, 3),
	(68, 20, 3),
	(69, 1, 2),
	(69, 2, 1),
	(69, 6, 2),
	(69, 9, 1),
	(69, 13, 1),
	(69, 17, 1),
	(70, 1, 2),
	(70, 2, 2),
	(70, 9, 1),
	(70, 17, 1),
	(71, 1, 2),
	(71, 2, 2),
	(71, 6, 2),
	(71, 9, 1),
	(71, 13, 1),
	(71, 17, 1),
	(72, 1, 2),
	(72, 2, 2),
	(72, 6, 2),
	(72, 9, 1),
	(72, 13, 1),
	(72, 17, 1),
	(72, 18, 1),
	(75, 3, 1),
	(76, 3, 1),
	(76, 5, 1),
	(76, 7, 1),
	(76, 3, 1),
	(76, 5, 1),
	(76, 7, 1),
	(77, 3, 1),
	(77, 8, 1),
	(77, 5, 1),
	(77, 3, 1),
	(77, 8, 1),
	(77, 5, 1),
	(78, 4, 1);

-- Dumping structure for table burgershop2.chitietphieunhap
CREATE TABLE IF NOT EXISTS `chitietphieunhap` (
  `maPhieuNhap` int(11) NOT NULL,
  `maNguyenLieu` int(11) NOT NULL,
  `soLuong` int(11) DEFAULT NULL,
  `donGia` float DEFAULT NULL,
  PRIMARY KEY (`maPhieuNhap`,`maNguyenLieu`),
  KEY `maNguyenLieu` (`maNguyenLieu`),
  CONSTRAINT `chitietphieunhap_ibfk_1` FOREIGN KEY (`maPhieuNhap`) REFERENCES `phieunhap` (`maPhieuNhap`),
  CONSTRAINT `chitietphieunhap_ibfk_2` FOREIGN KEY (`maNguyenLieu`) REFERENCES `nguyenlieu` (`maNguyenLieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.chitietphieunhap: ~0 rows (approximately)

-- Dumping structure for table burgershop2.congthuc
CREATE TABLE IF NOT EXISTS `congthuc` (
  `maCongThuc` int(11) NOT NULL AUTO_INCREMENT,
  `tenCongThuc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`maCongThuc`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.congthuc: ~62 rows (approximately)
INSERT INTO `congthuc` (`maCongThuc`, `tenCongThuc`) VALUES
	(1, 'ga1'),
	(2, 'ga2'),
	(3, 'ga3'),
	(4, 'ga4'),
	(5, 'ga5'),
	(17, 'ga6'),
	(18, 'ga7'),
	(19, 'ga8'),
	(20, 'ga9'),
	(21, 'ga10'),
	(22, 'ga11'),
	(26, 'burger1'),
	(27, 'burger2'),
	(28, 'burger3'),
	(29, 'burger4'),
	(30, 'burger5'),
	(31, 'burger6'),
	(32, 'burger7'),
	(33, 'burger8'),
	(34, 'burger9'),
	(35, 'burger10'),
	(36, 'burger11'),
	(37, 'burger12'),
	(38, 'combo1'),
	(39, 'combo2'),
	(40, 'combo3'),
	(41, 'combo4'),
	(42, 'combo5'),
	(43, 'combo6'),
	(44, 'combo7'),
	(45, 'combo8'),
	(46, 'combo9'),
	(47, 'combo10'),
	(48, 'monankem1'),
	(49, 'monankem2'),
	(50, 'monankem3'),
	(51, 'monankem4'),
	(52, 'monankem5'),
	(53, 'monankem6'),
	(54, 'monankem7'),
	(55, 'monankem8'),
	(56, 'monankem9'),
	(57, 'monankem10'),
	(58, 'monankem11'),
	(59, 'monankem12'),
	(60, 'thucuong1'),
	(61, 'thucuong2'),
	(62, 'thucuong3'),
	(63, 'thucuong4'),
	(64, 'thucuong5'),
	(65, 'thucuong6'),
	(66, 'thucuong7'),
	(67, 'thucuong8'),
	(68, 'CongThuc_test'),
	(69, 'CongThuc_test'),
	(70, 'CongThuc_test'),
	(71, 'CongThuc_test'),
	(72, 'CongThuc_test'),
	(73, 'CongThuc_test'),
	(74, 'CongThuc_test'),
	(75, 'CongThuc_test'),
	(76, 'CongThuc_test2'),
	(77, 'CongThuc_test3'),
	(78, 'CongThuc_test4');

-- Dumping structure for procedure burgershop2.InsertGa
DELIMITER //
CREATE PROCEDURE `InsertGa`()
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= 8 DO
        INSERT INTO CongThuc (tenCongThuc) VALUES (CONCAT('thucuong', i));
        SET i = i + 1;
    END WHILE;
END//
DELIMITER ;

-- Dumping structure for table burgershop2.khachhang
CREATE TABLE IF NOT EXISTS `khachhang` (
  `maKhachHang` int(11) NOT NULL AUTO_INCREMENT,
  `tenKhachHang` varchar(255) DEFAULT NULL,
  `soDienThoai` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tenDangNhap` varchar(255) DEFAULT NULL,
  `matKhau` varchar(255) DEFAULT NULL,
  `ngayDangKy` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`maKhachHang`),
  UNIQUE KEY `tenDangNhap` (`tenDangNhap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.khachhang: ~0 rows (approximately)

-- Dumping structure for table burgershop2.kho
CREATE TABLE IF NOT EXISTS `kho` (
  `maNguyenLieu` int(11) NOT NULL,
  `tenNguyenLieu` varchar(255) DEFAULT NULL,
  `soLuong` int(11) DEFAULT NULL,
  PRIMARY KEY (`maNguyenLieu`),
  CONSTRAINT `kho_ibfk_1` FOREIGN KEY (`maNguyenLieu`) REFERENCES `nguyenlieu` (`maNguyenLieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.kho: ~16 rows (approximately)
INSERT INTO `kho` (`maNguyenLieu`, `tenNguyenLieu`, `soLuong`) VALUES
	(1, 'bánh mì', 100),
	(2, 'thịt bò', 100),
	(3, 'cá', 100),
	(4, 'thịt gà', 100),
	(5, 'thịt heo', 100),
	(6, 'phô mai', 100),
	(7, 'cánh gà', 199),
	(8, 'rong biển', 100),
	(9, 'khoai tây', 100),
	(10, 'nước cam', 100),
	(11, 'nước suối', 100),
	(12, 'trà chanh', 100),
	(13, 'coca', 100),
	(14, 'fanta', 100),
	(15, 'sprite', 100),
	(16, 'coca light', 100);

-- Dumping structure for table burgershop2.lo
CREATE TABLE IF NOT EXISTS `lo` (
  `maLo` int(11) NOT NULL AUTO_INCREMENT,
  `maPhieuNhap` int(11) DEFAULT NULL,
  `soLuong` int(11) DEFAULT NULL,
  `gia` float DEFAULT NULL,
  PRIMARY KEY (`maLo`),
  KEY `maPhieuNhap` (`maPhieuNhap`),
  CONSTRAINT `lo_ibfk_1` FOREIGN KEY (`maPhieuNhap`) REFERENCES `phieunhap` (`maPhieuNhap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.lo: ~0 rows (approximately)

-- Dumping structure for table burgershop2.loai
CREATE TABLE IF NOT EXISTS `loai` (
  `maLoai` int(11) NOT NULL AUTO_INCREMENT,
  `tenLoai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`maLoai`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.loai: ~5 rows (approximately)
INSERT INTO `loai` (`maLoai`, `tenLoai`) VALUES
	(1, 'burger'),
	(2, 'combo'),
	(3, 'garan'),
	(4, 'monankem'),
	(5, 'thucuong');

-- Dumping structure for table burgershop2.phieunhap
CREATE TABLE IF NOT EXISTS `phieunhap` (
  `maPhieuNhap` int(11) NOT NULL AUTO_INCREMENT,
  `ngayNhap` varchar(50) DEFAULT NULL,
  `tongGia` int(11) DEFAULT NULL,
  PRIMARY KEY (`maPhieuNhap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.phieunhap: ~0 rows (approximately)

-- Dumping structure for table burgershop2.sanpham
CREATE TABLE IF NOT EXISTS `sanpham` (
  `maSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `tenSanPham` varchar(255) DEFAULT NULL,
  `hinhAnh` varchar(255) DEFAULT NULL,
  `moTa` varchar(255) DEFAULT NULL,
  `maLoai` int(11) DEFAULT NULL,
  `maCongThuc` int(11) DEFAULT NULL,
  PRIMARY KEY (`maSanPham`),
  KEY `maLoai` (`maLoai`),
  KEY `maCongThuc` (`maCongThuc`),
  CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`maLoai`) REFERENCES `loai` (`maLoai`),
  CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`maCongThuc`) REFERENCES `congthuc` (`maCongThuc`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.sanpham: ~57 rows (approximately)
INSERT INTO `sanpham` (`maSanPham`, `tenSanPham`, `hinhAnh`, `moTa`, `maLoai`, `maCongThuc`) VALUES
	(1, 'BURGER BÒ TEMPURA JR', './img/burger1.png', '+Burger Bò Tempura Jr (size vừa): bò nướng lửa hồng cùng tempura rau củ', 1, 26),
	(2, 'BURGER BÒ TEMPURA', './img/burger2.png', 'Burger Bò Tempura (size lớn): bò nướng lửa hồng và tempura rau củ', 1, 27),
	(3, 'BURGER BÒ NƯỚNG WHOPPER JR', './img/burger3.jpg', 'BURGER BÒ NƯỚNG WHOPPER JR', 1, 28),
	(4, 'BURGER CÁ', './img/burger4.jpg', 'BURGER CÁ', 1, 29),
	(5, 'Burger Bò Nướng Hành Chiên', './img/burger5.jpg', 'Burger Bò Nướng Hành Chiên', 1, 30),
	(6, 'BURGER GÀ GIÒN CAY', './img/burger6.jpg', 'BURGER GÀ GIÒN CAY', 1, 31),
	(7, 'BURGER GÀ NƯỚNG', './img/burger7.jpg', 'BURGER GÀ NƯỚNG', 1, 32),
	(8, 'Burger Bò Phô Mai', './img/burger8.jpg', 'Burger Bò Phô Mai', 1, 33),
	(9, 'BURGER BÒ THỊT HEO XÔNG KHÓI', './img/burger9.jpg', 'BURGER BÒ THỊT HEO XÔNG KHÓI', 1, 34),
	(10, 'BURGER 2 MIẾNG BÒ NƯỚNG', './img/burger10.jpg', 'BURGER 2 MIẾNG BÒ NƯỚNG', 1, 35),
	(11, 'WHOPPER BÒ NƯỚNG', './img/burger11.jpg', 'BURGER BÒ NƯỚNG WHOPPER', 1, 36),
	(12, 'BURGER 2 MIẾNG BÒ PHÔ MAI', './img/burger12.jpg', 'BURGER 2 MIẾNG BÒ PHÔ MAI', 1, 37),
	(13, 'COMBO CHIC\'N LOVER 1P', './img/chicken1.png', ' 2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Nước ngọt', 2, 38),
	(14, 'COMBO CHIC\'N LOVER 1P', './img/chicken2.jpg', '2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Burger Bò Phô Mai + 2 Nước ngọt', 2, 39),
	(15, 'COMBO BURGER BÒ TEMPURA JR(M)', './img/combo1.png', '1 Burger Bò Tempura Jr (size vừa) + 1 Khoai Tây Chiên (M)', 2, 40),
	(16, 'GÀ GIÒN CRISPY', './img/chicken4.jpg', '1 Miếng Gà Giòn Crispy (không cay)', 3, 1),
	(17, 'COMBO GÀ BBQ(3 MIẾNG)', './img/chicken5.jpg', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 miếng gà BBQ', 3, 2),
	(18, 'COMBO GÀ RÁN GIÒN CAY(3 MIẾNG)', './img/chicken6.jpg', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 miếng gà rán giòn cay', 3, 3),
	(19, 'COMBO GÀ BBQ(2 MIẾNG)', './img/chicken7.jpg', 'BURGER GÀ NƯỚNGCombo Gồm : 1 Nước (M) + 1 Khoai Tây (M) + 2 miếng gà BBQ', 3, 4),
	(20, 'COMBO GÀ GIÒN KHONG CAY(2 MIẾNG)', './img/chicken8.jpg', 'MAIN COURSE : 1 Nước + 2 miếng Gà Giòn không cay + 1 Khoai Tây Chiên (M)', 3, 5),
	(21, 'COMBO GÀ GIÒN CAY(2 MIẾNG)', './img/chicken9.jpg', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây (M) + 2 miếng gà rán giòn cay', 3, 17),
	(22, 'COMBO GÀ GIÒN KHÔNG CAY(3 MIẾNG)', './img/chicken10.jpg', 'MAIN COURSE : 1 Nước + 3 miếng Gà Giòn không cay + 1 Khoai Tây Chiên (M)', 3, 18),
	(23, 'Mix Wing 4pcs', './img/chicken11.jpg', 'Mix Wing 4pcs', 3, 19),
	(24, 'Mix Wing 6pcs', './img/chicken12.jpg', 'Mix Wing 6pcs', 3, 20),
	(25, 'COMBO FAMILY CHIC\'N LOVERS', './img/chicken3.jpg', '3 Miếng Gà Giòn (cay/ không cay) + 3 Cánh Gà BBQ + 2 Khoai Tây Chiên (L) + 3 Nước ngọt', 2, 68),
	(26, 'COMBO GÀ RÁN(M)', './img/combo2.jpg', '3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi', 2, 41),
	(27, 'COMBO GÀ RÁN (L)', './img/combo3.jpg', '4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon', 2, 42),
	(28, 'COMBO BURGER BÒ NƯỚNG HÀNH CHIÊNCHIÊN', './img/combo4.jpg', '1 Burger Bò Nướng Hành Chiên + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, 43),
	(29, 'COMBO BURGER BÒ PHÔ MAI(M)', './img/combo5.jpg', '1 Burger Bò Phô Mai (cỡ vừa) + Khoai Tây Chiên (M) + Nước ngọt', 2, 44),
	(30, 'COMBO BURGER GÀ GIÒN CAY', './img/combo6.jpg', '1 Burger Gà Giòn Cay + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, 45),
	(31, 'COMBO BURGER GÀ NƯỚNG', './img/combo7.jpg', '1 Burger Gà Nướng + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, 46),
	(32, 'COMBO BURGER BÒ THỊT HEO XÔNG KHÓI WHOPPER', './img/combo8.jpg', '1 Burger Bò Thịt Heo Xông Khói Sốt BBQ + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, 47),
	(33, 'COMBO BURGER 2 MIẾNG BÒ PHÔ MAI', './img/combo9.jpg', '1 Burger 2 Miếng Bò Phô Mai + 1 Khoai Tây Chiên (L) + 1 Nước ngọt', 2, 69),
	(34, 'COMBO BURGER BÒ TEMPURA (L)', './img/combo10.png', '1 Burger Bò Tempura (size lớn) + 1 Khoai Tây Chiên (M)', 2, 70),
	(35, 'COMBO BURGER BÒ TẮM PHÔ MAI(CỠ LỚN)', './img/combo11.jpg', '1 Burger Bò Tắm Phô Mai (cỡ lớn) + Khoai Tây Chiên (M) + Nước ngọt', 2, 71),
	(36, 'COMBO BURGER 2 MIẾNG BÒ + THỊT XÔNG KHÓI WHOPPER', './img/combo12.jpg', '1 Burger 2 Miếng Bò Phô Mai Thịt Xông Khói WHOPPER + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, 72),
	(37, 'GÀ CUỘN RONG BIỂN 4PCS', './img/food1.jpg', 'SEAWEED CHICKEN ROLL 4PCS', 4, 48),
	(38, 'GÀ CUỘN RONG BIỂN 6PCS', './img/food2.jpg', 'SEAWEED CHICKEN ROLL 6PCS', 4, 49),
	(39, 'KHOAI TÂY TẮM PHÔ MAI', './img/food3.jpg', 'CHEESY FRIES', 4, 50),
	(40, 'CÁ CUỘN RONG BIỂN 2PCS', './img/food4.jpg', 'SEAWEED FISH STICK 2PCS', 4, 51),
	(41, 'CÁ CUỘN RONG BIỂN 4PCS', './img/food5.jpg', 'SEAWEED FISH STICK 4PCS', 4, 52),
	(42, 'GÀ NUGGETS 3PCS', './img/food6.jpg', 'CHICKEN NUGGETS 3PCS', 4, 53),
	(43, 'GÀ NUGGETS 4PCS', './img/food7.jpg', 'CHICKEN NUGGETS 4PCS', 4, 54),
	(44, 'PHÔ MAI QUE 2PSC', './img/food8.jpg', 'CHEESE STICK 2 PSC', 4, 55),
	(45, 'PHÔ MAI QUE 8PSC', './img/food9.jpg', 'CHEESE STICK 8PSC', 4, 56),
	(46, 'KHOAI TÂY TẮM PHÔ MAI THỊT XÔNG KHÓI', './img/burger10.jpg', 'CHEESY FRIES BACON', 4, 57),
	(47, 'KHOAI TÂY CHIÊN SIZE M', './img/food11.jpg', 'FRIES SIZE M', 4, 58),
	(48, 'KHOAI TÂY CHIÊN SIZE L', './img/food12.jpg', 'FRIES SIZE L', 4, 59),
	(49, 'NƯỚC CAM', './img/water1.jpg', 'NƯỚC CAM', 5, 60),
	(50, 'MILO', './img/water2.jpg', 'MILO', 5, 61),
	(51, 'DASANI', './img/water3.jpg', 'DASANI', 5, 62),
	(52, 'TRÀ CHANH', './img/water4.jpg', 'TRÀ CHANH', 5, 63),
	(53, 'COCA', './img/water5.jpg', 'COCA', 5, 64),
	(54, 'FANTA', './img/water6.jpg', 'FANTA', 5, 65),
	(55, 'SPRITE', './img/water7.jpg', 'SPRITE', 5, 66),
	(56, 'COCA LIGHT', './img/water8.jpg', 'COCA LIGHT', 5, 67),
	(57, 'test', '', 'dsd', 1, 75),
	(58, 'test2', '', '323', 1, 76),
	(59, 'test3', '', 'kdasndj', 1, 77),
	(60, 'test4', '', '223', 1, 78);

-- Dumping structure for table burgershop2.taikhoan
CREATE TABLE IF NOT EXISTS `taikhoan` (
  `maTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `tenDangNhap` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`maTaiKhoan`),
  UNIQUE KEY `tenDangNhap` (`tenDangNhap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.taikhoan: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
