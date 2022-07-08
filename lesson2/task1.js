function toObject(w) {
  obj = new Object({
    word: w,
    length: w.length,
    isCapitalized: w.charAt(0) === w.charAt(0).toUpperCase()
  })
  return obj;
}

function getArray(text) {
  return text.split(' ').map(w => toObject(w))
}

console.log(getArray('sdskj djkjs Jjd'));
