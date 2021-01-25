/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let imgElement = document.getElementsByTagName("img")[0];
    let imgSrcWhenHovering = imgElement.getAttribute("data-hover");
    let imgSrcWhenNotHovering = imgElement.getAttribute("src");

    imgElement.addEventListener("mouseover", function(){
        imgElement.setAttribute("src", imgSrcWhenHovering)
    })

    imgElement.addEventListener("mouseleave", function (){
        imgElement.setAttribute("src", imgSrcWhenNotHovering);
    })

})();
