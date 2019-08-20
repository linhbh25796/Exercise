let inputWidth;
let inputHeight;
inputWidth = prompt("Nhap vao chieu dai: ");
inputHeight = prompt("Nhap vao chieu rong: ");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width*height;
document.write("Area = "+area);