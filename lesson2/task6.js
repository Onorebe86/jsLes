function randomSort(numbers) {
  obj = {}
  for (var i = 0; i < numbers.length; i++ ) {
    ind = Math.random()
    obj[ind] = numbers[i]
  }
  result = Object.keys(obj).sort().map(s => obj[s])
  return result
}

const numbers = [-20, -10, 0, 10, 20, 30]

console.log(randomSort(numbers));
