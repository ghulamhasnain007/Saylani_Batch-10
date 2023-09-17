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

//Expense Management System
var expenses = [];
var expenseList = document.getElementById("expense-list");
var totalAmount = 0;

function addExpense() {
  var titleInput = document.getElementById("expense-title");
  var amountInput = document.getElementById("expense-amount");
  var dateInput = document.getElementById("expense-date");

  var title = titleInput.value;
  var amount = parseFloat(amountInput.value);
  var date = dateInput.value;

  if (title === "" || isNaN(amount) || date === "") {
    alert("Please fill in all fields with valid data.");
    return;
  }

  var newRow = document.createElement("tr");

  var titleCell = document.createElement("td");
  titleCell.textContent = title;

  var amountCell = document.createElement("td");
  amountCell.textContent = amount.toFixed(2);

  var dateCell = document.createElement("td");
  dateCell.textContent = date;

  var actionCell = document.createElement("td");

  var updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  updateButton.setAttribute("onclick", "updateExpense(this)");
  actionCell.appendChild(updateButton);
  updateButton.setAttribute("class", "btn btn-info m-2");

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("onclick", "deleteExpense(this)");
  actionCell.appendChild(deleteButton);
  deleteButton.setAttribute("class", "btn btn-danger m-2");

  newRow.appendChild(titleCell);
  newRow.appendChild(amountCell);
  newRow.appendChild(dateCell);
  newRow.appendChild(actionCell);

  expenseList.appendChild(newRow);

  titleInput.value = "";
  amountInput.value = "";
  dateInput.value = "";

  totalAmount += amount;
  displayTotalAmount();
}
function updateExpense(button) {
  var row = button.parentNode.parentNode;
  var titleCell = row.cells[0];
  var amountCell = row.cells[1];
  var dateCell = row.cells[2];

  var updatedTitle = prompt("Enter Updated Title", titleCell.textContent);
  var updatedAmount = parseFloat(
    prompt("Enter Updated Amount", amountCell.textContent)
  );
  var updatedDate = prompt("Enter Updated Date", dateCell.textContent);

  if (updatedTitle === null || isNaN(updatedAmount) || updatedDate === null) {
    alert("Please fill in all fields with valid data.");
    return;
  }

  titleCell.textContent = updatedTitle;
  amountCell.textContent = updatedAmount.toFixed(2);
  dateCell.textContent = updatedDate;
}

function deleteExpense(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  var amountCell = row.cells[1];
  var deletedAmount = parseFloat(amountCell.textContent);
  totalAmount -= deletedAmount;
  displayTotalAmount();
}

function deleteAll() {
  expenseList.innerHTML = "";
  totalAmount = 0;
  displayTotalAmount();
}

function displayTotalAmount() {
  var totalAmountElement = document.getElementById("total-amount");

  if (totalAmountElement) {
    totalAmountElement.textContent =
      "Total Amount : " + totalAmount.toFixed(2) + "$";
  }
}

displayTotalAmount();
