// Global variables

var storyArea = document.querySelector('.text-container');

var questionContainer = document.querySelector('.question-container');

var currentQuestion = document.querySelector('.current-question')

var buttonContainer = document.querySelector('.btns-container')

var yesButton = document.querySelector('.yes-btn')

var noButton = document.querySelector('.no-btn')

var newText = document.createElement('p');

var tryAgainContainer = document.querySelector('.try-again-container')

var tryAgainButton = document.querySelector('.try-again-btn')

var titleText = storyArea.innerHTML = '<p> Welcome to Gruul\'s cavern. </p>' 

// All Start Button Functions

// Creates start button
var startBtn = document.createElement('button')
startBtn.style.marginLeft = '135px'

// Adds story button to the page
storyArea.append(startBtn)


// Creates text for Start button
startBtn.innerText = "Start";

// Variable for clicking the start button
var showStory = startBtn.addEventListener('click', storyAppear)

// Function for initiating the story
function storyAppear() {
    storyArea.innerHTML = ''
   var story2 = 'You wake up in a pitch black room. Your forehead is covered with sweat. You can tell you are on an old, rusty bed of some kind. After a few moments of panic, your finger-tips touch a lamp switch.'
   newText.textContent = story2;
   storyArea.appendChild(newText);
}

// Click for appearing question
var showQuestion = startBtn.addEventListener('click', questionAppear)

// Function for making question appear
function questionAppear() {
    questionContainer.style.display = 'block';
}

var showOptions = startBtn.addEventListener('click', optionsAppear)

function optionsAppear() {
        buttonContainer.style.display = 'flex';

}

var yesClick = yesButton.addEventListener('click', yesChoice)
var noClick = noButton.addEventListener('click', noChoice)
var tryAgainClick = tryAgainButton.addEventListener('click', goHome)

function yesChoice () {
        var story3 = 'You turn on the light, and you see a haggard, sneering green monster sitting in a chair across the room. He scowls at you and shouts "It\'s about damn time you woke up. I\'m hungry! You ready to grab something to eat?"'
        newText.textContent = story3;
        storyArea.appendChild(newText);
        questionTwo = 'Will you go eat with Gruul?'
        currentQuestion.textContent = questionTwo
    }

function noChoice () {
    var story4 = 'You decide to wait it out. You close your eyes and decide to go back to sleep. It\'s just a dream right? Wrong. After a few seconds of closing your eyes again, a deep bellowing voice exclaims "I DIDN\'T KNOW I HAD CAPTURED A COWARD!" Your head is then crushed in with a giant club.'
    newText.textContent = story4;
    storyArea.appendChild(newText);
    questionContainer.style.display = 'none'
    yesButton.style.display = 'none'
    noButton.style.display = 'none'
    tryAgainContainer.style.display = 'block'
}

function goHome () {
        window.location.href='index.html'
    }









