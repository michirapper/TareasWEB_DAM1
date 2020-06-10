var listElements = document.querySelector("ul");
function fetchItems() {
    let request = new XMLHttpRequest();
    request.open('GET', 'items.json');
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const response = request.response;
            for (let i = 0; i < response.length; i++) {
                listElements.innerHTML += `<li>${response[i].name}</li>`
                
            }
        }
    };
    request.send();
}
fetchItems();