/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("pass-one").addEventListener("keyup", function () {

        // let passwordElement = document.getElementById("pass-one");
        // let passwordInput = passwordElement.value;
        //
        // let numbersInPassword = 0
        //
        // for (let i = 0; i < passwordInput.length; i++) {
        //
        //     console.log(passwordInput.charAt(i))
        //
        //     if (passwordInput.charAt(i) >= '0' && passwordInput.charAt(i) <= '9') {
        //         numbersInPassword++;
        //     }
        // }
        //
        // if (passwordInput.length >= 8 && numbersInPassword >= 2) {
        //     document.getElementById("validity").innerText = "ok";
        // } else {
        //     document.getElementById("validity").innerText = "Not ok";
        // }

       // alternative solution with regex:

        let passwordElement = document.getElementById("pass-one");
        let passwordInput = passwordElement.value;

        let regex = /.*\d.*\d.*/g;
        let numbersFound = passwordInput.match(regex);

        if(passwordInput.length >= 8 && numbersFound != null){
            document.getElementById("validity").innerText = "ok";
        }
        else{
            document.getElementById("validity").innerText = "Not ok";
        }

    });

})();
