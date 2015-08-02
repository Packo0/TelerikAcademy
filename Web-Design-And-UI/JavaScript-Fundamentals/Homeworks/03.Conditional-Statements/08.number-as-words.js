//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
var i,
    len = 192,
    result = '',
    numbersTo9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    numbers10To19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'],
    numbers20To90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// three digit with second and third digit = 0
if (len.toString().length === 3 && len.toString()[1] == 0 && len.toString()[2] == 0) {
    result = numbersTo9[len / 100 | 0] + ' hundred';
} else if (len.toString().length === 3) {
    result = numbersTo9[len / 100 | 0] + ' hundred and ';
    //third digit = 0
    if (!(len % 10)) {
        len = (len / 100).toString()[2];
        len = len + '0';
    } else {
        len = (len / 100).toString()[2] + (len / 100).toString()[3]; //get the last two digits
    }

    twoNumbersLenght();
} else {
    twoNumbersLenght();
}

console.log(result);

function twoNumbersLenght() {
    len = +len; //convert to number
    if (len.toString().length < 2) {
        result = result + numbersTo9[len];
    } else if (len.toString().length > 1 && len < 20) {
        result = result + numbers10To19[len - 10];
    } else if (len.toString().length > 1 && len.toString()[1] == 0) {
        switch (len.toString()[0]) {
            case '2':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '3':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '4':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '5':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '6':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '7':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '8':
                result = result + numbers20To90[len / 10 - 2];
                break;
            case '9':
                result = result + numbers20To90[len / 10 - 2];
                break;
        }
    } else if (len.toString().length > 1 && len.toString()[1] != 0) {
        switch (len.toString()[0]) {
            case '2':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '3':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '4':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '5':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '6':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '7':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '8':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
            case '9':
                result = result + numbers20To90[(len / 10 | 0) - 2] + ' ' + numbersTo9[len % 10];
                break;
        }
    }
}
