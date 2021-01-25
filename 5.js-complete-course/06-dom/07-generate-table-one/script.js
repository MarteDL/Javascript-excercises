/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(table);

    for (let i = 0; i < 10; i++) {
        let tableRow = document.createElement("tr");
        document.getElementById("myTable").appendChild(tableRow);

        let allTableRows = document.getElementsByTagName("tr");
        let tableCell = document.createElement("td");
        allTableRows[i].appendChild(tableCell);
    }

})();
