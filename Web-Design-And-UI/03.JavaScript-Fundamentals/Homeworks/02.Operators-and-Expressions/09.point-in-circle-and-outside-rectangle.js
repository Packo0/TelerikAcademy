//Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2)
var i, len,
    isInCircle,
    isOutsideRect,
    radius = 3,
    centerX = 1,
    centerY = 1,
    x = [1, 3, 0, 4, 2, 4, 2.5, 3.5, -100],
    y = [4, 2, 1, 1, 0, 0, 1.5, 1.5, -100];
    
for (i = 0, len = x.length; i < len; i += 1) {
    isInCircle = (((x[i] - centerX) * (x[i] - centerX)) + ((y[i] - centerY) * (y[i] - centerY))) <= (radius * radius);
    isOutsideRect = ((x[i] < -1) || (x[i] > 5)) || ((y[i] < -1) || (y[i] > 1));
    //console.log("Is Point(" + x + ", " + y + ") in circle K({1, 1}, 3): and outside of rectangle R(top=1, left=-1, width=6, height=2): ");
    //console.log(isInCircle);
    //console.log(isInRect);
    
    if (isInCircle && isOutsideRect) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
