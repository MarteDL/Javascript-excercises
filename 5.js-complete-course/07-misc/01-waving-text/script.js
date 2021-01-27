/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let originalText = document.getElementById("target").innerHTML;

    let charactersArray = originalText.split("");
    document.getElementById("target").innerText = "";

    charactersArray.forEach((character, index) => {

        let span = document.createElement("span");
        let content = document.createTextNode(charactersArray[index]);

        span.appendChild(content);
        document.getElementById("target").appendChild(span);

        switch (index%10) {
            case 0:
            case 9:
                span.style.fontSize = "x-small";
                break;
            case 1:
            case 8:
                span.style.fontSize = "small";
                break;
            case 2:
            case 7:
                span.style.fontSize = "medium";
                break;
            case 3:
            case 6:
                span.style.fontSize = "large";
                break;
            case 4:
            case 5:
                span.style.fontSize = "x-large";
                break;
        }
    })
})();
