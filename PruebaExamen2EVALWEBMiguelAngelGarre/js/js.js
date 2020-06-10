var listElements = document.querySelector("#demo");
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
            const images = response.message;
            for (let i = 0; i < images.length; i++) {
                listElements.innerHTML += `<img class="fancyzoom" src="${images[i]}" alt="Kopipi island" height="150px" />`
                
            }
        }
    };
    request.send();
}
fetchItems();
