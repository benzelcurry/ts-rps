let username: string;
let userChoice: string;
let comChoice: string;
let message: string;
let userScore = 0;
let comScore = 0;
let draws = 0;

const btns = document.querySelectorAll('.btn');
const userInput = document.querySelector('.username') as HTMLInputElement;
const userBtn = document.querySelector('.submit');
const playBtn = document.querySelector('.play-btn');
const userPrompt = document.querySelector('.form-group');
const error = document.querySelector('.error');
const game = document.querySelector('.game');
const messageElement = document.querySelector('.message');
const playerScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.com-score');
const drawScore = document.querySelector('.draws-score');
const gameover = document.querySelector('.gameover');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    userChoice = btn.textContent!;
    playCom();
    playRound(userChoice, comChoice);
    messageElement!.textContent = message;
    playerScore!.textContent = String(userScore);
    computerScore!.textContent = String(comScore);
    drawScore!.textContent = String(draws);
  });
});

userBtn?.addEventListener('click', () => {
  if (userInput?.value) {
    username = userInput.value;
    document.querySelector('.user-label')!.textContent = `${username}: `;
    userPrompt?.classList.add('invisible');
    game?.classList.add('visible');
  } else {
    error!.textContent = 'You must enter a username to continue.';
  }
});

playBtn?.addEventListener('click', () => {
  gameover?.classList.remove('visible');
  game?.classList.add('visible');
  userScore = 0;
  comScore = 0;
  draws = 0;
})

// Determines computer's choice
const playCom = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return comChoice = 'Rock';
  } else if (choice === 1) {
    return comChoice = 'Paper';
  } else {
    return comChoice = 'Scissors';
  };
};

// Helper function for condensing the code in playRound()
const determineWinner = (
  choiceOne: string,
  choiceTwo: string,
  winner: string,
) => {
  winner === username ? userScore++ : comScore++;
  if (userScore === 5 || comScore === 5) {
    gameover?.classList.add('visible');
    game?.classList.remove('visible');
    document.querySelector('.win-msg')!.textContent = `${winner} has won the game!`;
  } else {
    return (message = `${winner} wins this round! ${choiceOne} beats ${choiceTwo}.`);
  }
};

// Plays the round after choices are submitted
// Could make this even less DRY with another helper function
const playRound = (playerChoice: string, comChoice: string) => {
  if (playerChoice === comChoice) {
    message = `Draw! Both users selected ${playerChoice}.`;
    return draws++;
  } else if (playerChoice === 'Rock') {
    if (comChoice === 'Paper') {
      determineWinner('Paper', 'rock', 'The computer');
    } else {
      determineWinner('Rock', 'scissors', username);
    }
  } else if (playerChoice === 'Paper') {
    if (comChoice === 'Scissors') {
      determineWinner('Scissors', 'paper', 'The computer');
    } else {
      determineWinner('Paper', 'rock', username);
    }
  } else {
    if (comChoice === 'Rock') {
      determineWinner('Rock', 'scissors', 'The computer');
    } else {
      determineWinner('Scissors', 'paper', username);
    }
  }
};
