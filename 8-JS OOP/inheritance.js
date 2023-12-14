// inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

class Goat extends Animal {
    bark() {
        console.log("Meeeh!");
    }
}

const myGoat = new Goat("Goaty");
myGoat.eat();