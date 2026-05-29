// =============================================
// JavaScript Basics - Learning File
// =============================================

// 1. VARIABLES
let name = "Drew";                    // changeable value
const birthYear = 1991;               // cannot be changed
var oldWay = "This is old style";     // avoid using 'var' in modern JS

let age = 35;
let isStudent = true;
let score = null;                     // intentionally empty

console.log("Name:", name);
console.log("Age:", age);

// 2. FUNCTIONS

// Function Declaration
function greet(person) {
    return `Hello ${person}! Welcome to JavaScript!`;
}

// Function Expression (Arrow Function - Modern way)
const addNumbers = (a, b) => {
    return a + b;
};

// Function that modifies the page
function showMessage(text, color = "blue") {
    const messageElement = document.getElementById('message');
    messageElement.textContent = text;
    messageElement.style.color = color;
}

// 3. ARRAYS

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

const numbers = [10, 20, 30, 40, 50];

// Array methods examples
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

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

button.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
        showMessage("Great! First click! 🎉", "green");
    } 
    else if (clickCount === 5) {
        showMessage(`You've clicked ${clickCount} times! Here's a random fruit: ${fruits[Math.floor(Math.random() * fruits.length)]}`, "purple");
    } 
    else if (clickCount === 10) {
        showMessage("You're getting good at this! 🏆", "orange");
    } 
    else {
        showMessage(`Button clicked ${clickCount} times`, "blue");
    }
});

// Press 'R' to reset
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'r') {
        clickCount = 0;
        showMessage("Counter reset! Try clicking again.", "gray");
    }
});

// Run some examples on page load
console.log(greet(name));
console.log("Sum of 7 and 8 =", addNumbers(7, 8));
console.log("Person's full name:", person.fullName());