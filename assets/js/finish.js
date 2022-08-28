let countQuestions = 0;

function lastPage() {
    if (countQuestions == questions.length - 1) {
        location.href = "finish.html";
        return;
    }
}