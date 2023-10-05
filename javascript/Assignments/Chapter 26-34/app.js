//Question 1
// let a = +prompt("Enter a Positive Number: ")
// let num = parseInt(a)
// if(num >= 0){
//     document.write("number: ",num,"<br>")
//     document.write("round off value",Math.round(num),"<br>")
//     document.write("floor value: ",Math.floor(num),"<br>")
//     document.write("ceil value: ",Math.ceil(num),"<br>")
// }
// else{
//     document.write("Invalid Number")
// }

//          QUESTION 2
// let a = +prompt("Enter a Negative Number: ")
// let num = parseInt(a)
// if(num < 0){
//     document.write("number: ",num,"<br>")
//     document.write("round off value",Math.round(num),"<br>")
//     document.write("floor value: ",Math.floor(num),"<br>")
//     document.write("ceil value: ",Math.ceil(num),"<br>")

// }
// else{
//     document.write("Invalid Number")
// }

//       QUESTION 3
// let a = +prompt("Enter a Positive Floating Number: ")
// let num = parseFloat(a)
// if(num >= 0){
//     document.write("number: ",num,"<br>")
//     document.write("round off value: ",Math.round(num),"<br>")
//     document.write("floor value: ",Math.floor(num),"<br>")
//     document.write("ceil value: ",Math.ceil(num),"<br>")

// }
// else{
//     document.write("Invalid Number")
// }

//       QUESTION 4
// let a = +prompt("Enter a Negative Floating Number: ")
// let num = parseFloat(a)
// if(num < 0){
//     document.write("number: ",num,"<br>")
//     document.write("round off value: ",Math.round(num),"<br>")
//     document.write("floor value: ",Math.floor(num),"<br>")
//     document.write("ceil value: ",Math.ceil(num),"<br>")

// }
// else{
//     document.write("Invalid Number")
// }

//            QUESTION 5
// let a = +prompt("Enter a Number: ")
// let num = parseFloat(a)
// document.write("Absolute Value of ",num," is " , Math.abs(num))

//            QUESTION 6
// document.write("random dice value: ",Math.floor(Math.random() * 6) + 1)

//             QUESTION 7
// let coin = Math.random()*2+1
// let res = Math.floor(coin)

// if(res == 1){
//     document.write(res,"<br> random coin value:  Tails")
// }
// else{
//     document.write(res,"<br> random coin value:  Heads")
// }

//         QUESTION 8
// let a = Math.random()*100 +1
// let res = Math.floor(a)

// document.write("random numbers between 1 to 100: ",res)


//          QUESTION 10
// let a = Math.random() * 10 + 1
// let res = Math.floor(a)
// let guess = +prompt("Enter number between 1 to 10")
// if(guess == res){
//     document.write("Congratulation! you guess the right number")
// }
// else{
//     document.write("Try Again! <br> the right number is ",res)

// }

//    QUESTION 11
// let date = new Date()
// document.write(date)

//          QUESTION 12
// const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// let currentDate = new Date();
// let currentMonthIndex = currentDate.getMonth();
// let currentMonth = months[currentMonthIndex]
// document.write("Current Month:"+currentMonth)

//      QUESTION 13
// let date = new Date()
// let convert = date.toString()
// let copy = convert.slice(0,4)
// document.write("Today is: ",copy)

//      QUESTION 14
// let date = new Date()
// let currentDate = date.getDay()
// if (currentDate == 6 || currentDate == 7) {
//     document.write(res + "is a Fun day")
// }

//      QUESTION 15
// let date = new Date()
// let day = date.getDate()
// if(day <= 15){
//     document.write("First fifteen days of month")
// }
// else{
//     document.write("Last days of month")
// }

//      QUESTION 16
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var minutesSinceEpoch = millisecondsSinceEpoch / 60000;

// document.write("Current Date: ",currentDate,"<br>")
// document.write("Minutes since midnight, Jan 1, 1970: ", minutesSinceEpoch,"<br>");
// document.write("Milliseconds since midnight, Jan 1, 1970: ", millisecondsSinceEpoch,"<br>");


//      QUESTION 17
// let currentHour = new Date().getHours();

//     if (currentHour < 12) {
//         alert("It's AM");
//     } 
//     else {
//         alert("It's PM");
//     }

//          QUESTION 18
// var lastDayOfLastMonth = new Date(2020, 11, 31);
// var laterDate = lastDayOfLastMonth;

// document.write("LaterDate:", laterDate);

//          QUESTION 19
// let currentDate = new Date()
// let ramadan = new Date(2015, 5, 18)
// let timeDifference = currentDate - ramadan
// let daysSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days since 1st Ramadan: " + daysSinceRamadan)











