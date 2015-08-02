var i,
    j,
    minEll,
    unsortedArr = [],
    length = Math.random() * 100 | 0;

//Fill array with random cells and random numbers in it.
for (i = 0; i < length; i += 1) {
    unsortedArr[i] = Math.random() * 100 | 0;
}

console.log('Unsorted array');
console.log(unsortedArr.join(', '));

for (i = 0; i < length - 1; i += 1) {
    minEll = i;

    for (j = i + 1; j < length; j += 1) {
        if (unsortedArr[j] < unsortedArr[minEll]) {
            minEll = j;
        }
    }

    //Swap elements
    if (minEll !== i) {
        unsortedArr[i] = unsortedArr[i] + unsortedArr[minEll];
        unsortedArr[minEll] = unsortedArr[i] - unsortedArr[minEll];
        unsortedArr[i] = unsortedArr[i] - unsortedArr[minEll];
    }

}

console.log('Sorted array');
console.log(unsortedArr.join(', '));
