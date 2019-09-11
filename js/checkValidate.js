function CheckValidate() {
    var isValidForm = true;
    var checkHo = kiemTraNhap('ho', 'tbHo', 'Vui lòng nhập Họ') && kiemTraText('ho', 'tbHo', 'Họ phải là chữ') && kiemTraDoDai('ho', 'tbHo', 5, 50);

    var checkTen = kiemTraNhap('ten', 'tbTen', 'Vui lòng nhập Tên') && kiemTraText('ten', 'tbTen', 'Tên phải là chữ') && kiemTraDoDai('ten', 'tbTen', 5, 50);

    var checkMsnv = kiemTraNhap('msnv', 'tbMsnv', 'Vui lòng nhập Mã nhân viên') && kiemTraNumber('msnv', 'tbMsnv', 'Mã nhân viên phải là số') && kiemTraDoDai('msnv', 'tbMsnv', 5, 50);

    var checkChucVu = kiemTraChucVu('chucvu', 'tbChucVu', 'Vui lòng chọn chức vụ');

    var checkEmail = kiemTraNhap('email', 'tbEmail', 'Vui lòng nhập Email') && kiemTraEmail('email', 'tbEmail', 'Email không hợp lệ') && kiemTraDoDai('email', 'tbEmail', 5, 50);
    isValidForm &= checkEmail &= checkHo &= checkChucVu &= checkMsnv &= checkTen;
    return isValidForm;
}