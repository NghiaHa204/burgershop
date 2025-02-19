const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import thư viện CORS
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;
const db2 = require("./db2");
// Cấu hình lại giới hạn của payload
app.use(express.json({ limit: "50mb" })); // Tăng giới hạn lên 50MB (hoặc phù hợp với yêu cầu của bạn)
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Thay đổi giới hạn của payload
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// Sử dụng CORS middleware để cho phép tất cả các origin
app.use(cors());

// Middleware để parse JSON body
app.use(bodyParser.json());

// Kết nối MySQL
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

// API đăng ký người dùng
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

// API đăng nhập
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

// API lấy dữ liệu từ bảng menu_items
app.get("/api/menuItems", (req, res) => {
  const query = "SELECT * FROM sanpham"; // Câu lệnh SQL lấy tất cả món ăn từ bảng menu_items

  db2.query(query, (err, results) => {
    // Sửa từ 'connection.query' thành 'db.query'
    if (err) {
      return res
        .status(500)
        .json({ error: "Lỗi khi lấy dữ liệu món ăn từ MySQL" });
    }
    res.json(results); // Trả về dữ liệu món ăn
  });
});

// API lấy dữ liệu từ bảng kho
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

// API lưu giỏ hàng vào MySQL
app.post("/api/save-cart", (req, res) => {
  const { cart } = req.body;
  const userId = req.user.id; // Lấy user_id từ session hoặc token

  cart.forEach((item) => {
    const query =
      "INSERT INTO cart (user_id, menu_item_id, quantity, price) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [userId, item.item_id, item.quantity, item.price],
      (err, result) => {
        // Sửa từ 'connection.query' thành 'db.query'
        if (err) {
          return res.status(500).json({ error: "Lỗi khi lưu giỏ hàng" });
        }
      }
    );
  });

  res.json({ success: true, message: "Giỏ hàng đã được lưu vào MySQL" });
});
// API thêm sản phẩm
app.post("/api/add-product", async (req, res) => {
  const { type, id, image, title, content, price } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!type || !id || !image || !title || !content || !price) {
    // Log dữ liệu đầu vào khi có lỗi
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

  try {
    // Kiểm tra nếu ID đã tồn tại trong cùng type
    const [existingProducts] = await db
      .promise()
      .query("SELECT * FROM menu_items WHERE type = ? AND id = ?", [type, id]);

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

    // Log chi tiết truy vấn để kiểm tra
    console.log("Chạy truy vấn:", query, [
      type,
      id,
      image,
      title,
      content,
      price,
    ]);

    await db.promise().query(query, [type, id, image, title, content, price]);

    res
      .status(200)
      .json({ success: true, message: "Thêm sản phẩm thành công!" });
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi server, không thể thêm sản phẩm.",
    });
  }
});
app.get("/api/statistics", async (req, res) => {
  const { startDate, endDate } = req.query; // Ngày bắt đầu và kết thúc từ query parameters

  // Kiểm tra tham số đầu vào
  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({ message: "Vui lòng cung cấp ngày bắt đầu và ngày kết thúc" });
  }
  console.log("Truy vấn thống kê:", `Từ ${startDate} đến ${endDate}`);

  try {
    // Truy vấn tổng số đơn hàng, tổng doanh thu và tổng số sản phẩm đã bán
    const [orderStats] = await db.promise().query(
      `
            SELECT 
                COUNT(b.id) AS total_orders, 
                SUM(b.total_money) AS total_revenue
            FROM bills b
            WHERE b.date_bill BETWEEN ? AND ?
        `,
      [startDate, endDate]
    );

    // Truy vấn tổng số sản phẩm đã bán
    const [productStats] = await db.promise().query(
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
      [startDate, endDate]
    );

    // Truy vấn số người dùng mới
    const [userStats] = await db.promise().query(
      `
            SELECT 
                COUNT(*) AS new_users
            FROM users
            WHERE dateSignUp BETWEEN ? AND ?
        `,
      [startDate, endDate]
    );

    // Kết hợp dữ liệu và trả về kết quả
    res.json({
      success: true,
      total_orders: orderStats[0].total_orders || 0,
      total_revenue: orderStats[0].total_revenue || 0,
      total_products_sold: productStats[0].total_products_sold || 0,
      new_users: userStats[0].new_users || 0,
    });
  } catch (error) {
    console.error("Lỗi khi lấy thống kê:", error);
    res
      .status(500)
      .json({ success: false, message: "Lỗi server", details: error.message });
  }
});

// API lấy danh sách người dùng từ MySQL
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
// API xóa người dùng
app.delete("/api/users/:username", (req, res) => {
  const username = req.params.username;

  // Kiểm tra xem người dùng có tồn tại không
  const checkQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkQuery, [username], (err, results) => {
    if (err) {
      console.error("Lỗi khi kiểm tra người dùng:", err);
      return res.status(500).json({ message: "Lỗi khi kiểm tra người dùng" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }

    // Xóa người dùng
    const deleteQuery = "DELETE FROM users WHERE username = ?";
    db.query(deleteQuery, [username], (err, result) => {
      if (err) {
        console.error("Lỗi khi xóa người dùng:", err);
        return res.status(500).json({ message: "Lỗi khi xóa người dùng" });
      }
      res.status(200).json({ message: "Người dùng đã được xóa" });
    });
  });
});

// API để lưu hóa đơn
app.post("/api/bills", async (req, res) => {
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

  try {
    // Fetch `user_id` based on `username`
    const [userResult] = await db
      .promise()
      .query("SELECT id FROM users WHERE username = ?", [username]);

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
    await db
      .promise()
      .query(billQuery, [
        user_id,
        username,
        date_bill,
        timeid,
        address,
        van_chuyen,
        total_money,
      ]);

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
    await db.promise().query(itemsQuery, [itemsValues]);

    res
      .status(200)
      .json({ success: true, message: "Hóa đơn đã được lưu thành công" });
  } catch (error) {
    console.error("Lỗi khi lưu hóa đơn:", error.message);
    res.status(500).json({
      success: false,
      message: "Lỗi khi lưu hóa đơn",
      error: error.message,
    });
  }
});

// API to update the status of a bill
app.put("/api/bills/:timeid/status", async (req, res) => {
  const { timeid } = req.params;
  const { trang_thai } = req.body;

  try {
    const sql = `
            UPDATE bills
            SET trang_thai = ?
            WHERE timeid = ?
        `;

    const [result] = await db.promise().query(sql, [trang_thai, timeid]);

    if (result.affectedRows > 0) {
      res
        .status(200)
        .json({ success: true, message: "Cập nhật trạng thái thành công" });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Không tìm thấy hóa đơn" });
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật trạng thái hóa đơn:", error);
    res
      .status(500)
      .json({ success: false, message: "Lỗi khi cập nhật trạng thái hóa đơn" });
  }
});

app.get("/api/bills", async (req, res) => {
  try {
    const [results] = await db.promise().query("SELECT * FROM bills");
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách hóa đơn:", error);
    res
      .status(500)
      .json({ success: false, message: "Lỗi khi lấy danh sách hóa đơn" });
  }
});

app.get("/api/bill-items/:timeid", async (req, res) => {
  const { timeid } = req.params;

  try {
    const [results] = await db
      .promise()
      .query("SELECT * FROM bill_items WHERE bill_timeid = ?", [timeid]);
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết hóa đơn:", error);
    res
      .status(500)
      .json({ success: false, message: "Lỗi khi lấy chi tiết hóa đơn" });
  }
});

// API để xóa hóa đơn
app.delete("/api/bills/:timeid", async (req, res) => {
  const { timeid } = req.params;

  try {
    await db.promise().query("DELETE FROM bills WHERE timeid = ?", [timeid]);
    await db
      .promise()
      .query("DELETE FROM bill_items WHERE bill_timeid = ?", [timeid]);
    res.status(200).json({ success: true, message: "Hóa đơn đã được xóa" });
  } catch (error) {
    console.error("Lỗi khi xóa hóa đơn:", error);
    res.status(500).json({ success: false, message: "Lỗi khi xóa hóa đơn" });
  }
});
// API: Get bills for a specific user
app.get("/api/user-bills/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const sql = `
            SELECT * 
            FROM bills 
            WHERE user_id = ?
        `;
    const [rows] = await db.promise().query(sql, [userId]);

    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.error("Error fetching user bills:", error);
    res
      .status(500)
      .json({ success: false, message: "Unable to fetch user bills." });
  }
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/img"); // Thư mục lưu trữ ảnh
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Lưu tên file gốc
  },
});

const upload = multer({ storage: storage });

// API upload ảnh
app.post("/api/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "Không có file nào được tải lên." });
  }

  const fileName = `./img/${req.file.originalname}`; // Đường dẫn tương đối
  res.status(200).json({ success: true, fileName: fileName });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
