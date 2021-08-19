function tinhThue(){
    var tongThuNhap=parseFloat(document.getElementById("inputThuNhap").value);
    var soNguoiPhuThuoc=parseFloat(document.getElementById("inputSoNguoi").value);
    var Ten= document.getElementById("inputName").value;
    
    var tienThue=0;
    var thuNhapChiuThue=tongThuNhap-4000000-soNguoiPhuThuoc*1600000

    if(thuNhapChiuThue<=60000000&&thuNhapChiuThue>0){
        tienThue=0.05*thuNhapChiuThue
    }else if(thuNhapChiuThue>60000000&&thuNhapChiuThue<=120000000){
        tienThue=0.1*(thuNhapChiuThue-60000000)+(60000000*0.05)
    }else if(thuNhapChiuThue>120000000 &&thuNhapChiuThue<=210000000){
    tienThue=0.15*(thuNhapChiuThue-120000000)+(0.1*60000000)+(0.05*60000000)
    }else if(thuNhapChiuThue>210000000 &&thuNhapChiuThue<=384000000){
    tienThue=0.2*(thuNhapChiuThue-210000000)+(0.1*60000000)+(0.05*60000000)+(90000000*0.15)
    }else if(thuNhapChiuThue>384000000 &&thuNhapChiuThue<=624000000){
    tienThue=0.25*(thuNhapChiuThue-384000000)+(0.1*60000000)+(0.05*60000000)+(90000000*0.15)+(174000000*0.2)
    }else if(thuNhapChiuThue>624000000 &&thuNhapChiuThue<=960000000){
    tienThue=0.3*(thuNhapChiuThue-624000000)+(0.1*60000000)+(0.05*60000000)+(90000000*0.15)+(174000000*0.2)+(240000000*0.25)
    }else if(thuNhapChiuThue>960000000){
    tienThue=0.35*(thuNhapChiuThue-960000000)+(0.1*60000000)+(0.05*60000000)+(90000000*0.15)+(174000000*0.2)+(240000000*0.25)+(336000000*0.3)
    }else{
        tienThue="không hợp lệ"
    }
    document.getElementById("txtTinhThue").innerHTML="Họ tên: "+Ten + " Số tiền thuế: "+tienThue + " VND"
}
document.getElementById("btnTinhThue").onclick=tinhThue;