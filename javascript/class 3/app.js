var user_name = prompt('Enter Student Name');
var english_marks = +(prompt("Enter English Marks"));
var math_marks = +(prompt("Enter Maths Marks"));
var pst_marks = +(prompt("Enter PST Marks"));
var urdu_marks = +(prompt("Enter Urdu Marks"));
var sci_marks = +(prompt("Enter Science Marks"));
var obtain, grade
var total = 500

var english_perc, math_perc, pst_perc, urdu_perc, sci_perc;

if (english_marks >= 0 && english_marks <= 100) {
    if (english_marks >= 80 && english_marks <= 100) {
        english_perc = "A+";
    } else if (english_marks >= 70 && english_marks < 80) {
        english_perc = "A";
    } else if (english_marks >= 60 && english_marks < 70) {
        english_perc = "B";
    } else if (english_marks >= 50 && english_marks < 60) {
        english_perc = "C";
    } else if (english_marks >= 40 && english_marks < 50) {
        english_perc = "D";
    } else {
        english_perc = "Fail";
    }
} else {
    document.write("Error: Invalid English Marks<br>");
}

if (math_marks >= 0 && math_marks <= 100) {
    if (math_marks >= 80 && math_marks <= 100) {
        math_perc = "A+";
    } else if (math_marks >= 70 && math_marks < 80) {
        math_perc = "A";
    } else if (math_marks >= 60 && math_marks < 70) {
        math_perc = "B";
    } else if (math_marks >= 50 && math_marks < 60) {
        math_perc = "C";
    } else if (math_marks >= 40 && math_marks < 50) {
        math_perc = "D";
    } else {
        math_perc = "Fail";
    }
}
else {
    document.write("Error: Invalid Math Marks<br>");
}

// Similarly, add similar blocks for pst, urdu, and sci subjects

if (pst_marks >= 0 && pst_marks <= 100) {
    if (pst_marks >= 80 && pst_marks <= 100) {
        pst_perc = "A+";
    } else if (pst_marks >= 70 && pst_marks < 80) {
        pst_perc = "A";
    } else if (pst_marks >= 60 && pst_marks < 70) {
        pst_perc = "B";
    } else if (pst_marks >= 50 && pst_marks < 60) {
        pst_perc = "C";
    } else if (pst_marks >= 40 && pst_marks < 50) {
        pst_perc = "D";
    } else {
        pst_perc = "Fail";
    }
}
else {
    document.write("Error: Invalid PST Marks<br>");
}

if (urdu_marks >= 0 && urdu_marks <= 100) {
    if (urdu_marks >= 80 && urdu_marks <= 100) {
        urdu_perc = "A+";
    } else if (urdu_marks >= 70 && urdu_marks < 80) {
        urdu_perc = "A";
    } else if (urdu_marks >= 60 && urdu_marks < 70) {
        urdu_perc = "B";
    } else if (urdu_marks >= 50 && urdu_marks < 60) {
        urdu_perc = "C";
    } else if (urdu_marks >= 40 && urdu_marks < 50) {
        urdu_perc = "D";
    } else {
        urdu_perc = "Fail";
    }
}
else {
    document.write("Error: Invalid Urdu Marks<br>");
}

if (sci_marks >= 0 && sci_marks <= 100) {
    if (sci_marks >= 80 && sci_marks <= 100) {
        sci_perc = "A+";
    } else if (sci_marks >= 70 && sci_marks < 80) {
        sci_perc = "A";
    } else if (sci_marks >= 60 && sci_marks < 70) {
        sci_perc = "B";
    } else if (sci_marks >= 50 && sci_marks < 60) {
        sci_perc = "C";
    } else if (sci_marks >= 40 && sci_marks < 50) {
        sci_perc = "D";
    } else {
        sci_perc = "Fail";
    }
} else {
    document.write("Error: Invalid Science Marks<br>");
}
obtain = english_marks + pst_marks + math_marks + urdu_marks + sci_marks
grade = (obtain / 500) * 100


document.write("<table border='1' align='center' style='text-align:center;'>");
document.write("<tr><th colspan='3'>Student Information</th></tr>");
document.write("<tr><th colspan='3'>Name: " + user_name + " </th></tr>");
document.write("<tr><th>Subject</th><th>Marks</th><th>Grade</th></tr>")
document.write("<tr><td>English</td><td>" + english_marks + " </td><td> " + english_perc + "</td></tr>");
document.write("<tr><td>Math</td><td>" + math_marks + " </td><td> " + math_perc + "</td></tr>");
document.write("<tr><td>PST</td><td>" + pst_marks + " </td><td> " + pst_perc + "</td></tr>");
document.write("<tr><td>Urdu</td><td>" + urdu_marks + " </td><td> " + urdu_perc + "</td></tr>");
document.write("<tr><td>Science</td><td>" + sci_marks + " </td><td> " + sci_perc + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td>" + obtain + " </td><td> " + grade.toFixed(2) + "%</td></tr>");
document.write("</table>");

