import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  // Your credentials
  apiKey: "AIzaSyAgyZjnqWHeNlz2kh7xfbH--PbDIoI6ufE",
    authDomain: "smit-dd31f.firebaseapp.com",
    projectId: "smit-dd31f",
    storageBucket: "smit-dd31f.appspot.com",
    messagingSenderId: "693632566521",
    appId: "1:693632566521:web:7824253f272a5605614e28",
    measurementId: "G-F584NHJN3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var send = document.querySelector('#send');
var inp = document.querySelector('#todo');

send.addEventListener('click', async () => {
  var getul = document.querySelector('#ul');
  var li = document.createElement('li');
  var li_text = document.createTextNode(inp.value);
  getul.appendChild(li);
  li.appendChild(li_text);

  try {
    var docRef = await addDoc(collection(db, "todos"), {
      first: inp.value, // Use inp.value instead of li_text
      date: new Date()
    });
    li.id = docRef.id;
    console.log("Document written with ID: ", docRef.id);
  }
   catch (e) {
    console.error("Error adding document: ", e);
  }
  
});
var getTodo = document.querySelector('#getTodo');
var displayContainer = document.querySelector('#displayContainer');
// getTodo.addEventListener('click',async()=>{
//   const querySnapshot = await getDocs(collection(db, "todos"));
//   querySnapshot.forEach((doc) => {
//     const li = document.createElement('li');
//     li.textContent = `${JSON.stringify(doc.data().first)}`;
//     displayContainer.appendChild(li);
// });

// })
getTodo.addEventListener('click', async () => {
  displayContainer.innerHTML = '';
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    const li = document.createElement('li');
    
    // Use doc.data().first directly without JSON.stringify
    li.textContent = `${doc.data().first}`;
    
    displayContainer.appendChild(li);
  });
});