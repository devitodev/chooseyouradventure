var mainContent = document.querySelector('.main-content');

var inputDiv = document.querySelector('.input');

var userInput = document.querySelector('.input-text');

var currentQ = document.querySelector('current-question');

var buttonTime = document.createElement('button')
buttonTime.innerText = "Start";
mainContent.innerHTML = '<p> Welcome to Gruul\'s cavern. </p>' 

mainContent.append(buttonTime)

buttonTime.addEventListener('click', startFunction)



function startFunction() {
    mainContent.innerHTML = ''
   var newText = document.createElement('p');
   var story2 = 'You wake up in a pitch black room. You can tell you are on a bed of some kind. After a few moments of feeling around, your finger-tips touch a lamp.'
   newText.textContent = story2;
   mainContent.appendChild(newText);
}




// You wake up in a pitch black room. You can tell you are on a bed of some kind. After a few moments of feeling around, your finger-tips touch a lamp.

// userInput.addEventListener('input',)

// var ifYes1 = 'You turn on the lamp and you see a large, green ogre...'

// var ifNo1 = 'You decide to move in the dark. You carefully step off of the cot. You hear a deep growl. YOU LOSE'

clickEvent = inputDiv.addEventListener('click', changeSomething);

function changeSomething() {
        if(clickEvent) {
            userInput.style.display = 'none'
        }
}

// function nextStep(userInput, currentStory) {
//     if(userInput = 'yes') {
//         currentStory = currentStory.textinput = ifYes1;
//     }
// }



