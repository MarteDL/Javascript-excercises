/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let display = document.getElementById("target");

    let button1 = document.getElementById("part-one");
    let button2 = document.getElementById("part-two");
    let button3 = document.getElementById("part-three");
    let button4 = document.getElementById("part-four");

    document.querySelectorAll("button").forEach((button) =>

        button.addEventListener("click", function(){

            let value = button.innerHTML;
            let max = button.dataset.max;

            if (value < max){
                value++;
            }

            value = value.toString();

            if (value.length === max.length) {
                button.innerHTML = value;
            }

            else {
                button.innerHTML = "0" + value;
            }

            display.innerHTML = "0" + button1.innerHTML + button2.innerHTML + button3.innerHTML + button4.innerHTML;

        })
    )
})();
