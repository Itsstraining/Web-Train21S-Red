let n =parseInt(prompt("Nhap N: "));
let f = [];

for (let i=0; i<n ; i++){
    if(i==0 || i==1){
        f.push(1);
    }
    else {
        f.push(f[i-1]+f[i-2]);
    }
}
console.log(f)