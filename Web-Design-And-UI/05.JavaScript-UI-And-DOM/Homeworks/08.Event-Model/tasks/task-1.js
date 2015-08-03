/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
    return function(selector) {
        var root,
            btns,
            len,
            topMostContentElement;

        if (!selector || selector !== 'root') {
            throw new Error('no element selected');
        } else if (selector === 'root') {
            root = document.getElementById(selector);
        }

        btns = document.getElementsByClassName('button');

        for (i = 0, len = btns.length; i < len; i += 1) {
            btns[i].innerHTML = 'hide';
            btns[i].addEventListener('click', onBtnClick);
        }

        function onBtnClick(ev) {
            var clicked = ev.target,
                nextSibling = clicked.nextElementSibling;
                
            while (nextSibling) {
                if (nextSibling.className.indexOf('content') !== -1) {
                    if (nextSibling.style.display === 'none') {
                        nextSibling.style.display = '';
                        ev.target.innerHTML = 'hide';
                    } else {
                        nextSibling.style.display = 'none';
                        ev.target.innerHTML = 'show';
                    }
                }

                nextSibling = nextSibling.nextElementSibling;
            }
        }
    };
}

module.exports = solve;
