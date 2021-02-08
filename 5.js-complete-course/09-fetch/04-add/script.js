/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {

        let name = document.getElementById("hero-name").value;
        let alterEgo = document.getElementById("hero-alter-ego").value;
        let powers = document.getElementById("hero-powers").value;
        let abilities = powers.split(", ");

        let newHero = {
            "name": name,
            "alterEgo": alterEgo,
            "abilities": abilities
        }

        console.log(newHero);

        fetch("http://localhost:3000/heroes", {
            method: 'POST',
            body: JSON.stringify(newHero),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(data => {
                console.log(data);
            });

        fetch("http://localhost:3000/heroes")
            .then(response => {
                response.json()
                    .then(object => {
                        console.log(object)
                    })
            });
    })
})();
