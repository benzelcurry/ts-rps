let username: string;
let userScore = 0;
let comScore = 0;

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
