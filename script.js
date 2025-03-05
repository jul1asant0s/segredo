window.onload = function() {
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
};

answerMap = {
    "free": "free",
    "beginning": "beginning",
    "patience": "patience",
    "keep going": "keep_going",
    "afraid": "afraid",
    "lucas": "lucas"
}

function checkAnswer() {
    let input = document.getElementById("answer").value.toLowerCase();

    if (input in answerMap) {
        document.getElementById("hint").innerText = "";
        let nextPage = "hints/" + answerMap[input];
        window.location.href = nextPage;
    } else {
        document.getElementById("answer").value = "";
        document.getElementById("hint").innerText = "Wrong answer!";
    }
}

document.getElementById("answer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
