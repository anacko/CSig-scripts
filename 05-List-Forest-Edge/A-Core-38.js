function solution(a, b) {
  b.map(elem => a.push(elem))
  return a
}

console.log(solution([2, 2, 1], [10, 11])) // [2, 2, 1, 10, 11]