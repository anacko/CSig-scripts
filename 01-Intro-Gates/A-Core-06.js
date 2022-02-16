function solution(n, firstNumber) {
  return firstNumber >= n/2 ? firstNumber - (n/2) : firstNumber + (n/2);
}
console.log(solution(10, 2)) // 7