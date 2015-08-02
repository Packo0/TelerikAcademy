/* Task Description */
/* 
    Write a function that sums an array of numbers:
        numbers must be always of type Number
        returns `null` if the array is empty
        throws Error if the parameter is not passed (undefined)
        throws if any of the elements is not convertible to Number  

*/
function sum(numbers) {
    var i,
        len,
        result = 0;


    if (!numbers) {
        throw new Error();
    }

    if (!(numbers.length)) {
        return null;
    }

    for (i = 0, len = numbers.length; i < len; i += 1) {
        if (isNaN(+numbers[i])) {
            throw new Error();
        }

        result += +numbers[i];
    }

    return result;
}

module.exports = sum;
