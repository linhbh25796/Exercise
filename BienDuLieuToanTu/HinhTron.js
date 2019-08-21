function tinhToanHT() {
    let p,s,r,nhapR;
    nhapR = prompt("Nhap ban kinh: ");
    r = parseFloat(nhapR);
    s = r * 3.14;
    p = r*2*3.14;
    document.write("Ban kinh hinh tron = "+r);
    document.write("<br>");
    document.write("Dien tich hinh tron = "+s.toFixed(3));
    document.write("<br>");
    document.write("Chu vi hinh tron = "+p.toFixed(3))
}