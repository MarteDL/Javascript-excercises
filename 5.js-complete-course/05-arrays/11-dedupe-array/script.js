/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // solution with callback (in ES5 and ES6)

    document.getElementById("run").addEventListener("click", function () {

        fruits.sort();
        console.log(fruits);

        for (let i = 1; i < fruits.length; i++) {

            if (fruits[i] === fruits[i - 1]) {
                fruits.splice(i, 1);
                i--;
            }

        }

        console.log(fruits);


        /*

        alternative solution with .filter

        let removesDuplicates = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        let uniqueFruits = fruits.filter(removesDuplicates);

        console.log(uniqueFruits);


        alternative solution with Set (only in ES6)

        let fruitsWithoutDuplicates = new Set(fruits);
        console.log(fruitsWithoutDuplicates);

        }) */

    })

})();
