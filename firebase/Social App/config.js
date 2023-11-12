import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgyZjnqWHeNlz2kh7xfbH--PbDIoI6ufE",
    authDomain: "smit-dd31f.firebaseapp.com",
    projectId: "smit-dd31f",
    storageBucket: "smit-dd31f.appspot.com",
    messagingSenderId: "693632566521",
    appId: "1:693632566521:web:7824253f272a5605614e28",
    measurementId: "G-F584NHJN3B"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);