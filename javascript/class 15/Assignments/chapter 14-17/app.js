// ************************
// *    CHAPTER 14-17     *
// *        ARRAY         *
// ************************

// Q1
//var studentName = []

//Q2
//var obj = {
//    studentName : []
//}

//Q3
//var stringArray = ["String Array"]

//Q4
//var numberArray = [1,2,3,4,5]

//Q5
//var booleanArray = [false,true,true,false]

//Q6
//var mixedArray = ["String",23,false,23.98]

//Q7
//var mobileNetworks = ["Moblink","Zong","Telenor","Ufone"]

//Q8
// var qualification = ['SSC', 'HSC', 'BCS', 'BSC', 'MS', 'M.Phil', 'PhD']
// for (var i = 0; i < qualification.length; i++) {
//     document.write(qualification[i] + "<br>")
// }

//Q9
// var topMovies2015 = []
// var n = +prompt("Enter Number of Movies")

// for (var i = 0; i < n; i++) {
//     var movieName = prompt("Enter the name of movie " + (i + 1))
//     topMovies2015.push(movieName)
// }

// document.write("<h2>Top Movies of 2015:</h2><br>")
// for (var i = 0; i < topMovies2015.length; i++) {
//     document.write(topMovies2015[i] + "<br>")
// }

// document.write("<h3>Number of movies: " + topMovies2015.length+"</h3>")

//Q10
// Declare and initialize an array with favorite cars
// var favoriteCars = ["Tesla Model S", "Porsche 911", "Ford Mustang", "BMW M3"]

// // a. First index of the array
// var firstIndex = 0

// // b. Car at the first index of the array
// var carAtFirstIndex = favoriteCars[firstIndex]

// // c. Last index of the array
// var lastIndex = favoriteCars.length - 1

// // d. Car at the last index of the array
// var carAtLastIndex = favoriteCars[lastIndex]

// document.write("<h1>Favourite Cars</h1>")
// document.write("a. First index of the array:", firstIndex,"<br>")
// document.write("b. Car at first index of the array:", carAtFirstIndex,"<br>")
// document.write("c. Last index of the array:", lastIndex,"<br>")
// document.write("d. Car at last index of the array:", carAtLastIndex,"<br>")


//Q11

// var studentsName = [];
// var studentsMarks = [];
// var studentsPerc = [];

// // Input student names
// for (var i = 0; i < 3; i++) {
//     var student = prompt("Enter Student " + (i + 1) + " Name");
//     studentsName.push(student);
// }

// // Input student marks
// for (var i = 0; i < 3; i++) {
//     var marks = parseFloat(prompt("Enter Student " + (i + 1) + " Marks"));
//     studentsMarks.push(marks);
// }

// // Calculate percentages and store them
// for (var i = 0; i < 3; i++) {
//     var percentage = (studentsMarks[i] / 500) * 100; // Assuming total marks are 500
//     studentsPerc.push(percentage);
// }

// // Display the information
// for (var i = 0; i < 3; i++) {
//     document.write("Score of " + studentsName[i]+ " is " + studentsMarks[i] +". Percentage "+ studentsPerc[i].toFixed(2) +"<br>");
// }

//Q12-a
// var colors = ["blue", "black", "orange"]

// document.write("<h2>Before Adding</h2>")
// for (var i = 0; i < colors.length ; i++) {
//     document.write(colors[i], "<br>")
// }
// document.write("<br><br>")
// document.write("<h2>After Adding Color to the Begining</h1>")
// var update = prompt("Add Color to the begining:")
// colors.unshift(update)
// for (var i = 0; i < colors.length ; i++) {
//     document.write(colors[i], "<br>")
// }

//Q12-b
 //var colors = ["blue", "black", "orange"]
 //document.write("<h2>Before Adding</h2>")
 //for (var i = 0; i < colors.length ; i++) {
 //    document.write(colors[i], "<br>")
 //}
 //document.write("<br><br>")
 //document.write("<h2>After Adding Color to the End</h2>")
 //var update = prompt("Add Color to the end:")
 //colors.push(update)
 //for (var i = 0; i < colors.length ; i++) {
 //    document.write(colors[i], "<br>")
 //}


//Q12-c
// var colors = ["blue", "black", "orange"]

// document.write("<h2>Before Adding</h2>")
// for (var i = 0; i < colors.length; i++) {
//     document.write(colors[i] + "<br>")
// }

// var update1 = prompt("Add the first color to the beginning:")
// var update2 = prompt("Add the second color to the beginning:")

// colors.unshift(update2)
// colors.unshift(update1)

// document.write("<br><br>")
// document.write("<h2>After Adding Two Color to the Begining</h2>")
// for (var i = 0; i < colors.length; i++) {
//     document.write(colors[i] + "<br>")
// }


//Q12-d
//  var colors = ["blue", "black", "orange"]
//  document.write("<h2>Before Removing</h2>")
//  for (var i = 0; i < colors.length ; i++) {
//      document.write(colors[i], "<br>")
//  }
//  document.write("<br><br>")
//  document.write("<h2>After Removing Color to the Begining</h2>")
//  var update = 
//  colors.shift(0,1)
//  for (var i = 0; i < colors.length ; i++) {
//      document.write(colors[i], "<br>")
//  }
//Q12-e
 var colors = ["blue", "black", "orange"]
 document.write("<h2>Before Removing</h2>")
 for (var i = 0; i < colors.length ; i++) {
     document.write(colors[i], "<br>")
 }
 document.write("<br><br>")
 document.write("<h2>After Removing Color from the End</h2>")
 var update = 
 colors.pop(0,1)
 for (var i = 0; i < colors.length ; i++) {
     document.write(colors[i], "<br>")
 }