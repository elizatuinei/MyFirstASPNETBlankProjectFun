
function showFeedback(feedback) {
    var feedbackContainer = document.getElementById("feedback");

    if (feedback === 'correct') {
        feedbackContainer.innerHTML = "<p>Woohoo! You got it right!</p>";
    } else {
        feedbackContainer.innerHTML = "<p>Wrong answer. Try again!</p>";
    }
}
function toggleFlip(element) {
    const flipContainer = element.querySelector('.flip-container');
    flipContainer.classList.toggle('flipped');
}
$(document).ready(function () {
    window.calculateTotal = function () {
        const hours = parseFloat($('#hours').val());
        const hourlyRate = parseFloat($('#hourlyRate').val());
        const totalOutput = $('#totalOutput');

        if (!isNaN(hours) && hours > 0) {
            const total = hours * hourlyRate;
            totalOutput.html(`Total: $${total.toFixed(2)}`);
        } else {
            totalOutput.html('Please enter a valid number of hours.');
        }
    };
});




