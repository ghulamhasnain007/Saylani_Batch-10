// *****************************
// ** Chapter 8 to Chapter 11 **
// *****************************

//Q 1
// var a = prompt("Please Enter Your Name")
// alert("Hi "+ a)


//Q 2
//var a = +prompt("Enter Your Table Number")
//if (a == "") {
//    for (var i = 1; i <= 10; i++) {
//        document.write(5 + " x " + i + " = " + 5*i + "<br>")
//    }
//}
//else {
//    for (var i = 1; i <= 10; i++) {
//        document.write(a + " x " + i + " = " + a*i + "<br>")
//    }
//}


//Q3
// var city = prompt("Enter City Name")
//  var arr = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"]
//  var pro = city.slice(0, 1).toUpperCase()
//  var pro1 = city.slice(1).toLowerCase()
//  var pro2 = pro + pro1
//  var match = false
//  for (var i = 0; i < arr.length; i++) {
//  if (pro2 === arr[i]) {
//  match = true
//  if(pro2 == arr[0]){
// alert("Welcome to the City of Lights 'Karachi' ")
//  }
//  else if(pro2 == arr[1]){
// alert("Welcome to the Heart of Pakistan 'Lahore' ")
//  }
//  else if(pro2 == arr[2]){
// alert("Welcome to the Green City 'Islamabad' ")
//  }
//  else if(pro2 == arr[3]){
// alert("Welcome to the City of Mrbels 'Peshawar' ")
//  }
//  else{
// alert("Welcome to the City of Saints 'Multan' ")
//  }
//  
//  break
//  }
// }
//  if (match == false) {
//  alert("City not Found")
//  }


//Q4
/*var a = prompt("Enter your Gender")
var arr = ["Male","Female"]
var pro = a.slice(0, 1).toUpperCase()
var pro1 = a.slice(1).toLowerCase()
var pro2 = pro + pro1

if(pro2 == arr[0]){
    alert("Welcome Sir")
}
if(pro2 == arr[1]){
    alert("Welcome Ma'am")
}*/


//Q5
/*var a = prompt("Enter Signal Color")
var arr = ["red", "yellow", "green"]
var red_msg = "vehicle must stop"
var yel_msg = "vehicle should get ready to move"
var green_msg = "vehicle should move now"
var pro = a.slice(0).toLowerCase()

if (pro == arr[0]) {
    document.write("<table border='1px'>" + "<tr>" + "<th>" + "Signal Color" + "</th>" + "<th>" + "Message" + "</th>" + "</tr>" + "<tr>" + "<td>" + pro + "</td>" + "<td>" + red_msg + "</table>")
}
else if (pro == arr[1]) {
    document.write("<table border='1px'>" + "<tr>" + "<th>" + "Signal Color" + "</th>" + "<th>" + "Message" + "</th>" + "</tr>" + "<tr>" + "<td>" + pro + "</td>" + "<td>" + yel_msg + "</table>")
}
else if (pro == arr[2]) {
    document.write("<table border='1px'>" + "<tr>" + "<th>" + "Signal Color" + "</th>" + "<th>" + "Message" + "</th>" + "</tr>" + "<tr>" + "<td>" + pro + "</td>" + "<td>" + green_msg + "</table>")
}
else{
    alert("Color not Found")
}*/


//Q6
/*var max_age = +prompt("Enter Maximum Age")
var age = +prompt("Enter Your Age")

if(age <= max_age){
    alert("You Are Welcome")
}
else{
    alert("You are not Eligible")
}*/


//Q7
/*var fuel = +prompt("Enter Your Remaining Fuel")
if(fuel<=0.25){
    alert("Please refill the fuel in your car")
}
else{
    alert("You have "+fuel+"litre(s) fuel in your Car")
}*/

//Q8-a
// var a = 4
// if(++a == 5){
//     alert("Given condition for variable a is true")
// }
//     Output
//       |
//       |
//       \/
//  Given condition for variable a is true

// Q8-b
// var b = 82
// if(b++ == 83){
//     alert("Given condition for variable b is true")
// }
//     Output
//       |
//       |
//       \/
//    Nothing

//Q8-c
// var c=12
// if(c++ === 12){
//     alert("Condition 1 is true")
// }
// if(c == 13){
//     alert("Condition 2 is true")
// }
// if(++c < 14){
//     alert("Condition 3 is true")
// }
// if(c === 14){
//     alert("Condition 4 is true")
// }

//     Output
//       |
//       |
//       \/
//Condition 1 is true
//Condition 2 is true
//Condition 4 is true




