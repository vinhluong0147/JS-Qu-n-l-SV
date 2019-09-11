var mangNhanVien = [];

function getEle(ele) {
    return document.getElementById(ele);
}

function ThemNhanVien() {
    if (CheckValidate()) {
        var maNV = getEle("msnv").value;
        var hoNV = getEle("ho").value;
        var tenNV = getEle("ten").value;
        var ngayBD = getEle("datepicker").value;
        var chucVu = getEle("chucvu").value;
        var email = getEle("email").value;
        var nhanVien = new NhanVien(maNV, hoNV, tenNV, ngayBD, chucVu, email);
        nhanVien.TinhLuong();
        mangNhanVien.push(nhanVien);
        HienThi(mangNhanVien);

        getEle("msnv").value = '';
        getEle("ho").value = '';
        getEle("ten").value = '';
        getEle("chucvu").selectedIndex = "0";
        getEle("email").value = '';

    } else {}
}

function HienThi(mangHienThi) {
    var tbody = getEle("tbodyNhanVien");
    var content = "";
    for (var i = 0; i < mangHienThi.length; i++) {
        var nhanVien = mangHienThi[i];
        content +=
            `
            <tr>
                <td>${i + 1}</td>
                <td>${nhanVien.MaNhanVien}</td>
                <td>${nhanVien.HoNhanVien} ${nhanVien.TenNhanVien}</td>
                <td>${nhanVien.ChucVu}</td>
                <td>${nhanVien.Luong}</td>
                <td>
                    <button class="btn btn-warning" 
                    onclick="layThongTinNhanVien('${nhanVien.MaNhanVien}')"
                    >Sửa</button>
                    <button class="btn btn-danger"
                    data-maNV = ${nhanVien.MaNhanVien}
                    onclick="XoaNhanVien(event)">Xóa</button>
                </td>
            </tr>
        `
    }
    tbody.innerHTML = content;
}

function layThongTinNhanVien(maNV) {
    var nhanVienCanTim;
    for (var i = 0; i < mangNhanVien.length; i++) {
        if (mangNhanVien[i].MaNhanVien === maNV) {
            nhanVienCanTim = mangNhanVien[i];
            break;
        }
    }
    getEle("msnv").value = nhanVienCanTim.MaNhanVien;
    getEle("ho").value = nhanVienCanTim.HoNhanVien;
    getEle("ten").value = nhanVienCanTim.TenNhanVien;
    getEle("datepicker").value = nhanVienCanTim.NgayBatDauLam;
    getEle("chucvu").value = nhanVienCanTim.ChucVu;
    getEle("email").value = nhanVienCanTim.Email;
    getEle('msnv').setAttribute('readonly', true);

    document.getElementById('btnThemNhanVien').style.display = "none";
    document.getElementById('btn-group-edit').style.display = "block";
}

function LuuThongTin() {
    var jsonMangNV = JSON.stringify(mangNhanVien);
    localStorage.setItem("DSNV", jsonMangNV);
}

function LayThongTin() {
    var jsonMangNV = localStorage.getItem("DSNV");
    mangNhanVien = JSON.parse(jsonMangNV);
    HienThi(mangNhanVien);
}

function capNhatNhanVien() {
    if (CheckValidate()) {
        var maNV = getEle("msnv").value;
        var hoNV = getEle("ho").value;
        var tenNV = getEle("ten").value;
        var ngayBD = getEle("datepicker").value;
        var chucVu = getEle("chucvu").value;
        var email = getEle("email").value;
        var nhanVien = new NhanVien(maNV, hoNV, tenNV, ngayBD, chucVu, email);
        nhanVien.TinhLuong();

        for (var i = 0; i < mangNhanVien.length; i++) {
            if (mangNhanVien[i].MaNhanVien === maNV) {
                mangNhanVien[i] = nhanVien;
                break;
            }
        }
        HienThi(mangNhanVien);

        getEle("msnv").value = '';
        getEle("ho").value = '';
        getEle("ten").value = '';
        getEle("chucvu").selectedIndex = "0";
        getEle("email").value = '';
        getEle('msnv').removeAttribute('readonly');

        document.getElementById('btnThemNhanVien').style.display = "block";
        document.getElementById('btn-group-edit').style.display = "none";
    }
}

function HuyCapNhat() {
    getEle("msnv").value = '';
    getEle("ho").value = '';
    getEle("ten").value = '';
    getEle("datepicker").value = '';
    getEle("chucvu").selectedIndex = "0";
    getEle("email").value = '';
    getEle('msnv').removeAttribute('readonly');
    document.getElementById('btnThemNhanVien').style.display = "block";
    document.getElementById('btn-group-edit').style.display = "none";
}

function findIndex(id) {
    for (var i = 0; i < mangNhanVien.length; i++) {
        if (mangNhanVien[i].MaNhanVien === id) {
            return i;
        }
    }
    return -1;
}

function XoaNhanVien(event) {
    var button_target = event.target;
    var maNhanVien = button_target.getAttribute("data-MaNV");
    var index = findIndex(maNhanVien);
    if (index !== -1) {
        mangNhanVien.splice(index, 1);
        HienThi(mangNhanVien);
    }
}

function timKiemNhanVien() {
    var danhSachTimKiem = [];
    var keyword = getEle("timKiem").value;
    for (var i = 0; i < mangNhanVien.length; i++) {
        var hoTen = mangNhanVien[i].HoNhanVien + mangNhanVien[i].TenNhanVien;
        if (mangNhanVien[i].MaNhanVien.includes(keyword) || hoTen.toLowerCase().indexOf(keyword.toLowerCase().trim()) !== -1) {
            danhSachTimKiem.push(mangNhanVien[i]);
        }
    }
    HienThi(danhSachTimKiem);
}

function SortByLuong() {
    var value = getEle("sortLuong");
    switch (value.selectedIndex) {
        case 1:
            mangNhanVien.sort(function(a, b) {
                return a.Luong - b.Luong;
            })
            HienThi(mangNhanVien)
            break;
        case 2:
            mangNhanVien.sort(function(a, b) {
                return b.Luong - a.Luong;
            })
            HienThi(mangNhanVien)
            break;
        default:
            break;
    }
}

