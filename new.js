// after es7

class person {
    constructor(firstName, lastName, salary ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person("hero", "balam", 20000);
console.log(heroPerson);

const friendlyPerson = new person('hero', 'kalam', 25000 )
console.log(friendlyPerson);

// before es7

function Person1 (firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('grand', 'papa', 1200)
console.log(oldPerson);