document.querySelector('.payment-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Ngăn tải lại trang khi submit

    // Lấy thông tin từ localStorage
    const user = JSON.parse(localStorage.getItem("userlogin"));
    if (!user) {
        alert("Bạn cần đăng nhập để thực hiện thanh toán!");
        return;
    }

    // Lấy thông tin từ biểu mẫu
    const address = document.getElementById("accress_order").value.trim();
    const shippingMethod = document.getElementById("hinh_thuc_van_chuyen").value.trim();
    const pendingBill = JSON.parse(localStorage.getItem("pendingBill"));

    if (!pendingBill) {
        alert("Không tìm thấy hóa đơn để thanh toán!");
        return;
    }

    // Chuẩn bị dữ liệu hóa đơn
    const bill = {
        username: user.username,
        date_bill: pendingBill.date_bill, // Ngày hóa đơn đã lưu tạm
        timeid: pendingBill.timeid, // ID duy nhất của hóa đơn
        address: address,
        van_chuyen: shippingMethod,
        total_money: pendingBill.total_money,
        items: pendingBill.items // Danh sách sản phẩm
    };

    // Gửi dữ liệu hóa đơn đến API
    try {
        const response = await fetch('http://localhost:3000/api/bills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bill) // Gửi hóa đơn ở định dạng JSON
        });

        const result = await response.json();
        if (result.success) {
            alert("Thanh toán thành công! Hóa đơn của bạn đã được lưu.");
            localStorage.removeItem('pendingBill'); // Xóa hóa đơn tạm thời khỏi localStorage
            window.location.href = 'success.html'; // Chuyển sang trang thành công
        } else {
            alert("Thanh toán thất bại: " + result.message);
        }
    } catch (error) {
        console.error('Lỗi khi gửi yêu cầu thanh toán:', error);
        alert("Lỗi kết nối, vui lòng thử lại!");
    }
});
function goBack() {
    // Kiểm tra xem có trang trước đó trong history không
    if (window.history.length > 1) {
        window.history.back(); // Quay lại trang trước
    } else {
        window.location.href = "index.html"; // Hoặc chuyển đến trang chính nếu không có history
    }
}
