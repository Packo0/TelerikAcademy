function createPoint(x, y) {
    return {
        x: x,
        y: y,
        toString: function() {
            return 'P(' + this.x + ', ' + this.y + ')';
        }
    };
}

function createLine(point1, point2) {
    return {
        p1: point1,
        p2: point2,
        toString: function() {
            return 'L(P1(' + point1.x + ', ' + point1.y + '), P2(' + point2.x + ', ' + point2.y + '))';
        }
    };
}

function calcDistance(point1, point2) {
    var distance = Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));
    return distance;
}

function canFormTriangle(a, b, c) {
    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        return true;
    } else {
        return false;
    }
}

var pointOne = createPoint(2, 4),
    pointTwo = createPoint(1, 7),
    pointThree = createPoint(5, 12),
    lineA = calcDistance(pointOne, pointTwo),
    lineB = calcDistance(pointTwo, pointThree),
    lineC = calcDistance(pointOne, pointThree);


console.log('Point A = ' + pointOne.toString());
console.log('Point B = ' + pointTwo.toString());
console.log('Point C = ' + pointThree.toString());

console.log('-------------------------------------------');
console.log('Line A = ' + lineA.toString());
console.log('Line B = ' + lineB.toString());
console.log('Line C = ' + lineC.toString());

console.log('-------------------------------------------');
console.log('Can form a triangle -> ' + canFormTriangle(lineA, lineB, lineC));
