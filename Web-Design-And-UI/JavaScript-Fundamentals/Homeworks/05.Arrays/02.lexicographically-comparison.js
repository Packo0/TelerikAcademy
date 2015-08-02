var i,
    isEqual = true,
    firstArr = ['a', 'b', 'c'],
    secondArr = ['a', 'b', 'c'];

if (firstArr.length !== secondArr.length) {
    isEqual = false;
} else {
    for (i = 0; i < Math.min(firstArr.length, secondArr.length); i += 1) {
        if (firstArr[i] !== secondArr[i]) {
            isEqual = false;
            break;
        }

    }

}

console.log('Is arrays equal -> ' + isEqual);
