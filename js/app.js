let missed = 0;
let phrases = [
    'how long is a peice of string',
    'as far as the eye can see',
    'it is not over until the fat lady sings',
    'two wrongs do not make a right',
    'once in a blue moon',
    'speak of the devil',
    'when pigs fly',
    'do not judge a book by the cover',
];
const keyboardDiv = document.querySelector('#qwerty');
const phraseDiv = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const UL = document.querySelector('#phrase ul');
let PhraseCharacters =  getRandomPhraseAsArray(phrases);
const lettersArr = document.getElementsByClassName('letter');
const showLettersArr = document.getElementsByClassName('show');
const overlay = document.querySelector('#overlay');
const title = document.querySelector('.title');
const btnKeys = document.querySelectorAll('.keyrow button');
const phraseList = document.getElementById('phraseList');
const heartsImgArr = document.querySelectorAll('#scoreboard img');

function getRandomPhraseAsArray(array) {
    function getRandomNum(array) {
        return Math.floor(Math.random() * (array.length));
    }
    const randomNum = getRandomNum(array);
    const randomPhrase = phrases[randomNum];
    const characterArray = randomPhrase.split('');
    return characterArray;
}
function addPhraseToDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        const character = array[i];
        const listItem = document.createElement('li');
        UL.appendChild(listItem);
        listItem.textContent = character;

        if (listItem.textContent !== " " ) {
            listItem.classList.add('letter');
        } else {
            listItem.classList.add('space');
        }
    }
}
addPhraseToDisplay(PhraseCharacters);

function checkLetter(button) {
    let letterFound = null;
        for (let i = 0; i < lettersArr.length; i+= 1) {
            if (button.textContent === lettersArr[i].textContent) {
                lettersArr[i].classList.add('show');
                letterFound = true;
            }
        }
    return letterFound;
}

function checkWin() {
    if (showLettersArr.length === lettersArr.length) {
        overlay.style.display = 'flex';
        overlay.classList.add('win');
        title.textContent = 'You Win! :)';
        startBtn.textContent = 'Reset Game';
    }

    if (missed >= 5) {
        overlay.style.display = 'flex';
        overlay.classList.add('lose');
        title.textContent = "You Lose :(";
        startBtn.textContent = 'Reset Game';
    }
} 

startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (missed >= 5 && lettersArr.length > 0) {
        while (phraseList.firstChild) {
            phraseList.removeChild(phraseList.firstChild);
        }
        PhraseCharacters =  getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(PhraseCharacters);
        missed = 0;
        for (let i = 0; i < heartsImgArr.length; i++) {
            const heartImg = heartsImgArr[i];
            heartImg.setAttribute('src', 'images/liveHeart.png');
        }
        for (let i = 0; i < btnKeys.length; i++) {
            const btnKey = btnKeys[i];
            btnKey.classList.remove('chosen');
            btnKey.removeAttribute("disabled");
        }
    }
});
        
keyboardDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.setAttribute('disabled', 'disabled');
        const letterFound = checkLetter(e.target);
            if (letterFound === null) {
                missed += 1;
                if (missed === 1) {
                    heartsImgArr[0].setAttribute('src', 'images/lostHeart.png');
                }
                if (missed === 2) {
                    heartsImgArr[1].setAttribute('src', 'images/lostHeart.png');
                }
                if (missed === 3) {
                    heartsImgArr[2].setAttribute('src', 'images/lostHeart.png');
                }
                if (missed === 4) {
                    heartsImgArr[3].setAttribute('src', 'images/lostHeart.png');
                }
            }
    }
    checkWin();
});

