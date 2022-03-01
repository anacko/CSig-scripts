function solution(a, b) {
  return a > b || (b - a)%2 !== 0;
}

console.log(solution(2, 6)) // false
console.log(solution(2, 3)) // true