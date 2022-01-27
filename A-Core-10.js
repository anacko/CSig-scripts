function solution(value1, weight1, value2, weight2, maxW) {
  // carry both
  if (weight1 + weight2 <= maxW) {
      return value1 + value2;
  }
  // carry just the most expensive, in case of choosing
  if (weight1 <= maxW && weight2 <= maxW) {
      return value1 > value2 ? value1 : value2;
  }
  // carry the only one may carry
  if (weight1 <= maxW) {
      return value1;
  }
  if (weight2 <= maxW) {
      return value2;
  }
  return 0;
}

console.log(solution(10, 5, 6, 4, 8)) // 10
console.log(solution(10, 5, 6, 4, 9)) // 16
console.log(solution(5, 3, 7, 4, 6)) // 7