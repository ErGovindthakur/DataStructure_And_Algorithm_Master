let randomNum = Math.floor(Math.random() * 100);
let inputData = document.querySelector("#inputData");
let attempt = 5;

const checkNum = () => {
  const guess = parseInt(inputData.value);

  if (isNaN(guess) || guess < 0 || guess > 99) {
    alert("Please enter a valid number between 0 and 99");
    return;
  }

  if (attempt <= 0) {
    alert("No attempts left! The correct number was: " + randomNum);
    return;
  }

  if (guess === randomNum) {
    alert("🎉 Correct! You guessed the number.");
  } else {
    attempt--;
    if (attempt === 0) {
      alert(`❌ Out of attempts! The number was ${randomNum}`);
    } else {
      alert(`Wrong guess! Attempts left: ${attempt}`);
    }
  }
};
