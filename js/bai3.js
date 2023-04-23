/**
 * Input: tiền USD
 * 
 * Step: 
 * 
 * B1: Tạo hàm, gắn hàm vào button
 * 
 * B2: Trong hàm, tạo công thức tính và gắn kết quả vào html
 * result = usd * 23500;
 * 
 * Output: tiền VND
 */

function CalcUsd(){
    var usd=document.getElementById("usd-b3").value;

    result = usd * 23500;

    document.getElementById("result-b3").innerHTML=usd + " USD bằng " + Intl.NumberFormat('vn-VN').format(result) + " VND";
}

document.getElementById("btnCalc-b3").onclick=CalcUsd;