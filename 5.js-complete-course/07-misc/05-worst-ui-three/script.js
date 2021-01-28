/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // array van inputs waarvan input steeds met juiste button overeen komt dankzij zelfde index
    let inputs = document.querySelectorAll("input");

    // loop over elke button waarbij zowel input als button gemanipuleerd worden
    document.querySelectorAll("button").forEach((button, index) => {
        let input = inputs[index];
        let number = input.dataset.min;

        let slotMachine = setInterval(function(){
            number = numberSpinner(input, number);
        }, 50);

        button.addEventListener("click", function () {
            clearInterval(slotMachine);
        })
    })

    // intervalfunctie om display mee te laten loopen met de inputfields
    setInterval(function () {
        let output = '0';
        inputs.forEach(element => {
            output += element.value.toString().padStart(element.dataset.min.length, '0');
        });
        document.getElementById("target").innerHTML = output;
    }, 50);

    // intervalfunctie die hierboven in de slotMachine wordt opgeroepen voor elke input
    function numberSpinner(input, number){
            input.value = number.toString();
            number++;
            if (number >= input.dataset.max){
                number = input.dataset.min;
            }
            return number;
    }

    // ugly and inefficient alternative

    // let input = document.getElementById("target");

    // let button1 = document.getElementById("fix-part-one");
    // let button2 = document.getElementById("fix-part-two");
    // let button3 = document.getElementById("fix-part-three");
    // let button4 = document.getElementById("fix-part-four");
    //
    // let input1 = document.getElementById("part-one");
    // let input2 = document.getElementById("part-two");
    // let input3 = document.getElementById("part-three");
    // let input4 = document.getElementById("part-four");
    //
    // let number1 = input1.dataset.min;
    // let number2 = input2.dataset.min;
    // let number3 = input3.dataset.min;
    // let number4 = input4.dataset.min;
    //
    // let slotMachine1 = setInterval(numberSpinner1, 50);
    // let slotMachine2 = setInterval(numberSpinner2, 50);
    // let slotMachine3 = setInterval(numberSpinner3, 50);
    // let slotMachine4 = setInterval(numberSpinner4, 50);
    //
    //
    // function numberSpinner1() {
    //     input1.value = number1.toString();
    //     number1++;
    //     if (number1 >= input1.dataset.max){
    //         number1 = input1.dataset.min;
    //     }
    // }
    //
    // function numberSpinner2() {
    //     input2.value = number2.toString();
    //     number2++;
    //     if (number2 >= input2.dataset.max){
    //         number2 = input2.dataset.min;
    //     }
    // }
    //
    // function numberSpinner3() {
    //     input3.value = number3.toString();
    //     number3++;
    //     if (number3 >= input3.dataset.max){
    //         number3 = input3.dataset.min;
    //     }
    // }
    //
    // function numberSpinner4() {
    //     input4.value = number4.toString();
    //     number4++;
    //     if (number4 >= input4.dataset.max){
    //         number4 = input4.dataset.min;
    //     }
    // }
    //
    //
    // button1.addEventListener("click", function () {
    //     clearInterval(slotMachine1);
    //     display.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // })
    //
    // button2.addEventListener("click", function () {
    //     clearInterval(slotMachine2);
    //     display.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // })
    //
    // button3.addEventListener("click", function () {
    //     clearInterval(slotMachine3);
    //     display.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // })
    //
    // button4.addEventListener("click", function () {
    //     clearInterval(slotMachine4);
    //     display.innerHTML = "0" + input1.value + input2.value + input3.value + input4.value;
    // })

})();