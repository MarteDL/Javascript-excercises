/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let guess = prompt("The computer has a number between 1 and 100 in its head. What is this number?");
    let x = Math.floor(Math.random()*100+1);
    let numberOfGuesses = 1

    guessing();

    function guessing() {
        if (parseInt(guess, 10) === x) {
            alert("That is correct! You needed " + numberOfGuesses + " guesses.")
        } else if (parseInt(guess, 10) < x) {
            guess = prompt("That is wrong, the number we are looking for is higher. Try again!");
            numberOfGuesses++;
            guessing();
        } else if (parseInt(guess, 10) > x) {
            guess = prompt("That is wrong, the number we are looking for is lower. Try again");
            numberOfGuesses++;
            guessing();
        }
    }
})();
