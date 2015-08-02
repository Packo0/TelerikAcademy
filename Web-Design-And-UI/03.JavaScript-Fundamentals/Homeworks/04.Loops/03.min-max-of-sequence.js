//Write a script that finds the max and min number from a sequence of numbers
var i,
    numbers = [],
    min = 1001,
    max = -1001,
    len = 1 + Math.random() * 21 | 0, //random number between [1, 20]
    random;

//fill in the numbers with random values
for (i = 0; i < len; i += 1) {
    random = Math.random() * (1000 - (-1000)) - 1000 | 0; //random number between [-1000 1000]
    numbers[i] = random;
}

for (i = 0; i < len; i += 1) {
    if (max < numbers[i]) {
        max = numbers[i];
    }

    if (min > numbers[i]) {
        min = numbers[i];
    }
}

console.log(numbers.join(', '));
console.log('Max ->' + max);
console.log('Min ->' + min);
