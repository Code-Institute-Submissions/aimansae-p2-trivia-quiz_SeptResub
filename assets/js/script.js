function sendForm (event) {
    event.preventDefault();
    let quizForm = document.forms['quiz-form']['username'].value;
    console.log('SEND');

    // code to store player's name

    sessionStorage.setItem('username', quizForm);

    //start game upon click on 'start game'
    location.href='quiz.html';
    console.log(quizForm);
}
