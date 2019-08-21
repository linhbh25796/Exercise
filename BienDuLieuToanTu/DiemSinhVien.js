function showDiem() {
    let nhapDiemVatLy, nhapDiemHoaHoc, nhapDiemSinhHoc,nhapTenSV;
    nhapTenSV = prompt("Nhap ten sinh vien");
    nhapDiemVatLy = prompt("Nhap vao diem vat ly: ");
    nhapDiemHoaHoc = prompt("Nhap vao diem hoa hoc: ");
    nhapDiemSinhHoc = prompt("Nhap vao diem sinh hoc: ");
    let diemVatLy = parseFloat(nhapDiemVatLy);
    let diemHoaHoc = parseFloat(nhapDiemHoaHoc);
    let diemSinhHoc = parseFloat(nhapDiemSinhHoc);
    let diemTb = parseFloat();
    let diemTong = parseFloat();
    diemTong = diemSinhHoc + diemHoaHoc + diemVatLy;
    diemTb = diemTong / 3;
    document.write("Ten sinh vien: "+nhapTenSV);
    document.write("<br>");
    document.write("Diem vat ly: " + diemVatLy);
    document.write("<br>");
    document.write("Diem hoa hoc: " + diemHoaHoc);
    document.write("<br>");
    document.write("Diem sinh hoc: " + diemSinhHoc);
    document.write("<br>");
    document.write("Diem trung binh: " + diemTb.toFixed(2));
    document.write("<br>");
    document.write("Diem tong: " + diemTong);
}