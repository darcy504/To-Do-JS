let addToDoButton = document.getElementById('addtodo');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.nodeValue;
    todoContainer.appendChild(paragraph);
})

