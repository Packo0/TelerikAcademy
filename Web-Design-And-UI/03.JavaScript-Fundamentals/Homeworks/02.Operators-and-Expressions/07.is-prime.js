//Write an expression that checks if given positive integer number n (n<=100) is prime
// Write an expression that checks if given positive integer number n (n <= 100) is primer
var divider = 2,
    isPrime = true,
    number = 51,
    maxDivider = Math.round(Math.sqrt(number));

if (number < 2) {
    isPrime = false;
} else {
    isPrime = true;
}
while (isPrime && (divider <= maxDivider)) {
    if (!(number % divider)) {
        isPrime = false;
        break;
    }
    divider += 1;
}
console.log("Is " + number + " prime: " + isPrime);
