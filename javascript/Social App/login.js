import { auth } from './config.js';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const forgotBtn = document.querySelector('#forgot');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Perform user sign-in
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            const user = res.user;
            console.log('User signed in:', user);
            window.location = './home.html';
        })
        .catch((error) => {
            alert("You Type Wrong Password or Email")
            const errorMessage = error.message;
            console.log('Sign-in error:', errorMessage);
        });
});

forgotBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const user = auth.currentUser;
const newPassword = prompt('Enter your new password');

// if (newPassword) {
//   user.updatePassword(newPassword)
//     .then((res) => {
//       res = newPassword;
//       alert('Password updated successfully.');
//     })
//     .catch((error) => {
//       // Handle errors, e.g., if the user is not signed in or the password is weak
//       console.error(error.message);
//     });
//     } else {
//         console.log('No user is signed in.');
//     }
const sentEmail = prompt("Enter the Email to Reset Password")
sendPasswordResetEmail(auth, sentEmail)
  .then(() => {
    // Password reset email sent!
    // ..
    alert("Check Your Email")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});