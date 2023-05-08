// PALINDROMO

// PARI E DISPARI

    // utente sceglie numero 
    const numeroUtente = prompt("inserisci un numero da 1 a 5");
    console.log(numeroUtente);

    // computer genera numero da 1 a 5 usando una funzione
    let risultato = 0;

    function generatoreNumeri() {
    let risultato = Math.floor(Math.random() * 5) + 1;
    return risultato;
    };

    generatoreNumeri();

    numeroRandom = generatoreNumeri();

    console.log(numeroRandom);

    // sommiamo i due numeri

    // dichiariamo chi ha vinto