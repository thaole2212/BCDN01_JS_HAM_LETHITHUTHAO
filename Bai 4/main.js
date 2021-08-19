function tinhTien(){
    var loaiKH=document.getElementById("inputLoaiKH").value;
    var soKenh=parseFloat(document.getElementById("inputSoKenh").value);
    var soKetNoi=parseFloat(document.getElementById("inputSoKetNoi").value);
    var maKH= document.getElementById("inputName").value;
    
    var tienCap=0;
    if(loaiKH=="nhaDan"){
        tienCap=4.5+20.5+7.5*soKenh
    }else if(loaiKH=="doanhNghiep"){
        if(soKetNoi>0 && soKetNoi<=10){
            tienCap=15+50*soKenh+75
        }else{
            tienCap=15+50*soKenh+75+(soKetNoi-10)*5
        }
    }else{
        tienCap="không hợp lệ"
    }
    
    document.getElementById("txtTinhTien").innerHTML="Mã khách hàng: "+maKH + " Số tiền cap: "+tienCap + " $"
}
document.getElementById("btnTinhTien").onclick=tinhTien;
document.getElementById("inputLoaiKH").onchange=function(){
    loaiKH=document.getElementById("inputLoaiKH").value;
    if(loaiKH=="nhaDan"){
    document.getElementById("inputSoKetNoi").style.display="none";
    document.getElementById("nhapsoketnoi").style.display="none";
    }else if(loaiKH=="doanhNghiep"){
        document.getElementById("inputSoKetNoi").style.display="block";
        document.getElementById("nhapsoketnoi").style.display="block";   
    }
}