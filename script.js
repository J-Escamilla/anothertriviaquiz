// //create question and answer sheet

const quizQuestions = [
    {
        question: "How many timezones are there in Russia?",
        a: '11',
        b: '3',
        c: '1',
        d: '7',
        correctAnswer: 'a'
    },
    {   question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
        a: 'Iacta alea est!',
        b: 'Vidi, vini, vici',
        c: 'Aegri somnia vana',
        d: 'Et tu, Brute?',
        correctAnswer: 'd'
    },
    {
        question: "A group of tigers are referred to as:",
        a: 'Chowder',
        b: 'Pride',
        c: 'Ambush',
        d: 'Destruction',
        correctAnswer: 'c'
    },
    {
        question: "What is the top speed an average cat can travel?",
        a: '42 mph',
        b: '9 mph',
        c: '13 mph',
        d: '31 mph',
        correctAnswer: 'd'
    },
    {
        question: "A cat can jump to _____ times its own height:",
        a: '9',
        b: '5',
        c: '7',
        d: '3',
        correctAnswer: 'b'
    },
    {
        question: "What is the only letter that doesn't appear in a US state name?",
        a: 'M',
        b: 'Z',
        c: 'Q',
        d: 'X',
        correctAnswer: 'c'
    },
    {
        question: "What is the name for a cow-bison hybrid?",
        a: 'Cowson',
        b: 'Bicow',
        c: 'Mooson',
        d: 'Beefalo',
        correctAnswer: 'd'
    },
    {
        question: "What is the largest freshwater lake in the world?",
        a: 'Lake Baikal',
        b: 'Lake Superior',
        c: 'Lake Michigan',
        d: 'Lake Victoria',
        correctAnswer: 'b'
    },
    {
        question: "According to Greek mythology, who was the first woman on Earth?",
        a: 'Pandora',
        b: 'Eva',
        c: 'Hara',
        d: 'Lilith',
        correctAnswer: 'a'
    },
    {
        question: "Where would you find the Sea of Tranquility?",
        a: 'California',
        b: 'Siberia',
        c: 'The Moon',
        d: 'China',
        correctAnswer: 'c'
    }
]

let currentScore = 0;
let currentQ = 0
let testQuestion = document.querySelector('#question')
const answerA = document.querySelector('#a_text')
const answerB = document.querySelector('#b_text')
const answerC = document.querySelector('#c_text')
const answerD = document.querySelector('#d_text')
const finalScore = document.querySelector('.final')
const container = document.querySelector('.quiz-container')
const restart = document.querySelector('.restart')

// Load questions on page load.
loadQuestions()

function loadQuestions() {
 quizData = quizQuestions[currentQ]
 testQuestion.innerHTML = quizData.question
 answerA.innerHTML = quizData.a
 answerB.innerHTML = quizData.b
 answerC.innerHTML = quizData.c
 answerD.innerHTML = quizData.d
}

// Load next question and add to user score on submit

const submitBtn = document.querySelector('#submit')

submitBtn.onclick = () => {
    let userAnswer = document.querySelector('input[name=answer]:checked').value;

    if (userAnswer === quizQuestions[currentQ].correctAnswer) {
        currentScore++
        const correct = new Audio('correct-choice-43861.mp3')
        correct.play()
    } else {
        const incorrect = new Audio('wronganswer-37702.mp3')
        incorrect.play()
    }
    
    currentQ += 1

    
    if(currentQ < quizQuestions.length) {
        loadQuestions()
    } else {
        container.style.display = 'none'
        finalScore.innerHTML = `Your final score is ${currentScore}/${quizQuestions.length}!`
        finalScore.style.display = 'block'
        restart.style.display = 'block'
    }
    uncheck()
}

const uncheck = () => {
    let userAnswer = document.querySelector('input[name=answer]:checked')
    userAnswer.checked = false
}

restart.onclick = () => {
    location.reload()
}
