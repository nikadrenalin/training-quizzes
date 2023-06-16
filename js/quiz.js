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
    'correct': 'correct'
};

const jsSelectors = {
    'incorrect': '.incorrect',
    'correct': '.correct'
};

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions = [];
let questions = [{}];
let incorrectAnswers = [];

const SCORE_POINTS = 1;
let score = 0;
let MAX_QUESTIONS = 0;
let questionCounter = 0;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    MAX_QUESTIONS = maxNumberOfQuestions || availableQuestions.length;
    getNewQuestion();
} 

const getNewQuestion = () => {
    if (availableQuestions.length === 0 ||
        questionCounter >= MAX_QUESTIONS) {
            const finalResult = { score: score, wrongAnswers: (MAX_QUESTIONS - score) };
            localStorage.setItem('mostRecentScore', JSON.stringify(finalResult) );

            localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));
            return window.location.assign('./finalScore.html');
    }

    questionCounter++;
    progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
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
});

const incrementScore = (num) => {
    score += num;
    scoreText.innerHTML = score;
}

const urlParams = new URLSearchParams(window.location.search);

const quizNumber = Number(urlParams.get('quizId'));
localStorage.setItem('quizNumber', quizNumber);

let maxNumberOfQuestions = parseInt(urlParams.get('maxNumberOfQuestions')) || 0;
maxNumberOfQuestions = maxNumberOfQuestions <= 0 ? null : maxNumberOfQuestions;

let sourceModule = '../data/';

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
    startGame();
  })
  .catch(error => {
    window.location.href = '../finalScore.html';
  });


