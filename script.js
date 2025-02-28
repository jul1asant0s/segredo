function checkAnswer() {
    let input = document.getElementById("answer").value.toLowerCase();
    let correctAnswer = "secretdoor";

    if (input === correctAnswer) {
        window.location.href = "next-clue.html";
    } else {
        document.getElementById("hint").innerText = "Try again! Hint: Look at the stars.";
    }
}