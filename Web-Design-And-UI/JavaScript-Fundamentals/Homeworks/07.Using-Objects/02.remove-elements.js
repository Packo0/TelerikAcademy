Array.prototype.remove = function(item) {
    var i,
        len;
    for (i = 0, len = this.length; i < len; i += 1) {
        if (this[i] === item) {
            this.splice(i, 1);
            i -= 1;
        }
    }

    return this;
};

var arr = [1, 2, 1, 4, 1, 1, 3, 4, 1, 111, 3, 2, 1, '1'];

console.log('Original array');
console.log(arr);
console.log(arr.length);

console.log('Modified array without removed elements');
console.log(arr.remove(1));
console.log(arr.length);
