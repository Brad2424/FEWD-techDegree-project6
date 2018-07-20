let missed = 0;
const phrases = [
    'how long is a peice of string',
    'as far as the eye can see',
    'it is not over until the fat lady sings',
    'two wrongs do not make a right',
    'once in a blue moon',
    'speak of the devil',
    'when pigs fly',
    'do not judge a book by the cover',
]
const keyboardDiv = document.querySelector('#qwerty');
const phraseDiv = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const UL = document.querySelector('#phrase ul');
let randomPhraseCharacters =  getRandomPhraseAsArray(phrases);

function getRandomPhraseAsArray(array) {
    function getRandomNum(array) {
        return Math.floor(Math.random() * (array.length));
    }
    const randomNum = getRandomNum(array);
    const randomPhrase = phrases[randomNum];
    const characterArray = randomPhrase.split('');
    return characterArray;
}

// function addPhraseToDisplay() {
    
    for (let i = 0; i < randomPhraseCharacters.length; i++) {
        const character = randomPhraseCharacters[i];
        UL.appendChild('li');
    }

// }



startBtn.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
})

