// let turn = (a,b) => {
//     console.log(a+b)
// }
// turn(12,13)
// let isBulbOn = false


// let Toggle = () => {
//     var a = document.getElementById('bulb')
//         if(isBulbOn){
//             a.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCPKLKm2sWUs5c_UN2qXNNm7hIDin5zv0Aw&usqp=CAU"
//         }
//         else{
//             a.src = "https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500"
//         }
//         isBulbOn = !isBulbOn
// }

let isBulbOn = false;

let Toggle = () => {
    var a = document.getElementById('bulb');
    a.src = isBulbOn
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCPKLKm2sWUs5c_UN2qXNNm7hIDin5zv0Aw&usqp=CAU"
        : "https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500"
    isBulbOn = !isBulbOn;
}
