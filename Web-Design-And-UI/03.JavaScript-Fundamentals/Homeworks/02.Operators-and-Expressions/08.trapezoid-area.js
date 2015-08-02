//Write an expression that calculates trapezoid`s area by given a and b and height h
var i, len,
    area,
    a = [5, 2, 8.5, 100, 0.222],
    b = [7, 1, 4.3, 200, 0.333],
    h = [12, 33, 2.7, 300, 0.555];
for (i = 0, len = a.length; i < len; i += 1) {
    area = ((a[i] + b[i]) * h[i]) / 2;
    console.log(area);
}
