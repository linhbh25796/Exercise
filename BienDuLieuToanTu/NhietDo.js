function chuyenDoiNhietDo() {
    let nhapDoC;
    nhapDoC = prompt("Nhap do C: ");
    let doC = parseInt(nhapDoC);
    let doF;

    document.write("Do C hien tai: "+doC);
    document.write("<br>");
    doF = 32 + (9*doC/5);
    document.writeln("Do F chuyen doi: "+doF.toFixed(2));
}