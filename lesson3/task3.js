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

  this.operation = function (expression) {
    operand1 = Number(expression.split(" ")[0])
    operand2 = Number(expression.split(" ")[2])
    operator = expression.split(" ")[1]
    history.push({
      operation: operator,
      operands: [Number(operand1), Number(operand2)] //Oперанды приведены к типу Number на строках 13-14
    })
    if (!(operator in operations)) {
      console.log('Not a function')
      return operand1 // ?
    }
    else {
      result = operations[operator](operand1, operand2)
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
