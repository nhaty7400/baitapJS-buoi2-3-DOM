/**
 * MÔ HÌNH 3 KHỐI
 * 
 * Input: lương một ngày salary, số ngày làm number
 * 
 * Step: 
 * B1: Khai báo biến và lấy giá trị từ html
 * 
 * B2: Lập công thức tính
 * Tổng lương = lương một ngày * số ngày làm
 * total = salary * number;
 * 
 * B3: Thông báo kết quả bằng innerhtml
 * 
 * Output: Tổng lương total
 * 
 */

function calcSalary(){
    var salary=document.getElementById("salary-b1").value;
    var number=document.getElementById("number-b1").value;

    var total=salary*number;

    document.getElementById("total-b1").innerHTML="Tổng lương là " + total;
}

document.getElementById("btnCalc-b1").onclick=calcSalary;