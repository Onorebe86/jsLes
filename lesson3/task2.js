function cache(num, deg) {
  function returnRes(r, b) {
    return { value: r, fromCache: b }
  }
  function saveCache() {
    if (this.saved) {
      if (x = this.saved.find(item => item.num === num && item.deg === deg)) {
        return returnRes(x.result, true)
      }
      else
        result = num**deg
        this.saved.push({
          num: num,
          deg: deg,
          result: result
        })
        return returnRes(result, false)
    }
    else
     result = num**deg
     this.saved = [{
       num: num,
       deg: deg,
       result: result
     }]
     return returnRes(result, false)
  }
  return saveCache()
}

const calculate = cache;
console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}
