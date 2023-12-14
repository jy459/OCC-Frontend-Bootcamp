console.log("I am connected");

// Create a class
// Encapulation

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }
    getAccountInfor() {
        return `Acount number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
}

const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(MyAccount.getAccountInfor());

const ninaAccount = new BankAccount("987654321", 10000000)
ninaAccount.deposit(500);
ninaAccount.withdraw(200);
console.log(ninaAccount.getAccountInfor());