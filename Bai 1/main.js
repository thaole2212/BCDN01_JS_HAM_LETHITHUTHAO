function ketQua(){
    var diemMon1=parseFloat(document.getElementById("inputMon1").value);
    var diemMon2= parseFloat(document.getElementById("inputMon2").value);
    var diemMon3= parseFloat(document.getElementById("inputMon3").value);
    var diemChuan= parseFloat(document.getElementById("inputDiemChuan").value);
    var diemKhuVuc= parseFloat(document.getElementById("inputArea").value);
    var diemDoiTuong= parseFloat(document.getElementById("inputObject").value);
    var sum=0;
    sum=diemMon1+diemMon2+diemMon3+diemKhuVuc+diemDoiTuong;
    console.log(sum);
    if(diemMon1==0||diemMon2==0||diemMon3==0){
        document.getElementById("txtKetQua").innerHTML="Rớt rồi"
    }else if(sum>diemChuan){
        document.getElementById("txtKetQua").innerHTML="Đậu rồi"
    }else{
        document.getElementById("txtKetQua").innerHTML="Rớt rồi"
    }

}
document.getElementById("btnKetQua").onclick=ketQua;