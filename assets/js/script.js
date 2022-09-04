window.onload = function () {

    showQuestion(0);
}

function sendForm(event) {
    event.preventDefault();
    if (validateForm()) {
        let quizForm = document.forms['quiz-form']['username'].value;

        // code to store player's name

        sessionStorage.setItem('username', quizForm);

        // start game upon clicking on 'start game'
        location.href = 'quiz.html';
    }
}

// form validation empty input or numbers not accepted

function validateForm() {
    let x = document.forms["quiz-form"]["username"].value;
    if (x == "") {
        alert("Please insert a username. Min 3 characters");
        return false;
    } else {
        return true;
    }
}


let countQuestions = 0;

function nextQuestion() {
    if (countQuestions == questions.length - 1) {
        location.href = "finish.html";
        return;
    }
    let clickedAnswer = document.querySelector('button.answers.active');
    if (!clickedAnswer) return;
    else {
        clickedAnswer = clickedAnswer.textContent;
    }
    let correctAnswer = questions[countQuestions].answer;
    // verify if player's answer is correct
    const active = document.querySelector('.active');
    if (clickedAnswer == correctAnswer) {
        active.style.backgroundColor = '#31e631';
    } else {
        active.style.backgroundColor = 'red';
        let options = document.querySelectorAll('button.answers');
        for (let i = 0; i < options.length; i++) {

            if (options[i].innerHTML == correctAnswer) {
                options[i].classList.add('green-answer');
            }
        }
    }

    countQuestions++;
    setTimeout(() => {
        showQuestion(countQuestions);
    }, 1000);

}

//show next question when the button is clicked

function showQuestion(count) {
    let question = document.getElementById('questions');
    question.innerHTML =
        `<h3>${questions[count].question}</h3>
    <div class="response-div">
                <button class="answers">${questions[count].options[0]}</button>
                <button class="answers">${questions[count].options[1]}</button>
                <button class="answers">${questions[count].options[2]}</button>
                <button class="answers">${questions[count].options[3]}</button>
                </div>`;
    activeCheck();
}

function activeCheck() {
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