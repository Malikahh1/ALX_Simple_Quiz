// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected radio input
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback paragraph
    const feedback = document.getElementById("feedback");

    // Check if an option was selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545";
        return;
    }

    // Get the user's answer value
    const userAnswer = selectedOption.value;

    // Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
