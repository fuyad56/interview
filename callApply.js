// #02

const normalPerson = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson);
// console.log(normalPerson.firstName);


// #03

const heroPerson = {
    firstName:"hero",
    lastName: 'Balam',
    salary: 25000,
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);


// #04

// normalPerson.chargeBill.call(heroPerson, 900, 10, 100);
// normalPerson.chargeBill.call(heroPerson, 3000, 30, 200);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30])
console.log(heroPerson.salary);