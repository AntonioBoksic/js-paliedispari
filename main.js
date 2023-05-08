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
    
    // stabiliamo se la somma è pari o dispari
        let esito;

        if (somma % 2 == 0) {
        esito = "pari"
        console.log(`la somma è ${esito}`)

    } else {
        esito = "dispari"

        console.log(`la somma è ${esito}`)
    };
    



            // dichiariamo chi ha vinto

                    // se la scelta dell'utente è uguale a (?) l'utente vince
                    // altrimenti l'utente ha perso

    if (sceltaUtente === esito) {
        console.log("l'utente ha vinto")
    } else {
        console.log("l'utente ha perso")
    };