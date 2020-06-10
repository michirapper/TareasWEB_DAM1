function hello() {
    alert('Hello fking World');
}
function showAlert(messeage) {
    alert(messeage);
}
function showConfirm(messeage) {
    var aswer = confirm(messeage);
    alert('The answer is ' + aswer)
}
function showPromp(messeage) {
    var value = prompt(messeage);
    if (value === "") {
        alert('No name')
    } else {
        alert('The value is ' + value)

    }

}
function changeDiv() {
    //var myDiv = document.querySelector('#myDiv');
    // var myDivList = document.querySelectorAll('.myDiv');
    var myDivList = document.querySelectorAll('div');
    //var myDiv = document.getElementById("myDiv");
    for (var i = 0; i < myDivList.length; i++) {
        let myDivListElement = myDivList[i];
        if (myDivListElement.style.color === 'red') {
            myDivListElement.style.color = 'blue';
        } else {
            myDivListElement.style.color = 'red';
        }
    }

}
function anadirCosa() {
    var mydiv = document.querySelector('.anadir');
    var paragrahp = document.createElement('p');
    paragrahp.innerText = 'comemdfnsiljdbvl';
    mydiv.appendChild(paragrahp);
}
function Promp2HTML(messeage) {
    var value = prompt(messeage);
    var mydiv = document.querySelector('.escribirPrompToHtml');
    var paragrahp = document.createElement('p');
    paragrahp.innerText = value;
    mydiv.appendChild(paragrahp);
}
function removeParagrahp() {
    var paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        let element = paragraphs[1];
        element.remove();

    }

}