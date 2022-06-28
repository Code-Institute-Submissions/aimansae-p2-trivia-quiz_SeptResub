function sendForm(event) {
    event.preventDefault();
    let quizForm = document.forms['quiz-form']['username'].value;
    console.log('SEND');

    // code to store player's name

    sessionStorage.setItem('username', quizForm);

    //start game upon click on 'start game'
    location.href = 'quiz.html';
    console.log(quizForm);
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
        question: " What country is the biggest (surface?",
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
        number: 9,
        question: "What happens at La Scala?",
        answer: "Opera",
        options: [
            "Criminal Trials",
            "Fashion Shows",
            "Opera",
            "Kids Programs"]

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