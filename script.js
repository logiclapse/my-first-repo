// script.js

const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
        message.textContent = "Great! You clicked the button! 🎉";
    } else if (clickCount === 5) {
        message.textContent = "Wow, you're really clicking! Keep going! 🔥";
    } else if (clickCount === 10) {
        message.textContent = "Okay, you're a pro now! 10 clicks! 🏆";
    } else {
        message.textContent = `Button clicked ${clickCount} times!`;
    }
});

// Bonus: Press 'R' key to reset
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'r') {
        clickCount = 0;
        message.textContent = "Counter has been reset! 👍";
    }
});