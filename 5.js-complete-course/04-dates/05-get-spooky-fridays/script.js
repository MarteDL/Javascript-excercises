/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let year = document.getElementById("year").value;
        let result = [];

        for (let i = 0; i < 12; i++) {

            let yearAndMonth = new Date(year, i, 13);

            if(yearAndMonth.getDay() === 5) {

                let month = yearAndMonth.toLocaleString('default', {month:"long"});
                result.push(month);

            }
        }

        alert(result);

    })

})();
