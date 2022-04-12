export class User {
  constructor(username, password, balance = 0, transactions = []) {
    this.username = username;
    this.password = password;
    this.balance = balance;
    this.transactions = transactions;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}
