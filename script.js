const verbs = [
    'être', 'avoir', 'aller', 'faire', 'venir',
    'voir', 'envoyer', 'vouloir', 'pouvoir', 'devoir', 'savoir'
];

let intervalId;
let isRunning = false;

const verbDisplay = document.getElementById('verbDisplay');
const actionButton = document.getElementById('actionButton');

function startChallenge() {
    let index = 0;
    verbDisplay.classList.add('verb-flash');
    
    intervalId = setInterval(() => {
        verbDisplay.textContent = verbs[index];
        index = (index + 1) % verbs.length;
    }, 500);
}

function stopChallenge() {
    clearInterval(intervalId);
    verbDisplay.classList.remove('verb-flash');
    
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    verbDisplay.textContent = randomVerb;
}

actionButton.addEventListener('click', () => {
    if (!isRunning) {
        startChallenge();
        actionButton.textContent = 'Pause';
        actionButton.classList.add('pause');
    } else {
        stopChallenge();
        actionButton.textContent = 'C\'est parti !';
        actionButton.classList.remove('pause');
    }
    isRunning = !isRunning;
});