const account = {
  accountName: "Idas-bank-account",
  balance: 10000,
};

function getBalance() {
  return account.balance;
}

function deposit(depositAmount) {
  if (depositAmount > 0) {
    account.balance += depositAmount;
    console.log(
      `Your deposit: ${depositAmount}. New balance: ${account.balance}`
    );
  } else {
    accountError("Invalid deposit amount.");
  }
}

function withdraw(withdrawAmount) {
  if (withdrawAmount > 0 && withdrawAmount <= account.balance) {
    account.balance -= withdrawAmount;
    console.log(
      `Your withdrew: ${withdrawAmount}. New balance: ${account.balance}`
    );
  } else {
    accountError("Invalid withdrawal amount.");
  }
}

function getAccountName() {
  return account.accountName;
}

function accountError(errorMessage) {
  console.log(`Error: ${errorMessage}`);
}

function atm() {
  let running = true;

  while (running) {
    const promtMessage = parseFloat(
      prompt(
        "Welcome to the ATM, what would you like to do today?: \n 1.) See Balance \n 2.) Make a deposit \n 3.) Make a withdraw \n 4.) Get account name \n 5.) EXIT"
      )
    );

    switch (promtMessage) {
      case 1:
        console.log(`Current balance: ${getBalance()}`);
        break;
      case 2:
        const depositAmount = parseFloat(prompt("Enter your deposit amount:"));
        deposit(depositAmount);
        break;
      case 3:
        const withdrawAmount = parseFloat(
          prompt("Enter your withdrawal amount:")
        );
        withdraw(withdrawAmount);
        break;
      case 4:
        console.log(`Account name: ${getAccountName()}`);
        break;
      case 5:
        console.log("Thank you for using the ATM. Goodbye!");
        running = false;
        break;
      default:
        accountError("Invalid option. Please try again.");
    }
  }
}
const button = document.getElementById("btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  atm();
});
