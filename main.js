// PALINDROMO
const parolaUtente = prompt("inserisci una parola");
console.log(parolaUtente);

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
console.log(reverseString(parolaUtente));

if (parolaUtente === reverseString(parolaUtente)) {
console.log("è un palindromo")
} else {
    console.log("non è un palindromo")

};


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
            // creiamo una variabile locale
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
   