function MoneyBox() {
  amount = 0
  this.getAmount = function() {
    return amount
  }
  this.addCoin = function() {
    amount += 1
  }
}

const box = new MoneyBox();

console.log(box.getAmount());
console.log(box.addCoin());
box.addCoin();
console.log(box.getAmount());
