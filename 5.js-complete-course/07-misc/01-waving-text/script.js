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

    let waveText = document.getElementById("target").innerText;

    let allCharacters = waveText.split("");
    document.getElementById("target").innerText = "";

    for (let i = 0; i < allCharacters.length; i++) {

        let span = document.createElement("span");
        span.id = "span" + i;

        console.log(document.getElementById("span" + i));

        let content = document.createTextNode(allCharacters[i]);

        span.appendChild(content);
        document.getElementById("target").appendChild(span);

        switch (i%10) {
            case 0:
            case 9:
                document.getElementById("span" + i).style.fontSize = "x-small";
                break;
            case 1:
            case 8:
                document.getElementById("span" + i).style.fontSize = "small";
                break;
            case 2:
            case 7:
                document.getElementById("span" + i).style.fontSize = "medium";
                break;
            case 3:
            case 6:
                document.getElementById("span" + i).style.fontSize = "large";
                break;
            case 4:
            case 5:
                document.getElementById("span" + i).style.fontSize = "x-large";
                break;
        }
    }
})();
