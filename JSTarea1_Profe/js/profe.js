var counter = 0;
var inputElement = document.querySelector('input');
var addItemButtom = document.querySelector('div button');
var counterElement =  document.querySelector('div span')

function checkInput() {
    addItemButtom.disabled = inputElement.value === "";
}

function addItem() {
    if (inputElement.value === '') return;
    counter++;
    counterElement.innerText = counter;
    var itemElement = document.createElement('li');
    itemElement.innerText = inputElement.value;
    var listElement = document.querySelector('ul');
    listElement.appendChild(itemElement);
    var deleteItem = document.createElement('button');
    deleteItem.innerText = 'Delete';
    deleteItem.setAttribute('onclick', "deleteItem(this.parentElement)")
    itemElement.appendChild(deleteItem);
    inputElement.value = "";
    addItemButtom.disabled = true;
    
}
function deleteItem(parentElement) {
    counter--;
    counterElement.innerText = counter;
    parentElement.remove();
    

}
function onPressed(event) {
   if (event.key === 'Enter') {
        addItem();
    }
}