// Initialize an array to store the history of previous rolls
var spinHistory = [];

// Function to simulate spinning the roulette wheel and selecting a random outcome
function spinRoulette() {
    // Generate a random number to determine the outcome
    var randomNumber = Math.random() * 100;
    var result;

    // Check if the outcome is red
    if (randomNumber < 50) {
        result = "❤️"; // Red emoji
    } 
    // Check if the outcome is black
    else if (randomNumber < 53 + 46) {
        result = "🖤"; // Black emoji
    } 
    // Check if the outcome is green
    else if (randomNumber < 53 + 46 + 1) {
        result = "💚"; // Green emoji
    } 
    // Otherwise, return no result
    else {
        result = "No result";
    }

    // Add the current result to the spin history
    if (spinHistory.length >= 15) {
        spinHistory.pop();
    }
    spinHistory.unshift(result);

    return result;
}

// Function to get the history of previous rolls
function getSpinHistory() {
    return spinHistory.join(" ");
}
