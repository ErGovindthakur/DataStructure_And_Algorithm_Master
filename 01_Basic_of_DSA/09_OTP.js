import { stdin, stdout } from "node:process";
import readline from "node:readline";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

// let myNum = 123;
// let padNum = myNum.toString().padStart(5,2);
// console.log("PadNum ", padNum);

// " Note => .padStart(6,0) , here (6 ensures that generated number is always six digit, but if not 6 digit num it automatically fill with 0), and it's always apply over string"

// Fix: Use padStart to ensure it's always 6 characters, even if it starts with 0
const otp = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");

console.log("System Generated OTP:", otp);

const validateOtp = (userInput) => {
  if (userInput === otp) {
    console.log("Welcome Mr ABC");
  } else {
    console.log("Access Denied: Incorrect OTP.");
  }
  rl.close();
};

rl.question("Enter your 6-digit otp: ", (answer) => {
  validateOtp(answer);
});
