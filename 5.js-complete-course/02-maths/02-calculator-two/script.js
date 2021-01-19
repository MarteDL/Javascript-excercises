/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function (operation) {

        let operand1 = parseInt(document.getElementById("op-one").value, 10);
        let operand2 = parseInt(document.getElementById("op-two").value, 10);

        let result;

        switch (operation) {
            case "addition":
                result = operand1 + operand2;
                break;
            case "substraction":
                result = operand1 - operand2;
                break;
            case "multiplication":
                result = operand1 * operand2;
                break;
            case "division":
                result = operand1 / operand2;
                break;
        }

        alert(result);

        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
        $btn.addEventListener("click", function () {
            performOperation($btn.id);
        });
    });

})();
