/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(from, to) {
    var i,
        isPrime,
        primes = [],
        div,
        maxDiv;

    from = +from;
    to = +to;

    if (isNaN(from) || isNaN(to) || from === undefined || to === undefined) {
        throw new Error();
    }

    for (i = from; i <= to; i += 1) {
        isPrime = true;
        maxDiv = Math.sqrt(i);

        if (i < 2) {
            isPrime = false;
        }

        for (div = 2; div <= maxDiv; div += 1) {
            if (!(i % div)) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    return primes;
}

// console.log(findPrimes(0, 5));
module.exports = findPrimes;
