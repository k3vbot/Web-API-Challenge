const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')

function buildQuiz(){}

function showResults(){}

buildQuiz();

const quizQuestions = [
    {
        question: "This is a question?",
        answers: {
            a: "This is an answer!",
            b: "This is an answer!",
            c: "This is an answer!"
        },
        correctAnswer: "a"
    },
    {
        question: "This is a question?",
        answers: {
            a: "This is an answer!",
            b: "This is an answer!",
            c: "This is an answer!"
        },
        correctAnswer: "a"
    },
    {
        question: "This is a question?",
        answers: {
            a: "This is an answer!",
            b: "This is an answer!",
            c: "This is an answer!"
        },
        correctAnswer: "a"
    },
]

function buildQuiz(){
    const output = [];
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="questions${questionNumber}"
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="questions"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizConstainer.innerHTML = output.join('');
}
quizQuestions.forEach( (currentQuestion, questionNumber) => {

});



submitButton.addEventListener('click', showResults);
