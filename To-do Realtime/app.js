import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase,ref, set,onValue, child, push, update}  from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCA_hApHNG2GI0GRsgu1oCjNN4xggiUscE",
    authDomain: "to-do-81724.firebaseapp.com",
    projectId: "to-do-81724",
    storageBucket: "to-do-81724.appspot.com",
    messagingSenderId: "583646676299",
    appId: "1:583646676299:web:bc4e59f8f6bfaf08f854ce"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const add = document.querySelector('#send');
  const inp = document.querySelector('#aaa');
  
  add.addEventListener('click', () => {
    function writeUserData(todos) {
      set(ref(db, 'todos/' + todos), {
        tasks: todos,
        time: new Date().toLocaleString(),
      });
      console.log("Task Added:", todos);
    }
    writeUserData(inp.value);
    inp.value = "";
  });
  
  function getData() {
    let ul = document.querySelector('#ul');
    const starCountRef = ref(db, 'todos/');
    onValue(starCountRef, (snapshot) => {
      ul.innerHTML = ''; // Clear existing content in the <ul>
      snapshot.forEach((newData) => {
        const tasksData = newData.val();
        ul.innerHTML += `
          <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent" id="${newData.key}">
            <p class="lead fw-normal mb-0">${tasksData.tasks}</p>
          </li>
          <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent" id="${newData.key}">
            <div class="d-flex flex-row justify-content-end mb-1">
              <a onclick="edit(this,'${newData.key}')" class="text-info" data-mdb-toggle="tooltip" title="Edit todo">
                <i class="fas fa-pencil-alt me-3"></i>
              </a>
              <a onclick="dltTodo('${newData.key}')" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                <i class="fas fa-trash-alt"></i>
              </a>
            </div>
            <div class="text-end text-muted">
              <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
                <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>${tasksData.time}</p>
              </a>
            </div>
          </li>`;
      });
    });
  }
  
  getData();
  function edit(){
    function writeNewPost(uid, username, picture, title, body) {
      const db = getDatabase();
    
      // A post entry.
      const postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
      };
    
      // Get a key for a new Post.
      const newPostKey = push(child(ref(db), 'posts')).key;
    
      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    
      return update(ref(db), updates);
    }
  }

//     async function dltTodo(id){

//         await deleteDoc(doc(db, "todos", id));

//     }
//     async function edit(e, id) {
//         let editVal = prompt("Enter Edit Value");
    
//         if (editVal !== null) {
//             await updateDoc(doc(db, "todos", id), {
//                 name: editVal,
//                 time: new Date().toLocaleString()
//             });
    
//             // Update the name in the UI
//             const listItem = document.getElementById(id);
    
//             // Check if the listItem is found
//             if (listItem) {
//                 const nameElement = listItem.querySelector('.lead');
//                 if (nameElement) {
//                     nameElement.textContent = editVal;
//                 } else {
//                     console.error('Name element not found.');
//                 }
//             } else {
//                 console.error('List item not found.');
//             }
//         }
//     }
    
//     async function deleteAll() {
//         // Get a reference to the "todos" collection
//         const todosCollection = collection(db, "todos");
    
//         // Get all documents in the "todos" collection
//         const querySnapshot = await getDocs(todosCollection);
    
//         // Delete each document
//         querySnapshot.forEach(async (doc) => {
//             await deleteDoc(doc.ref);
//         });
    
//         // Clear the UI
//         const ul = document.querySelector('#ul');
//         ul.innerHTML = ''; // Remove all list items from the UI
//     }
    
    
// window.getData = getData
// window.dltTodo = dltTodo
// window.edit = edit
// window.deleteAll = deleteAll



