/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {

        async function getData() {
            let heroes = await fetch("http://localhost:3000/heroes");
            return await heroes.json();
        }

        getData().then((heroes) => {
            let heroId = document.getElementById("hero-id").value;
            let hero = heroes.find((hero) => hero.id.toString() === heroId);

            let template = document.getElementById("tpl-hero");
            let clone = template.content.cloneNode(true);

            let name = clone.querySelector(".name");

            name.innerText = hero.name;

            let officialName = clone.querySelector(".alter-ego");
            officialName.innerText = hero.alterEgo;

            let powers = clone.querySelector(".powers");
            powers.innerText = hero.abilities.join(", ");

            document.getElementById("target").appendChild(clone);
        })
    })

})();
