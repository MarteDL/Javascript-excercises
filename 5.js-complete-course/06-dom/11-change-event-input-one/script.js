/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("keyup", function (){

        let password = document.getElementById("pass-one");

        if(password.value.length >= 10){
            password.value = password.value.substr(0, 10);
        }

        let passwordNumberOfCharacters = (password.value.length).toString();
        document.getElementById("counter").innerText = passwordNumberOfCharacters + "/10";

    });

})();
