//Write a script that shows the sign(+, - or 0) of the product of three real numbers, without calculating it
//use a sequence of if operators
var i,
    len,
    a = [5, -2, -2, 0, -1],
    b = [2, -2, 4, -2.5, -0.5],
    c = [2, 1, 3, 4, -5.1];
for (i = 0, len = a.length; i < len; i += 1) {
    //plus sign
    if ((a[i] > 0 && b[i] > 0 && c[i] > 0) || (a[i] < 0 && b[i] < 0 && c[i] > 0) || (a[i] < 0 && b[i] > 0 && c[i] < 0) || (a[i] > 0 && b[i] < 0 && c[i] < 0)) {
        console.log("+");
    } else if (!a[i] || !b[i] || !c[i]) { //zero sign
        console.log(0);
    } else { //minus sign
        console.log("-");
    }
}
