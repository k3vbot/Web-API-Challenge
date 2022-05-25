function buildQuiz(){
    const output = [];
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
};

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    quizQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "This is a question?",
        answers: {
            a: "This is an answer!",
            b: "This is not an answer!",
            c: "This is definately an answer!"
        },
        correctAnswer: "a"
    },
    {
        question: "Is this is a question?",
        answers: {
            a: "This isn't an answer!",
            b: "This is an answer!",
            c: "This is not an answer!"
        },
        correctAnswer: "b"
    },
    {
        question: "This is definitely a question?",
        answers: {
            a: "This is not an answer!",
            b: "This is definitely not an answer!",
            c: "This is an answer!"
        },
        correctAnswer: "c"
    }
];



buildQuiz();



submitButton.addEventListener('click', showResults);

