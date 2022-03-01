function solution(a, b, c) {
  if (a + b === c) return true
  if (a - b === c) return true
  if (a * b === c) return true
  if (a / b === c) return true
  return false
}

console.log(solution(2, 3, 5)) // true
console.log(solution(8, 2, 4)) // true
console.log(solution(8, 3, 2)) // false