/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        let birthdayDay = document.getElementById("dob-day").value;
        let birthdayMonth = document.getElementById("dob-month").value;
        let birthdayYear = document.getElementById("dob-year").value;

        let today = new Date();
        let todayMonth = today.getMonth() + 1;

        let thisYear = 0

        if(birthdayMonth > todayMonth) {
            thisYear = 1;
        }

        else if (birthdayMonth === todayMonth && birthdayDay > today.getDate()) {
            thisYear = 1;
        }

        let age = today.getFullYear() - birthdayYear - thisYear;

        alert("You are " + age + " years old. Congratulations!");

    })

})();
