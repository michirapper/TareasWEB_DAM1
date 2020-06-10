function itemTextChange(element) {
    document.querySelector("#buttonAdd").disabled = (element.value.length <= 0);
}

var contador = 0;

function itemAdd() {
    contador++;
    document.querySelector("#cantidad").innerHTML = contador;

    var value = document.querySelector("#value").value;

    var target = document.querySelector("#itemList")
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.innerHTML = value
    p.classList.add("itemName");
    var btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.setAttribute("onclick", "itemDelete(this.parentElement)");
    btn.classList.add("removeBtn");
    li.appendChild(p)
    li.appendChild(btn);
    target.appendChild(li);

    document.querySelector("#value").value = "";
    document.querySelector("#buttonAdd").disabled = true;
}

function itemDelete(element) {
    contador--;
    document.querySelector("#cantidad").innerHTML = contador;

    element.remove();
}