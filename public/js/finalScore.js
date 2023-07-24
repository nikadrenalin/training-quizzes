'use strict';

function getFinalResult() {
    const result = JSON.parse(localStorage.getItem('mostRecentScore')) || { score: 0, wrongAnswers: 0};
    const score = result.score;
    const totalQuestions = result.score + result.wrongAnswers;
    const perFinalScore = !totalQuestions ? 0 : ((score/totalQuestions) * 100).toFixed(2);
    
    const h2FinalScore = document.querySelector('#finalScore');
    h2FinalScore.innerHTML = `Final Score: ${score}/${totalQuestions} (${perFinalScore}%)`;
}

function getIncorrectAnswers() {
    const incorrectAnswers = JSON.parse(localStorage.getItem('incorrectAnswers')).sort((a,b) => a - b) || [];
    
    if (incorrectAnswers.length > 0) {
        const pIncorrectAnswers = document.querySelector('#incorrectAnswers');
        pIncorrectAnswers.innerHTML = `Answers to improve: ${incorrectAnswers.join()}`;
    }

    return incorrectAnswers.length;
}

function showDocumentation() {
    const quizNumber = Number(localStorage.getItem('quizNumber')) || 0;

    const docSection = document.querySelector('#documents');
    let htmlCode = '';

    fetch('../doc/docLibrary.json')
    .then((response) => response.json())
    .then((allData) => allData.filter((data) => data.quizNumber === quizNumber)
                              .reduce((acc, data) => data,[]))
    .then((data) => {   
        const relatedDocsTittle = `<span>Documentation Related to ${data.quizName}</span>`;

        data.docs.forEach((doc) => {
            if (doc.path.length > 0) {
                htmlCode += `<li><a href="${doc.path}" download>${doc.name}</a></li>`        
            }
        });

        if (htmlCode) {
            htmlCode = relatedDocsTittle + '<ul>' + htmlCode;
            htmlCode += '</ul>'
            docSection.innerHTML = htmlCode;
        }
    });
}

window.addEventListener('load', function() {
    getFinalResult();
    const incorrectAnswers = getIncorrectAnswers();
    if (incorrectAnswers > 0) {
        showDocumentation();
    }
});