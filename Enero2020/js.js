const items = [
    {
        'name': 'pan',
        'amount': 3
    },
    {
        'name': 'leche',
        'amount': 5
    },
    {
        'name': 'cereales',
        'amount': 69
    }
];
const ulElements = document.querySelector('ul');
for (let i = 0; i < items.length; i++) {
    let color = "green";
    if (items[i].amount < 5) { color = "red" }
    ulElements.innerHTML += `<li class = "${color}">${items[i].name} - ${items[i].amount}</li>`;
}