function fibonacci() {
    let x = 0;
    let valore = document.getElementById('num').value;
    let numero = [];
    valore = parseInt(valore);
    for (x; x < valore; x++) {
        if (x == 0) {
            numero.push(0);
        } else if (x == 1) {
            numero.push(1);
        } else {
            numero.push(numero[x - 1] + numero[x - 2]);
        }
    }
    document.getElementById("risultato").innerHTML = "<h3>" + numero + "</h3>";
}