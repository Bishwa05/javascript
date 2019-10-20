
/**
 *         <style>
            #style {
                background: blue;
                color: white;
            }
        </style>

        replicating this via js
 */


var el = document.getElementById('style');

// This approach is not good as it does 3 re-renders
 el.style.background = "yellow";
// el.style.color = "white";
// el.style.width = "200px"


// el.style.cssText += "background:blue; color:white; width:200px";

// el.style.cssText +="height: 100px";

// The computed properties comes from css files and browser default behavior
// If we are changing the style from js then it is actual property of object not the computed
console.log(getComputedStyle(el));