var listElements = document.querySelector(".contenedor");
function fetchItems() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://dog.ceo/api/breed/germanshepherd/images');
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const response = request.response;
            const meseage = response.message;
            for (let i = 0; i < meseage.length; i++) {
                listElements.innerHTML += ` <span class="color"> ${meseage[i]}</span>`;                
            }
        }
    };
    request.send();
}
fetchItems();