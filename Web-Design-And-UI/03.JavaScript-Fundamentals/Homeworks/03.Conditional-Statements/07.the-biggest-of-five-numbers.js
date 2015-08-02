//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.
var i,
    j,
    len,
    lenght,
    testArr,
    biggest,
    a = [5, -2, -2, 0, -3],
    b = [2, -22, 4, -2.5, -0.5],
    c = [2, 1, 3, 0, -1.1],
    d = [4, 0, 2, 5, -2],
    e = [1, 0, 0, 5, -0.1];

for (i = 0, len = a.length; i < len; i += 1) {
	//constructing array of 5 numbers to see who is the biggest of them
    testArr = [a[i], b[i], c[i], d[i], e[i]];
    biggest = testArr[0];
    //find the biggest
    for (j = 0, lenght = a.length; j < lenght; j += 1) {

        if (biggest < testArr[j]) {
            biggest = testArr[j];
        }

    }

    console.log(biggest);
}
