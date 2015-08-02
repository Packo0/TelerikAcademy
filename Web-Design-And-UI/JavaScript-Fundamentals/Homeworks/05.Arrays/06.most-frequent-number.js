var i,
    j,
    len,
    repeatingElement,
    count = 1,
    maxCount = 1,
    minEll,
    len,
    arr = [4, 4, 9, 2, 3, 9, 4, 9, 9, 4, 9, 2, 1, 1, 4, 1, 3, 1, 9];

for (i = 0, len = arr.length; i < len - 1; i += 1) {
    minEll = i;

    for (j = i + 1; j < len; j += 1) {
        if (arr[j] < arr[minEll]) {
            minEll = j;
        }
    }

    //Swap elements
    if (minEll !== i) {
        arr[i] = arr[i] + arr[minEll];
        arr[minEll] = arr[i] - arr[minEll];
        arr[i] = arr[i] - arr[minEll];
    }
}
console.log(arr);
for (i = 0; i < len - 1; i += 1) {

    if (arr[i] === arr[i + 1]) {
        count += 1;
    } else if (arr[i] !== arr[i + 1]) {
        if (maxCount < count) {
            repeatingElement = arr[i];
            maxCount = count;
        }

        count = 1;
    }
}

if (maxCount < count) {
    repeatingElement = arr[i];
    maxCount = count;
}


console.log(repeatingElement + ' (' + maxCount + ' times)');
