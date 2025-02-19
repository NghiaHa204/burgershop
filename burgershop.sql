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
  `soLuong` int(11) DEFAULT NULL,
  PRIMARY KEY (`maCongThuc`,`maNguyenLieu`),
  KEY `maNguyenLieu` (`maNguyenLieu`),
  CONSTRAINT `chitietcongthuc_ibfk_1` FOREIGN KEY (`maCongThuc`) REFERENCES `congthuc` (`maCongThuc`),
  CONSTRAINT `chitietcongthuc_ibfk_2` FOREIGN KEY (`maNguyenLieu`) REFERENCES `nguyenlieu` (`maNguyenLieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.chitietcongthuc: ~0 rows (approximately)

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
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.congthuc: ~52 rows (approximately)
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
	(67, 'thucuong8');

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

-- Dumping data for table burgershop2.kho: ~0 rows (approximately)

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

-- Dumping structure for table burgershop2.nguyenlieu
CREATE TABLE IF NOT EXISTS `nguyenlieu` (
  `maNguyenLieu` int(11) NOT NULL AUTO_INCREMENT,
  `tenNguyenLieu` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`maNguyenLieu`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.nguyenlieu: ~16 rows (approximately)
INSERT INTO `nguyenlieu` (`maNguyenLieu`, `tenNguyenLieu`) VALUES
	(1, 'bánh mì'),
	(2, 'thịt bò'),
	(3, 'cá'),
	(4, 'thịt gà'),
	(5, 'thịt heo'),
	(6, 'phô mai'),
	(7, 'cánh gà'),
	(8, 'rong biển'),
	(9, 'khoai tây'),
	(10, 'nước cam'),
	(11, 'nước suối'),
	(12, 'trà chanh'),
	(13, 'coca'),
	(14, 'fanta'),
	(15, 'sprite'),
	(16, 'coca light');

-- Dumping structure for table burgershop2.nhacungcap
CREATE TABLE IF NOT EXISTS `nhacungcap` (
  `maNCC` int(11) NOT NULL AUTO_INCREMENT,
  `tenNCC` varchar(255) DEFAULT NULL,
  `diaChi` varchar(255) DEFAULT NULL,
  `soDienThoai` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`maNCC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.nhacungcap: ~0 rows (approximately)

-- Dumping structure for table burgershop2.phieunhap
CREATE TABLE IF NOT EXISTS `phieunhap` (
  `maPhieuNhap` int(11) NOT NULL AUTO_INCREMENT,
  `maNCC` int(11) DEFAULT NULL,
  `ngayNhap` date DEFAULT NULL,
  `tongGia` float DEFAULT NULL,
  PRIMARY KEY (`maPhieuNhap`),
  KEY `maNCC` (`maNCC`),
  CONSTRAINT `phieunhap_ibfk_1` FOREIGN KEY (`maNCC`) REFERENCES `nhacungcap` (`maNCC`)
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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table burgershop2.sanpham: ~56 rows (approximately)
INSERT INTO `sanpham` (`maSanPham`, `tenSanPham`, `hinhAnh`, `moTa`, `maLoai`, `maCongThuc`) VALUES
	(1, 'BURGER BÒ TEMPURA JR', './img/burger1.png', '+Burger Bò Tempura Jr (size vừa): bò nướng lửa hồng cùng tempura rau củ', 1, NULL),
	(2, 'BURGER BÒ TEMPURA', './img/burger2.png', 'Burger Bò Tempura (size lớn): bò nướng lửa hồng và tempura rau củ', 1, NULL),
	(3, 'BURGER BÒ NƯỚNG WHOPPER JR', './img/burger3.jpg', 'BURGER BÒ NƯỚNG WHOPPER JR', 1, NULL),
	(4, 'BURGER CÁ', './img/burger4.jpg', 'BURGER CÁ', 1, NULL),
	(5, 'Burger Bò Nướng Hành Chiên', './img/burger5.jpg', 'Burger Bò Nướng Hành Chiên', 1, NULL),
	(6, 'BURGER GÀ GIÒN CAY', './img/burger6.jpg', 'BURGER GÀ GIÒN CAY', 1, NULL),
	(7, 'BURGER GÀ NƯỚNG', './img/burger7.jpg', 'BURGER GÀ NƯỚNG', 1, NULL),
	(8, 'Burger Bò Phô Mai', './img/burger8.jpg', 'Burger Bò Phô Mai', 1, NULL),
	(9, 'BURGER BÒ THỊT HEO XÔNG KHÓI', './img/burger9.jpg', 'BURGER BÒ THỊT HEO XÔNG KHÓI', 1, NULL),
	(10, 'BURGER 2 MIẾNG BÒ NƯỚNG', './img/burger10.jpg', 'BURGER 2 MIẾNG BÒ NƯỚNG', 1, NULL),
	(11, 'WHOPPER BÒ NƯỚNG', './img/burger11.jpg', 'BURGER BÒ NƯỚNG WHOPPER', 1, NULL),
	(12, 'BURGER 2 MIẾNG BÒ PHÔ MAI', './img/burger12.jpg', 'BURGER 2 MIẾNG BÒ PHÔ MAI', 1, NULL),
	(13, 'COMBO CHIC\'N LOVER 1P', './img/chicken1.png', ' 2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Nước ngọt', 2, NULL),
	(14, 'COMBO CHIC\'N LOVER 1P', './img/chicken2.jpg', '2 Miếng Gà Giòn (cay/ không cay) hoặc 2 Cánh Gà BBQ + 1 Burger Bò Phô Mai + 2 Nước ngọt', 2, NULL),
	(15, 'COMBO BURGER BÒ TEMPURA JR(M)', './img/combo1.png', '1 Burger Bò Tempura Jr (size vừa) + 1 Khoai Tây Chiên (M)', 2, NULL),
	(16, 'GÀ GIÒN CRISPY', './img/chicken4.jpg', '1 Miếng Gà Giòn Crispy (không cay)', 3, NULL),
	(17, 'COMBO GÀ BBQ(3 MIẾNG)', './img/chicken5.jpg', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 miếng gà BBQ', 3, NULL),
	(18, 'COMBO GÀ RÁN GIÒN CAY(3 MIẾNG)', './img/chicken6.jpg', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây Chiên (M) + 3 miếng gà rán giòn cay', 3, NULL),
	(19, 'COMBO GÀ BBQ(2 MIẾNG)', './img/chicken7.jpg', 'BURGER GÀ NƯỚNGCombo Gồm : 1 Nước (M) + 1 Khoai Tây (M) + 2 miếng gà BBQ', 3, NULL),
	(20, 'COMBO GÀ GIÒN KHONG CAY(2 MIẾNG)', './img/chicken8.jpg', 'MAIN COURSE : 1 Nước + 2 miếng Gà Giòn không cay + 1 Khoai Tây Chiên (M)', 3, NULL),
	(21, 'COMBO GÀ GIÒN CAY(2 MIẾNG)', './img/chicken9.jpg', 'Combo Gồm : 1 Nước (M) + 1 Khoai Tây (M) + 2 miếng gà rán giòn cay', 3, NULL),
	(22, 'COMBO GÀ GIÒN KHÔNG CAY(3 MIẾNG)', './img/chicken10.jpg', 'MAIN COURSE : 1 Nước + 3 miếng Gà Giòn không cay + 1 Khoai Tây Chiên (M)', 3, NULL),
	(23, 'Mix Wing 4pcs', './img/chicken11.jpg', 'Mix Wing 4pcs', 3, NULL),
	(24, 'Mix Wing 6pcs', './img/chicken12.jpg', 'Mix Wing 6pcs', 3, NULL),
	(25, 'COMBO FAMILY CHIC\'N LOVERS', './img/chicken3.jpg', '3 Miếng Gà Giòn (cay/ không cay) + 3 Cánh Gà BBQ + 2 Khoai Tây Chiên (L) + 3 Nước ngọt', 3, NULL),
	(26, 'COMBO GÀ RÁN(M)', './img/combo2.jpg', '3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi', 3, NULL),
	(27, 'COMBO GÀ RÁN (L)', './img/combo3.jpg', '4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon', 3, NULL),
	(28, 'COMBO BURGER BÒ NƯỚNG HÀNH CHIÊNCHIÊN', './img/combo4.jpg', '1 Burger Bò Nướng Hành Chiên + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, NULL),
	(29, 'COMBO BURGER BÒ PHÔ MAI(M)', './img/combo5.jpg', '1 Burger Bò Phô Mai (cỡ vừa) + Khoai Tây Chiên (M) + Nước ngọt', 2, NULL),
	(30, 'COMBO BURGER GÀ GIÒN CAY', './img/combo6.jpg', '1 Burger Gà Giòn Cay + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, NULL),
	(31, 'COMBO BURGER GÀ NƯỚNG', './img/combo7.jpg', '1 Burger Gà Nướng + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, NULL),
	(32, 'COMBO BURGER BÒ THỊT HEO XÔNG KHÓI WHOPPER', './img/combo8.jpg', '1 Burger Bò Thịt Heo Xông Khói Sốt BBQ + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, NULL),
	(33, 'COMBO BURGER 2 MIẾNG BÒ PHÔ MAI', './img/combo9.jpg', '1 Burger 2 Miếng Bò Phô Mai + 1 Khoai Tây Chiên (L) + 1 Nước ngọt', 2, NULL),
	(34, 'COMBO BURGER BÒ TEMPURA (L)', './img/combo10.png', '1 Burger Bò Tempura (size lớn) + 1 Khoai Tây Chiên (M)', 2, NULL),
	(35, 'COMBO BURGER BÒ TẮM PHÔ MAI(CỠ LỚN)', './img/combo11.jpg', '1 Burger Bò Tắm Phô Mai (cỡ lớn) + Khoai Tây Chiên (M) + Nước ngọt', 2, NULL),
	(36, 'COMBO BURGER 2 MIẾNG BÒ + THỊT XÔNG KHÓI WHOPPER', './img/combo12.jpg', '1 Burger 2 Miếng Bò Phô Mai Thịt Xông Khói WHOPPER + 1 Khoai Tây Chiên (M) + 1 Nước ngọt', 2, NULL),
	(37, 'GÀ CUỘN RONG BIỂN 4PCS', './img/food1.jpg', 'SEAWEED CHICKEN ROLL 4PCS', 4, NULL),
	(38, 'GÀ CUỘN RONG BIỂN 6PCS', './img/food2.jpg', 'SEAWEED CHICKEN ROLL 6PCS', 4, NULL),
	(39, 'KHOAI TÂY TẮM PHÔ MAI', './img/food3.jpg', 'CHEESY FRIES', 4, NULL),
	(40, 'CÁ CUỘN RONG BIỂN 2PCS', './img/food4.jpg', 'SEAWEED FISH STICK 2PCS', 4, NULL),
	(41, 'CÁ CUỘN RONG BIỂN 4PCS', './img/food5.jpg', 'SEAWEED FISH STICK 4PCS', 4, NULL),
	(42, 'GÀ NUGGETS 3PCS', './img/food6.jpg', 'CHICKEN NUGGETS 3PCS', 4, NULL),
	(43, 'GÀ NUGGETS 4PCS', './img/food7.jpg', 'CHICKEN NUGGETS 4PCS', 4, NULL),
	(44, 'PHÔ MAI QUE 2PSC', './img/food8.jpg', 'CHEESE STICK 2 PSC', 4, NULL),
	(45, 'PHÔ MAI QUE 8PSC', './img/food9.jpg', 'CHEESE STICK 8PSC', 4, NULL),
	(46, 'KHOAI TÂY TẮM PHÔ MAI THỊT XÔNG KHÓI', './img/burger10.jpg', 'CHEESY FRIES BACON', 4, NULL),
	(47, 'KHOAI TÂY CHIÊN SIZE M', './img/food11.jpg', 'FRIES SIZE M', 4, NULL),
	(48, 'KHOAI TÂY CHIÊN SIZE L', './img/food12.jpg', 'FRIES SIZE L', 4, NULL),
	(49, 'NƯỚC CAM', './img/water1.jpg', 'NƯỚC CAM', 5, NULL),
	(50, 'MILO', './img/water2.jpg', 'MILO', 5, NULL),
	(51, 'DASANI', './img/water3.jpg', 'DASANI', 5, NULL),
	(52, 'TRÀ CHANH', './img/water4.jpg', 'TRÀ CHANH', 5, NULL),
	(53, 'COCA', './img/water5.jpg', 'COCA', 5, NULL),
	(54, 'FANTA', './img/water6.jpg', 'FANTA', 5, NULL),
	(55, 'SPRITE', './img/water7.jpg', 'SPRITE', 5, NULL),
	(56, 'COCA LIGHT', './img/water8.jpg', 'COCA LIGHT', 5, NULL);

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
