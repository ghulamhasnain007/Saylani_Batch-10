
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore, collection, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDhvJ24kaE8wc03h45FDtR5Oqzvw8eVo8g",
    authDomain: "saylani-cf27d.firebaseapp.com",
    projectId: "saylani-cf27d",
    storageBucket: "saylani-cf27d.appspot.com",
    messagingSenderId: "708929124417",
    appId: "1:708929124417:web:5e612e76cdcd1bb598eec0",
    measurementId: "G-313678XNTE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let btn1 = document.querySelector('#subtn')

if (btn1) {

  btn1.addEventListener('click', () => {

    let getemail = document.querySelector('#suemail')
    let getpass = document.getElementById('supass')

    createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
      .then(async(userCredential) => {

        const user = userCredential.user;
        console.log(user);
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: getemail.value,
              last: getpass.value,
            });
            console.log("Document written with ID: ", docRef.id);
            alert('han signup hogaya')
            location.href = './login.html'
          }
           catch (e) {
            console.error("Error adding document: ", e);
          }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code ==> ', errorCode);
        console.log('error message ==> ', errorMessage);
      });
  })




}


let btn2 = document.querySelector('#sibtn')
if (btn2) {

  btn2.addEventListener('click', () => {

    let email = document.querySelector('#siemail')
    let password = document.getElementById('sipass')

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)

        location.href = './welcome.html'
      })
      .catch((error) => {
        console.log(error)
      });
  })
}


let getBtn = document.querySelector('#show');

if (getBtn) {
  getBtn.addEventListener('click', async () => {
    try {
      // Clear previous content in the 'getusers' div
      let getDiv = document.getElementById('getusers');
      getDiv.innerHTML = '';

      // Get the currently signed-in user
      const user = auth.currentUser;

      if (user) {
        const uid = user.uid;

        // Query Firestore to get data for the current user
        const userDocRef = doc(collection(db, "users"), uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          // Display user information in the 'getusers' div
          getDiv.innerHTML += `
            <div>${userDocSnapshot.data().first}</div>
            <div>${userDocSnapshot.data().last}</div>
          `;
        } else {
          console.log("User data not found in Firestore");
        }
      } else {
        console.log("No user signed in");
      }
    } catch (error) {
      console.error("Error fetching user data from Firestore:", error);
    }
  });
}
