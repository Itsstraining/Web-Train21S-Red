let itemList = document.getElementById("itemList");
let cart = [
    { name:"Shirt 1",chitiet:"Orange t-shirt",gia:"200.000VND"},
    {name:"Shirt 2",chitiet:"Dark blue t-shirt",gia:"300.000VND"},
    {name:"Shirt 3",chitiet:"Black t-shirt",gia:"400.000VND"},
    { name:"Pant 1",chitiet:"Jean",gia:"500.000VND"},
    {name:"Pant 2",chitiet:"Trouser",gia:"400.000VND"},
    {name:"Pant 3",chitiet:"Khaki",gia:"300.000VND"},
    { name:"Shoes 1",chitiet:"Sneakers",gia:"1.500.000VND"},
    {name:"Shoes 2",chitiet:"Boots",gia:"2.300.000VND"},
    {name:"Shoes 3",chitiet:"Slip-on",gia:"1.200.000VND"}];
let row1=document.getElementById("row");

for (let i of cart){
    let itemElem = document.createElement("li");
    let name = document.createElement("p")
    name.innerHTML=i.name;
    let chitiet = document.createElement("p")
    chitiet.innerHTML=i.chitiet;
    let gia = document.createElement("p")
    gia.innerHTML=i.gia;
  
    let btnAdd= document.createElement("button").innerHTML
    btnAdd="Them";
    itemElem.appendChild(name);
    itemElem.appendChild(chitiet);
    itemElem.appendChild(gia);
    row1.appendChild(itemElem);

}

let btAddItem = document.getElementById("bt1");
btAddItem.onclick = () =>{
     let newItem = {name: prompt("Nhập tên món hàng cần mua")}
     cart.push(newItem);
     btnAdd(newItem);
}
