const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')
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
                    <input type="radio" name="questions${questionNumber}" value="${letter}">
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
    quizContainer.innerHTML = output.join('');
};
quizQuestions.forEach( (currentQuestion, questionNumber) => {

});

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    quizQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer ===currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].getElementsByClassName.color = 'lightgreen';
        
        }
        else{
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}



buildQuiz();



submitButton.addEventListener('click', showResults);
