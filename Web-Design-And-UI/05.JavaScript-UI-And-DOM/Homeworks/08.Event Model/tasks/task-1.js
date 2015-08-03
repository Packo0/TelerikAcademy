/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
  return function (selector) {
  	var root;

  	if(typeof selector === 'string'){
  		root = document.getElementById(selector);
  	}
  };
};

module.exports = solve;