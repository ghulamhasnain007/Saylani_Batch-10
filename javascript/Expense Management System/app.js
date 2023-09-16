var allUsers = []
var users = localStorage.getItem("Users")

if(users !== null){
    allUsers = JSON.parse(users)
}


function signup(){
    var email = document.getElementById("semail")
    var password = document.getElementById("spass")
    var name = document.getElementById("sname")
    var obj = {
        name : name.value,
        email : email.value ,
        password : password.value,
    }
    allUsers.push(obj)
    localStorage.setItem('Users',JSON.stringify(allUsers))
}

function signin(){
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpass").value

    var filterUsers = allUsers.filter(function(data){
        return data.email === email && data.password === password
    })

    if(filterUsers.length){
        Swal.fire({
            title: 'Sign IN',
            text: 'You Can Now Access to Your Account',
            icon: 'success',
        }).then(() => {
            window.location.href = "welcome.html";
        });
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No such email or password exist',
        }).then(() => {
            window.location.href = "signup.html";
        });
        
    }

}