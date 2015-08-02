function isBiggerThanNeighbours(arr, element, position) {
    var i,
        len,
        left,
        right;

    arr = arr || [];
    element = element || 0;
    position = position || 0;

    element = arr[position];
    len = arr.length;

    if (0 < position && position < len) {
        left = arr[position - 1];
        right = arr[position + 1];
    }

    for (i = 0; i < len; i += 1) {
        if (element > left && element > right) {
            return true;
        } else {
            return false;
        }
    }
}

var arr = [4, 4, 9, 2, 3, 9, 4, 9, 9, 4, 9, 2, 1, 1, 4, 1, 3, 1, 9];

console.log(isBiggerThanNeighbours(arr, 4, 0));
console.log(isBiggerThanNeighbours(arr, 9, arr.length - 1));
console.log(isBiggerThanNeighbours(arr, 9, 2));
console.log(isBiggerThanNeighbours(arr, 2, 3));
