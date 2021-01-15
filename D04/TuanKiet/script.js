let a = prompt("Nhap a:");
let b ="";

function doiSo(number){
    switch (number) {
        case 1:
            return "mot";
            break;
        case 2:
            return "hai";
            break;
        case 3:
            return "ba";
            break;
        case 4:
            return "tu";
            break;
        case 5:
            return "nam";
            break;
        case 6:
            return "sau";
            break;
        case 7:
            return "bay";
            break;
        case 8:
            return "tam";
            break;
        case 9:
            return "chin";
            break;
        default:
            break;
    }
}

for (let index = 0; index < a.length; index++) {
    if (parseInt(a.charAt(index))||parseInt(a.charAt(index)) == 0) {
        b += a.charAt(index);
    }
    
}
alert(b);

let c ="";  
let dv = 1;
let chuc = 2;
let tram = 3;

for (let i = b.length-1; i > -1; i--) {
    // alert(b.charAt(i));
    // let n = doiSo(parseInt(b.charAt(i)));

    // c = n + " " + c;
    //alert(c);

    if (i == b.length-2) {
        if (b.charAt(i) == "1") {
            if (b.charAt(i+1) =="4") {
                c = "muoi" + " " + "bon" + " " + c;
            }
            else if (b.charAt(i+1) =="5") {
                c = "muoi" + " " + "lam" + " " + c;
            }else {
                let n = doiSo(parseInt(b.charAt(i+1)));
                c = "muoi" + " " + n;
            }
        } else if(b.charAt(i) == "0"){
            n = doiSo(parseInt(b.charAt(i+1)));
            c = "linh" + " " + n;
        }else{
            n = doiSo(parseInt(b.charAt(i)));
            let n1 = doiSo(parseInt(b.charAt(i+1)));
            c = n + " " + muoi + " " + n1;
        }
    }

    
}
alert(c);