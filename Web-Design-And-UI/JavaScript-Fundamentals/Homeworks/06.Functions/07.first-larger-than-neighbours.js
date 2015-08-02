function isBiggerThanNeighbours(arr) {
    var i,
        len,
        left,
        right,
        currentElement;

    arr = arr || [];
    len = arr.length;

    for (i = 0; i < len; i += 1) {
        currentElement = arr[i];

        if (0 < i && i < len) {
            left = arr[i - 1];
            right = arr[i + 1];
        } else {
            continue;
        }

        if (currentElement > left && currentElement > right) {
            return i;
        } else {
            continue;
        }
    }

    return -1;
}

var arr1 = [4, 4, 1, 2, 3, 9, 4, 9, 9, 4, 9, 2, 1, 1, 4, 1, 3, 1, 9],
    arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log(isBiggerThanNeighbours(arr1));
console.log(isBiggerThanNeighbours(arr2));
