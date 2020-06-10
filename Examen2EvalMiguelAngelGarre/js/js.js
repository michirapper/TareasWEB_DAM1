var listElements = document.querySelector(".container");

function fetchItems() {
    var cod = document.getElementById("number").value;
    listElements.innerHTML = "";
    let request = new XMLHttpRequest();
    request.open('GET', `https://randomuser.me/api/?results=${cod}`);
    //request.open('GET', `https://randomuser.me/api/?results=3`);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const response = request.response;
            const results = response.results;
            for (let i = 0; i < results.length; i++) {
                const date = results[i].dob.date;
                var res = date.split("T");
                listElements.innerHTML += ` <div class="radius">
                <div class="contact">
                    <p class="name">
                    ${results[i].name.title} ${results[i].name.first} ${results[i].name.last}
                    </p>
                    <p class="email">
                        <i class="fas fa-envelope"><span class="email">${results[i].email}</span></i>
                    </p>
                    <p class="twitter">
                        <i class="fab fa-twitter"></i><span> @${results[i].login.username}</span>
                    </p>
                </div>
                <div class="image">
                    <img class="circle" src="${results[i].picture.medium}">
                </div>
                <div class="info">
                    <p class="birthday">
                        <i class="fas fa-birthday-cake"></i><span> ${res[0]}</span>
                    </p>
                    <p class="phone">
                        <i class="fas fa-phone"></i><span> ${results[i].cell}</span>
                    </p>
                    <p class="maps">
                        <i class="fas fa-map-marker-alt"></i><span class="street">${results[i].location.street.number} ${results[i].location.street.name}</span><br><span
                            class="city">${results[i].location.city}</span><br><span class="postcode">${results[i].location.postcode} ${results[i].location.country}</span>
                    </p>
    
    
                </div>
            </div>              `

            }
        }
    };
    request.send();
}
fetchItems();