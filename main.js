

//1.Tính tiền lương nhân viên 


document.getElementById("btnCongLuong").onclick = function(){

    //Lấy số lương cơ bản và số ngày lương

    var soLuongCB = document.getElementById("txtluong").value *1;
    var soNgayLam = document.getElementById("txtngaylam").value *1;
   
    //Tính số lương
    var congLuong = soLuongCB * soNgayLam;

    //DOM kết quả ra html
    document.getElementById("subject").innerHTML = congLuong;

}


//2.Giá trị trung bình

document.getElementById("btnGiaTriTB").onclick = function() {

    //Lấy số liệu của 5 số thực do người dùng nhập vào

    var soThu1 = document.getElementById("txtSothu1").value *1;
    var soThu2 = document.getElementById("txtSothu2").value *1;
    var soThu3 = document.getElementById("txtSothu3").value *1;
    var soThu4 = document.getElementById("txtSothu4").value *1;
    var soThu5 = document.getElementById("txtSothu5").value *1;

    //Tính giá trị trung bình của 5 số thực

    var giaTriTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) /5;

    //DOM ra trang html

    document.getElementById("txtgiaTriTB").innerHTML = giaTriTB;

    }


//3.Quy đổi tiền

document.getElementById("btnVND").onclick = function(){
    
//Lấy số USD do người dùng nhập vào
    var soUSD = document.getElementById("txtUSD").value *1;

//Chuyển VNĐ sang USD

    var soVND = 23500 * soUSD;

//DOM ra trang html
    document.getElementById("txtVND").innerHTML = soVND;
}





// 4.Tính diện tích, chu vi hình chữ nhật


document.getElementById("btnCVDT").onclick = function() {
    
    //Lấy số chiều dài và chiều rộng do người dùng nhập vào

    var chieuDai = document.getElementById("txtChieuDai").value *1;
    var chieuRong = document.getElementById("txtChieuRong").value *1;

    //Tính diện tích và chu vi

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    var S = "Diện tích là: " + dienTich;
    var P = "Chu vi là: " + chuVi;

    //DOM ra trang html

    document.getElementById("txtCV").innerHTML = S;
    document.getElementById("txtDT").innerHTML = P;

}


// Tính tổng 2 ký số


// var n= 12;
// var soHangchuc;
// var soHangDV;
// var tong;

// var soHangDV = parseInt(n % 10);
// var soHangchuc  = parseInt(n / 10);
// var tong = soHangDV + soHangchuc;

// console.log("Tổng 2 ký số vừa nhập là:" + tong);

document.getElementById("btnSoThuc").onclick = function() {

    //Lây số thực từ người dùng nhập vào

    var soThuc = document.getElementById("txtSoThuc").value *1;

    //Tính tổng 2 ký số

    var soHangDV = parseInt(soThuc % 10);
    var soHangChuc = parseInt(soThuc / 10);
    var tongKyso = soHangDV + soHangChuc;

    //DOM ra trang html

    document.getElementById("txtTongKySo").innerHTML = tongKyso;

}