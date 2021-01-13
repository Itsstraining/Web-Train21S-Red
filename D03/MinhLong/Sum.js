let st1 = prompt("Nhap int A: ");
let st2 = prompt("Nhap int B: ");

sum(st1, st2)


function sum(st1, st2){
    let total = "";
    let count = 1;
    let ith = 0;
    let remem = 0;
    let tmp =0;

    if(st2.length > st1.length)
    {
        let swap = st2;
        st2 = st1;
        st1 = swap;
    }
// alert(st1 + "        " +st2)

    for(let i = st1.length-1; i > -1; i--)
    {
        let a= parseInt(st1.charAt(st1.length-count));
        let b= parseInt(st2.charAt(st2.length-count));
        // if(b)
        // {
        //     return b=b;
        // }else
        // {
        //     return b=0;
        // }

        b = (b) ? b : 0;
    tmp = (a + b + ith)
    if(i == 0)
    {
        total = tmp + total;
        remem = tmp % 10;
        
    }
    else if(tmp > 9)
    {
        remem = tmp % 10;
        total = remem + total;
        ith = 1;
    }else
    {
        total = tmp + total;
    }
    count++;

    }
    
    alert(total);
}

























// function add(str1,str2){
// let sum="";
// let str1length = str1.length;
// let str2length = str2.length;

// if(str2length > str1length){
//     let temp = str2;
//     str2 = str1;
//     str1 = temp;
// }
// let carry = 0;
// let a;
// let b;
// let temp;
// let digitSum;
// for (let i=0; i<str1.length;i++){
//     a = parseInt(str1.charAt(str1.length - 1 -i));
//     b = parseInt(str2.charAt(str2.length - 1 -i));
//     b = (b) ? b : 0;
//     temp = (carry + a + b).toString();
//     digitSum = temp.charAt(temp.length -1);
//     carry = parseInt(temp.substr(0, temp.length -1));
//     carry = (carry) ? carry :0;
//     sum = (i === str1.length -1) ? temp + sum: digitSum + sum
// }
//     return sum;
// }

// console.log(add(str1,str1));


