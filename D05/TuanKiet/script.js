let cart = [
{name :"Túi đeo chéo",gia:"150.000đ"},
{name : "Áo Đen",gia:"350.000đ"},
{name : "Áo Trắng Jack",gia:"350.000vnd"},
{name : "Áo 5theway",gia:"250.000vnd"},


];

function addItemtoList(item) {
    let itemDiv = document.createElement("div")
    let li= document.createElement("li");
    let name = document.createElement("p");


    let price = document.createElement("p");
    let btnAdd= document.createElement("button");
    
    let br = document.createElement("br");

    name.innerHTML= item.name;
    price.innerHTML= item.gia;
    btnAdd.innerHTML= "Mua";
    li.appendChild(itemDiv);
    itemDiv.appendChild(name);
    itemDiv.appendChild(price);
    itemDiv.appendChild(br);
    cartBorder.appendChild(li);
}

//Sung Táo Tắc Thanh long Quýt Ổi
let cartBorder = document.getElementById("cartBorder");

for(let i of cart){
    let itemDiv = document.createElement("div")
    let li= document.createElement("li");
    let name = document.createElement("p");


    let price = document.createElement("p");
    let btnAdd= document.createElement("button");
    
    let br = document.createElement("br");

    name.innerHTML= i.name;
    price.innerHTML= i.gia;
    btnAdd.innerHTML= "Mua";
    li.appendChild(itemDiv);
    itemDiv.appendChild(name);
    itemDiv.appendChild(price);
    itemDiv.appendChild(br);
    cartBorder.appendChild(li);
    
}