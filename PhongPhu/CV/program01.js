//Khai báo N và ép kiểu int do JS kh ràng buộc kiểu
let n = parseInt(prompt("Vui lòng hãy nhập giá trị N: "));
//Khai báo mảng Fibo
let fibonacci = [];
//Bắt đầu chạy vòng lặp N
for(let i = 0; i < n; i++)
{
    if(i == 0 || i == 1)
    {
        //Đẩy giá trị 1 vào 2 vị trí đầu
        fibonacci.push(1);
    } else
    {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
}

console.log(fibonacci)