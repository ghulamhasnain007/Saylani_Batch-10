// var city = prompt("Enter City Name")
// var arr = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]
// var pro = city.slice(0, 1).toUpperCase()
// var pro1 = city.slice(1).toLowerCase()
// var pro2 = pro + pro1
// var match = false

// for (var i = 0; i < arr.length; i++) {
//     if (pro2 === arr[i]) {
//         match = true
//         alert("City Found")
//         break
//     }
// }

// if (match == false) {
//     alert("City not Found")
// }

var player1 = prompt("Enter the Name of player 1")
var player2 = prompt("Enter the Name of player 2")
var toss = Math.random()*2
var tt = Math.floor(toss)
if(tt==0){
    document.write(player1+"(Tails) Win the Toss")
}
else{
    document.write(player2+"(Heads) Win the Toss")
}