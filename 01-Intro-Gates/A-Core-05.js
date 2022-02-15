function solution(divisor, bound) {
  while (bound % divisor) {
      bound--;
  }
  return bound;
}

console.log(solution(3, 10)) // 9