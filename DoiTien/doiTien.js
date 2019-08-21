function chuyenDoi() {
    let giaTri = parseFloat(document.getElementById("giaTri").value);
    let select1 = document.getElementById("select1");
    let select2 = document.getElementById("select2");
    let result = document.getElementById("result");

    if((select1.value === "vnd")&&(select2.value=== "dollar")){
        result.innerHTML = giaTri/23000;
    }
    if((select1.value === "dollar")&&(select2.value=== "vnd")){
        result.innerHTML = giaTri*23000;
    }


}