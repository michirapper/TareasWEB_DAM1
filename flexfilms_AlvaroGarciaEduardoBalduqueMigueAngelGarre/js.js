var listElements = document.querySelector("ul");
var query = document.getElementById("query");
function fetchItems() {
    let request = new XMLHttpRequest();
    // request.open('GET', 'items.json');
    request.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=7d61da59dd34358f095c2ce7e6737e08&language=en-US&page=1');
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const response = request.response;
            const resultados = response.results;
            for (let i = 0; i < resultados.length; i++) {
                var str = resultados[i].release_date;
                var res = str.split("-");
                for (let k = 0; k < 1; k++) {
                    listElements.innerHTML += `<li class="movie-card">
                <div class="position">${[i + 1]}</div>
                <div class="mc-poster">
                    <a href="https://www.filmaffinity.com/es/film809297.html">
                        <img width="100" height=""
                             src="https://image.tmdb.org/t/p/w500/${resultados[i].poster_path}"
                             alt="El Padrino">
                    </a>
                </div>
                <div class="movie-data">
                    <div class="mc-info-container">
                        <div class="mc-title">
                            <a href="https://www.filmaffinity.com/es/film809297.html" title="El padrino">
                               <span class="titulo1">${resultados[i].original_title}</span>                            
                            </a>
                            (${res[0]})
                            <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                        </div>
                        <div class="mc-director">
                            <a href="" title="Francis Ford Coppola">Francis Ford Coppola</a>
                        </div>
                        <div class="mc-cast">
                            <a href="">Marlon Brando</a>,
                            <a href="">Al Pacino</a>,
                            <a href="">James Caan</a>,
                            <a href="">Robert Duvall</a>,
                            <a href="">Diane Keaton</a>,
                            <a href="">John Cazale</a>,
                            <a href="">Talia Shire</a>,
                            <a href="">Richard S. Castellano</a>,
                            ...
                        </div>
                    </div>
                    <div class="data">
                        <div class="avg-rating">${resultados[i].vote_average}</div>
                        <div class="rat-count">${resultados[i].vote_count} <i class="fas fa-user"></i></div>
                    </div>
                </div>
            </li>`;
                }
            }
        }
    };
    request.send();
}
function search() {
    listElements.innerHTML = "";
    let request = new XMLHttpRequest();
    // request.open('GET', 'items.json');
   request.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=7d61da59dd34358f095c2ce7e6737e08&query=${query.value}`);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const response = request.response;
            const resultados = response.results;
            for (let i = 0; i < resultados.length; i++) {
                var str = resultados[i].release_date;
                var res = str.split("-");
                    listElements.innerHTML += `<li class="movie-card">
                <div class="position">${[i + 1]}</div>
                <div class="mc-poster">
                    <a href="https://www.filmaffinity.com/es/film809297.html">
                        <img width="100" height=""
                             src="https://image.tmdb.org/t/p/w500/${resultados[i].poster_path}"
                             alt="El Padrino">
                    </a>
                </div>
                <div class="movie-data">
                    <div class="mc-info-container">
                        <div class="mc-title">
                            <a href="https://www.filmaffinity.com/es/film809297.html" title="El padrino">
                               <span class="titulo1">${resultados[i].original_title}</span>                            
                            </a>
                            (${res[0]})
                            <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                        </div>
                        <div class="mc-director">
                            <a href="" title="Francis Ford Coppola">Francis Ford Coppola</a>
                        </div>
                        <div class="mc-cast">
                            <a href="">Marlon Brando</a>,
                            <a href="">Al Pacino</a>,
                            <a href="">James Caan</a>,
                            <a href="">Robert Duvall</a>,
                            <a href="">Diane Keaton</a>,
                            <a href="">John Cazale</a>,
                            <a href="">Talia Shire</a>,
                            <a href="">Richard S. Castellano</a>,
                            ...
                        </div>
                    </div>
                    <div class="data">
                        <div class="avg-rating">${resultados[i].vote_average}</div>
                        <div class="rat-count">${resultados[i].vote_count} <i class="fas fa-user"></i></div>
                    </div>
                </div>
            </li>`;
            }
        }
    };
    request.send();
}
fetchItems();