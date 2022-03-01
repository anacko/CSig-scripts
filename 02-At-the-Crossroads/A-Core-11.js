function solution(a, b, c) {
  if(a === b) return c
  if(a === c) return b
  if(b === c) return a
}

console.log(solution(2, 7, 2)) // 7 