function compareArrays(array1, array2) {
  result = true
  if (array1.length != array2.length) {
    result = false
  } else {
    for(var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false
        break;
      }
    }
  }
  return result
}

console.log(compareArrays([2,1], [2,1]));
