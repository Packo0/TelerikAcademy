function printYoungestPersonFullName(persons) {
    var i,
        len,
        youngest = persons[0];

    for (i = 0, len = persons.length; i < len - 1; i += 1) {
        if (persons[i + 1].age < persons[i].age) {
            youngest = persons[i + 1];
        }
    }
    return youngest.firstname + ' ' + youngest.lastname;
}

var people = [{
        firstname: 'Gosho',
        lastname: 'Petrov',
        age: 54
    },

    {
        firstname: 'Mariika',
        lastname: 'Duhleva',
        age: 18
    }, {
        firstname: 'Bay',
        lastname: 'Ivan',
        age: 81
    }
];

console.log(printYoungestPersonFullName(people) + ' is the youngest person');
