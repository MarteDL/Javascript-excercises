/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function (){

        // display random numbers in table

        let randomNumbers = [];

        function generateRandomNumber () {
           return Math.floor((Math.random() * 100) + 1);
        }

        for (let i = 1; i < 11; i++) {
            randomNumbers.push(generateRandomNumber());
            document.getElementById("n-" + i).innerHTML = randomNumbers[i - 1];
        }

        // display min, max, sum and average

        let min = Math.min(...randomNumbers);
        let max = Math.max(...randomNumbers);
        let sum = randomNumbers.reduce((a, b) => a + b, 0);
        let average = sum/randomNumbers.length;

        document.getElementById("min").innerHTML = min.toString();
        document.getElementById("max").innerHTML = max.toString();
        document.getElementById("sum").innerHTML = sum.toString();
        document.getElementById("average").innerHTML = average.toString();

        /* get min, max and sum without Math.

        let min = 100;
        let max = 0;
        let sum = 0;

        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] < min) {
                min = randomNumbers[i];
            }

            if (randomNumbers[i] > max) {
                max = randomNumbers[i];
            }

            sum += randomNumbers[i];

        }

        let average = sum/randomNumbers.length;

        document.getElementById("min").innerHTML = min.toString();
        document.getElementById("max").innerHTML = max.toString();
        document.getElementById("sum").innerHTML = sum.toString();
        document.getElementById("average").innerHTML = average.toString();

        */

    })

})();
