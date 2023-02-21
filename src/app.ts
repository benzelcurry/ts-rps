let username: string;
let userChoice: string;
let comChoice: string;
let message: string;
let userScore = 0;
let comScore = 0;
let draws = 0;

const btns = document.querySelectorAll(".btn");
const userInput = document.querySelector(".username") as HTMLInputElement;
const userBtn = document.querySelector(".submit");
const userPrompt = document.querySelector(".form-group");
const error = document.querySelector(".error");
const game = document.querySelector(".game");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
    console.log(username);
  });
});

userBtn?.addEventListener("click", () => {
  if (userInput?.value) {
    username = userInput.value;
    userPrompt?.classList.add("invisible");
    game?.classList.add("visible")
  } else {
    error!.textContent = "You must enter a username to continue."
  }
});

// Plays the round after choices are submitted
const playRound = (playerChoice: string, comChoice: string) => {
  if (playerChoice === comChoice) {
    message = `Draw! Both users selected ${playerChoice}.`
    return draws++;
  } else if (playerChoice === 'Rock') {
    if (comChoice === 'Paper') {
      message = 'The computer wins this round! Paper beats rock.';
      return comScore++;
    } else {
      message = `${username} wins this round! Rock beats scissors.`;
      return userScore++;
    }
  } else if (playerChoice === 'Paper') {
    if (comChoice === 'Scissors') {
      message = 'The computer wins this round! Scissors beats paper.';
      return comScore++;
    } else {
      message = `${username} wins this round! Paper beats rock.`;
      return userScore++;
    }
  } else {
    if (comChoice === 'Rock') {
      message = 'The computer wins this round! Rock beats scissors.';
      return comScore++;
    } else {
      message = `${username} wins this round! Scissors beats paper.`;
      return userScore++;
    };
  };
};
