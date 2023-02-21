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
const userPrompt = document.querySelector('.form-group');
const error = document.querySelector('.error');
const game = document.querySelector('.game');
const messageElement = document.querySelector('message');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent);
    console.log(username);
  });
});

userBtn?.addEventListener('click', () => {
  if (userInput?.value) {
    username = userInput.value;
    userPrompt?.classList.add('invisible');
    game?.classList.add('visible');
  } else {
    error!.textContent = 'You must enter a username to continue.';
  }
});

// Determines computer's choice
const playCom = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return comChoice === 'Rock';
  } else if (choice === 1) {
    return comChoice === 'Paper';
  } else {
    return comChoice === 'Scissors';
  };
};

// Helper function for condensing the code in playRound()
const determineWinner = (
  choiceOne: string,
  choiceTwo: string,
  winner: string,
  score: number
) => {
  score++;
  if (score === 5) {
    return (message = `Congratulations to ${winner}, you've won the game!`);
  } else {
    return (message = `${winner} wins this round! ${choiceOne} beats ${choiceTwo}.`);
  }
};

// Plays the round after choices are submitted
const playRound = (playerChoice: string, comChoice: string) => {
  if (playerChoice === comChoice) {
    message = `Draw! Both users selected ${playerChoice}.`;
    return draws++;
  } else if (playerChoice === 'Rock') {
    if (comChoice === 'Paper') {
      determineWinner('Paper', 'rock', 'The computer', comScore);
    } else {
      determineWinner('Rock', 'scissors', username, userScore);
    }
  } else if (playerChoice === 'Paper') {
    if (comChoice === 'Scissors') {
      determineWinner('Rock', 'scissors', 'The computer', comScore);
    } else {
      determineWinner('Paper', 'rock', username, userScore);
    }
  } else {
    if (comChoice === 'Rock') {
      determineWinner('Rock', 'scissors', 'The computer', comScore);
    } else {
      determineWinner('Scissors', 'paper', username, userScore);
    }
  }
};
