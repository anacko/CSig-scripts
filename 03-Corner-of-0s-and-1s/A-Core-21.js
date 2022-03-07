function solution(n) {
  return 2**((n|n+1).toString(2).split('').reverse().indexOf("0"));
}
console.log(solution(37)) // 8