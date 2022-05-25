// bai 1

var a = 15;
var b = 56;
var c = 8;

if (a < b && b < c) {
    console.log('a, b, c');
} else if (a > b && b > c) {
    console.log('c, b, a');
} else if (b < c && c < a) {
    console.log('b, c, a');
} else  {
    console.log('c, b, a');
}


// bai 2
// bài này mình giả định tất cả các tháng đều có 30 ngày do làm chi tiết mình cũng ko biết làm sao

var date = 30;
var month = 6;
var year = 2000;

var nextday;

if ( date < 30 && month < 12) {
    nextday = date + 1;
    console.log(nextday)
    console.log(month)
    console.log(year)
} else if (date === 30 && month < 12) {
    nextday = 1;
    month += 1;
    console.log(nextday)
    console.log(month)
    console.log(year)
} else if (date === 30 && month === 12) {
    nextday = 1;
    month = 1;
    year += 1;
    console.log(nextday)
    console.log(month)
    console.log(year)
} else {
    console.log(' ngày ko hợp lệ')
}

var date = 30;
var month = 6;
var year = 2000;

var prevday;

if ( date > 1 && month > 1) {
    prevday = date - 1;
    console.log(prevday)
    console.log(month)
    console.log(year)
} else if (date === 1 && month > 1) {
    prevday = 30;
    month -= 1;
    console.log(prevday)
    console.log(month)
    console.log(year)
} else if (date === 1 && month === 1) {
    prevday = 30;
    month = 12;
    year -= 1;
    console.log(prevday)
    console.log(month)
    console.log(year)
} else {
    console.log(' ngày ko hợp lệ')
}

// bai 3

console.log('hello, who is using this computer?')

var a = "Bố";
var b = "mẹ";
var c = "anh trai";
var d = "em gái mưa"

switch(3) {
    case a:
        console.log('Hello' + " " + a)
        break;
    case b:
        console.log('Hello' + " " + b)
        break;
    case c:
        console.log('Hello' + " " + c)
        break;
    case d:
        console.log('Hello' + " " + d)
        break;
    default:
        console.log('ko ai sử dụng thì thôi')
    
}

// bai 4

var a = 8;
var b = 5;
var c = 5;

if ((a + b + c) % 2 === 0) {
    if (a % 2 === 0 && b % 2 === 0 && c % 2 ===0){
        console.log('có 3 số chẵn')
    } else {
        console.log('có 1 số chẵn và 2 số lẻ')
    }
} else if ((a + b +c) % 2 !== 0) {
    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !==0) {
        console.log('có 3 số lẻ')
    } else {
        console.log('có 2 số chẵn và 1 số lẻ')
    }
} else{
    console.log('số ko hợp lệ')
}


// Bài 5

// bài này mình ko biết cách làm năm nhuận, mentor coi chỉ mình với
var month = 12;
var year = 2017;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7: 
    case 8:
    case 10:
    case 12:
        console.log('tháng này có 31 ngày');
        break;
    case 2:
        console.log('tháng này có 28 hoặc 29 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('tháng này có 30 ngày');
        break;
    default:
        console.log('tháng ko hợp lệ')
    
}



// Bài 6

var locationA = 10;
var locationB = 15;
var locationC = 22;
var school = 11;


if ( Math.abs(school - locationA) > Math.abs(school - locationB) && Math.abs(school - locationB) > Math.abs(school - locationC) ||  Math.abs(school - locationA) > Math.abs(school - locationB) && Math.abs(school - locationC) > Math.abs(school - locationB) ) {
    console.log('Nhà A xa trường nhất');
} else if ( Math.abs(school - locationB) > Math.abs(school - locationA) && Math.abs(school - locationA) > Math.abs(school - locationC) ||  Math.abs(school - locationB) > Math.abs(school - locationA) && Math.abs(school - locationC) > Math.abs(school - locationA)   ) {
    console.log ('nhà C xa trường nhất')
} else if ( Math.abs(school - locationC) > Math.abs(school - locationA) && Math.abs(school - locationA) > Math.abs(school - locationB) || Math.abs(school - locationC) > Math.abs(school - locationA) && Math.abs(school - locationB) > Math.abs(school - locationA)) {
    console.log('nhà c xa trường nhất')
}


// bài 7

// bài này dễ quá e lười làm

// bài 8 ko biết làm 
var num1 = "Một"
var num2 = "Hai"
var num3 = "Ba"
var num4 = "Bốn"
var num5 = "Năm"
var num6= "Sáu"
var num7 = "Bảy"
var num8 = "Tám"
var num9 = "chín"
var num10 = "Mười"



// Bai 9

var a = 3;
var b = 3;
var c = 39;

if ((a + b) > c && Math.abs(a - b) < c) {
    if (a === b && b !== c){
        console.log('đây làm tam giác cân');
    } else if (a === c && b !== c){
        console.log('đây làm tam giác cân');
    } else if (c === b && b !== a){
        console.log('đây làm tam giác cân');
    }
    else if (a === b && b === c) {
        console.log('đây là tam giác đều');
    } else if (a ** 2 === (b ** 2 + c ** 2) || b ** 2 === (a ** 2 + c ** 2) || c ** 2 === (b ** 2 + a ** 2) ) {
        console.log('đây là tam giá vuông');
    } else {
        console.log(' Đây là tam giác thường');
    }
}else if ((b + c) > a && Math.abs(b - c) < a) {
    if (a === b && b !== c){
        console.log('đây làm tam giác cân');
    } else if (a === c && b !== c){
        console.log('đây làm tam giác cân');
    } else if (c === b && b !== a){
        console.log('đây làm tam giác cân');
    }
    else if (a === b && b === c) {
        console.log('đây là tam giác đều');
    } else if (a ** 2 === (b ** 2 + c ** 2) || b ** 2 === (a ** 2 + c ** 2) || c ** 2 === (b ** 2 + a ** 2) ) {
        console.log('đây là tam giá vuông');
    } else {
        console.log(' Đây là tam giác thường');
    }
}else if ((a + c) > b && Math.abs(a - c) < b){
    if (a === b && b !== c){
        console.log('đây làm tam giác cân');
    } else if (a === c && b !== c){
        console.log('đây làm tam giác cân');
    } else if (c === b && b !== a){
        console.log('đây làm tam giác cân');
    }
    else if (a === b && b === c) {
        console.log('đây là tam giác đều');
    } else if (a ** 2 === (b ** 2 + c ** 2) || b ** 2 === (a ** 2 + c ** 2) || c ** 2 === (b ** 2 + a ** 2) ) {
        console.log('đây là tam giá vuông');
    } else {
        console.log(' Đây là tam giác thường');
    }
}else {
    console.log('đây ko phải tam giác');
}

