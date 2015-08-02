//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time
var divisibleBy7And5,
    number = 140;
divisibleBy7And5 = ((number % 7) === 0) && (number % 5 === 0);
console.log("Is " + number + " divisible by 7 and 5: " + divisibleBy7And5);
