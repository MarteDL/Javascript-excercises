/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function getConfirmation() {

    let age = prompt("What is your age?");
    let gender = prompt("What is your gender?");
    let town = prompt("In what town do you live?");
    let confirmation = confirm("You are " + age + " years old. You are " + gender + ". And you live in " + town + ". If that is correct, please press ok.")

    if (confirmation == false) {
        getConfirmation();
    }

})();
