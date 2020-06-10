var count = 1;
document.querySelector("#Previous").disabled = true;
document.querySelector("#Previous").style.color = 'grey';
var img = document.getElementById("imagen");
function NextImage() {
    count++;
    img.setAttribute("src", "./img/moto" + [count] + ".jpg");

}
function PreviousImage() {
    count--;
    var img = document.getElementById("imagen");
    img.setAttribute("src", "./img/moto" + [count] + ".jpg");

}
function Deshabilitar() {
    if (count === 4) {
        count = 4;
        var img = document.getElementById("imagen");
        img.setAttribute("src", "./img/moto" + [count] + ".jpg");
        document.querySelector("#Next").disabled = true;
        document.querySelector("#Next").style.color = 'grey';
    } else if (count === 1) {
        count = 1;
        var img = document.getElementById("imagen");
        img.setAttribute("src", "./img/moto" + [count] + ".jpg");
        document.querySelector("#Previous").disabled = true;
        document.querySelector("#Previous").style.color = 'grey';
    }else{
        document.querySelector("#Previous").disabled = false;
        document.querySelector("#Previous").style.color = 'black';
        document.querySelector("#Next").disabled = false;
        document.querySelector("#Next").style.color = 'black';
    }
}