function clone(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    var cloned = {};

    for (var prop in obj) {
        cloned[prop] = obj[prop];
    }

    return cloned;
}

var person = {
    name: 'Pesho',
    age: 26,
    toString: function() {
        return 'I am ' + this.name + ' and ' + this.age + ' year`s old!';
    }
};

var clonedPerson;

//console.log(person);

clonedPerson = clone(person);

//console.log(clonedPerson.toString());

person.name = 'Ivan';

console.log(clonedPerson);
console.log(person);
