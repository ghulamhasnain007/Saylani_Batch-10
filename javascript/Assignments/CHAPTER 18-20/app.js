
//Q1
// for (var i = 0 ;i <5; i++){
// document.write("Hello World"+"<br>")
// }

//Q2
// for (var i = 1 ;i <=10; i++){
//     document.write(i+"<br>")
//    }

//Q3
// var num = +prompt("Enter Number")
// var len = +prompt("Enter Length of Table")
// for (var i = 1; i <= len; i++) {
//     document.write(num + " x " + i + " = " + num*i+ "<br>")
// }

//Q4
// var a = ["Nokia","Samsung","Apple","Sony","Huawei"]
// for (var i = 0 ;i < a.length; i++){
//      document.write(a[i]+"<br>")
//    }

//Q5
//  var a = ["apple","banana","mango","orange","strawberry"]
//  for (var i = 0 ;i < a.length; i++){
//       document.write(a[i]+"<br>")
//     }
//     document.write("<br><br>")
//  for (var i = 0 ;i < a.length; i++){
//     document.write("Element at index ",i," is ",a[i],"<br>")
//     }

//Q6
// var n = +prompt("Enter Number of items:")
// var inp = []
// document.write("Number of Items are " + n + "<br><br>")
// for (var i = 0; i < n; i++) {
// var update = prompt("Enter Item Number " + (i + 1))
// inp.push(update)
// }
// document.write("Items:" + "<br><br>")
// for (var i = 0; i < n; i++) {
// document.write((i+1) + ")" + inp[i] + "<br>")
// }

//Q7-a
// document.write("Counting"+"<br>")
// for (var i = 1; i <= 15; i++){
//     document.write(i + "<br>")
// }

//Q7-b
// document.write("Reverse Counting"+"<br><br>")
// for (var i = 10; i >= 1; i--){
//     document.write(i + "<br>")
// }

//Q7-c
// document.write("Even" + "<br><br>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + "<br>")
// }

//Q7-d
// document.write("Odd" + "<br><br>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + "<br>")
// }

//Q7-e
// var k = 5
// document.write("Reverse Counting" + "<br><br>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i*k + "<br>")
// }

//Q8
// var snacks = ["cake","apple pie", "cookie", "chips", "patties"]
// var pro = prompt("Enter Snacks Name")
// var change = pro.toLowerCase(0)
// var match = true

// for(var i =0 ;i<snacks.length ; i++){
//     if(change == snacks[i]){
//         match = false
//         alert(snacks[i] + " found")
//     }
// }
// if(match == true){
//     alert(change + " is not available")
// }

//Q9
// var a = [24, 53, 78, 91, 12]
// var largest = a[0]

// for(var i=0 ; i<a.length ; i++){
//     if(a[i]>largest){
//         largest=a[i]
//     }
// }
// document.write("Largest Number in the Array is ",largest)


//Q10
// var a = [24, 53, 78, 91, 12]
// var smallest = a[0]

// for(var i=0 ; i<a.length ; i++){
//     if(a[i]<smallest){
//         smallest=a[i]
//     }
// }
// document.write("Smallest Number in the Array is ",smallest)

//Q11
// var a = [24, 53, 78, 91, 12]
// var largest = a[0]
// var smallest = a[0]

// for(var i=0 ; i<a.length ; i++){
//     if(a[i]>largest){
//         largest=a[i]
//     }
// }
// for(var j=0 ; j<a.length ; j++){
//     if(a[j]<smallest){
//         smallest=a[j]
//     }
// }
// document.write("Array Items:  ")
// for(var k=0 ; k<a.length ; k++){
//    document.write(a[k]+" ")
// }
// document.write("<br><br>")
// document.write("Largest Number in the Array is ",largest,"<br>")
// document.write("Smallest Number in the Array is ",smallest,"<br>")


//Q12
// for(var i =1 ; i<=20; i = i++){
//     document.write(5*i,",")
// }


//Q13
// var students = ["Ali", "Sami", "Taha", "Inam"]
// var scores = [58, 73, 89, 90]
// document.write("<table border='1px'><tr><th>Student</th><th>Scores</th></tr>")
// for(var i=0;i<students.length;i++){
//     document.write("<tr><td>",students[i],"</td><td>",scores[i],"</td></tr>")

// }
// document.write("</table>")

//Q14
// var scores = [12, 45, 3, 22, 34, 50];
// var pro = prompt("Enter Stop value")

// for (var i = 0; i < scores[i]; i++) {
//     if (pro == scores[i]) {
//         var c = i
//     }
// }
// for (var j = 0; j <= c; j++) {
//     document.write(scores[j]+",")
// }

//Q15
// var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         document.write(a[i][j]+" ")

//     }
//     document.write("<br>")
// }

//Q16
// var num = +prompt("Enter Number")
// for (var i = num; i >= 0; i = i - 0.5){
//     document.write(i,",")
// }

//Q17
// for (i = 0; i <= 20; i++) {
//     if (i % 2 == 0)
//         document.write(i , " is even","<br>")
//     else
//         document.write(i , " is odd","<br>")
// }

//Q19
// var n = +prompt("Enter Number of Stars:")
// for(var i=0; i<=1;i++){
//     for (var i=n ; i>0 ; i=i-2){
//         document.write("*")
//     }
//     document.write("<br>")
// }

