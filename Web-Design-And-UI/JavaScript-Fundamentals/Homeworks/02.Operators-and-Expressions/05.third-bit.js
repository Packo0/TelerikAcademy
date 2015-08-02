//find third bit of a number counting from 0 and right to left
var thirdBit,
    mask = 1,
    number = 62241;

thirdBit = ((mask << 3) & number) >> 3;
console.log("Third bit of " + number + " is: " + thirdBit);
