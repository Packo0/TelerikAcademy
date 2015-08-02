//Write a script that prints all the numbers from 1 to n, that are not divisible by 3 and 7 at the same time
var i,
    n = 40;
for (i = 1; i <= n; i += 1) {
    if (!(!(i % 3) && !(i % 7))) {
        console.log(i);
    }
}
