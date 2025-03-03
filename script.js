window.onload = function() {
    document.getElementById("answer").value = ""; // Clears the input field on reload
    document.getElementById("answer").focus(); // Auto-focuses on the input field
};

answerMap = {
    "free": "free",
    "beginning": "beginning",
    "qrcode": "qrcode"
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
        checkAnswer(); // Calls the function when Enter is pressed
    }
});
