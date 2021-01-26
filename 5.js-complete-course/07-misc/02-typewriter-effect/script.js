/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let text = document.getElementById("target").innerText;
    let separatedCharacters = text.split("");
    document.getElementById("target").innerText = "";
    let index = 0

    console.log(text);

    let delay = setInterval(displayCharacters, (Math.random() * 500));

    function displayCharacters() {
        if (index === separatedCharacters.length) {
            clearInterval(delay);
        }

        else {
            document.getElementById("target").innerHTML += separatedCharacters[index];
            index++;
        }
    }
})();
