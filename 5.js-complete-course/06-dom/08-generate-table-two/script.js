/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // create table
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(table);

    let index = 0;

    for (let i = 0; i < 10; i++) {

        //create table row
        let tableRow = document.createElement("tr");
        document.getElementById("myTable").appendChild(tableRow);


        for (let j = 0; j < 10; j++) {

            //create table cell
            let allTableRows = document.getElementsByTagName("tr");
            let tableCell = document.createElement("td");
            allTableRows[i].appendChild(tableCell);
            let allTableCells = document.getElementsByTagName("td");

            //assign value to cell
            let value = (i+1) * (j+1);
            allTableCells[index].innerText = value.toString();
            index++;
        }

    }

})();
