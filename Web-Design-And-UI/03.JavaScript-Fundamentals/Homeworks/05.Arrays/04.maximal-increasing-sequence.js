var i,
    len,
    lastIndex,
    maxSequence = [],
    count = 1,
    maxCount = 1,
    arr = [3, 2, 3, 4, 2, 2, 4];

for (i = 0, len = arr.length; i < len - 1; i += 1) {

    if (arr[i] < arr[i + 1]) {
        count += 1;
    } else {
        if (maxCount < count) {
            lastIndex = i;
            maxCount = count;
        }

        count = 1;
    }
}

if (maxCount < count) {
    lastIndex = i;
    maxCount = count;
}

for (i = 0; i < maxCount; i += 1) {
    maxSequence[i] = arr[lastIndex - maxCount + i + 1];
}
console.log(maxSequence.join(', '));
