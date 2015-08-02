// Write an expression that checks for given integer if its third digit (right=to-left) is 7
var isThirdDigit7,
    number = -789;

if (number < 0) {
    number = -number;
}

isThirdDigit7 = (((number / 100) | 0) % 10) === 7;
console.log("Is third digit of " + number + " is 7: " + isThirdDigit7);
