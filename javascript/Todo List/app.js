var getul = document.getElementById('ul')

function foo(){
    
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
    
}

function dlt_all(){
    getul.innerHTML = ''
}

function del(e){
    e.parentNode.remove()
}
function edit_func(e){
    console.log(e.parentNode)
    var a = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}