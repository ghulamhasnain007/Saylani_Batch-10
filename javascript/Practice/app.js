var getul = document.getElementById('ul')

function send(){
    var  a = document.getElementById('inp')
    var li = document.createElement('tr')
    var liText = document.createTextNode(a.value)
    li.appendChild(liText)
    getul.appendChild(li)
    a.value = ""
    var dlt = document.createElement('button')
    var dlt_Text = document.createTextNode("Delete")
    li.appendChild(dlt)
    dlt.appendChild(dlt_Text)
    var td = document.createElement('td')
    li.appendChild(td)
    td.setAttribute('border','1px')
    // li.setAttribute('border','1px')
}
function dltall(){
    
}