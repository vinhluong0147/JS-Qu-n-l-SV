function NhanVien(ma, ho, ten, ngaylam, chucvu, email) {
    this.MaNhanVien = ma;
    this.HoNhanVien = ho;
    this.TenNhanVien = ten;
    this.NgayBatDauLam = ngaylam;
    this.LuongCoBan = 500;
    this.ChucVu = chucvu;
    this.Email = email;
    this.Luong = 0;

    this.TinhLuong = function() {
        if (this.ChucVu === 'Sếp') {
            this.Luong = this.LuongCoBan * 3;
        } else if (this.ChucVu === 'Trưởng phòng') {
            this.Luong = this.LuongCoBan * 2;
        } else if (this.ChucVu === 'Nhân viên') {
            this.Luong = this.LuongCoBan * 1;
        }
    }
}