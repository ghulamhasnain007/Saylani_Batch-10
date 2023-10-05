// *****************************
// ** Chapter-12 to Chapter-13 *
// *****************************

//Q1
// var a = +prompt("Enter Number")

// if (a === 0) {
//     alert("0 is not divisible by 3 (or any other number).")
// }
// else if (a % 3 === 0) {
//     alert(a + " is divisible by 3")
// } 
// else {
//     alert(a + " is not divisible by 3")
// }


//Q2
// var a = +prompt("Enter Number")
// if (a === 0) {
    // alert("0 is not an even or odd number")
// }
// else if (a % 2 === 0) {
    // alert(a + " is an even number")
// } 
// else {
    // alert(a + " is an odd number")
// }


//Q3
// var a = +prompt("Enter Your Age")
// if(a >= 18){
//     alert("You are Old enough")
// }
// else if(a < 18 && a > 0){
//     alert("You are Too Young")
// }
// else{
//     alert("Invalid Age")
// }


//Q4
// var yourName = "Ghulam Hasnain";
// var userName = prompt("Please enter your name:");

// if (userName == yourName) {
//     alert("Hello, " + userName + "! You have the same name as me.");
// }


//Q5
// var a = +prompt("Enter Number")
// switch (a%3){
// case 0:
//     alert(a +" is divisible by 3")
//     break

// default:
//     alert( a +" is not divisible by 3")
//     break
// }


//Q6
//var input = prompt("Enter a character:");
//
//if (!isNaN(input)) {
//    alert(input + " is a number.");
//} 
//else {
//    var charCode = input.charCodeAt(0);
//
//    if (charCode >= 65 && charCode <= 90) {
//        alert(input + " is an uppercase letter.");
//    }
//    else if (charCode >= 97 && charCode <= 122) {
//        alert(input + " is a lowercase letter.");
//    }
//    else {
//        alert(input + " is not a number, uppercase letter, or lowercase letter.");
//    }
//}


//Q7
//var n1 = +prompt("Enter First Number");
//var n2 = +prompt("Enter Second Number");
//var op = prompt("Enter Operator (+, -, *, /, %)");
//
//switch (op) {
//    case '+':
//        alert("Addition of " + n1 + " and " + n2 + " is " + (n1 + n2));
//        break;
//
//    case '-':
//        alert("Subtraction of " + n1 + " and " + n2 + " is " + (n1 - n2));
//        break;
//
//    case '*':
//        alert("Multiplication of " + n1 + " and " + n2 + " is " + (n1 * n2));
//        break;
//
//    case '/':
//        alert("Division of " + n1 + " and " + n2 + " is " + (n1 / n2));
//        break;
//
//    case '%':
//        alert("Modulus of " + n1 + " and " + n2 + " is " + (n1 % n2));
//        break;
//
//    default:
//        alert("Invalid Operator");
//}


//Q8
// var time = +prompt("Enter Time as 24hours Formate")
// if(time >= 0 && time < 12){
//     alert("Good Morning")
// }
// else if(time >= 12 && time < 17){
//     alert("Good Afternon")
// }
// else if(time >= 17 && time < 21){
//     alert("Good Morning")
// }
// else if(time >= 21 && time <= 24){
//     alert("Good Morning")
// }
// else{
//     alert("Invalid Time")
// }

// Q9
// var year = +prompt("Enter a year (YYYY format):");

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(year + " is a leap year.");
// } else {
//     alert(year + " is not a leap year.");
// }


// Q10
// var correctPassword = "12345";
// var userPassword = prompt("Please enter your password:");

// if (!userPassword) {
//     alert("Please enter your password.");
// } 
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } 
// else {
//     alert("Incorrect password.");
// }


// Q11
// var firstName = prompt("Enter First Name")

// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } 
// else {
//     document.write("You are not Fahad.");
// }

//Q 12
//var greeting
//var hour = 13
//if (hour < 18) {
//    greeting = "Good day"
//} 
//else {
//    greeting = "Good evening"
//}
//document.write(greeting)

//Q13
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } 
// else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } 
// else {
//     alert("Both integers are equal.");
// }


//Q14
// var number = prompt("Enter a number:");

// if (isNaN(number)) {
//     alert("Invalid input. Please enter a valid number.");
// } 
// else if (number > 0) {
//     alert(number + " is a positive number.");
// } 
// else if (number < 0) {
//     alert(number + " is a negative number.");
// } 
// else {
//     alert("The number is zero.");
// }

//Q15
// var currentHour = prompt("Please enter the current hour (24-hour format):");

// if (isNaN(currentHour) || currentHour < 0 || currentHour > 23) {
//     alert("Invalid input. Please enter a valid hour between 0 and 23.");
// } 
// else if ((currentHour >= 6 && currentHour <= 9) || (currentHour >= 18 && currentHour <= 20)) {
//     alert("Breakfast is served.");
// } 
// else if (currentHour >= 11 && currentHour <= 13) {
//     alert("Time for lunch.");
// } 
// else if (currentHour >= 17 && currentHour <= 20) {
//     alert("It's dinner time.");
// } 
// else {
//     alert("Sorry, you'll have to wait, or go get a snack.");
// }

//Q16
// var myVariable = "Hello";
// var variableType = typeof myVariable;

// switch (variableType) {
//     case "number":
//         alert("The variable is of type 'number'.");
//         break;
//     case "string":
//         alert("The variable is of type 'string'.");
//         break;
//     case "boolean":
//         alert("The variable is of type 'boolean'.");
//         break;
//     case "undefined":
//         alert("The variable is 'undefined'.");
//         break;
//     default:
//         alert("The variable is of an unknown type.");
// }


//Q 17
// var inputCharacter = prompt("Enter a character (string of length 1):");

// if (inputCharacter.length === 1) {
//     var lowercaseChar = inputCharacter.toLowerCase();
//     var isVowel = "aeiou".indexOf(lowercaseChar) !== -1;

//     if (isVowel) {
//         alert("True, it is a vowel.");
//     } else {
//         alert("False, it is not a vowel.");
//     }
// } else {
//     alert("Please enter a single character.");
// }


//Q18
//document.write(10 != 8); // This will output "true" to the console

var month = +prompt("Enter Month Number")

switch(month){
case 1:
    alert("January")
case 1:
    alert("February")
case 1:
    alert("March")
case 1:
    alert("April")
case 1:
    alert("May")
case 1:
    alert("June")
case 1:
    alert("July")
case 1:
    alert("August")
case 1:
    alert("September")
case 1:
    alert("October")
case 1:
    alert("November")
case 1:
    alert("December")
default:
    alert("Invalid Month")
}






