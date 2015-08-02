//Sort 3 real values in descending order
//Use nested if statements
//Note: Don`t use arrays and the built-in sorting functionality
var i,
    len,
    temp,
    arr = [],
    sorted = [],
    a = [5, -2, -2, 0, -1.1, 10, 1],
    b = [1, -2, 4, -2.5, -0.5, 20, 1],
    c = [2, 1, 3, 5, -0.1, 20, 1];

for (i = 0, len = a.length; i < len; i += 1) {
    arr = [a[i], b[i], c[i]];
    sorted = sortArray(arr);
    console.log(sorted);

}

function sortArray(unsorted) {
    var len,
        i, j,
        temp;
    for (i = 0, len = unsorted.length; i < len; i += 1) {
        for (j = i+1; j<len;j+=1) {
            if (unsorted[j] > unsorted[i]) {
                temp = unsorted[i];
                unsorted[i] = unsorted[j];
                unsorted[j] = temp;
            }
        }
    }
    return unsorted;
}
