let day =4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
alert("Something is Wrong");
console.log("this is a simple log");
console.error("this is an error");
console.warn("this is a warning msz ");
// let firstName = prompt("enter your name:");
// let rollNo = prompt("Enter your roll no:");
// console.log(firstName, rollNo);
let firstName = prompt("enter first name");
let lastName = prompt("enter last name");
// console.log("Welcome", firstName, lastName,"!");
let msz = "welcome"+" "+ firstName+" "+lastName+"!"; 
alert(msz);
