var arr = [4, 4, 9, 2, 3, 9, 4, 9, 9, 4, 9, 2, 1, 1, 4, 1, 3, 1, 9];

function countAppearanceNumber(arr, number) {
    var i,
        count = 0,
        len = arr.length;

    for (i = 0; i < len; i += 1) {
        if (arr[i] === number) {
            count += 1;
        }
    }

    return count;
}

function test() {
    var test1 = countAppearanceNumber(arr, 1),
        test2 = countAppearanceNumber(arr, 2),
        test3 = countAppearanceNumber(arr, 3),
        test4 = countAppearanceNumber(arr, 4),
        test5 = countAppearanceNumber(arr, 5),
        test6 = countAppearanceNumber(arr, 6),
        test7 = countAppearanceNumber(arr, 7),
        test8 = countAppearanceNumber(arr, 8),
        test9 = countAppearanceNumber(arr, 9),

        expected1 = 4,
        expected2 = 2,
        expected3 = 2,
        expected4 = 5,
        expected5 = 0,
        expected6 = 0,
        expected7 = 0,
        expected8 = 0,
        expected9 = 6;

    console.log('Nine test were run for the function countAppearanceNumber(arr, number)');
    console.log('test1 -> ' + (test1 === expected1));
    console.log('test2 -> ' + (test2 === expected2));
    console.log('test3 -> ' + (test3 === expected3));
    console.log('test4 -> ' + (test4 === expected4));
    console.log('test5 -> ' + (test5 === expected5));
    console.log('test6 -> ' + (test6 === expected6));
    console.log('test7 -> ' + (test7 === expected7));
    console.log('test8 -> ' + (test8 === expected8));
    console.log('test9 -> ' + (test9 === expected9));
}

test();
