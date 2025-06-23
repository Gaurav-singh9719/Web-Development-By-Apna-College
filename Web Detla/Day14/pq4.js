let num = 10;
if (num%10===0) {
    console.log("Good");
}
else {
    console.log("bad");
}
let userName = prompt("Enter userName:");
let age = prompt("Enter age:");
let msz = userName + " " + "is "+ age + " years old";
alert(msz);
let number = 2;
switch (number) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid Quarter Month");
        break;
}
let str = "accept";
if((str[0]==="A" || str[0]==="a") && str.length>5) {
    console.log("Golden String");
}else{
    console.log("Not a golden String");
}

let a =2;
let b =8;
let c =9;

if (a >b) {
    if (a >c) {
        console.log(a, " is greatest number");
    }
    else {
        console.log(c, " is greatest number");
    }
}else{
    if (b >c) {
        console.log(b, " is greatest number");
    }else{
        console.log(c, " is greatest number");
    }
}
let num1 = 32;
let num2 = 47852;
if ((num1%10)==(num2%10)) {
    console.log("same last digit");
}
else{
    console.log("not have the same last digit");
}
