var text = 'asd ASD asd Asd ASd AsD asD asd asd';

function wordOccurencesCount(text, word, isCaseSensitive) {
    var count = 0,
        pos = text.indexOf(word);

    if (arguments.length === 3 && !isCaseSensitive) {
        text = text.toLowerCase();
        word = word.toLowerCase();
    }

    while (pos !== -1) {
        count += 1;
        pos = text.indexOf(word, pos + 1);
    }

    return count;
}

console.log(wordOccurencesCount(text, 'asd', false));
console.log(wordOccurencesCount(text, 'asd', true));
console.log(wordOccurencesCount(text, 'asd'));
