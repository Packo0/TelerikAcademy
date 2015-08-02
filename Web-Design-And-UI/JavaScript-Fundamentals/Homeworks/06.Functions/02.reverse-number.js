function reverseNumber(number) {
    var i,
        len,
        reversedNumber = [];

    if (isNaN(+number) || !number) {
        throw new Error('Not a number');
    }

    number = number || '';
    number = number.toString();

    for (i = 0, len = number.length; i < len; i += 1) {
        reversedNumber[i] = number[len - 1 - i];
    }

    return reversedNumber;
}

console.log(reverseNumber(256).join(''));
console.log(reverseNumber(123.45).join(''));
// console.log(reverseNumber('').join(''));
