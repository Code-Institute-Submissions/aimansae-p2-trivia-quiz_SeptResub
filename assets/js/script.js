window.onload = function () {

    showQuestion(0);

}

function sendForm(event) {
    event.preventDefault();
    let quizForm = document.forms['quiz-form']['username'].value;

    // code to store player's name

    sessionStorage.setItem('username', quizForm);

    //start game upon click on 'start game'
    location.href = 'quiz.html';

}


let countQuestions = 0;

function nextQuestion() {
    if (countQuestions == questions.length - 1) {
        location.href = "finish.html";
        return;
    }
let clickedAnswer = document.querySelector('button.answers.active').textContent;
let correctAnswer = questions[countQuestions].answer;
// verify if players answer is correct
const active = document.querySelector('.active');
       if (clickedAnswer == correctAnswer){
        active.style.backgroundColor = 'green';
        } else {
            active.style.backgroundColor = 'red';
           }
       
    countQuestions++;
    setTimeout(() => {
        showQuestion(countQuestions);
    }, 1000)

}

//show next question when the button is clicked

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

function testHandler(e) {
    if (e.target.classList.contains('answers')) {
        console.log(e.target.innerText);
    }
}

document.addEventListener('click', testHandler);