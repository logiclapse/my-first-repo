// =============================================
// JavaScript Basics - Learning File
// =============================================

// 1. VARIABLES
let name = "Drew";                    // changeable value
const birthYear = 1991;               // cannot be changed
const favoriteColor = "purple";
var oldWay = "This is old style";     // avoid using 'var' in modern JS

let age = 35;
let isStudent = true;
let score = null;                     // intentionally empty

console.log("Name:", name);
console.log("Age:", age);
console.log("My name is " + name + " and my favorite color is " + favoriteColor + ".");

// 2. FUNCTIONS

// Function Declaration
function greet(person) {
    return `Hello ${person}! Welcome to JavaScript!`;
}

// Function Expression (Arrow Function - Modern way)
const addNumbers = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};

// Function that modifies the page
function showMessage(text, color = "blue") {
    const messageElement = document.getElementById('message');
    messageElement.textContent = text;
    messageElement.style.color = color;
}

// 3. ARRAYS

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Strawberry", "Grapes",];

const numbers = [10, 20, 30, 40, 50];

// Array methods examples
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 4. OBJECTS (Bonus - Very Important)
const person = {
    firstName: "Drew",
    lastName: "Something",
    age: 35,
    skills: ["JavaScript", "Git", "VS Code"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// =============================================
// Interactive Demo
// =============================================

let clickCount = 0;
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

// Press 'R' to reset
// New button behavior - Show random fruit each click
button.addEventListener('click', () => {
    clickCount++;
    
    // Get a random fruit
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomFruit = fruits[randomIndex];
    
    // Show the message
    showMessage(`Click #${clickCount} → Random Fruit: ${randomFruit} 🍎`, "green");
});

// Run some examples on page load
console.log(greet(name));
console.log("Sum of 7 and 8 =", addNumbers(7, 8));
console.log("Person's full name:", person.fullName());
console.log("7 multiplied by 8 =", multiply(7, 8));