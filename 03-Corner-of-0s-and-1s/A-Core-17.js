function solution(n, k) {
  return parseInt(n.toString(2).slice(0, -k)+'0'+n.toString(2).slice(-k + 1), 2);
}

console.log(solution(37, 13)) // 33
console.log(solution(37, 4)) // 37