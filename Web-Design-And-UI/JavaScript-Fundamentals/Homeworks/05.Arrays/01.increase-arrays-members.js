var i,
    len,
    arr = new Array(20);

for (i = 0, len = arr.length; i < len; i += 1) {
    arr[i] = i * 5;
    console.log(i + ': ' + arr[i]);
}
