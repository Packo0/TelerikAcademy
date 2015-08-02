var leftInd,
    rightInd,
    midPoint,
    numbertoSearch = 11,
    arr = [1, 3, 4, 6, 8, 9, 11];

function midPointCompute(left, right) {
    return (left + (right - left) / 2 + 0.5) | 0;
}

leftInd = 0;
rightInd = arr.length - 1;
midPoint = midPointCompute(leftInd, rightInd);

while (rightInd >= leftInd) {
    if (numbertoSearch > arr[midPoint]) {

        //move left index
        leftInd = midPoint + 1;
        //calculate midPoint
        midPoint = midPointCompute(leftInd, rightInd);
    } else if (numbertoSearch < arr[midPoint]) {
        //move right index
        rightInd = midPoint - 1;
        //calculate midPoint
        midPoint = midPointCompute(leftInd, rightInd);
    } else {
        //found
        // foundInd = midPoint;
        break;
    }
}

if (leftInd > rightInd) {
    console.log('Not found');
} else {
    console.log('Found at index: ' + midPoint);
}
