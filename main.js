// PALINDROMO

// PARI E DISPARI

    // utente sceglie numero 
    const numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
    console.log(numeroUtente);
    const sceltaUtente = prompt("inserisci pari o dispari");
    console.log(sceltaUtente);

    // computer genera numero da 1 a 5 usando una funzione


    function generatoreNumeri() {
    let risultatoRandom = Math.floor(Math.random() * 5);
    return risultatoRandom;
    };

    generatoreNumeri();

    numeroRandom = generatoreNumeri();

    console.log(numeroRandom);

    // sommiamo i due numeri con una funzione
    function numeriSommati(num1, num2) {
        somma = num1 + num2;
        return somma;
    };
    console.log(numeriSommati(numeroUtente, numeroRandom));

    if (somma % 2 == 0) {
        console.log("il numero è pari")

    } else {
        console.log("il numero è dispari")
    };



    // dichiariamo chi ha vinto