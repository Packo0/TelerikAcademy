function hasProperty(obj, property) {
    for (var prop in obj) {
        if (prop === property) {
            return true;
        }
    }

    return false;
}

var hasProp,
    person = {
        name: 'Pesho',
        age: 26,
        toString: function() {
            return 'I am ' + this.name + ' and ' + this.age + ' year`s old!';
        }
    };

hasProp = hasProperty(person, 'name');
console.log('Does object person has property age? -> ' + hasProp);

hasProp = hasProperty(person, 'petkan');
console.log('Does object person has property petkan? -> ' + hasProp);
