function invertir(number) {
    number = number + "";
    return number.split("").reverse().join("");
}
console.log(invertir(32243))
function palindromo(word) {
    gang = word;
    word = word + "";
    word = word.split("").reverse().join("");
    if (gang === word) {
        respuesta = true;
    } else {
        respuesta = false;
    }
    return respuesta;
}
console.log(palindromo("klk"))
function alphabeticOrder(word2) {
    word2 = word2 + "";
    return word2.split("").sort().join("");
}
console.log(alphabeticOrder("webmaster"))
function upper1word(word2) {
    var stringg = word2.split(" ");
    var Array1 = [];
    for (let i = 0; i < stringg.length; i++) {
        Array1.push(stringg[i].charAt(0).toUpperCase() + stringg[i].slice(1));
    }
    return Array1.join(" ");
}
console.log(upper1word("javaScript es un lenguaje funcional"))
function palabraMasLarga(word4) {
    const word3 = word4.split(" ");
    let longest = word3[0];

    for (let i = 0; i < word3.length; i++) {
        if (word3[i].length > longest.length) {
            longest = word3[i];
        }
    }
    return longest;
}
console.log(palabraMasLarga("Web Development Tutorial"))
function contarVocales(word5) {
    count = 0;
    let arrayPalabra = word5.split('');
    let vocales = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u',];
    for (let i = 0; i < arrayPalabra.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (arrayPalabra[i] === vocales[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(contarVocales("javascript es un lenguaje funcional"))
function primo(num) {
    if (num <= 1 || num % 1) {
        return false;
    }
    let m = Math.sqrt(num);
    for (let i = 2; i <= m; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(primo(7))
function saberTipo(resource) {
    return typeof (resource);
}
console.log(saberTipo(7))
function masAltomasBajo2(num2) {
    num = num2.sort();
    numAlto = num.length - 1;
    numBajo = num[1];
    return numBajo + "," + numAlto;

}
console.log(masAltomasBajo2([1, 2, 3, 4, 5]))
function factorial(num3) {
    if (num3 < 0) {
        return "El numero tiene que ser positivo";
    } else {
        let factorial = 1;
        let numero = num3;
        while (numero != 0) {
            factorial = factorial * numero;
            numero--;
        }
        return factorial;
    }

}
console.log(factorial(8))
function contarLetra(frase,letra) {
    count = 0;
    let arrayPalabra = frase.split('');
    let letraBuscar = [letra];
    for (let i = 0; i < arrayPalabra.length; i++) {
        for (let j = 0; j < letraBuscar.length; j++) {
            if (arrayPalabra[i] === letraBuscar[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(contarLetra('javascript es un lenguaje funcional', 'a'))
