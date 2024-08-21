// var expense = [];

// var title_inp = document.getElementById('title');
// var amount_inp = document.getElementById('amount');
// var date_inp = document.getElementById('date');
// var action_inp = document.getElementById('action');

// var newRow = document.createElement('tr')
// var title = document.createElement('td');
// var amount = document.createElement('td');
// var date = document.createElement('td');
// var action = document.createElement('td');

// title.createTextNode(title_inp)
// amount = amount_inp.value;
// date = date_inp.value;
// action = action_inp.value;

// newRow.appendChild(title);
// newRow.appendChild(amount);
// newRow.appendChild(date);
// newRow.appendChild(action);
// expense_list.appendChild(newRow);


var expense_list = document.getElementById('expense-list');


function foo(){
    
    var inp = document.getElementById('title');//get the Input Field from html
    var li = document.createElement("li");//create li
    expense_list.appendChild(li)//make li the child of ul
    var title_inp = document.createTextNode(inp.value)//make a variable in which we store value of input field
    li.appendChild(title_inp);//the variable child of li(child of ul)
    

}

var dltAll = document.querySelector('#dltall');

dltAll.addEventListener('click', (e)=> {
    expense_list.innerHTML = ""
})

