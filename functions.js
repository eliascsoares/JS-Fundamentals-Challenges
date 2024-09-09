const userAccount = {
    pin: "1234",
    balance: 1000
  };

  function checkPin(enteredPin) {
    return enteredPin === userAccount.pin;
  }

  function checkBalance(amount) {
    return userAccount.balance >= amount;
  }

  function withdrawCash(pin, amount) {
    if (!checkPin(pin)) {
      return "Incorrect PIN. Transaction cancelled.";
    }
  
    if (!checkBalance(amount)) {
      return "Insufficient funds. Transaction cancelled.";
    }
  
    userAccount.balance -= amount;
    return `Successfully withdrew $${amount}. Remaining balance: $${userAccount.balance}`;
  }

  console.log(withdrawCash("1234", 500)); // Correct PIN and sufficient balance
  console.log(withdrawCash("5678", 200)); // Incorrect PIN
  console.log(withdrawCash("1234", 700)); // Correct PIN but insufficient balance
  console.log(withdrawCash("1234", 300)); // Correct PIN and sufficient balance

