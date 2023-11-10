import { auth } from './config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

const form = document.querySelector('#suform');
const naam = document.querySelector('#suname');
const email = document.querySelector('#suemail');
const password = document.querySelector('#supassword');

form.addEventListener('submit', (event)=> {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res)=>{
        res.user.updateProfile({
            displayName: naam
          });
          const user = res.user;
        console.log(user);
        window.location = './login.html';
    })
    .catch((error)=>{
        const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);

    })
})