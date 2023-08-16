'use strict';

const question = document.querySelector('#question-text');
const title = document.querySelector('#question-title');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const nextChoice = document.querySelector('.js-nextChoice');

const cssClasses = {
    'incorrect': 'incorrect',
    'correct': 'correct',
    'hidden': 'hidden'
};

const jsSelectors = {
    'incorrect': '.incorrect',
    'correct': '.correct',
    'explanation': '.js-explanation'
};

let acceptingAnswers = true;
let incorrectAnswers = localStorage.getItem('incorrectAnswers') || [];
let appData = null;
let currentQuestion = {};
let sourceModule = '../data/';
let questions = [{}];
let availableQuestions = [];

const getAppData = () => {
    appData = localStorage.getItem('appData');

    if (!appData) {
        appData = {
            'questions': [{}],
            'questionCounter': 0,
            'score': 0,
            'questionIndex': null
        };

        return startGame();
    }

    try {
        appData = JSON.parse(appData);
    } catch (error) {
        console.error(error);
    }

    startGame();
}

const SCORE_POINTS = 1;
let maxQustions = 0;

const startGame = () => {
    maxQustions = maxNumberOfQuestions || availableQuestions.length;
    getNewQuestion();
    scoreText.innerHTML = appData.score;
} 

const getNewQuestion = () => {
    if (
        availableQuestions.length === 0 ||
        appData.questionCounter >= maxQustions
    ) {
            const finalResult = {
                score: appData.score,
                wrongAnswers: (maxQustions - appData.score)
            };

            localStorage.setItem('mostRecentScore', JSON.stringify(finalResult) );
            localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));

            return window.location.assign('./finalScore.html');
    }

    appData.questionCounter++;
    progressText.innerHTML = `Question ${appData.questionCounter} of ${maxQustions}`;
    progressBarFull.style.width = `${(appData.questionCounter / maxQustions) * 100}%`;

    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    title.innerText = `QUESTION ${currentQuestion.questionNumber}`;
    question.textContent = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['option' + number] || '';

        const classToHide = 'jsHideMe';
        choice.parentElement.classList.remove(classToHide);
        if (choice.innerText.length === 0) {
            choice.parentElement.classList.add(classToHide);
        }
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

    const explanation = document.querySelector(jsSelectors.explanation);
    explanation.classList.add('jsHideMe');

    if (currentQuestion.explanation) {
        explanation.innerHTML = currentQuestion.explanation;
        explanation.classList.remove(cssClasses.hidden);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectAnswer = Number(selectedChoice.dataset['number']);
        const correctAnswer = document.querySelector(`[data-number="${Number(currentQuestion.answer)}"]`);

        const classToApply = selectAnswer === Number(currentQuestion.answer) ? cssClasses.correct : cssClasses.incorrect;

        if (classToApply === cssClasses.correct) {
            incrementScore(SCORE_POINTS);
        } else {
            incorrectAnswers.push(currentQuestion.questionNumber);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        correctAnswer.parentElement.classList.add(cssClasses.correct);
    })
});

nextChoice.addEventListener('click', () => {
    const incorrect = document.querySelector(jsSelectors.incorrect);
    const correct = document.querySelector(jsSelectors.correct);

    if (incorrect) {
        incorrect.classList.remove(cssClasses.incorrect);
    }

    if (correct) {
        correct.classList.remove(cssClasses.correct);
    }

    getNewQuestion();

    localStorage.setItem('appData', JSON.stringify(appData));
});

const incrementScore = (num) => {
    appData.score += num;
    scoreText.innerHTML = appData.score;
}

const urlParams = new URLSearchParams(window.location.search);
const quizNumber = Number(urlParams.get('quizId'));

localStorage.setItem('quizNumber', quizNumber);

let maxNumberOfQuestions = parseInt(urlParams.get('maxNumberOfQuestions')) || 0;
maxNumberOfQuestions = maxNumberOfQuestions <= 0 ? null : maxNumberOfQuestions;


switch (quizNumber) {
    case 1:
        sourceModule += 'B2C.js';
        break;
    case 2:
        sourceModule += 'javascript.js';
        break;
    case 3:
        sourceModule += 'english.js';
        break;
    default:
        break;
}


import(sourceModule)
    .then((module) => {
        questions = module.default.questions.filter((question) => question.questionNumber > 0 );
        availableQuestions = [...questions];
        getAppData();
    })
    .catch((error) => {
        console.error(error);
        window.location.href = '../finalScore.html';
    });
