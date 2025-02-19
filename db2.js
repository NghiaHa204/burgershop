const mysql = require('mysql2');

const db2 = mysql.createConnection({
    host: 'localhost', // hoặc host khác nếu cần
    user: 'root', // hoặc người dùng khác
    password: '', // mật khẩu khác nếu cần
    database: 'burgershop2' // tên cơ sở dữ liệu khác
});

db2.connect((err) => {
    if (err) {
        console.error('Lỗi kết nối MySQL cho db2:', err);
        throw err;
    }
    console.log('Kết nối MySQL cho db2 thành công!');
});

module.exports = db2;