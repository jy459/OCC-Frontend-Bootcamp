// Polmorphism
class Animal {
    makeSound() {
        return "The animals make a noice";
    };
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", the dog barks"
    }
}

const dog = new Dog();
console.log(dog.makeSound());