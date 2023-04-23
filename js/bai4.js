/**
 * Input: chiều dài và chiều rộng hình chữ nhật
 * 
 * Step: 
 * 
 * B1: Tạo hàm, gắn hàm vào button
 * 
 * B2: Trong hàm, tạo công thức tính sau đó gắn kết quả vào html
 * cv = (cd + cr)*2;
 * dt = cd * cr;
 * 
 * Output: chu vi và diện tích hình chữ nhật
 */

function CalcHcn(){
    var cd=document.getElementById("cd-b4").value;
    var cr=document.getElementById("cr-b4").value;

    cv = (Number(cd) + Number(cr))*2;
    dt = cd * cr;

    document.getElementById("result-b4").innerHTML=" Chu vi: " + cv + ", diện tích: " + dt;
}

document.getElementById("btnCalc-b4").onclick=CalcHcn;