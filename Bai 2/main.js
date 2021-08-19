function tinhTienDien(){
    var soDien=parseFloat(document.getElementById("inputSoDien").value);
    var Ten= document.getElementById("inputName").value;
    
    var tienDien=0;
    
    if(soDien<=50&&soDien>0){
        tienDien=500*soDien
    }else if(soDien>50&&soDien<=100){
        tienDien=650*(soDien-50)+500*50
    }else if(soDien>100 &&soDien<=200){
    tienDien=850*(soDien-100)+(500*50)+(650*50)
    }else if(soDien>200 &&soDien<=350){
    tienDien=1100*(soDien-200)+(500*50)+(650*50)+(100*850)
    }else if(soDien>350){
    tienDien=1300*(soDien-200)+(500*50)+(650*50)+(100*850)+(150*1100)
    }else{
        tienDien="không hợp lệ"
    }
    document.getElementById("txtTinhTien").innerHTML="Họ tên: "+Ten + " Số tiền điện: "+tienDien + " VND"
}
document.getElementById("btnTinhTien").onclick=tinhTienDien;