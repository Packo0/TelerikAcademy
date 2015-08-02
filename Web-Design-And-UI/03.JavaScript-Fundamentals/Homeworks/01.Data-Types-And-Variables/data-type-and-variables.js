//Problem 1. JavaScript literals
var i, len,
    someNull = null,
    someUndefined = undefined,
    integer = 5,
    floatingPoint = 5.5,
    trueStoryBro = true,
    stringVariable = '"How you doin?", Pesho said.',
    someArray = [1, 2, 3, 4, 5],
    someObject = {
        greeting: 'Hello',
        bossName: 'Pesho'
    };

var arr = [someNull, someUndefined, integer, floatingPoint, trueStoryBro, stringVariable, someArray, someObject];

for (i = 0, len = arr.length; i < len; i += 1) {
    console.log(typeof arr[i]);
}
