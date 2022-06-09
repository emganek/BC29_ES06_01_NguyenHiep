// EXERCISE 01---------------------------
colorListBtn = document.querySelector("#ex-01 .card-body")
const colorList = ["blue", "green", "pink", "yellow", "red"];

const renderColorList = colorArr => {
    colorArr.forEach(element => {
        colorListBtn.innerHTML += `
        <button class="btn" style="background-color:${element}" onclick="changeHouseColor('${element}')">${element}</button>
        ` 
    });
}

const changeHouseColor = chosenColor =>{
    document.querySelector(".house-picture").style.backgroundColor = chosenColor;
}

renderColorList(colorList)

// EXERCISE 02---------------------------
const tinhDiemTB = (...diem) => {
    let tongDiem = 0;
    diem.forEach(element =>{
        tongDiem += element;
    });
    return tongDiem/ diem.length;

}

document.getElementById("tinhTBCap1").onclick = () =>{
    diemToanCap1 = document.getElementById("diemToanCap1").value*1;
    diemVanCap1 = document.getElementById("diemVanCap1").value*1;
    diemLyCap1 = document.getElementById("diemLyCap1").value*1;

    document.getElementById("diemTBCap1").innerHTML = "Điểm trung bình là: "+tinhDiemTB(diemToanCap1, diemVanCap1, diemLyCap1);
}

document.getElementById("tinhTBCap2").onclick = () =>{
    diemToanCap2 = document.getElementById("diemToanCap2").value*1;
    diemVanCap2 = document.getElementById("diemVanCap2").value*1;
    diemLyCap2 = document.getElementById("diemLyCap2").value*1;
    diemHoaCap2 = document.getElementById("diemHoaCap2").value*1;

    document.getElementById("diemTBCap2").innerHTML = "Điểm trung bình là: "+tinhDiemTB(diemToanCap2, diemVanCap2, diemLyCap2, diemHoaCap2);
}

// EXERCISE 03---------------------------
const textContent = document.querySelector("#ex-03 h1").innerHTML;
const heading = document.querySelector("#ex-03 h1");

const splitChar = (content) =>{
    heading.innerHTML = "";
    chars = [...content];
    chars.forEach(element =>{
        heading.innerHTML +=`
        <span>${element}</span>
        `
    });
}

splitChar(textContent);