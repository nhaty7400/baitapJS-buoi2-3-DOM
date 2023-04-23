/**
 * Input: số có 2 chữ số
 * 
 * Step:
 * 
 * B1: Tạo hàm, gắn hàm vào button
 * 
 * B2: Trong hàm, tạo công thức tính sau đó gắn kết quả vào html
 * result = Math.floor(num/10) + num%10;
 * 
 * Output: tổng của 2 ký số
 */

function CalcNum(){
    var num=document.getElementById("num-b5").value;

    result = Math.floor(num/10) + num%10;

    document.getElementById("result-b5").innerHTML=" Tổng 2 ký số là: " + result;

}

document.getElementById("btnCalc-b5").onclick=CalcNum;