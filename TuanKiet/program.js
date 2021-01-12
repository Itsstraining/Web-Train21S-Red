
let a = [];
let n = parseInt(prompt("Nhap N:"));

try {
    if (n<0){

        alert("nhap sai roi");
    }
else{
    for (let i = 0; i <n ; i++){
        if(i==0 || i==1) a.push(1);
        else a.push(a[i-1]+a[i-2]);
    }
}
} catch (error) {
    console.log("nhap sai");
    n = parseInt(prompt("Nhap N:"));

}



console.log("mang can tim la: " ,a);
document.write(a);