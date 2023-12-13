// Arrow Function

const greet = () => {
    console.log("Merry Christmas!")
}
greet();

// Enhanced object literals
const person = {
    name: "Ron",
    age: 21,
    greeting() {
        console.log(`My name is ${this.name}.`);
    }
}

person.greeting();

// Spread and Reset Operators 
function sum(x,y,z) {
    return x + y +z;
}

const number = [1,2,3];
console.log(sum(...numbers));

// Rest
function myFunction(firstArg, ...restofArgs){
    conosole.log(firstArg);
    console.log(restofArgs);
}
myFunction('one', 'two', 'three', 'four');

// Common JS Built-in Methods
// Arrays
// Filter

let Numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers2.filter((number) => number % 2 == 0);
console.log(even);

const oddNumbers = numbers.filter(num => num % 2 != 0);
console.log(oddNumbers);

// String
// Split
const message = "hello, Universe, hi";
const words = message.split(" .");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps overt the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// Length
const sentencelength = sentence.length;
console.log(sentenceLength);

// Objects
const cat = {
    number: "Chicha",
    age: 3,
    color: ["Black", "white"]
}

// Keys
console.log(object.keys(cat));

// values
console.log(object.values(cat));

console.log(cat);

// Entries
console.log(object.entries(cat));

// Math
// max and min
const maxnumber = Max.max(10,5,20, 30);
console.log(minnumber);

// random
const randomvalue = math.random();
console.log(randomvalue);

// round
console.log(Math.round(randomvalue));
// Floor
console.log(Math.floor(randomValue));

// ceil
console.log(Math.ceil(randomValue));

// Nested Math Method
const randomNumber = Math.floor(math.random() * 100)
console.log("Random number between 1 and 100:", randomNumber);

// Other methods
// Date
// const currentDate = new date();
// console.log(currentDate);


// const christmas = new date(2023, 12, 25);
// console.log(christmas);

// toFixed
const price = 100.