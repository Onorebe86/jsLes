function filterByLength(array, x1, x2) {
  result = array.filter( item =>
    item.length <= x2 && item.length >= x1
  )
  console.log(result)
}

const fruits = ['lime', 'orange', 'apple', 'banana', '']
filterByLength(fruits, 0, 5)
