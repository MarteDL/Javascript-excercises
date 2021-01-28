/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", async () => {

            let posts = await window.lib.getPosts();

            for (let article of posts) {
                article.comments = await window.lib.getComments(article.id);
                console.log(article);
            }
        }
    )
})()


// async function postAndComment() {
//     let posts = await window.lib.getPosts();
//     for (let article of posts) {
//         let comment = await window.lib.getComments(article.id);
//
//         article.comments = comment;
//         console.log(article);
//     }
// }
// postAndComment();

// react