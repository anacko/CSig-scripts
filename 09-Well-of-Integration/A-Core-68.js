function solution(inputArray) {
  const sizes = inputArray.map(e => e.length)
  const maxSize = Math.max(...sizes)
  return inputArray.filter(e => e.length === maxSize)
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"])) // ["aba", "vcd", "aba"]