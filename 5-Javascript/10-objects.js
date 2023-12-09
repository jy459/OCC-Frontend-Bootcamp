const person = {
    firstname: "kim",
    lastname: "Doe",
    nickname: "KD",
    age: 28,
    height: "5'9",
    hobbies: ["reading", "gaming", "painting"],

    // method
    greet: function() {
        console.log("Hello, my name is Kim.");
        console.log(`Hello, my name is ${person.firstname} and I am ${person.age}.`);
    }
}

// Dot notation
console.log(person.firstname);
console.log(person.hobbies);
person.greet();

// Adding New Properties
person.nationality = "American";
console.log(person.nationality);

// Adding new methods
person.talkHobbies = function() {
    console.log(`I like ${person.hobbies[1]}!`);
}
person.talkHobbies();

// OOP = Object-oriented programming

const movie = {
    title: "Pulp Fiction",
    genre: "Action",
    cast: ["John Travolta", "Samuel L. Jackson"]
}

person.favoriteMovie = movie;
console.log(person.favoriteMovie.title);

// Destructuring Objects
// const lastname = person.lastname;
// const nickname = person.nickname;
// const height = person.height;

const { lastname, nickname, age} = person;
console.log(lastname, nickname, age);

const { height } = person;
console.log(height)