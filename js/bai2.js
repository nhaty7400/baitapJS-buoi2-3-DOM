/**
 * Input: 5 số thực num1, num2, num3, num4, num5
 * 
 * Step:
 * 
 * B1: Tạo hàm, gắn hàm vào button
 * 
 * B2: Trong hàm, tạo công thức tính
 * result = (num1 + num2 + num3 + num4 + num5)/5;
 * 
 * Output: kết quả trung bình result
 */

function CalcAver(){
    var num1=document.getElementById("num1-b2").value;
    var num2=document.getElementById("num2-b2").value;
    var num3=document.getElementById("num3-b2").value;
    var num4=document.getElementById("num4-b2").value;
    var num5=document.getElementById("num5-b2").value;

    result = (Number(num1)  + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5;

    document.getElementById("result-b2").innerHTML="Giá trị trung bình là " + result;
}

document.getElementById("btnCalc-b2").onclick=CalcAver;