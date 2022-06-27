function sendForm (event) {
    event.preventDefault();
    let quizForm = document.forms['quiz-form']['username'].value;
    console.log('SEND');

    // code to store player's name

    sessionStorage.setItem('username', quizForm);
    console.log(quizForm);
}
