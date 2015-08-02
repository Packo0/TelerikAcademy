//Write a script that finds the biggest of three numbers
//use nested if statements
var i,
    len,
    biggest,
    a = [5, -2, -2, 0, -0.1],
    b = [2, -2, 4, -2.5, -0.5],
    c = [2, 1, 3, 5, -1.1];

for (i = 0, len = a.length; i < len; i += 1) {
    biggest = a[i];
    if (biggest <= b[i]) {

        biggest = b[i];

        if (biggest <= c[i]) {

            biggest = c[i];
        }
    } else if (biggest < c[i]) {
        biggest = c[i];
    }

    console.log(biggest);
}
