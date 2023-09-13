// alert("Hello World")
// document.write("<h1>Hello World </h1>")
// var a = +prompt("Enter Value 1");
// var b = +prompt("Enter Value 2");
// var add = a + b;
// var sub = a - b;
// var multi = a * b;
// var div = a / b;
// var mod = a % b;
// document.write("<table border=1px id=abc align=center>" + "<tr><th>Value 1</th></tr>" + "<tr><td>" + a + "</td></tr>"
//     + "<tr><th>Value 2</th></tr>" + "<tr><td>" + b + "</td></tr>" + "<tr>" + "<th>ADDITION</th>"
//     + "</tr>" + "<tr>" + "<td> " + add + "</td>" + "</tr>" + "<tr>" + "<th>SUBTRACTION</th>"
//     + "</tr>" + "<tr>" + "<td> " + sub + "</td>" + "</tr>" + "<tr>" + "<th>MULTIPLICATION</th>"
//     + "</tr>" + "<tr>" + "<td> " + multi + "</td>" + "</tr>" + "<tr>" + "<th>DIVISION</th>"
//     + "</tr>" + "<tr>" + "<td> " + div + "</td>" + "</tr>" + "<tr>" + "<th>MODULUS</th>"
//     + "</tr>" + "<tr>" + "<td> " + mod + "</td>" + "</tr>" + "</table>");
    
// var sign = prompt("Enter Operator");
// if (sign=="+"){
//     document.write(add);
// }
// else if (sign="-"){
//     document.write(sub);
// }
// else if (sign="X"){
//     document.write(mul);
// }
// else if (sign="/"){
//     document.write(div);
// }
// else if (sign="%"){
//     document.write(mod);
// }
// else{
//     alert("You Type a wrong operator");
// }
let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = '';
}
