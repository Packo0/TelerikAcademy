//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects
var smallest,
    largest,
    prop,
    array = [];
for (prop in document) {
    array.push(prop);
}

array.sort();
smallest = array[0];
largest = array[array.length - 1];

console.log('Lexicographically smallest property of the object document is -> ' + smallest);
console.log('Lexicographically largest property of the object document is -> ' + largest);

array = [];
for (prop in window) {
    array.push(prop);
}

array.sort();
smallest = array[0];
largest = array[array.length - 1];

console.log('Lexicographically smallest property of the object window is -> ' + smallest);
console.log('Lexicographically largest property of the object window is -> ' + largest);

array = [];
for (prop in navigator) {
    array.push(prop);
}

array.sort();
smallest = array[0];
largest = array[array.length - 1];

console.log('Lexicographically smallest property of the object navigator is -> ' + smallest);
console.log('Lexicographically largest property of the object navigator is -> ' + largest);
