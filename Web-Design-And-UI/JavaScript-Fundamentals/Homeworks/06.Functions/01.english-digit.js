function lastDigitAsEnglishWord(number) {
    var lastDigit,
        digitsToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    number = number || 0;
    lastDigit = number % 10;

    return digitsToNine[lastDigit];
}

console.log(lastDigitAsEnglishWord(512));
console.log(lastDigitAsEnglishWord(1024));
console.log(lastDigitAsEnglishWord(12309));
