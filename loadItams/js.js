const itemsJson = {
    'items': [
        'Pan',
        'Cereales',
        'Leche'
    ]    
};

function LoadItems() {
const title = itemsJson.title;
const body = document.querySelector('body');
body.innerHTML += `<h1>${title}</h1>`
    const ulElement = document.querySelector('ul');
    const items = itemsJson.items;
    for (let i = 0; i < items.length; i++) {
        ulElement.innerHTML += `<li>${items[i]}</li>`
    }
}
//function LoadItems(){
//const ulElement = document.querySelector('ul');
//ulElement.innerHTML = `
///<li>Pan</li>
//<li>Cereales</li>
//`
//}