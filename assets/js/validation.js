// code to start the quiz on button click and form valation

function sendForm(event) {
    event.preventDefault();
    if (validateForm()){
    let quizForm = document.forms['quiz-form']['username'].value;

    // code to store player's name

    sessionStorage.setItem('username', quizForm);

    //start game upon click on 'start game'
    location.href = 'quiz.html';
}
}

// form validation empty input or numbers not accepted.
function validateForm() {
    let x = document.forms["quiz-form"]["username"].value;
    if (x == "") {
      alert("Please insert a username. Min 3 characters");
      return false;
    }
    else{
        return true;
    }
 }
