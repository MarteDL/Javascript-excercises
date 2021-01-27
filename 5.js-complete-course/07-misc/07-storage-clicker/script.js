/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function (key, value) {

    let counter = 0;

    if (localStorage.getItem("counter")) {
        counter = localStorage.getItem("counter");
        document.getElementById("target").innerHTML = counter;
    }

    document.getElementById("increment").addEventListener("click", function () {

        counter++;
        document.getElementById("target").innerHTML = counter.toString();
        localStorage.setItem('counter', counter.toString());

    })
})();
