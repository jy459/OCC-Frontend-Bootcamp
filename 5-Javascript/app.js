// Introduction to Arrays

let superheros = ["Superman", "Batman","Joker", "Spiderman","Wonder women"];

console.log("Hero 1 is", superheros[0]);
console.log("Hero 5 is", superheros[4]);

superheros[2] = "Doctor Strange";

// Push Method
superheros.push("Deadpool");
console.log(superheros);

// pop method (removing last value inthe array)
superheros.pop();
console.log(superheros);

// Array Iteration
for (let i = 0; i < 4; i++) {
    console.log("Hero", i+1, "is", superheros[i]);
}

// foreach method
superheros.forEach(function(hero) {
    console.log("hero is", hero);
});

// Array Methods
console.log("Array length is", superheros.length);
console.log("Index of Wonder Woman is", superheros.indexOf("Wonder Woman"));
console.log("Joined Array:", superheros.join("-"));

let slicedArray = superheros.slice(8,1);
console.log(slicedArray);