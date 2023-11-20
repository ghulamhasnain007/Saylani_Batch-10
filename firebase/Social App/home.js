import { auth } from './config.js';
import { signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';


onAuthStateChanged(auth, (user) => {
    if (user) {
        displayUserInfo(user);
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'login.html'
    }
});
// const naam = document.querySelector('#name')
// naamText = document.createTextNode(naam.value)
// naamText.appendChild(naam)


function displayUserInfo(user) {
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = `Welcome, ${user.email}`;
  }

const btn = document.querySelector('.logout-btn');


btn.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout succesfully');
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})



var getul = document.getElementById('ul')
var send =document.querySelector('#btn-send')

send.addEventListener('click',()=>{
    
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var liText = document.createTextNode(a.value)
    li.appendChild(liText)
    getul.appendChild(li)
    a.value = ''
    var dlt = document.createElement('button')
    var dlt_Text = document.createTextNode("Delete")
    li.appendChild(dlt)
    dlt.appendChild(dlt_Text)
    dlt.setAttribute('onclick','del(this)')
    var edit = document.createElement('button')
    var edit_Text = document.createTextNode("Edit")
    li.appendChild(edit)
    edit.appendChild(edit_Text)
    edit.setAttribute('onclick','edit_func(this)')
    dlt.setAttribute('class','btn btn-danger aaa')
    edit.setAttribute('class','btn btn-warning aaa')

    // li.parentNode.firstChild.setAttribute('class','list')
    li.setAttribute('class', 'list');
})

window.dlt_all = function (){
    getul.innerHTML = ''
}

window.del = function (e){
    e.parentNode.remove()
}
window.edit_func = function (e){
    var a = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}