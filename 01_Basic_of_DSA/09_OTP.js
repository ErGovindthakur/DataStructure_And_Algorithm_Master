import readline from "node:readline/promises"; // Use promise-based readline
import { stdin, stdout } from "node:process";
import { randomInt } from "node:crypto"; // Secure random numbers

// Note : string.padStart();

let num = 123;
let strNumPad = num.toString().padStart(6,0);
console.log("strNumPad", strNumPad);


// 1. Configuration Constants
const OTP_LENGTH = 6;
const MAX_ATTEMPTS = 3;

/**
 * Generates a cryptographically secure numeric OTP
 */
const generateSecureOtp = (length) => {
  // randomInt generates a cryptographically strong integer
  const min = Math.pow(10, length - 1);
  console.log("MIN : ", min); // here we will get : 10^len-1 <=> 10^5 = 100,000
  const max = Math.pow(10, length) - 1;
  console.log("MAX : ", max); // here we will get : (10^len)-1 <=> 10^6 - 1 = 999,999 
  return randomInt(min, max + 1).toString(); // here randomInt(min, max+1), pick any value btw ("min, max+1")
};

/**
 * Main App Logic
 */
async function startAuth() {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const secretOtp = generateSecureOtp(OTP_LENGTH);
  let attempts = 0;

  // Logging for demo (In production, you'd send this via SMS/Email)
  console.log(`[DEV ONLY] OTP Sent: ${secretOtp}`);

  try {
    while (attempts < MAX_ATTEMPTS) {
      const remaining = MAX_ATTEMPTS - attempts;
      const answer = await rl.question(`Enter your OTP (${remaining} attempts left): `);

      if (answer.trim() === secretOtp) {
        console.log("✅ Access Granted. Welcome!");
        return;
      }

      attempts++;
      if (attempts < MAX_ATTEMPTS) {
        console.log("❌ Incorrect OTP. Please try again.");
      }
    }

    console.error("🚫 Account Locked: Too many failed attempts.");
  } catch (err) {
    console.error("An unexpected error occurred:", err.message);
  } finally {
    rl.close();
  }
}

startAuth();

