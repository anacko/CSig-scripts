function solution(experience, threshold, reward) {
  return experience + reward >= threshold
}

console.log(solution(10, 15, 5)) // true
console.log(solution(10, 15, 4)) // false