function getEle(ele) {
    return document.getElementById(ele);
}

var kiemTraNhap = function(idInput, idTB, message) {
    var value = getEle(idInput).value;
    if (value.length > 0) {
        getEle(idTB).style.display = "none";
        getEle(idInput).style.border = "none";
        return true;
    }
    getEle(idTB).style.display = "block";
    getEle(idInput).style.border = "1px solid red";
    getEle(idTB).innerHTML = message;
    return false;

}

var kiemTraDoDai = function(idInput, idTB, min, max) {
    var value = getEle(idInput).value;
    if (value.length > max || value.length < min) {
        getEle(idTB).style.display = "block";
        getEle(idInput).style.border = "1px solid red";
        getEle(idTB).innerHTML = `Độ dài yêu cầu từ ${min} tới ${max} kí tự`;
        return false;
    }
    getEle(idTB).style.display = "none";
    getEle(idInput).style.border = "none";
    return true;
}



var kiemTraText = function(idInput, idTB, message) {
    var value = getEle(idInput).value;

    var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềếểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$")

    if (pattern.test(value)) {
        getEle(idTB).style.display = "none";
        getEle(idInput).style.border = "none";
        return true;
    }
    getEle(idTB).style.display = "block";
    getEle(idInput).style.border = "1px solid red";
    getEle(idTB).innerHTML = message;
    return false;
}

var kiemTraNumber = function(idInput, idTB, message) {
    var value = getEle(idInput).value;

    var pattern = new RegExp("^[0-9]+$")

    if (pattern.test(value)) {
        getEle(idTB).style.display = "none";
        getEle(idInput).style.border = "none";
        return true;
    }
    getEle(idTB).style.display = "block";
    getEle(idInput).style.border = "1px solid red";
    getEle(idTB).innerHTML = message;
    return false;
}

var kiemTraChucVu = function(idInput, idTB, message) {
    var value = getEle(idInput);
    if (value.selectedIndex == 0) {
        getEle(idTB).style.display = "block";
        getEle(idInput).style.border = "1px solid red";
        getEle(idTB).innerHTML = message;
        return false;
    } else {
        getEle(idTB).style.display = "none";
        getEle(idInput).style.border = "none";
        return true;
    }
}
var kiemTraEmail = function(idInput, idTB, message) {
    var value = getEle(idInput).value;
    var pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
        "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")

    if (pattern.test(value)) {
        getEle(idTB).style.display = "none";
        getEle(idInput).style.border = "none";
        return true;
    }
    getEle(idTB).style.display = "block";
    getEle(idInput).style.border = "1px solid red";
    getEle(idTB).innerHTML = message;
    return false;
}