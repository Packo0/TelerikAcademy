//Write an if statement that takes two double variables a and b and exchange their values if the first one is greater than the second
//As a result print the values a and b, separed by a space
var i,
    len,
    a = [5, 3, 5.5],
    b = [2, 4, 4.5];

for (i = 0, len = a.length; i < len; i += 1) {
    if (a[i] > b[i]) {
        console.log(b[i] + " " + a[i]);
    } else {
        console.log(a[i] + " " + b[i]);
    }
}
