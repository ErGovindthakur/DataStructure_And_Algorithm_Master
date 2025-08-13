// Exploring Encapsulation in js

// Encapsulation => It means wrapping up property and methods in a single unit so that we can use it in controlled and some them can't be use directly, generally prefer for security purpose.
// Exploring Encapsulation in JavaScript

class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    amount = Number(amount);

    if (isNaN(amount) || amount <= 0) {
      return "Enter a valid amount greater than 0";
    }

    this.#balance += amount;
    return this.getBalance();
  }

  withdraw(amount) {
    amount = Number(amount);

    if (isNaN(amount) || amount <= 0) {
      return "Enter a valid amount greater than 0";
    }

    if (this.#balance >= amount) {
      this.#balance -= amount;
      return this.getBalance();
    } else {
      return "Insufficient funds";
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Example usage:
let myAccount = new BankAccount();

console.log("Deposit:", myAccount.deposit(1000)); // 1000
console.log("Withdraw:", myAccount.withdraw(500)); // 500
console.log("Withdraw:", myAccount.withdraw(700)); // "Insufficient funds"
console.log("Balance:", myAccount.getBalance()); // 500

// Direct access will throw error
// console.log(myAccount.#balance); // ❌ SyntaxError
