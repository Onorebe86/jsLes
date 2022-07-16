function Calc() {
  operations = { '+': (a, b) => a + b, '-': (a, b) => a - b }
  history = []
  this.history = function() {
    console.log(history);
    return history
  }
  this.clearHistory = function() {
    history = []
  }

  this.operation = function (oper) {
    arg1 = Number(oper.split(" ")[0])
    arg2 = Number(oper.split(" ")[2])
    symb = oper.split(" ")[1]
    history.push({
      operation: symb,
      operands: [arg1, arg2]
    })
    if (!(symb in operations)) {
      console.log('Not a function')
      return arg1 // ?
    }
    else {
      result = operations[symb](arg1, arg2)
      console.log(result)
      return result
    }
  }

  this.addOperation = function (name, func) {
    operations[name] = func
  }
}

const calculator = new Calc()

calculator.operation('31 + 32') // 63
calculator.operation('10 * 2') // 10
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2') // 5

calculator.history()
calculator.clearHistory()
calculator.history()
