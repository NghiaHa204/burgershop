class SanPham {
  constructor(maSanPham, tenSanPham, hinhAnh, moTa, maLoai, maCongThuc) {
    this.maSanPham = maSanPham;
    this.tenSanPham = tenSanPham;
    this.hinhAnh = hinhAnh;
    this.moTa = moTa;
    this.maLoai = maLoai
    this.maCongThuc = maCongThuc
  }
}

class CongThuc {
  constructor(maCongThuc, tenCongThuc) {
    this.maCongThuc = maCongThuc;
    this.tenCongThuc = tenCongThuc;
    this.nguyenLieu = [];
  }

  themNguyenLieu(nguyenLieu) {
    this.nguyenLieu.push(nguyenLieu);
  }
}

class NguyenLieu {
  constructor(maNguyenLieu, tenNguyenLieu) {
    this.maNguyenLieu = maNguyenLieu;
    this.tenNguyenLieu = tenNguyenLieu;
  }
}

class NhaCungCap {
  constructor(maNCC, tenNCC, soDienThoai, diaChi) {
    this.maNCC = maNCC;
    this.tenNCC = tenNCC;
    this.soDienThoai = soDienThoai;
    this.diaChi = diaChi;
  }
}

class PhieuNhap {
  constructor(maPhieuNhap, maNCC, ngayNhap, tongGia) {
    this.maPhieuNhap = maPhieuNhap;
    this.maNCC = maNCC;
    this.ngayNhap = ngayNhap;
    this.tongGia = tongGia;
  }
}

class ChiTietPhieuNhap {
  constructor(maPhieuNhap, maNguyenLieu, soLuong, donGia) {
    this.maPhieuNhap = maPhieuNhap;
    this.maNguyenLieu = maNguyenLieu;
    this.soLuong = soLuong;
    this.donGia = donGia;
  }
}

class TaiKhoan {
  constructor(maTaiKhoan, tenDangNhap, matKhau) {
    this.maTaiKhoan = maTaiKhoan;
    this.tenDangNhap = tenDangNhap;
    this.matKhau = matKhau;
  }
}

class NhanVien {
  constructor(
    maNhanVien,
    tenNhanVien,
    gioiTinh,
    soDienThoai,
    diaChi,
    ngaySinh
  ) {
    this.maNhanVien = maNhanVien;
    this.tenNhanVien = tenNhanVien;
    this.gioiTinh = gioiTinh;
    this.soDienThoai = soDienThoai;
    this.diaChi = diaChi;
    this.ngaySinh = ngaySinh;
  }
}

class KhachHang {
  constructor(maKhachHang, tenKhachHang, soDienThoai, email, tenDangNhap, matKhau, ngayDangKy) {
    this.maKhachHang = maKhachHang;
    this.tenKhachHang = tenKhachHang;
    this.soDienThoai = soDienThoai;
    this.email = email
    this.tenDangNhap = tenDangNhap
    this.matKhau = matKhau
    this.ngayDangKy = ngayDangKy
  }
}

class Bills {
  constructor(id, user_id, date_bill, timeid, address, van_chuyen, total_money, trang_thai, username) {
    this.id = id
    this.user_id = user_id
    this.date_bill = date_bill
    this.timeid = timeid
    this.address = address
    this.van_chuyen = van_chuyen
    this.total_money = total_money
    this.trang_thai = trang_thai
    this.username = username
  }
}

class bill_items {
  constructor(id, bill_timeid, title, count, price) {
    this.id = id;
    this.bill_timeid = bill_timeid;
    this.title = title;
    this.count = count;
    this.price = price
  }
}

class Kho{
  constructor(maNguyenLieu, tenNguyenLieu, soLuong){
    this.maNguyenLieu = maNguyenLieu
    this.tenNguyenLieu = tenNguyenLieu
    this.soLuong = soLuong
  }
}

class Lo{
  constructor(maLo, maPhieuNhap, soLuong, gia){
    this.maLo = maLo
    this.maPhieuNhap = maPhieuNhap
    this.soLuong = soLuong
    this.gia = gia
  }
}

class Loai{
  constructor(maLoai, tenLoai){
    this.maLoai = maLoai
    this.tenLoai = tenLoai
  }
}