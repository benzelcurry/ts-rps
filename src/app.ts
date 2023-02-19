// Make the functions for determining winner and adding points
// typed

let username: string;

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn.textContent);
  });
});