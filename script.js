window.onload = function() {
    document.getElementById("answer").value = ""; // Clears the input field on reload
    document.getElementById("answer").focus(); // Auto-focuses on the input field
};

function checkAnswer() {
    let input = document.getElementById("answer").value.toLowerCase();
    let correctAnswer = "secretdoor";

    if (input === correctAnswer) {
        window.location.href = "next-clue.html";
    } else {
        document.getElementById("answer").value = "";
        document.getElementById("hint").innerText = "Wrong answer!";
    }
}

document.getElementById("answer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer(); // Calls the function when Enter is pressed
    }
});
