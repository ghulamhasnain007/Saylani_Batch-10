// function op(a,b,c){
//     if (c=='+'){
//         alert(a+b)
//     }
//     else if (c=='-'){
//         alert(a-b)
//     }
//     else if (c=='x'){
//         alert(a*b)
//     }
//     else if (c=='/'){
//         alert(a/b)
//     }

// }
// var t = +prompt("Enter Val 1")
// var s = +prompt("Enter Val 2")
// var ch = prompt("Enter Operator")

// op(t,s,ch)

function sum(a = 2, b = 3, c = 4) {
    var t = +prompt("Enter Val 1")
    var t2 = +prompt("Enter Val 2")
    var t3 = +prompt("Enter Val 3")

    if (t == " " && t2 == " " && t3 == " ") {
        return a + b + c
    }
    else {
        return t + t2 + t3
    }

}
var a, b, c

alert(sum(a, b, c))