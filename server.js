const express = require("express");
const mysql = require("mysql2"); // Sử dụng mysql2 không Promise
const bodyParser = require("body-parser");
const cors = require("cors"); // Import thư viện CORS
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Kết nối MySQL với mysql2 không Promise cho db (sử dụng createConnection)
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Thay bằng thông tin đăng nhập MySQL của bạn
  password: "", // Mật khẩu MySQL
  database: "burgershop",
});

db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
    return;
  }
  console.log("Kết nối MySQL thành công!");
});

// Tải db2 từ module (giả định db2.js dùng mysql2 không Promise)
const db2 = require("./db2");

// Cấu hình lại giới hạn của payload
app.use(express.json({ limit: "50mb" })); // Tăng giới hạn lên 50MB
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Thay đổi giới hạn của payload
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Sử dụng CORS middleware để cho phép tất cả các origin
app.use(cors());

// API tạo công thức (POST /api/congthuc) - dùng db2
app.post("/api/congthuc", (req, res) => {
  const { tenCongThuc } = req.body;

  if (!tenCongThuc) {
    return res
      .status(400)
      .json({ message: "Dữ liệu không hợp lệ: tenCongThuc là bắt buộc" });
  }

  const query = "INSERT INTO congthuc (tenCongThuc) VALUES (?)";
  const values = [tenCongThuc];

  db2.query(query, values, (err, result) => {
    if (err) {
      console.error("Lỗi khi thêm công thức vào MySQL:", err);
      return res
        .status(500)
        .json({ message: "Lỗi server khi thêm công thức", error: err.message });
    }
    res.status(201).json({
      message: "Công thức đã được thêm thành công",
      maCongThuc: result.insertId,
    });
  });
});

// API thêm chi tiết công thức (POST /api/chitietcongthuc) - dùng db2
app.post("/api/chitietcongthuc", (req, res) => {
  const details = req.body;

  if (!Array.isArray(details) || details.length === 0) {
    return res.status(400).json({
      message: "Dữ liệu không hợp lệ: cần danh sách chi tiết công thức",
    });
  }

  for (const detail of details) {
    const { maCongThuc, maNguyenLieu, soLuong } = detail;
    if (!maCongThuc || !maNguyenLieu || !soLuong) {
      return res.status(400).json({
        message:
          "Dữ liệu không hợp lệ: maCongThuc, maNguyenLieu, soLuong là bắt buộc",
      });
    }
    if (isNaN(soLuong) || soLuong <= 0) {
      return res.status(400).json({
        message: "Dữ liệu không hợp lệ: soLuong phải là số lớn hơn 0",
      });
    }
  }

  let errors = false;
  details.forEach((detail) => {
    const { maCongThuc, maNguyenLieu, soLuong } = detail;
    db2.query(
      "SELECT maCongThuc FROM congthuc WHERE maCongThuc = ?",
      [maCongThuc],
      (err, congthucRows) => {
        if (err) {
          console.error("Lỗi khi kiểm tra mã công thức:", err);
          errors = true;
          return res.status(500).json({
            message: "Lỗi server khi kiểm tra mã công thức",
            error: err.message,
          });
        }
        if (congthucRows.length === 0) {
          return res
            .status(400)
            .json({ message: `Mã công thức ${maCongThuc} không tồn tại` });
        }

        db2.query(
          "SELECT maNguyenLieu FROM kho WHERE maNguyenLieu = ?",
          [maNguyenLieu],
          (err, nguyenlieuRows) => {
            if (err) {
              console.error("Lỗi khi kiểm tra mã nguyên liệu:", err);
              errors = true;
              return res.status(500).json({
                message: "Lỗi server khi kiểm tra mã nguyên liệu",
                error: err.message,
              });
            }
            if (nguyenlieuRows.length === 0) {
              return res.status(400).json({
                message: `Mã nguyên liệu ${maNguyenLieu} không tồn tại`,
              });
            }

            const query =
              "INSERT INTO chitietcongthuc (maCongThuc, maNguyenLieu, soLuong) VALUES (?, ?, ?)";
            const values = [maCongThuc, maNguyenLieu, parseFloat(soLuong)];
            db2.query(query, values, (err) => {
              if (err) {
                console.error("Lỗi khi thêm chi tiết công thức:", err);
                errors = true;
                return res.status(500).json({
                  message: "Lỗi server khi thêm chi tiết công thức",
                  error: err.message,
                });
              }
              if (!errors && details.length === 1) {
                // Chỉ gửi response khi hoàn thành tất cả nếu chỉ có 1 bản ghi
                res.status(201).json({
                  message: "Chi tiết công thức đã được thêm thành công",
                });
              }
            });
          }
        );
      }
    );
  });

  if (details.length > 1) {
    let completed = 0;
    details.forEach((detail) => {
      const { maCongThuc, maNguyenLieu, soLuong } = detail;
      db2.query(
        "SELECT maCongThuc FROM congthuc WHERE maCongThuc = ?",
        [maCongThuc],
        (err, congthucRows) => {
          if (err) {
            console.error("Lỗi khi kiểm tra mã công thức:", err);
            if (!res.headersSent) {
              res.status(500).json({
                message: "Lỗi server khi kiểm tra mã công thức",
                error: err.message,
              });
            }
            return;
          }
          if (congthucRows.length === 0) {
            if (!res.headersSent) {
              res
                .status(400)
                .json({ message: `Mã công thức ${maCongThuc} không tồn tại` });
            }
            return;
          }

          db2.query(
            "SELECT maNguyenLieu FROM kho WHERE maNguyenLieu = ?",
            [maNguyenLieu],
            (err, nguyenlieuRows) => {
              if (err) {
                console.error("Lỗi khi kiểm tra mã nguyên liệu:", err);
                if (!res.headersSent) {
                  res.status(500).json({
                    message: "Lỗi server khi kiểm tra mã nguyên liệu",
                    error: err.message,
                  });
                }
                return;
              }
              if (nguyenlieuRows.length === 0) {
                if (!res.headersSent) {
                  res.status(400).json({
                    message: `Mã nguyên liệu ${maNguyenLieu} không tồn tại`,
                  });
                }
                return;
              }

              const query =
                "INSERT INTO chitietcongthuc (maCongThuc, maNguyenLieu, soLuong) VALUES (?, ?, ?)";
              const values = [maCongThuc, maNguyenLieu, parseFloat(soLuong)];
              db2.query(query, values, (err) => {
                if (err) {
                  console.error("Lỗi khi thêm chi tiết công thức:", err);
                  if (!res.headersSent) {
                    res.status(500).json({
                      message: "Lỗi server khi thêm chi tiết công thức",
                      error: err.message,
                    });
                  }
                  return;
                }
                completed++;
                if (completed === details.length && !res.headersSent) {
                  res.status(201).json({
                    message: "Chi tiết công thức đã được thêm thành công",
                  });
                }
              });
            }
          );
        }
      );
    });
  }
});

// API thêm sản phẩm (POST /api/sanpham) - dùng db2
app.post("/api/sanpham", (req, res) => {
  const { tenSanPham, hinhAnh, moTa, maLoai, maCongThuc } = req.body;

  if (!tenSanPham || !moTa || !maLoai || !maCongThuc) {
    return res.status(400).json({
      message:
        "Dữ liệu không hợp lệ: tenSanPham, moTa, maLoai, maCongThuc là bắt buộc",
    });
  }
  if (isNaN(maLoai) || maLoai <= 0) {
    return res
      .status(400)
      .json({ message: "Dữ liệu không hợp lệ: maLoai phải là số lớn hơn 0" });
  }
  if (isNaN(maCongThuc) || maCongThuc <= 0) {
    return res.status(400).json({
      message: "Dữ liệu không hợp lệ: maCongThuc phải là số lớn hơn 0",
    });
  }

  // Kiểm tra maLoai tồn tại trong bảng loai
  db2.query(
    "SELECT maLoai FROM loai WHERE maLoai = ?",
    [maLoai],
    (err, loaiRows) => {
      if (err) {
        console.error("Lỗi khi kiểm tra mã loại:", err);
        return res.status(500).json({
          message: "Lỗi server khi kiểm tra mã loại",
          error: err.message,
        });
      }
      if (loaiRows.length === 0) {
        return res
          .status(400)
          .json({ message: `Mã loại ${maLoai} không tồn tại` });
      }

      // Kiểm tra maCongThuc tồn tại trong bảng congthuc
      db2.query(
        "SELECT maCongThuc FROM congthuc WHERE maCongThuc = ?",
        [maCongThuc],
        (err, congthucRows) => {
          if (err) {
            console.error("Lỗi khi kiểm tra mã công thức:", err);
            return res.status(500).json({
              message: "Lỗi server khi kiểm tra mã công thức",
              error: err.message,
            });
          }
          if (congthucRows.length === 0) {
            return res
              .status(400)
              .json({ message: `Mã công thức ${maCongThuc} không tồn tại` });
          }

          // Chèn sản phẩm vào bảng sanpham
          const query =
            "INSERT INTO sanpham (tenSanPham, hinhAnh, moTa, maLoai, maCongThuc) VALUES (?, ?, ?, ?, ?)";
          const values = [tenSanPham, hinhAnh || "", moTa, maLoai, maCongThuc];
          db2.query(query, values, (err, result) => {
            if (err) {
              console.error("Lỗi khi thêm sản phẩm vào MySQL:", err);
              return res.status(500).json({
                message: "Lỗi server khi thêm sản phẩm",
                error: err.message,
              });
            }
            res.status(201).json({
              message: "Sản phẩm đã được thêm thành công",
              maSanPham: result.insertId,
            });
          });
        }
      );
    }
  );
});

// API lấy danh sách phiếu nhậpnhập
app.get("/api/hien-phieu-nhap", (req, res) => {
  if (!db2) {
    return res.status(500).json({ error: "Lỗi kết nối đến cơ sở dữ liệu" });
  }

  db2.query("SELECT * FROM phieunhap", (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy dữ liệu phiếu nhập:", err);
      return res
        .status(500)
        .json({ error: "Lỗi khi lấy dữ liệu phiếu nhập từ MySQL" });
    }

    res.status(200).json(results); // Trả về danh sách phiếu nhập
  });
});

// API lấy danh sách nguyên liệu (GET /api/nguyenlieu) - dùng db2
app.get("/api/nguyenlieu", (req, res) => {
  const query = "SELECT maNguyenLieu, tenNguyenLieu FROM kho";
  db2.query(query, (err, rows) => {
    if (err) {
      console.error("Lỗi khi lấy danh sách nguyên liệu từ MySQL:", err);
      return res.status(500).json({
        message: "Lỗi server khi lấy danh sách nguyên liệu",
        error: err.message,
      });
    }
    if (rows.length > 0) {
      res.json(rows);
    } else {
      res.status(404).json({ message: "Không tìm thấy nguyên liệu nào" });
    }
  });
});

// API đăng ký người dùng - dùng db
app.post("/api/register", (req, res) => {
  const { name, email, phone_number, username, password, dateSignup } =
    req.body;

  // Kiểm tra email và tên đăng nhập có tồn tại không
  db.query(
    "SELECT * FROM users WHERE email = ? OR username = ?",
    [email, username],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Lỗi hệ thống" });
      }

      if (results.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Email hoặc tên đăng nhập đã được sử dụng!",
        });
      }

      // Thêm người dùng mới vào cơ sở dữ liệu
      const query =
        "INSERT INTO users (name, email, phone_number, username, password, dateSignup) VALUES (?, ?, ?, ?, ?, ?)";
      db.query(
        query,
        [name, email, phone_number, username, password, dateSignup],
        (err, results) => {
          if (err) {
            return res
              .status(500)
              .json({ success: false, message: "Lỗi khi thêm người dùng!" });
          }
          res
            .status(200)
            .json({ success: true, message: "Đăng ký thành công!" });
        }
      );
    }
  );
});

// API đăng nhập - dùng db
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Tìm kiếm người dùng trong cơ sở dữ liệu
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Lỗi hệ thống" });
      }
      // Kiểm tra nếu không có người dùng nào
      if (results.length === 0) {
        return res
          .status(400)
          .json({ success: false, message: "Sai thông tin đăng nhập" });
      }
      // Kiểm tra mật khẩu
      const user = results[0];
      if (user.password === password) {
        return res.status(200).json({
          success: true,
          message: "Đăng nhập thành công",
          user: user,
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Sai thông tin đăng nhập" });
      }
    }
  );
});

// API lấy dữ liệu từ bảng menu_items - dùng db2
app.get("/api/menuItems", (req, res) => {
  const query = "SELECT * FROM sanpham"; // Câu lệnh SQL lấy tất cả món ăn từ bảng menu_items

  db2.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Lỗi khi lấy dữ liệu món ăn từ MySQL" });
    }
    res.json(results); // Trả về dữ liệu món ăn
  });
});

// API lấy dữ liệu từ bảng kho - dùng db2
app.get("/api/kho", (req, res) => {
  const query = "SELECT * FROM kho";

  db2.query(query, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Lỗi khi lấy dữ liệu nguyên liệu từ MySQL" });
    }
    res.json(result);
  });
});

// API thêm Phiếu nhậpnhập
app.post("/api/add-Phieunhap", async (req, res) => {
  console.log("Dữ liệu nhận được:", req.body);
  let { tongGia, ngayNhap } = req.body;

  db2.query(
    "INSERT INTO phieunhap (ngayNhap, tongGia) VALUES (?, ?)",
    [ngayNhap, tongGia],
    (err, result) => {
      if (err) {
        console.error("Lỗi khi thêm phiếu nhập:", err);
        return res.status(500).json({ message: "Lỗi khi thêm phiếu nhập" });
      }

      let maPhieuNhap = result.insertId; // Lấy ID phiếu nhập vừa tạo
      res.json({ maPhieuNhap }); // Trả về cho client
    }
  );
});

// API thêm chi tiết phiếu nhập
app.post("/api/add-ChiTietPhieuNhap", (req, res) => {
  console.log("Dữ liệu nhận được:", req.body); // Debug

  let { maPhieuNhap, chiTiet } = req.body;
  if (!maPhieuNhap || !Array.isArray(chiTiet) || chiTiet.length === 0) {
    return res.status(400).json({ message: "Dữ liệu không hợp lệ!" });
  }

  let values = chiTiet.map((item) => [
    maPhieuNhap,
    item.maNguyenLieu,
    item.soLuong,
    item.donGia,
  ]);

  db2.query(
    "INSERT INTO chitietphieunhap (maPhieuNhap, maNguyenLieu, soLuong, donGia) VALUES ?",
    [values],
    (err, result) => {
      if (err) {
        console.error("Lỗi khi thêm chi tiết phiếu nhập:", err);
        return res
          .status(500)
          .json({ message: "Lỗi khi thêm chi tiết phiếu nhập" });
      }
      // Khi chi tiết phiếu nhập thêm thành công, cập nhật số lượng nguyên liệu trong kho
      chiTiet.forEach((item) => {
        console.log([item.maNguyenLieu, item.soLuong]);
        db2.query(
          "UPDATE kho SET soLuong = soLuong + ? WHERE maNguyenLieu = ?",
          [parseInt(item.soLuong), parseInt(item.maNguyenLieu)],
          (err) => {
            if (err) {
              console.error("Lỗi khi cập nhật kho:", err);
            }
          }
        );
      });

      res.json({
        message: "Thêm chi tiết phiếu nhập thành công và cập nhật kho",
      });
    }
  );
});

// API lưu giỏ hàng vào MySQL - dùng db2
app.post("/api/save-cart", (req, res) => {
  const { cart } = req.body;
  const userId = req.user.id; // Lấy user_id từ session hoặc token

  cart.forEach((item) => {
    const query =
      "INSERT INTO cart (user_id, menu_item_id, quantity, price) VALUES (?, ?, ?, ?)";
    db2.query(
      query,
      [userId, item.item_id, item.quantity, item.price],
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Lỗi khi lưu giỏ hàng" });
        }
      }
    );
  });

  res.json({ success: true, message: "Giỏ hàng đã được lưu vào MySQL" });
});

// API thêm sản phẩm - dùng db2
app.post("/api/add-product", (req, res) => {
  const { type, id, image, title, content, price } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!type || !id || !image || !title || !content || !price) {
    console.log("Dữ liệu gửi lên không đầy đủ:", {
      type,
      id,
      image,
      title,
      content,
      price,
    });
    return res
      .status(400)
      .json({ success: false, message: "Dữ liệu không đầy đủ." });
  }

  // Kiểm tra nếu ID đã tồn tại trong cùng type
  db2.query(
    "SELECT * FROM menu_items WHERE type = ? AND id = ?",
    [type, id],
    (err, existingProducts) => {
      if (err) {
        console.error("Lỗi khi kiểm tra sản phẩm:", err);
        return res.status(500).json({
          success: false,
          message: "Lỗi server, không thể kiểm tra sản phẩm.",
        });
      }

      if (existingProducts.length > 0) {
        return res.status(400).json({
          success: false,
          message: `ID ${id} đã tồn tại trong loại sản phẩm ${type}.`,
        });
      }

      // Chèn sản phẩm mới vào bảng
      const query = `
            INSERT INTO menu_items (type, id, image, title, content, price)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

      console.log("Chạy truy vấn:", query, [
        type,
        id,
        image,
        title,
        content,
        price,
      ]);

      db2.query(
        query,
        [type, id, image, title, content, price],
        (err, result) => {
          if (err) {
            console.error("Lỗi khi thêm sản phẩm:", err);
            return res.status(500).json({
              success: false,
              message: "Lỗi server, không thể thêm sản phẩm.",
            });
          }
          res
            .status(200)
            .json({ success: true, message: "Thêm sản phẩm thành công!" });
        }
      );
    }
  );
});

// API lấy dữ liệu cho chi tiết hóa đơn của Nhập kho
app.get("/api/chitiet-phieunhap", (req, res) => {
  const maPhieuNhap = req.query.maPhieuNhap; // Lấy mã phiếu nhập từ query

  if (!maPhieuNhap) {
    return res.status(400).json({ error: "Thiếu mã phiếu nhập" });
  }

  const sql = `
    SELECT k.tenNguyenLieu, ctpn.soLuong, ctpn.donGia
    FROM chitietphieunhap ctpn
    JOIN kho k ON ctpn.maNguyenLieu = k.maNguyenLieu
    WHERE ctpn.maPhieuNhap = ?;
  `;

  db2.query(sql, [maPhieuNhap], (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(results);
  });
});

app.get("/api/statistics", (req, res) => {
  const { startDate, endDate } = req.query; // Ngày bắt đầu và kết thúc từ query parameters

  // Kiểm tra tham số đầu vào
  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({ message: "Vui lòng cung cấp ngày bắt đầu và ngày kết thúc" });
  }
  console.log("Truy vấn thống kê:", `Từ ${startDate} đến ${endDate}`);

  db2.query(
    `
            SELECT 
                COUNT(b.id) AS total_orders, 
                SUM(b.total_money) AS total_revenue
            FROM bills b
            WHERE b.date_bill BETWEEN ? AND ?
        `,
    [startDate, endDate],
    (err, orderStats) => {
      if (err) {
        console.error("Lỗi khi lấy thống kê đơn hàng:", err);
        return res.status(500).json({
          success: false,
          message: "Lỗi server khi lấy thống kê đơn hàng",
        });
      }

      db2.query(
        `
                    SELECT 
                        SUM(bi.count) AS total_products_sold
                    FROM bill_items bi
                    WHERE bi.bill_timeid IN (
                        SELECT b.timeid 
                        FROM bills b 
                        WHERE b.date_bill BETWEEN ? AND ?
                    )
                `,
        [startDate, endDate],
        (err, productStats) => {
          if (err) {
            console.error("Lỗi khi lấy thống kê sản phẩm:", err);
            return res.status(500).json({
              success: false,
              message: "Lỗi server khi lấy thống kê sản phẩm",
            });
          }

          db2.query(
            `
                            SELECT 
                                COUNT(*) AS new_users
                            FROM users
                            WHERE dateSignUp BETWEEN ? AND ?
                        `,
            [startDate, endDate],
            (err, userStats) => {
              if (err) {
                console.error("Lỗi khi lấy thống kê người dùng:", err);
                return res.status(500).json({
                  success: false,
                  message: "Lỗi server khi lấy thống kê người dùng",
                });
              }

              res.json({
                success: true,
                total_orders: orderStats[0].total_orders || 0,
                total_revenue: orderStats[0].total_revenue || 0,
                total_products_sold: productStats[0].total_products_sold || 0,
                new_users: userStats[0].new_users || 0,
              });
            }
          );
        }
      );
    }
  );
});

// API lấy danh sách người dùng từ MySQL - dùng db
app.get("/api/users", (req, res) => {
  const query = 'SELECT * FROM users WHERE username != "admin"'; // Lọc ra những người dùng không phải admin
  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy dữ liệu người dùng:", err);
      return res
        .status(500)
        .json({ message: "Lỗi khi lấy dữ liệu người dùng" });
    }
    res.json(results); // Trả về danh sách người dùng
  });
});

// API xóa người dùng - dùng db
app.delete("/api/users/:username", (req, res) => {
  const username = req.params.username;

  // Kiểm tra xem người dùng có tồn tại không
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Lỗi khi kiểm tra người dùng:", err);
        return res.status(500).json({ message: "Lỗi khi kiểm tra người dùng" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Người dùng không tồn tại" });
      }

      // Xóa người dùng
      db.query(
        "DELETE FROM users WHERE username = ?",
        [username],
        (err, result) => {
          if (err) {
            console.error("Lỗi khi xóa người dùng:", err);
            return res.status(500).json({ message: "Lỗi khi xóa người dùng" });
          }
          res.status(200).json({ message: "Người dùng đã được xóa" });
        }
      );
    }
  );
});

// API để lưu hóa đơn - dùng db2
app.post("/api/bills", (req, res) => {
  const {
    username,
    date_bill,
    timeid,
    address,
    van_chuyen,
    total_money,
    items,
  } = req.body;

  // Validate input data
  if (
    !username ||
    !date_bill ||
    !timeid ||
    !address ||
    !van_chuyen ||
    !items ||
    items.length === 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Thiếu thông tin hóa đơn hoặc sản phẩm",
    });
  }

  // Fetch `user_id` based on `username`
  db2.query(
    "SELECT id FROM users WHERE username = ?",
    [username],
    (err, userResult) => {
      if (err) {
        console.error("Lỗi khi lấy user_id:", err);
        return res
          .status(500)
          .json({ success: false, message: "Lỗi khi lấy user_id" });
      }

      if (userResult.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Người dùng không tồn tại" });
      }

      const user_id = userResult[0].id;

      // Insert into `bills` table with `user_id`, `username`, and other info
      const billQuery = `
            INSERT INTO bills (user_id, username, date_bill, timeid, address, van_chuyen, total_money)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
      db2.query(
        billQuery,
        [
          user_id,
          username,
          date_bill,
          timeid,
          address,
          van_chuyen,
          total_money,
        ],
        (err) => {
          if (err) {
            console.error("Lỗi khi lưu hóa đơn:", err);
            return res
              .status(500)
              .json({ success: false, message: "Lỗi khi lưu hóa đơn" });
          }

          // Insert items into `bill_items` table
          const itemsQuery = `
                INSERT INTO bill_items (bill_timeid, title, count, price)
                VALUES ?
            `;
          const itemsValues = items.map((item) => [
            timeid, // Reference to the `timeid` of the bill
            item.title, // Product title
            item.count, // Quantity of the product
            item.price, // Price of the product
          ]);
          db2.query(itemsQuery, [itemsValues], (err) => {
            if (err) {
              console.error("Lỗi khi lưu chi tiết hóa đơn:", err);
              return res.status(500).json({
                success: false,
                message: "Lỗi khi lưu chi tiết hóa đơn",
              });
            }
            res.status(200).json({
              success: true,
              message: "Hóa đơn đã được lưu thành công",
            });
          });
        }
      );
    }
  );
});

// API to update the status of a bill - dùng db2
app.put("/api/bills/:timeid/status", (req, res) => {
  const { timeid } = req.params;
  const { trang_thai } = req.body;

  const sql = `
        UPDATE bills
        SET trang_thai = ?
        WHERE timeid = ?
    `;

  db2.query(sql, [trang_thai, timeid], (err, result) => {
    if (err) {
      console.error("Lỗi khi cập nhật trạng thái hóa đơn:", err);
      return res.status(500).json({
        success: false,
        message: "Lỗi khi cập nhật trạng thái hóa đơn",
      });
    }

    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ success: true, message: "Cập nhật trạng thái thành công" });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Không tìm thấy hóa đơn" });
    }
  });
});

app.get("/api/bills", (req, res) => {
  db2.query("SELECT * FROM bills", (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy danh sách hóa đơn:", err);
      return res
        .status(500)
        .json({ success: false, message: "Lỗi khi lấy danh sách hóa đơn" });
    }
    res.status(200).json({ success: true, data: results });
  });
});

app.get("/api/bill-items/:timeid", (req, res) => {
  const { timeid } = req.params;

  db2.query(
    "SELECT * FROM bill_items WHERE bill_timeid = ?",
    [timeid],
    (err, results) => {
      if (err) {
        console.error("Lỗi khi lấy chi tiết hóa đơn:", err);
        return res
          .status(500)
          .json({ success: false, message: "Lỗi khi lấy chi tiết hóa đơn" });
      }
      res.status(200).json({ success: true, data: results });
    }
  );
});

// API để xóa hóa đơn - dùng db2
app.delete("/api/bills/:timeid", (req, res) => {
  const { timeid } = req.params;

  db2.query("DELETE FROM bill_items WHERE bill_timeid = ?", [timeid], (err) => {
    if (err) {
      console.error("Lỗi khi xóa chi tiết hóa đơn:", err);
      return res
        .status(500)
        .json({ success: false, message: "Lỗi khi xóa chi tiết hóa đơn" });
    }

    db2.query("DELETE FROM bills WHERE timeid = ?", [timeid], (err) => {
      if (err) {
        console.error("Lỗi khi xóa hóa đơn:", err);
        return res
          .status(500)
          .json({ success: false, message: "Lỗi khi xóa hóa đơn" });
      }
      res.status(200).json({ success: true, message: "Hóa đơn đã được xóa" });
    });
  });
});

// API: Get bills for a specific user - dùng db2
app.get("/api/user-bills/:userId", (req, res) => {
  const { userId } = req.params;

  const sql = `
        SELECT * 
        FROM bills 
        WHERE user_id = ?
    `;
  db2.query(sql, [userId], (err, rows) => {
    if (err) {
      console.error("Error fetching user bills:", err);
      return res
        .status(500)
        .json({ success: false, message: "Unable to fetch user bills." });
    }
    res.status(200).json({ success: true, data: rows });
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    const files = fs.readdirSync("public/img");
    let maxNumber = 0;

    files.forEach((file) => {
      if (file.startsWith("burger") && file.endsWith(".png")) {
        const number = parseInt(file.replace("burger", "").replace(".png", ""));
        if (!isNaN(number) && number > maxNumber) {
          maxNumber = number;
        }
      }
    });

    const newNumber = maxNumber + 1;
    const filename = `burger${newNumber}.png`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

// API upload hình ảnh
app.post("/api/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ message: "Không có file hình ảnh được tải lên" });
  }
  const imagePath = `/img/${req.file.filename}`;
  res.status(201).json({ path: imagePath });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
