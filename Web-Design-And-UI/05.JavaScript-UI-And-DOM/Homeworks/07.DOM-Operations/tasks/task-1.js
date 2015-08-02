/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function() {

    return function(element, contents) {
        var selected,
            i,
            len,
            fragment,
            cloned;

        if (typeof element === 'string') {
            selected = document.getElementById(element);
        } else if (element instanceof HTMLElement) {
            selected = element;
        } else {
            throw Error('The provided first parameter is neither string or existing DOM element');
        }

        if (!contents || contents.some(function (argument) {
             return typeof argument !== 'string' && typeof argument !== 'number';
          })) {
            throw Error("Any of the contents is neight `string` or `number`");
        }

        while (selected.lastChild) {
            selected.removeChild(selected.lastChild);
        }

        fragment = document.createDocumentFragment();

        for (i = 0, len = contents.length; i < len; i += 1) {
            cloned = selected.cloneNode(true);
            cloned.innerHTML = contents[i];
            fragment.appendChild(cloned);
        }

        selected.appendChild(fragment);
    };
};
