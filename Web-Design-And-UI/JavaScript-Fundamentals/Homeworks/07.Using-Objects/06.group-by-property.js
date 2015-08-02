function Person(fname, lname, age) {
    this.fname = fname || 'unnamed';
    this.lname = lname || 'unnamed';
    this.age = age || 0;
}

function groupByProperty(persons, property) {

    var group = {},
        key;

    persons.forEach(function(person) {

        key = person[property];
        // Create new empty array if the key does not exist
        group[key] = group[key] || [];
        group[key].push(person);
    });

    return group;
}

var groupByFirstName = [],
    groupByLastName = [],
    groupByAge = [],
    people = [
        new Person('Nikolay', 'Kostov', 24),
        new Person('Nikolay', 'Hristov', 25),
        new Person('Nikolay', 'Kenov', 30),
        new Person('Ivaylo', 'Kenov', 25),
        new Person('Evlogi', 'Kenov', 25),
        new Person('Evlogi', 'Hristov', 30),
        new Person('Evlogi', 'Kostov', 30),
        new Person('Ivaylo', 'Kostov', 24),
        new Person('Ivaylo', 'Hristov', 24)
    ];


groupByFirstName = groupByProperty(people, 'fname');
groupByLastName = groupByProperty(people, 'lname');
groupByAge = groupByProperty(people, 'age');

console.log('People grouped by first name');
console.log(groupByFirstName);

console.log('People grouped by last name');
console.log(groupByLastName);

console.log('People grouped by age');
console.log(groupByAge);
