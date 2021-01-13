
let a1 = []; 

function sum(a,b){

    return a + b;
}

    let a = prompt("Nhap A:");
    let b = prompt("Nhap B:");
    let sumtemp = "";

    let remember = 0;
    //let temp = parseInt(a.charAt(a.length-1)) +parseInt(b.charAt(b.length-1));
    //alert(temp);
while (a.length != b.length) {
    if (a.length < b.length) {
        a = 0 + a;
    }else if (b.length < a.length) {
        b = 0 + b;
    } 
}
let  aLength = a.length;
let  bLength = b.length;

while (aLength  > 0 || bLength > 0) {
    let temp = parseInt(a.charAt(aLength-1)) + parseInt(b.charAt(bLength-1)) + remember;
    let temp1 = temp.toString();
    if (temp1.length == 2) {
        remember = 1;
        //alert(temp1.charAt(temp1.length-1));
        sumtemp = temp1.charAt(temp1.length-1) + sumtemp; 
    }else{
        remember = 0;
        sumtemp = temp1.charAt(0) + sumtemp;
    }
    bLength--;
    aLength--;

}
if (remember == 1) {
    sumtemp = remember + sumtemp;
}
alert(sumtemp);


