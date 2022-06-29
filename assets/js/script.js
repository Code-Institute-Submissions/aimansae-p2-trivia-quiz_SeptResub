window.onload = function () {
    showQuestion(0);

}
// questions list

let questions = [
    {
        number: 1,
        question: "From this Italian City, which one is the most touristic?",
        answer: "Rome",
        options: [
            "Milan",
            "Rome",
            "Venice",
            "Pisa"
        ]

    },
    {
        number: 2,
        question: " What is the most used Mobile App in France in 2021?",
        answer: "CovidTracker",
        options: [
            "Netflix",
            "Facebook",
            "WhatsApp",
            "CovidTracker"]

    },
    {
        number: 3,
        question: " How old is the Oldest living French person?",
        answer: "118 years",
        options: [
            "108 years",
            "110 years",
            "118 years",
            "120 years"]

    },
    {
        number: 4,
        question: " What mountain range forms the northern border of Italy?",
        answer: "Alps",
        options: [
            "Rochies",
            "Alps",
            "Macaroni",
            "None of the above"]

    },
    {
        number: 5,
        question: " How long is the Dutch coastline?",
        answer: "451km",
        options: [
            "351km",
            "451km",
            "499km",
            "562km"]
    },
    {
        number: 6,
        question: " What country is the biggest (surface?)",
        answer: "France",
        options: [
            "France",
            "Germany",
            "Italy",
            "Netherlands"]

    },
    {
        number: 7,
        question: " Which of these things are no strict social rules in Italy?",
        answer: "Punctuality",
        options: [
            "Business Relations",
            "Giving Gifts",
            "Punctuality",
            "Greetings"]

    },
    {
        number: 8,
        question: "  What is NOT a Christian holiday in NL?",
        answer: "King's Day",
        options: [
            "Easter",
            "Ascension",
            "Pentecost",
            "King's Day"]

    },
    {
        number: 9,
        question: "   What is Italy’s shape similar to?",
        answer: "A boot",
        options: [
            "A mountain",
            "A dog",
            "A boot",
            "A dragon"]

    },
    {
        number: 10,
        question: "When is France National da?",
        answer: "July 14th",
        options: [
            "January 3rd",
            "March 15th",
            "July 14th",
            "October 23th"]

    }
];



function sendForm(event) {
    event.preventDefault();
    let quizForm = document.forms['quiz-form']['username'].value;

    // code to store player's name

    sessionStorage.setItem('username', quizForm);

    //start game upon click on 'start game'
    location.href = 'quiz.html';

}


let countQuestions = 0;
let score = 0;

function nextQuestion() {
    if (countQuestions == questions.length - 1) {
        location.href = "finish.html";
        return;
    }
    let clickedAnswer = document.querySelector('button.answers.active').innerHTML;
    // verify if payers answer is correct, gets 10 points
    if (clickedAnswer == questions[countQuestions].answer) {
        score += 10;
        sessionStorage.setItem('userScore', score);
    }

    countQuestions++;
    showQuestion(countQuestions);

}

function showQuestion(count) {
    let question = document.getElementById('questions')
    question.innerHTML =
        `<h3>${questions[count].question}</h3>
    <div class="response-div">
                <button class="answers">${questions[count].options[0]}</button>
                <button class="answers">${questions[count].options[1]}</button>
                <button class="answers">${questions[count].options[2]}</button>
                <button class="answers">${questions[count].options[3]}</button>
                </div>`;
    active()
}
function active() {
    let options = document.querySelectorAll('button.answers');
    for (let i = 0; i < options.length; i++) {
        options[i].onclick = function () {
            for (let x = 0; x < options.length; x++) {
                if (options[x].classList.contains('active')) {
                    options[x].classList.remove('active');
                }


            }

            options[i].classList.add('active');

        };
    }

}