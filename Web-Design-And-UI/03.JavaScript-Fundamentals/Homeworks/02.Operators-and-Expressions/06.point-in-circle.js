//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius
var isInCircle,
    radius = 5,
    centerX = 0,
    centerY = 0,
    x = 2,
    y = 2.655;

isInCircle = (((x - centerX) * (x - centerX)) + ((y - centerY) * (y - centerY))) < (radius * radius);
console.log("Is Point(" + x + ", " + y + ") in circle K({0, 0}, 5): " + isInCircle);
