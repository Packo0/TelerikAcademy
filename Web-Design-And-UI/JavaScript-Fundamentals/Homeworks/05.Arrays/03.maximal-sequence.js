var i,
    len,
    repeatingElement,
    count = 1,
    maxCount = 1,
    arr = [5, 5, 6, 6, 6, 7, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

for (i = 0, len = arr.length; i < len - 1; i += 1) {

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

console.log(Array(maxCount).join(repeatingElement + ', ') + repeatingElement);
