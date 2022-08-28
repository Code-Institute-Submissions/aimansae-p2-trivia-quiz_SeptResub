let countQuestions = 0;

function nextQuestion() {
    if (countQuestions == questions.length - 1) {
        location.href = "finish.html";
        return;
    }
}